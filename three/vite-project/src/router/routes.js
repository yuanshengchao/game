import Order from '@/page/order/index.vue'
import OrderDetail from '@/page/orderDetail/index.vue'
import Statistics from '@/page/statistics/index.vue'
import Template from '@/page/template/index.vue'

export default [
  {
    path: "/",
    redirect: "/order",
    meta: {
      title: "首页",
      hidden: true,
      icon: "el-icon-s-home",
    },
  },
  {
    path: "/order",
    meta: {
      title: "工单管理",
      hidden: false,
      icon: "el-icon-s-grid",
    },
    component: Order,
  },
  {
    path: "/order/detail",
    meta: {
      title: "工单详情",
      hidden: true,
      icon: "el-icon-s-grid",
      active:"/order"
    },
    component: OrderDetail,
  },
  {
    path: "/template",
    meta: {
      title: "模版管理",
      hidden: false,
      icon: "el-icon-notebook-1",
    },
    component: Template,
  },
  {
    path: "/statistics",
    meta: {
      title: "数据统计",
      hidden: false,
      icon: "el-icon-s-data",
    },
    component: Statistics,
  }
];
