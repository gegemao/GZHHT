import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import guanli from '../views/points/guanli'
import zjiang from '../views/points/zjiang'
import cmodel from '../views/custom/cmodel'
import custcreat from '../views/custom/custcreat'
import phcard from '../views/custom/phcard'
import phcreat from '../views/custom/phcreat'
import yulu from '../views/yulu'
import setting from '../views/setting'

Vue.use(VueRouter)


export default new VueRouter({
  routes:[
    {path:'',redirect:'/login'},
    {path:'/login',component:Login},
    {path:'/guanli',component:guanli},
    {path:'/zjiang',component:zjiang},
    {path:'/cmodel',component:cmodel},
    {path:'/custcreat',component:custcreat},
    {path:'/phcard',component:phcard},
    {path:'/phcreat',component:phcreat},
    {path:'/yulu',component:yulu},
    {path:'/setting',component:setting}
  ]
})
