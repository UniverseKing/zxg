<template>
<div>
    <van-tabbar v-model="active" active-color="#F63515" inactive-color="#000">
        <van-tabbar-item replace to='/home' icon="wap-home-o">首页</van-tabbar-item>
        <van-tabbar-item replace to='/category' icon="search">分类</van-tabbar-item>
        <van-tabbar-item replace to='/shopcart' icon="shopping-cart-o">购物车</van-tabbar-item>
        <van-tabbar-item replace to='/user' icon="user-o">我的</van-tabbar-item>
    </van-tabbar>
</div>
</template>

<script>
export default {
    data() {
        return {
            active: 0
        }
    }
}
</script>

<style scoped>

</style>
