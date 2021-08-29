<template>
  <div>
    <div id="container"></div>
  </div>
</template>
<script>
import heatmapData from './heatmapData.js'

export default {
  data() {
    return {
      map: null,
      heatmap: null
    }
  },
  methods: {
    initMap() {
      let vm = this

      vm.map = new AMap.Map('container', {
        resizeEnable: true,
        center: [116.418261, 39.921984],
        zoom: 11
      })

      vm.map.plugin(['AMap.HeatMap'], function() {
        //初始化heatmap对象
        vm.heatmap = new AMap.HeatMap(vm.map, {
          radius: 25, //给定半径
          opacity: [0, 0.8]
          /*,
              gradient:{
                  0.5: 'blue',
                  0.65: 'rgb(117,211,248)',
                  0.7: 'rgb(0, 255, 0)',
                  0.9: '#ffea00',
                  1.0: 'red'
              }
               */
        })
        //设置数据集：该数据为北京部分“公园”数据
        vm.heatmap.setDataSet({
          data: heatmapData,
          max: 100
        })

        // for (const point of heatmapData) {
        //   var marker = new AMap.Marker({
        //     position: new AMap.LngLat(point.lng, point.lat), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        //     title: point.count
        //   })

        //   // 将创建的点标记添加到已有的地图实例：
        //   vm.map.add(marker)

        //   // 移除已创建的 marker
        // }

        var styles = [
          {
            url: 'https://webapi.amap.com/images/mass/mass0.png',
            anchor: new AMap.Pixel(6, 6),
            size: new AMap.Size(11, 11),
            zIndex: 3,
            opacity: 0
          }
        ]

        const markers = heatmapData.map((point, index) => ({
          lnglat: [point.lng, point.lat],
          name: index,
          style: styles[0]
        }))

        var mass = new AMap.MassMarks(markers, {
          opacity: 0.8,
          zIndex: 111,
          cursor: 'pointer',
          style: styles
        })

        mass.on('click', function(e) {
          console.log(e)
        })

        mass.setMap(vm.map)

        // 创建一个 Marker 实例：

        window.heatmap = vm.heatmap
      })
    }
  },
  mounted() {
    console.log('231')
    this.initMap()
  }
}
</script>
<style scoped>
#container {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 600px;
}
</style>
