<template>
  <div class="LineCharts">
    <div v-bind:id="id" :style="{width: '100%', height: '300px'}"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
	name: 'LineChart',
	props: ['id', 'series'],
	data() {
		return {
      myId:'',
			tmpSeries: []
		}
	},
	mounted: function() {
		this.tmpSeries= this.series.forEach((item, index) => {
			item.smooth = true;
		})
    this.myId = this.id;
		this.drawLine();
    // console.log(this.series);
	},
	methods: {
		drawLine() {
			let myChart = echarts.init(document.getElementById(this.myId))
      console.log(myChart);
			  myChart.setOption({
					title: {
						text: '某楼盘销售情况',
						subtext: '纯属虚构'
					},
					tooltip: {
							trigger: 'axis'
					},
					legend: {
							data:['意向','预购','成交']
					},
					toolbox: {
							show: true,
							feature: {
									magicType: {show: true, type: ['stack', 'tiled']},
									saveAsImage: {show: true}
							}
					},
					xAxis: {
							type: 'category',
							boundaryGap: false,
							data: ['周一','周二','周三','周四','周五','周六','周日']
					},
					yAxis: {
							type: 'value'
					},
					series: this.tmpSeries
				})

		}
	}
}
</script>

<style media="screen">

</style>
