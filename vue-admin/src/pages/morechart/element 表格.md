### 重点在js部分, 此文一个是记录elementui表格多行合并，第二个是记录合并后序号如何显示，如果序号不处理，那可能就是1，3，7，9......等这样的，只有处理之后才是1，2，3，4.....这样的。最后面是图，可以看效果。

html部分写的比较简略，
```html
    <el-table  :data="tempTableData" height="800px"  :span-method="objectSpanMethod" style="width: 100%;" border>
        <el-table-column prop="Nosort" label="充电记录" min-width="60px"></el-table-column>
        <el-table-column prop="type" label="充电类型" min-width="65px">
          <template slot-scope="scope">
            <span v-if="scope.row.fastCharge == 1">快充</span>
            <span v-else>慢充</span>
          </template>
        </el-table-column>
        <el-table-column prop="chargeStartTime" label="充电开始时间" min-width="130px"></el-table-column>
        <el-table-column prop="chargeEndTime" label="充电结束时间" min-width="130px"></el-table-column>
        <el-table-column prop="chargeStartSoc" label="充电开始电量（%）" min-width="80px"></el-table-column>
        <el-table-column prop="chargeEndSoc" label="充电结束电量（%）" min-width="80px"></el-table-column>
        <el-table-column prop="environment_temperature" label="环境温度（℃）" width="80px"></el-table-column>
        <el-table-column prop="rangeSoc" label="电量（%）" min-width="80px">
          <template slot-scope="scope">
            <span >{{scope.row.rangeSoc}}</span>
          </template>
        </el-table-column>
        <el-table-column label="时长（分钟）" width="100px">
            <el-table-column  prop="singleChargeTime" label="计算值" >
              <template slot-scope="scope">
                <span >{{scope.row.singleChargeTime}}</span>
              </template>
            </el-table-column>
            <el-table-column  prop="referenceChargeTime" label="参考值" >
              <template slot-scope="scope">
                <span >{{scope.row.referenceChargeTime}}</span>
              </template>
            </el-table-column>
        </el-table-column>
    </el-table>
```

```js
data(){
    return {
        tempTableData: [],
        tableArr: [],
        tablePos: 0
    }
}
methods: {
    getData(){
    // 把需要合并行的归类, this.tempTableData是表格数据
    this.tableArr = []
    this.tablePos = 0
    for (var i = 0; i < this.tempTableData.length; i++) {
        if (i === 0) {
            // 第一行必须存在
            this.tableArr.push(1)
            this.tablePos = 0
        } else {
            if (this.tempTableData[i].sign === this.tempTableData[i - 1].sign) {
                this.tableArr[this.tablePos] += 1
                this.tableArr.push(0)
            } else {
                this.tableArr.push(1)
                this.tablePos = i
            }
        }
    }
    // 表格序号
    let Nosort = 0
    for(let n in this.tableArr){
        if(this.tableArr[n]>0){
            Nosort += 1
            this.$set(this.tempTableData[n],'Nosort',Nosort)
        }
    }
    },

    objectSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (
        columnIndex === 0 ||
        columnIndex === 1 ||
        columnIndex === 2 ||
        columnIndex === 3 || columnIndex === 4 ||columnIndex === 5 || columnIndex === 6
      ) {
        // 第一列的合并方法,省
        const row1 = this.tableArr[rowIndex]
        const col1 = row1 > 0 ? 1 : 0 // 如果被合并了_row=0则它这个列需要取消
        return {
          rowspan: row1,
          colspan: col1
        }
      }
    },
}
```