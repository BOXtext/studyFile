<template>
	<div class="testEcharts">
		<button @click="searchBtn">测试组件</button>
		<line-chart :id='id'></line-chart>
	</div>
</template>

<script>
import lineChart from './childComponent/LineChart'
	export default {
		name: 'testEcharts',
		components:{
			lineChart
		},
		data() {
			return {
				id: 'test'
			}
		},
		methods:{
			searchBtn() {

			}
		}
	}
</script>

<style>
	
</style>