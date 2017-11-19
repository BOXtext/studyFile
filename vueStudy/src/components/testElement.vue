<template>
	<div>
	<p>测试自己分页</p>
		<el-table
      :data="tableData.list"
      style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
   <el-pagination
   :current-change='pageChange' :page-size='5' :page-count="tableData.total"
    layout="prev, pager, next"
    >
  </el-pagination>
	</div>
		
</template>
<script>
	export default {
		name :'testElement',
		data() {
      return {
      	tableData: {
      		total: 0,
      		list:[]
      	},

      }
    },
    mounted() {
    	let  backData = [{
	            date: '2016-05-02',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1518 弄'
	          }, {
	            date: '2016-05-04',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1517 弄'
	          }, {
	            date: '2016-05-01',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1519 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
	          }, {
	            date: '2016-05-03',
	            name: '王小虎',
	            address: '上海市普陀区金沙江路 1516 弄'
	          }]

	      this.tableData.total = backData.length%5
	      console.log(this.tableData.total)
    },
    methods: {
    	pageChange(index) {

    	}
    }
	}
</script>
<style>
	
</style>