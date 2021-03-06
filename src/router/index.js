import Vue from 'vue'



import VueRouter from 'vue-router'



import Home from '../views/Home.vue'



import Login from '../views/Login.vue'









import Inventory from '../views/Inventory.vue'







import store from '../store'







Vue.use(VueRouter)







const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', name: 'Login', component: Login },
  { path: '/inventory', name: 'Inventory', component: Inventory, meta: { requiresRole: 'user' } },
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresRole)) {
    if (store.getters.getUser.roles && store.getters.getUser.roles[to.meta.requiresRole]) {
      next()
    } else {
     next('/login')
    }



  } else {



    next() // make sure to always call next()!



  }



})







export default router