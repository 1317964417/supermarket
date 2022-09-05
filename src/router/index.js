import Vue from 'vue'
import Router from 'vue-router'

const ProFile = () => import('../views/profile/ProFile')
const Home = () => import('../views/home/Home')
const CateGory = () => import('../views/category/CateGory')
const Cart = () => import('../views/cart/Cart')

Vue.use(Router)



//创建VueRouter对象
const routes = [
    //配置映射关系
    {
        path: '',//缺省--默认值
        redirect: 'Home'//重定向，重新定
    },
    {
        path: '/home',
        component: Home,
        // children: [
        //     // {
        //     //   path: '',
        //     //   redirect: 'news'
        //     // },
        //     {
        //         path: 'news',
        //         component: homeNews
        //     },
        //     {
        //         path: 'message',
        //         component: homeMessage
        //     }
        // ]
    },

    {
        path: '/category',
        component: CateGory
    },
    {
        path: '/profile',
        component: ProFile
    },
    {
        path: '/cart',
        component: Cart
    },

]

const router = new Router({
    //配置路由和组件之间的应用关系
    routes,
    mode: 'history'
})

//3.将router对象导入到vue实例
export default router


