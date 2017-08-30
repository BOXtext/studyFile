<template lang="html">
	<div class="">
		<input type="text" name="name" v-model="name">{{name}}
		<input type="text" name="name" v-model="age">{{age}}
		<div class="" style="margin-top:20px; border: 1px solid red;">
			<single-bind v-bind:my-name="name" v-bind:my-age="age"></single-bind>
		</div>
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
			name: '11',
	    age: '11'
		}
	}
}
</script>

<style lang="css">
</style>
