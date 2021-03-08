export function lineOptionTime() {
  var base1 = +new Date(1988, 9, 3)
  var base2 = +new Date(1988, 12, 3)
  var oneDay = 24 * 3600 * 1000
  let data = []
  var data1 = [[base1, Math.random() * 300]]
  var data2 = [[base2, Math.random() * 500]]
  for (let i = 1; i < 2000; i++) {
    let now = new Date((base1 += oneDay))
    data1.push([
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
      Math.round((Math.random() - 0.5) * 20 + data1[i - 1][1])
    ])
  }

  for (let i = 1; i < 2000; i++) {
    let now = new Date((base2 += oneDay))
    data2.push([
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('-'),
      Math.round((Math.random() - 0.5) * 20 + data2[i - 1][1])
    ])
  }
  data.push(data1, data2)
  let xname = ['模拟数据1', '模拟数据2']
  console.log('data1', data1)
  console.log('data2', data2)
  let seriesData = []
  for (let n in data) {
    let seriesObj = {
      name: xname[n],
      type: 'line',
      smooth: true,
      symbol: 'none',
      // areaStyle: {},//线到x轴空间区域填充
      data: data[n]
    }
    seriesData.push(seriesObj)
  }
  const option = {
    tooltip: {
      trigger: 'axis',
      position: function(pt) {
        return [pt[0], '10%']
      }
    },
    title: {
      left: 'center',
      text: '大数据量面积图'
    },
    toolbox: {
      feature: {
        dataZoom: {
          yAxisIndex: 'none'
        },
        restore: {},
        saveAsImage: {}
      }
    },
    xAxis: {
      type: 'time',
      boundaryGap: false
    },
    yAxis: {
      type: 'value',
      boundaryGap: [0, '100%']
    },
    dataZoom: [
      {
        type: 'inside',
        start: 0,
        end: 20
      },
      {
        start: 0,
        end: 20
      }
    ],
    series: seriesData
  }

  return option
}
