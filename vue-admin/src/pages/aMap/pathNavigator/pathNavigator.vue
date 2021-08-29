<template>
  <el-main>
    <div id="container"></div>
  </el-main>
</template>
<script>
export default {
  data() {
    return {
      map: null
    }
  },
  methods: {},
  created() {
    console.log('22')
  },
  mounted() {
    var map = new AMap.Map('container', {
      resizeEnable: true,
      zoom: 4
    })
    AMapUI.load(['ui/misc/PathSimplifier', 'lib/$'], function(
      PathSimplifier,
      $
    ) {
      if (!PathSimplifier.supportCanvas) {
        alert('当前环境不支持 Canvas！')
        return
      }

      var pathSimplifierIns = new PathSimplifier({
        zIndex: 100,
        //autoSetFitView:false,
        map: map, //所属的地图实例

        getPath: function(pathData, pathIndex) {
          return pathData.path
        },
        getHoverTitle: function(pathData, pathIndex, pointIndex) {
          if (pointIndex >= 0) {
            //point
            return (
              pathData.name + '，点：' + pointIndex + '/' + pathData.path.length
            )
          }

          return pathData.name + '，点数量' + pathData.path.length
        },
        renderOptions: {
          renderAllPointsIfNumberBelow: 100 //绘制路线节点，如不需要可设置为-1
        }
      })

      window.pathSimplifierIns = pathSimplifierIns

      //设置数据
      pathSimplifierIns.setData([
        {
          name: '路线0',
          path: [
            [116.405289, 39.904987],
            [113.964458, 40.54664],
            [111.47836, 41.135964],
            [108.949297, 41.670904],
            [106.380111, 42.149509],
            [103.774185, 42.56996],
            [101.135432, 42.930601],
            [98.46826, 43.229964],
            [95.777529, 43.466798],
            [93.068486, 43.64009],
            [90.34669, 43.749086],
            [87.61792, 43.793308]
          ]
        }
      ])

      //对第一条线路（即索引 0）创建一个巡航器
      var navg1 = pathSimplifierIns.createPathNavigator(0, {
        loop: true, //循环播放
        speed: 1000000 //巡航速度，单位千米/小时
      })

      navg1.start()
    })
    // AMap.plugin('AMap.Geolocation', function() {
    //   var geolocation = new AMap.Geolocation({
    //     enableHighAccuracy: true, //是否使用高精度定位，默认:true
    //     timeout: 10000, //超过10秒后停止定位，默认：5s
    //     buttonPosition: 'RB', //定位按钮的停靠位置
    //     buttonOffset: new AMap.Pixel(10, 20), //定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
    //     zoomToAccuracy: true //定位成功后是否自动调整地图视野到定位点
    //   })
    //   map.addControl(geolocation)
    //   geolocation.getCurrentPosition(function(status, result) {
    //     if (status == 'complete') {
    //       console.log(result) //解析定位结果
    //     } else {
    //       console.log(result) //解析定位错误信息
    //     }
    //   })
    // })
  }
}
</script>
<style scoped>
#container {
  width: 100%;
  height: 800px;
}
</style>
