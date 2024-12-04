<template>
    <div>
        <order-form @searchList="searchList"></order-form>
        <order-table ref="orderTable"></order-table>
    </div>
</template>

<script>
import OrderForm from "./components/OrderForm.vue";
import OrderTable from "./components/OrderTable.vue";
    export default {
        components: {
            OrderTable,
            OrderForm
        },
       data() {
           return {
           }
       },
         methods: {
            // 搜索列表数据
            searchList(keyword) {
                this.$refs.orderTable.searchList(keyword);
            },
         }
    }
</script>