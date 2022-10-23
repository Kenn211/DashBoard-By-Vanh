import { createRouter, createWebHistory } from 'vue-router'
import DashBoardPage from '../Views/DashBoardPage.vue'
import Login from '../Views/Login.vue'
import RegisterPage from '../Views/RegisterPage.vue'
const routes = [
    { path: '/',meta: {
        requiresAuth: true
      } ,component: DashBoardPage},
    { path: '/login', component: Login, meta: {
        hideForAuth: true
    }},
    { path: '/register', component: RegisterPage}
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
      // this route requires auth, check if logged in
      // if not, redirect to login page.
      if (!window.localStorage.getItem('isLoggedIn')) {
        next('/login');
      } else {
        next() // go to wherever I'm going
      }
    } else {
      next() // does not require auth, make sure to always call next()!
    }
  })
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.hideForAuth)) {
        if (window.localStorage.getItem('isLoggedIn') == 'true') {
            next('/');
            console.log(window.localStorage.getItem('isLoggedIn'));
        } else {
            next();
        }
    } else {
        next();
    }
  })
export default router