import Vue from 'vue'
import Router from 'vue-router'
import DataShow from '@/components/util/DataShow'
import DataList from '@/components/DataList'
import SaveMany from '@/components/SaveMany'
import index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/saveOne',
      component: DataList,
      children: [
        {
          path: 'show',
          component: DataShow
        }
      ]
    },
    {
      path: '/saveMany',
      component: SaveMany
    },
    {
      path: '/index',
      component: index
    }
  ]
})

/**
 * 重写路由的push方法
 */
const [routerPush, routerReplace] = [Router.prototype.push, Router.prototype.replace]
Router.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}
Router.prototype.replace = function replace (location) {
  return routerReplace.call(this, location).catch(error => error)
}
