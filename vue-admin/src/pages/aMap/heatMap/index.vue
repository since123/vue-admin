<template>
  <div>
    <div id="container"></div>
  </div>
</template>
<script>
import heatmapData from './heatmapData.js'
import { Supercluster } from './sm'

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

      const map = (vm.map = new AMap.Map('container', {
        resizeEnable: true,
        center: [116.418261, 39.921984],
        zoom: 4
      }))

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
        for (let n = 0; n < 60000; n++) {
          heatmapData.push(heatmapData[0])
        }
        console.log('heatmapData', heatmapData)

        // 计算两点之间实际距离
        // 高德地图比例尺
        // { 19: data, 13: data }

        function debounce(func, wait, immediate) {
          let timeout

          const debounced = function() {
            const context = this
            const args = arguments
            const later = function() {
              timeout = null
              if (!immediate) {
                func.apply(context, args)
              }
            }
            const callNow = immediate && !timeout
            clearTimeout(timeout)
            timeout = setTimeout(later, wait)
            if (callNow) {
              func.apply(context, args)
            }
          }

          debounced.cancel = () => {
            clearTimeout(timeout)
          }

          return debounced
        }

        const index = new Supercluster({
          minZoom: 0, // min zoom to generate clusters on
          maxZoom: 16, // max zoom level to cluster the points on
          minPoints: 2, // minimum points to form a cluster
          radius: 40, // cluster radius in pixels
          extent: 512, // tile extent (radius is calculated relative to it)
          nodeSize: 64, // size of the KD-tree leaf node, affects performance
          log: false, // whether to log timing info
          // whether to generate numeric ids for input features (in vector tiles)
          generateId: false,
          // a reduce function for calculating custom cluster properties
          reduce: null, // (accumulated, props) => { accumulated.sum += props.sum; }
          // properties to use for individual points when running the reducer
          map: props => props // props => ({sum: props.my_value})
        })
        index.load(heatmapData.map(p => ({ ...p, x: p.lng, y: p.lat })))

        let markers = []

        const render = () => {
          let bounds = map.getBounds()
          if (bounds.toBounds) {
            bounds = bounds.toBounds()
          }
          const bbox = [
            bounds.southWest.lng,
            bounds.southWest.lat,
            bounds.northEast.lng,
            bounds.northEast.lat
          ]
          // bbox

          const views = index.getClusters(bbox, map.getZoom())
          const clusters = views.filter(view => view.isClutser) // 多个点聚合之后的点
          const data = views.filter(view => !view.isClutser) // 原始点

          console.log(clusters, data)

          vm.heatmap.setDataSet({
            data: clusters.map(c => ({ ...c, lng: c.x, lat: c.y })),
            max: 100
          })

          // map.remove(polygons)
          // polygons = data.map(item => {
          //   const marker = new AMap.Polygon({
          //     ...item,
          //     fillColor: 'rgba(256, 0, 0, 0.2)', // 多边形填充颜色
          //     borderWeight: 2, // 线条宽度，默认为 1
          //     strokeColor: 'rgba(256, 0, 0, 1)' // 线条颜色
          //   })
          //   return marker
          // })
          // map.add(polygons)
        }

        render()

        const listener = debounce(render, 200)
        map.on('zoom', listener)
        map.on('moveend', listener)

        // index.getClusters([-180, -85, 180, 85], 2);

        // vm.heatmap.setDataSet({
        //   data: heatmapData,
        //   max: 100
        // })
        // AMapUI.load(['ui/misc/PointSimplifier', 'lib/$'], function(
        //   PointSimplifier,
        //   $
        // ) {
        //   if (!PointSimplifier.supportCanvas) {
        //     alert('当前环境不支持 Canvas！')
        //     return
        //   }

        //   var pointSimplifierIns = new PointSimplifier({
        //     map: vm.map, //所属的地图实例
        //     getPosition: function(item) {
        //       if (!item) {
        //         return null
        //       }
        //       // console.log('item', item)
        //       // var parts = item.split(',')

        //       //返回经纬度
        //       return [item.lng, item.lat]
        //     },
        //     renderOptions: {
        //       pointStyle: {
        //         content: 'circle',
        //         width: 6,
        //         height: 6
        //       },

        //       //点的硬核部分
        //       pointHardcoreStyle: {
        //         content: 'none',
        //         width: 60,
        //         height: 60
        //       }
        //     }
        //   })
        //   pointSimplifierIns.setData(heatmapData.splice(0, 450))
        // })
        // for (const point of heatmapData) {
        //   var marker = new AMap.Marker({
        //     position: new AMap.LngLat(point.lng, point.lat), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
        //     title: point.count
        //   })

        //   // 将创建的点标记添加到已有的地图实例：
        //   vm.map.add(marker)

        //   // 移除已创建的 marker
        // }

        // var styles = [
        //   {
        //     url: 'https://webapi.amap.com/images/mass/mass0.png',
        //     anchor: new AMap.Pixel(6, 6),
        //     size: new AMap.Size(11, 11),
        //     zIndex: 3,
        //     opacity: 0
        //   }
        // ]

        // const markers = heatmapData.map((point, index) => ({
        //   lnglat: [point.lng, point.lat],
        //   name: index,
        //   style: styles[0]
        // }))

        // var mass = new AMap.MassMarks(markers, {
        //   opacity: 0.8,
        //   zIndex: 111,
        //   cursor: 'pointer',
        //   style: styles
        // })

        // mass.on('click', function(e) {
        //   console.log(e)
        // })

        // mass.setMap(vm.map)

        // // 创建一个 Marker 实例：

        // window.heatmap = vm.heatmap
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
