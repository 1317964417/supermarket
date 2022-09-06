<template>
    <div class="nav-bar">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="middle">
            <slot name="middle"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name:"NavBar"
    }
</script>

<style scoped>
.nav-bar {
    display: flex;
    height: 44px;
    /*使得文字上下居中但是前提是有文字支撑*/
    /* line-height: 44px; */
    /* background-color: pink */
    line-height: 44px;
    text-align: center;
    /* 导航栏阴影效果 */
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.3);
    /* 文字颜色 非公共属性不建议放那里面*/
    /* color: white; */
}



.nav-bar .right {
    width: 60px;
    /* height: 44px; */
    /* background-color: skyblue */
}




.nav-bar .left {
    width: 60px;
    /* height: 44px; */
    /* background-color: skyblue */
}



.middle {
    flex: 1;
    /* background-color: pink; */

}
</style>