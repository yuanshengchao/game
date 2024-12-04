<template>
  <div>
    <Head></Head>
    <div class="w-100 flex">
        <sidebar></sidebar>
        <div class="flex-1">
            <router-view></router-view>
        </div>
    </div>
  </div>
</template>

<script>
import Head from './components/Head.vue'
import Sidebar from './components/Sidebar.vue'
  export default {
    components: {
      Head,
      Sidebar
    }
  }
</script>
