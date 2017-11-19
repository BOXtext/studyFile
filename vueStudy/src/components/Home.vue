<template lang="html">
	<div class="">
		<!-- <el-button type="primary" @click="toOPX"><i class="dladmin dli-kejian"></i>调往OPX页面</el-button> -->
		<br>
		<br>
		<!-- <el-button type="primary" @click="toEcharts">调往Echarts测试页面</el-button> -->
		<br>
		<el-button type="primary" @click="toMongoDB">调往mongoDB页面</el-button>
		<!-- <el-button type="primary" @click="toEchart">调往echarts页面</el-button> -->
		<el-button type="primary" @click="toComponent">调往父子组件页面</el-button>
		<br>
		<br>
		<el-button type="primary" @click="toElementTest">element测试页面</el-button>
		<br>
		<!-- <el-button type="primary" @click="ins">插入Echarts数据</el-button> -->
		<!-- <el-button type="primary" @click="sel">获得Echarts数据</el-button> -->
	</div>
</template>

<script>
export default {
	name: 'Home',
	components:{
	},
	data() {
		return {
			chart:'chart',
			series:[]
		}
	},
	mounted: function() {

	},
	methods: {
		toElementTest() {
			this.$router.push('testElement')
		},
		toEcharts()  {
			this.$router.push('testEcharts')
		},
		toOPX() {
			this.$router.push('OPX')
		},
		ins() {
			this.$http.post('api/insertEchart').then(({data}) => {
				console.log(data);
			})
		},
		sel() {
			this.$http.get('api/selectEchart').then(({data}) => {
				this.series = data.data
				this.series.forEach((item, index) => {
					delete item.__v;
					delete item._id;
				})
				console.log(this.series.toString());
			})
		},
		toMongoDB() {
			this.$router.push('Hello')
		},
	  toEchart() {
			this.$router.push('LineChart')
		},
		toComponent() {
			this.$router.push('testComponent')
		}
	}

}
</script>

<style lang="css">
</style>
