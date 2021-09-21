<template>
  <div>
    <div id="container"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      map: null,
      heatmap: null
    }
  },
  methods: {
    initMap() {
      var map = new AMap.Map('container', {
        zooms: [4, 7],
        zoom: 4.75,
        center: [102.618687, 31.790976],
        showLabel: false,
        viewMode: '3D',
        mapStyle: 'amap://styles/45311ae996a8bea0da10ad5151f72979',
        pitch: 40
      })

      var loca = new Loca.Container({
        map
      })
      let data = {
        type: 'FeatureCollection',
        features: [
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [109.48699, 30.283114]
            },
            properties: {
              ranking: 1,
              prov: '湖北省',
              city: '恩施土家族苗族自治州',
              mom: '-4.4%',
              yoy: '-5.1%',
              index: 2.367,
              avg: 14.685,
              lnglat: '109.48699,30.283114'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [106.753669, 31.858809]
            },
            properties: {
              ranking: 2,
              prov: '四川省',
              city: '巴中市',
              mom: '-2.9%',
              yoy: '0.3%',
              index: 2.113,
              avg: 19.375,
              lnglat: '106.753669,31.858809'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [109.48699, 30.283114]
            },
            properties: {
              ranking: 1,
              prov: '湖北省',
              city: '恩施土家族苗族自治州',
              mom: '-4.4%',
              yoy: '-5.1%',
              index: 2.367,
              avg: 14.685,
              lnglat: '109.48699,30.283114'
            }
          },
          {
            type: 'Feature',
            geometry: {
              type: 'Point',
              coordinates: [106.753669, 31.858809]
            },
            properties: {
              ranking: 2,
              prov: '四川省',
              city: '巴中市',
              mom: '-2.9%',
              yoy: '0.3%',
              index: 2.113,
              avg: 19.375,
              lnglat: '106.753669,31.858809'
            }
          }
        ]
      }
      // let data2 = []
      for (let i = 0; i < 500; i++) {
        data.features.push(data.features[0])
        data.features.push(data.features[1])

        i++
      }
      var geo = new Loca.GeoJSONSource({
        // data: data
        url:
          'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/traffic.json'
      })

      var heatmap = new Loca.HeatMapLayer({
        // loca,
        zIndex: 10,
        opacity: 1,
        visible: true,
        zooms: [2, 22]
      })

      heatmap.setSource(geo, {
        radius: 200000,
        unit: 'meter',
        height: 500000,
        //radius: 35,
        //unit: 'px',
        //height: 100,
        gradient: {
          0.1: '#2A85B8',
          0.2: '#16B0A9',
          0.3: '#29CF6F',
          0.4: '#5CE182',
          0.5: '#7DF675',
          0.6: '#FFF100',
          0.7: '#FAA53F',
          1: '#D04343'
        },
        value: function(index, feature) {
          return feature.properties.avg
          var value = feature.properties.mom.slice(0, -1)
          return value + 10 * Math.random()
        },
        // min: -100,
        // max: 100,
        heightBezier: [0, 0.53, 0.37, 0.98]
      })
      loca.add(heatmap)
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
