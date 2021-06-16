<template>
  <div>
    <div id="container"></div>
    <div class="input-card">
      <label style="color:grey">行政区边界查询</label>
      <div class="input-item">
        <div class="input-item-prepend">
          <span class="input-item-text">行政级别</span>
        </div>
        <el-select v-model="level" id="level">
          <option value="district">this.district</option>
          <option value="city">city</option>
          <option value="province">province</option>
        </el-select>
      </div>
      <div class="input-item">
        <div class="input-item-prepend">
          <span class="input-item-text">名称/adcode</span>
        </div>
        <el-input
          id="district"
          type="text"
          v-model="area"
          @keydown="districtClick"
        ></el-input>
      </div>
      <input
        id="draw"
        type="button"
        class="btn"
        value="查询"
        @click="drawClick"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      map: null,
      district: null,
      polygons: [],
      level: 'district',
      area: '朝阳区'
    }
  },
  methods: {
    initMap() {
      this.map = new AMap.Map('container', {
        resizeEnable: true,
        center: [116.397428, 39.90923], //地图中心点
        zoom: 10 //地图显示的缩放级别
      })
    },
    drawBounds() {
      //加载行政区划插件
      if (!this.district) {
        //实例化DistrictSearch
        var opts = {
          subdistrict: 0, //获取边界不需要返回下级行政区
          extensions: 'all', //返回行政区边界坐标组等具体信息
          level: 'district' //查询行政级别为 市
        }
        this.district = new AMap.DistrictSearch(opts)
      }
      //行政区查询

      this.district.setLevel(this.level)
      this.district.search(this.area, (status, result) => {
        this.map.remove(this.polygons) //清除上次结果
        this.polygons = []
        var bounds = result.districtList[0].boundaries
        if (bounds) {
          for (var i = 0, l = bounds.length; i < l; i++) {
            //生成行政区划polygon
            var polygon = new AMap.Polygon({
              strokeWeight: 1,
              path: bounds[i],
              fillOpacity: 0.4,
              fillColor: '#80d8ff',
              strokeColor: '#0091ea'
            })
            this.polygons.push(polygon)
          }
        }
        this.map.add(this.polygons)
        this.map.setFitView(this.polygons) //视口自适应
      })
    },
    drawClick() {
      this.drawBounds()
    },
    districtClick(e) {
      if (e.keyCode === 13) {
        this.drawBounds()
        return false
      }
      return true
    }
  },
  created() {},
  mounted() {
    if (!this.map) {
      this.initMap()
    }
    this.drawBounds()
  }
}
</script>
<style scoped>
html,
body {
  margin: 0;
  height: 100%;
}
#container {
  width: 100%;
  height: 600px;
}
.input-item-text {
  width: 7rem;
}
</style>
