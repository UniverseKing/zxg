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
    <!-- 分类 -->
    <section class="category-list">
        <div><img src="//m.360buyimg.com/mobilecms/jfs/t25534/207/1767774998/8085/523157d6/5bbc800fN502129b8.png"> <span>Go超市</span></div>
        <div><img src="//m.360buyimg.com/mobilecms/jfs/t21658/347/221358098/7461/f86e6f74/5b03b170Nc9e0ec7c.png"> <span>全球Go</span></div>
        <div><img src="//m.360buyimg.com/mobilecms/jfs/t1/8385/17/3537/17895/5bd6ca67E09d23550/32d965fe9a9087a2.png"> <span>Go时尚</span></div>
        <div><img src="//m.360buyimg.com/mobilecms/jfs/t17725/156/1767366877/17404/f45d418b/5ad87bf0N66c5db7c.png"> <span>Go生鲜</span></div>
        <div><img src="//m.360buyimg.com/mobilecms/jfs/t16990/157/2001547525/17770/a7b93378/5ae01befN2494769f.png"> <span>Go到家</span></div>
        <div><img src="//m.360buyimg.com/mobilecms/jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png"> <span>充值缴费</span></div>
        <div><img src="//m.360buyimg.com/mobilecms/jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png"> <span>9.9元拼</span></div>
        <div><img src="//m.360buyimg.com/mobilecms/jfs/t25258/200/2527038521/14019/3d7a8470/5be92494N557a0c5b.png"> <span>领劵</span></div>
        <div><img src="//m.360buyimg.com/mobilecms/jfs/t22120/183/200496447/5553/91ed22e0/5b03b7b8Ncea08c5b.png"> <span>省钱</span></div>
        <div><img src="//m.360buyimg.com/mobilecms/jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png"> <span>全部</span></div>
    </section>
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
        height: 400px;
    }
}

.category-list {
    display: flex;
    flex-shrink: 0;
    flex-wrap: wrap;
    width: 100%;
    padding-bottom: 26px;

    div {
        display: flex;
        flex-direction: column;
        width: 20%;
        text-align: center;

        img {
            width: 80px;
            height: 80px;
            margin: 26px auto 16px auto;
        }
    }
}
</style>
