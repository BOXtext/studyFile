<template lang="html">
	<div class="">
		<input type="text" name="name" v-model="cname">{{cname}}
		<input type="text" name="name" v-model="cage">{{cage}}
	</div>
</template>

<script>
export default {
	name: 'singleBind',
	props: ['myName', 'myAge'],
	data() {
		return {
			cname: this.myName,
			cage: this.myAge
		}
	},
	watch: {
		myName(n, o) {
			this.cname = n;
		},
		myAge(n, o) {
			this.cage = n;
		}
	},
	computed: {
		setName: function() {
			return
		}
	}
}
</script>

<style lang="css">
</style>
