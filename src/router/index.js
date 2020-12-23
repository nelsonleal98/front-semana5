import Vue from 'vue'
import VueRouter from 'vue-router'
import Principal from '../views/Principal.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: Principal
  },
  {
    path: '/administracion',
    name: 'Administracion',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    
    children: [
        {
    path: 'categorias',
    name: 'Categorias',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Categorias.vue'),
    meta:{
      requireAuth : true
    }
  },
  {
    path: 'usuarios',
    name: 'Usuarios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Usuarios.vue'),
    meta:{
      requireAuth : true
    }
  },
  {
    path: 'articulos',
    name: 'Articulos',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Articulos.vue'),
    meta:{
      requireAuth : true
    }
  },
  {
    path: 'home',
    name: 'Home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
    meta:{
      requireAuth : true
    }
  },
    ],
    component: () => import(/* webpackChunkName: "about" */ '../views/Administracion.vue'),
    meta:{
      requireAuth : true
    }
  },
  
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/servicios',
    name: 'Servicios',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Servicios.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach( (to,from,next) =>{
  //Si para donde voy requiere autenticación
    if(to.matched.some (destinoRequiereAut => destinoRequiereAut.meta.requireAuth)){
      // voy a preguntar si hay un token activo
      if(localStorage.getItem('token')){
        next();
      }else{
        next({
          path: '/'
        });
      }
    }else{
      next();
    }
}
)

export default router
