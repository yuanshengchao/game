<template>
  <div class="p-5">
    <!-- 需要展示4部分：1、用户信息；2、问题描述，3、处理记录表格；4、相关工单 -->
   <order-info :userInfo="detailInfo.user"></order-info>
    <order-desc :desc="detailInfo"></order-desc>
    <order-record :record="detailInfo.replies"></order-record>
    <related-order :recentTickets="detailInfo.user?.recentTickets"></related-order>
  </div>
</template>
<script>
import OrderInfo from "./components/OrderInfo.vue";
import OrderDesc from "./components/OrderDesc.vue";
import OrderRecord from "./components/OrderRecord.vue";
import RelatedOrder from "./components/RelatedOrder.vue";

import {response} from './data/index.js'
export default {
  name: "OrderDetail",
  components: {
    OrderInfo,
    OrderDesc,
    OrderRecord,
    RelatedOrder,
  },
  data() {
    return {
        detailInfo:{}
    };
  },
    created() {
       this.detailInfo = response;
    },
};
</script>
