<template>
    <div>
        <!-- 使用tailwindcss来实现有四个菜单 -->
        <div class="w-64 bg-gray-800 h-screen">
             <div class="flex items-center justify-center h-16 text-white hover:bg-blue-300" :class="currentRoute==item.path?'bg-blue-400':''" v-for="item in menuList">
                <router-link :to="item.path">
                    <i :class="item.meta.icon" style="margin-right:20px" ></i>
                    <span>{{item.meta.title}}</span>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import routes from '@/router/routes'
console.log(routes,"routes")
export default {
    name:"SideBar",
    data(){
        return {
            menus:routes
        }
    },
    computed:{
        menuList(){
            return this.menus.filter(item=>item.meta&& !item.meta.hidden)
        },
        currentRoute(){
            return "/"+this.$route.path.split('/')[1]
        }
    }
}
</script>