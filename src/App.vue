<template>
    <div>
        <router-view></router-view>
        <MainTabbar></MainTabbar>
    </div>
</template>

<script>
import  MainTabbar from './components/content/maintabbar/maintabbar.vue'
// import TabBar from './components/common/tabbar/tabbar.vue';
export default {
  name: 'App',
  components: {
    MainTabbar
  }
}
</script>

<style>
@import "./assets/css/base.css";
</style>
