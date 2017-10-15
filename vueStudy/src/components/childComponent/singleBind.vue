<template lang="html">
	<div class="">
		 <p v-if="pocketMoney < 300">儿子: {{ pocketMoney }}太少了，不够 </p>
        <p v-else>儿子: 谢谢老爸！</p>
        <button v-if="pocketMoney > 300" @click="repay">点击有惊喜</button>
				<span>{{getList}}</span>
				<el-input v-model="toFather" placeholder="请输入内容"></el-input>
	</div>
</template>

<script>
export default {
	name: 'singleBind',
	props: {
		money: Number
	},
	data() {
		return {
			toFather: '' //传给父元素
		}
	},
	watch: {
		toFather(n, o) {
			if(n) {
				
				this.$store.dispatch('incrementS', n)
			}
		}
	},
	computed: {
		pocketMoney() {
			return this.money
		},
		getList() {
			// console.log(this.$store.state.state1.listF)
			return this.$store.state.state1.listF
		}
	},
	methods: {
		repay() {
			this.$emit('repay', this.pocketMoney - 300)
		}
	}
}
</script>

<style lang="css">
</style>
