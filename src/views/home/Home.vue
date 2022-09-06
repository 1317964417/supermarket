<template>
    <div>
        <!-- <h2>首页内容</h2> -->
        <NavBar class="home-nav">
            <div slot="middle">购物中心</div>

        </NavBar>
    </div>
</template>

<script>
import NavBar from "../../components/common/navbar/NavBar.vue";
// import NavBar from "../../components/common/navbar/NavBar.vue"
import {getHomeMultidata} from '../../network/home_request.js';
  export default {
    name: "Home",
    components:{
      NavBar,
    // NavBar
    },
    data(){
      return {
        RotationCharts:[],//轮播图变量
        recommends:[]
    }
    },
    //等组件一旦创建完成后马上开始请求数据
    created(){
      //1、请求多个数据
      getHomeMultidata().then(res => {
        this.RotationCharts = res.data.banner.list;
        this.recommends = res.data.recommend.list;
        // console.log(this.RotationCharts);
        // console.log(this.recommends);
      })
    }

}
</script>

<style scoped>
.home-nav {
    background-color: orange;
    color: #fff;
}
</style>
