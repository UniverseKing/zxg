<template>
<div class="product-detail">
    <!-- 头部区域 -->
    <header class="detail-nav">
        <i class="iconfont icon-left" @click="goBack"></i>
        <div class="nav-list">
            <span :class="{'active' : navIndex === 0}" data-type="product" @click="scrollToView($event)">
                <i class="iconfont icon-location" v-show="navIndex === 0"></i>商品
            </span>
            <span :class="{'active' : navIndex === 1}" data-type="detail" @click="scrollToView($event)">
                <i class="iconfont icon-location" v-show="navIndex === 1"></i>商品详情
            </span>
            <span :class="{'active' : navIndex === 2}" data-type="recommend" @click="scrollToView($event)">
                <i class="iconfont icon-location" v-show="navIndex === 2"></i>商品推荐
            </span>
        </div>
        <i class="iconfont icon-More"></i>
    </header>
    <!-- 轮播图 -->
    <section class="product-focus">
        <van-swipe :autoplay="3000" indicator-color="white" class="swiper-container">
            <van-swipe-item>
                <img src="http://img.happymmall.com/9cb817d9-9b32-4a05-aea3-18c221451e80.jpg" class="swiper_img" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="http://img.happymmall.com/f22196a7-9211-43dd-8751-297bc0e1b87f.jpg" class="swiper_img" alt="">
            </van-swipe-item>
            <van-swipe-item>
                <img src="http://img.happymmall.com/4a8269ae-28e7-4367-800c-e7f7edaa8e86.jpg" class="swiper_img" alt="">
            </van-swipe-item>
        </van-swipe>
    </section>
    <!-- 商品介绍信息 -->
    <section class="detail-info">
        <p class="detail-info-name">佐娜 简约现代真皮沙发组合欧式沙发客厅整装牛皮沙发一字沙发L型</p>
        <p class="detail-info-subtitle">头层真皮沙发</p>
        <div>
            <span class="detail-info-price">￥9998</span>
            <span class="detail-info-stock">库存5件</span>
        </div>
    </section>
    <!-- 商品详情 -->
    <section class="detail-content" ref="detailContent" id="content">
        <p class="detail-gap"></p>
        <ul>
            <li>概述</li>
            <li>参数</li>
            <li>安装服务</li>
            <li>常见问题</li>
        </ul>
        <div>
            <p><img alt="A973_01.png" src="http://img.happymmall.com/8d83d44f-1765-4e99-9afe-8bea41ac8867.png" width="790" height="796"><img alt="A973_03.png" src="http://img.happymmall.com/985d7567-6162-4b35-a689-045a0564643c.png" width="790" height="757"><img alt="A973_05.png" src="http://img.happymmall.com/cb79ca69-8f52-466b-b94e-55f4109ba31a.png" width="790" height="761"><img alt="A973_13.png" src="http://img.happymmall.com/18ee59df-89cb-4e80-9875-6544108e4587.png" width="790" height="792"><img alt="A973_14.png" src="http://img.happymmall.com/08abd77b-4615-4b93-9465-af748d640a85.png" width="790" height="969"><img alt="A973_15.png" src="http://img.happymmall.com/7e33d43a-a946-4d44-a68d-3050eeb1e9cc.png" width="790" height="716"><br></p>
        </div>
    </section>
</div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id,
            navIndex: 0 //导航索引
        }
    },
    methods: {
        goBack() {
            this.$router.go(-1)
        },
        scrollToView(e) {
            let $type = e.target.getAttribute('data-type')
            console.log($type)
            switch ($type) {
                case 'product':
                    this.navIndex = 0
                    break
                case 'detail':
                    this.navIndex = 1
                    break
                case 'recommend':
                    this.navIndex = 2
                    break
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../common/style/mixin';

.product-detail {
    width: 100%;

    .detail-nav {
        @include fj;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 88px;
        padding: 0 20px;
        line-height: 88px;
        box-sizing: border-box;
        z-index: 1000;
        color: #252525;
        background: #fff;
        border-bottom: 1px solid #dcdcdc;

        i {
            font-size: 50px;
            color: #000;
        }

        div span {
            padding: 0 20px;
            font-size: 28px;

            &.active {
                color: $red;
            }

            .iconfont {
                padding-right: 8px;
                font-size: 28px;
                color: $red;
            }
        }
    }

    .product-focus {
        margin-top: 88px;

        .swiper-container {
            .swiper_img {
                width: 100%;
                height: 700px;
            }
        }
    }

    .detail-info {
        width: 100%;
        padding: 20px 30px;
        font-size: 30px;
        box-sizing: border-box;

        .detail-info-name {
            font-size: 40px;
            color: #333;
        }

        .detail-info-subtitle {
            padding: 10px 0;
            font-size: 28px;
            color: #999;
        }

        div {
            @include fj;
            height: 70px;
            line-height: 80px;
            padding: 10px 0;
            font-size: 32px;
            color: #999;

            .detail-info-price {
                color: $red;
                font-size: 44px;
            }
        }
    }

    .detail-content {
        width: 100%;

        .detail-gap {
            width: 100%;
            height: 20px;
            background: #eee;
        }

        ul {
            @include fj;
            width: 100%;
            margin: 20px 0;

            li {
                flex: 1;
                padding: 10px 0;
                text-align: center;
                font-size: 30px;
                border-right: 1px solid #999;
                box-sizing: border-box;

                &:last-child {
                    border-right: none;
                }
            }
        }

        div {
            width: 100%;
            overflow: hidden;

            p {
                width: 100%;
                font-size: 40px;
                text-align: center;
            }

            img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
