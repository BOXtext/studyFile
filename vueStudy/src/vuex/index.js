import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA  = {
	state: {
		listF: [1],
  	listS: []
	},
	mutations:{
		incrementF(state, data) {
			state.listF = data
		},
		incrementS(state, data) {
			state.listS.push(data)
		}
	},
	actions: {
		incrementF(context,data) {
			context.commit('incrementF',data)
		},
		incrementS(context,data) {
			context.commit('incrementS',data)
		},
	}
}

const store = new Vuex.Store({
  modules: {
  	state1: moduleA
  }

})

export default store
