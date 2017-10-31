/*
Vue全局的一个函数---自定义
 */
// exports.install = function(Vue, options) {
// 	Vue.prototype.text1 = function() {
// 		alert('执行1')
// 	};
// 	Vue.prototype.text2 = function() {
// 		alert('执行2')
// 	};
// }
// exports第二张写法
module.exports = function install(Vue, options) {
	 	Vue.prototype.text1 = function() {
		console.log('执行1')
	};
	Vue.prototype.text2 = function() {
		console.log('执行2')
	};
}