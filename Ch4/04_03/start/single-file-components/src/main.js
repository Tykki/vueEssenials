import Vue from 'vue'
import App from './App.vue'
import VR from 'vue-router'
import PL from './productList.vue'
import P from './product.vue'

Vue.use(VR)

const routes = [
	{
		path: '/',
		redirect: '/products'
	},
	{
		path: '/products',
		component: PL
	},
	{
		path: '/products/:id',
		component: P
	},

]

const router = new VR({
	routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
