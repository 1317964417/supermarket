<template>
    <div>
        <TabBar>
            <TabbarItem path="/home" activeColor="pink">
                <img slot="item-icon" src="../../../assets/img/tabbar/home.svg" alt="">
                <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt="">
                <div slot="item-text">首页</div>
            </TabbarItem>
        </TabBar>
    </div>
</template>



<script>
    import TabBar from '../../common/tabbar/tabbar.vue'
    import TabbarItem from '../../common/tabbar/tabbaritem.vue'
    export default {
        name:'MainTabbar',
        components:{
            TabBar,
            TabbarItem
        }
    }
</script>

<style scoped>
</style>