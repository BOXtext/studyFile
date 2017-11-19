<template lang="html">
	<div class="">
		 <p>父亲:给你{{ money }}元零花钱</p>
        <single-bind :money="money" @repay="repay"></single-bind>
        <br>
        <button @click="add">那给你加100</button>
        <p v-if="back" @repay="repay">儿子：超过300我不要，还给你 {{ back }}元</p>
         <el-checkbox-group v-model="checkList">
			    <el-checkbox label="复选框 A" value="testA"></el-checkbox>
			    <el-checkbox label="复选框 B"></el-checkbox>
			    <el-checkbox label="复选框 C"></el-checkbox>
			    <el-checkbox label="禁用" disabled></el-checkbox>
			  </el-checkbox-group>
	</div>
</template>

<script>
import singleBind from '@/components/childComponent/singleBind.vue'
export default {
	name: 'testComponent',
	components:{
		singleBind
	},
	data() {
		return {
			money: 100,
	    back: 0,
	    checkList: [],
	    testA: {
	    	a: '1'
	    }
		}
	},
	watch: {
		checkList: {handler: 'watchList', deep:true},
		getListS(n, o) {
			if(n) {
				console.log(n)
			}
		},
	},
	mounted() {
		this.text1()
	},
	computed: {
		getListS() {
			return this.$store.state.state1.listS
		}
	},
	methods: {
		watchList(n, o) {
			if(n) {
				this.$store.dispatch('incrementF', n)
			}
		},
		repay(back) {
			this.back = back;
		},
		add() {
			this.money += 100
		}
	}
}
</script>

<style lang="css">
</style>
