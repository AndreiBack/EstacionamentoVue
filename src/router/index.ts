import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Header from '../views/Header.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
  path: '/Header',
  name: 'header',
  component: () => import(/* webpackChunkName: "about" */ '../views/Header.vue')
},
{
path: '/EntradaLista',
name: 'EntradaLista',
component: () => import(/* webpackChunkName: "about" */ '../views/entrada/ListaEntradas.vue')
},
{
  path: '/MarcaLista',
  name: 'MarcaLista',
  component: () => import(/* webpackChunkName: "about" */ '../views/marca/ListaMarcas.vue')
  },
  {
    path: '/ModeloLista',
    name: 'ModeloLista',
    component: () => import(/* webpackChunkName: "about" */ '../views/modelo/ListaModelos.vue')
    },
    {
      path: '/VeiculoLista',
      name: 'VeiculoLista',
      component: () => import(/* webpackChunkName: "about" */ '../views/veiculo/ListaVeiculos.vue')
      },
     {
       path: '/CondutorLista',
       name: 'CondutorLista',
       component: () => import(/* webpackChunkName: "about" */ '../views/condutor/ListaCondutores.vue')
      },
      {
        path: '/CondutorCadastro',
        name: 'CondutorCadastro',
        component: () => import(/* webpackChunkName: "about" */ '../views/condutor/CadastroCondutores.vue')
       },
       {
         path: '/EntradaFinalizar',
         name: 'EntradaFinalizar',
         component: () => import(/* webpackChunkName: "about" */ '../views/entrada/FinalizarEntrada.vue')
        },
        {
          path: '/MarcaCadastro',
          name: 'MarcaCadastro',
          component: () => import(/* webpackChunkName: "about" */ '../views/marca/CadastroMarcas.vue')
         },
         {
           path: '/ModeloCadastro',
           name: 'ModeloCadastro',
           component: () => import(/* webpackChunkName: "about" */ '../views/modelo/CadastroModelos.vue')
          },
          {
            path: '/VeiculoCadastro',
            name: 'VeiculoCadastro',
            component: () => import(/* webpackChunkName: "about" */ '../views/veiculo/CadastroVeiculos.vue')
           },
           {
             path: '/Configuracao',
             name: 'Configuracao',
             component: () => import(/* webpackChunkName: "about" */ '../views/configuração/Configuração.vue')
            }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
