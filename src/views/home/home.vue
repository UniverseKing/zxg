<template>
<div class="home-container">
    <!-- header区域 -->
    <header class="home-header wrap">
        <i class="iconfont icon-caidan"></i>
        <div class="header-search">
            <span class="app-name">G</span>
            <i class="iconfont icon-search"></i>
            <span class="search-title">11.11随心所欲Go</span>
        </div>
        <span>登录</span>
    </header>
    <!-- 轮播图区域 -->
    <van-swipe :autoplay="3000" indicator-color="white" class="swiper-container">
        <van-swipe-item>
            <img src="http://m.360buyimg.com/mobilecms/s1125x690_jfs/t29188/301/133996293/200131/61f42a01/5be8eed6Nda6a18a5.jpg!cr_1125x549_0_72!q70.jpg.dpg" class="swiper_img" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="http://m.360buyimg.com/mobilecms/jfs/t1/3926/29/4138/254748/5b9b646dE45cbeb7f/f80c8f7c24273bc1.jpg!cr_1125x549_0_72" class="swiper_img" alt="">
        </van-swipe-item>
        <van-swipe-item>
            <img src="http://m.360buyimg.com/mobilecms/s1125x690_jfs/t30757/316/208746402/123953/9fa18794/5beb7d13Ne77e9f29.jpg!cr_1125x549_0_72!q70.jpg.dpg" class="swiper_img" alt="">
        </van-swipe-item>
    </van-swipe>
    <!-- 底部导航 -->
    <tabBar></tabBar>
</div>
</template>

<script>
import tabBar from '@/components/tabBar'
export default {
    components: {
        tabBar
    }
}
</script>

<style lang="scss" scoped>
@import '../../common/style/mixin';

.home-header {
    position: fixed;
    left: 0;
    top: 0;
    @include fj;
    width: 100%;
    height: 100px;
    line-height: 100px;
    padding: 0 30px;
    @include boxSizing;
    font-size: 30px;
    color: #fff;
    z-index: 10000;

    &.active {
        background: $red;
    }

    .icon-caidan {
        font-size: 50px;
    }

    .header-search {
        display: flex;
        width: 74%;
        height: 40px;
        line-height: 40px;
        margin: 20px 0;
        padding: 10px 0;
        color: #232326;
        background: #fff;
        @include borderRadius(40px);

        .app-name {
            padding: 0 20px;
            color: $red;
            font-size: 40px;
            font-weight: bold;
            border-right: 1px solid #666;
        }

        .icon-search {
            padding: 0 20px;
            font-size: 34px;
        }

        .search-title {
            font-size: 24px;
            color: #666;
        }
    }

    .icon-iconyonghu {
        font-size: 44px;
    }
}
.swiper-container {
    .swiper_img {
        width: 100%;
    }
}
</style>
