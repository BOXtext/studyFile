<template lang="html">
  <div class="retrieval criteria">
		<div class="search-condition">
			<el-form ref="form" :model="query" label-width="80px">
				<el-row style="margin-bottom: 0;">
					<el-col :span="8">
						<el-form-item label="经销商名称：" >
							<el-input style="max-width: 214px;" v-model="query.distributorName" size="small"></el-input>
						</el-form-item>
					</el-col>
					<el-col :span="14" >
						<el-form-item label="统计时间：">
							<el-date-picker size="small"
								v-model="query.startDate"
								type="date"
								:editable='false'
								:picker-options="pickerOptions1"
								placeholder="选择日期"
								@change = 'dateFCompare'>
							</el-date-picker>
							<span>-</span>
							<el-date-picker
								v-model="query.endDate" size="small"
								type="date"
								:editable='false'
								:picker-options="pickerOptions2"
								placeholder="选择日期"
								@change="dateSCompare">
							</el-date-picker>
							<el-button  size="small" @click="lastMonth()">最近一个月</el-button>
							<el-button  size="small" @click="lastThreeMonth()">最近三个月</el-button>
						</el-form-item>
					</el-col>
				</el-row>
				<el-row style="margin-bottom: 0;">
					<el-col :span="8">
						<el-form-item label="分类：" >
							<el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-form-item label="分类：" >
							<el-select v-model="value" placeholder="请选择">
						    <el-option
						      v-for="item in options"
						      :key="item.value"
						      :label="item.label"
						      :value="item.value">
						    </el-option>
						  </el-select>
						</el-form-item>
					</el-col>
					<el-col :span="8">
						<el-radio-group @change="radioChange(query.radio2)" v-model="query.radio2">
					    <el-radio :label="3">有销售数据的商品</el-radio>
					    <el-radio :label="6">无销售数据的商品</el-radio>
					  </el-radio-group>
					</el-col>
				</el-row>
			</el-form>
			<div class="searchBtn">
				<el-button type="primary" @click="onSubmit()">查询</el-button>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data(){
		var data = {
			query: {
				distributorName: '',  // 经销商名称
				startDate: '', // 开始时间
				endDate: '',  // 结束时间
				radio2: '3', // 单选按钮的值
			},
			options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
				name:'',
				pickerOptions1: '',
				pickerOptions2: {
					disabledDate(time) {
						return time.getTime() < Date.now() - 8.64e7;
					}
				}
		}
		return data;
	},
		computed:{
			Name() {
				return  this.query.distributorName +'dsadws'
			}

		},
		mounted() {
			var today = new Date().setHours(0,0,0)
			var yesterday = today - 1000;
			var lastMonth = today - 1000*60*60*24*31;
			this.query.endDate = new Date(yesterday);
			this.query.startDate = new Date(lastMonth);
		},
		watch: {
			Name(n, o) {
				console.log(n);
			}
		},
		methods:{
			// 【方法】限制日期格式
			dateFCompare(val) {
       let startDate = new Date(val)
        this.pickerOptions2 = {
          disabledDate(time) {
            return time.getTime() < startDate
          }
        };
      },
      dateSCompare(val) {
        let endDate = new Date(val)
        this.pickerOptions1 = {
          disabledDate(time) {
            return time.getTime() > endDate
          }
        }
      },
			// 【方法】查询按钮
			onSubmit() {

			},

			radioChange(value) {
				console.log(this.name);
			},
      lastMonth() {

			},
      lastThreeMonth() {

			}
		},
		beforeRouteEnter:function(to,from,next){
			next(vm =>{

			})
		}
}
</script>

<style lang="css">
</style>
