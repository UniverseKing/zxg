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
            <van-swipe-item v-for="(item,index) in sliderImageList" :key='index'>
                <img :src="item.imgUrl" class="swiper_img" alt="">
            </van-swipe-item>
        </van-swipe>
    </section>
    <!-- 商品介绍信息 -->
    <section class="detail-info">
        <p class="detail-info-name">{{productDetail.name}}</p>
        <p class="detail-info-subtitle">{{productDetail.subtitle}}</p>
        <div>
            <span class="detail-info-price">￥{{productDetail.price}}</span>
            <span class="detail-info-stock">库存{{productDetail.stock}}件</span>
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
        <div v-html="productDetail.detail"></div>
    </section>
</div>
</template>

<script>
import {
    getProcuctDetail
} from '@/http/index.js'
export default {
    data() {
        return {
            id: this.$route.params.id,
            navIndex: 0, //导航索引
            productDetail: {},
            sliderImageList: []
        }
    },
    created() {
        this.fetchProductDetail()
    },
    methods: {
        fetchProductDetail() {
            const params = {
                id: this.id
            }
            getProcuctDetail(params).then(res => {
                this.productDetail = res
                let subImages = res.subImages.split(',')
                let imageHost = res.imageHost
                subImages.forEach((item) => {
                    this.sliderImageList.push({
                        imgUrl: imageHost + item
                    })
                })
            })
        },
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

            /deep/p {
                width: 100%;
                font-size: 40px;
                text-align: center;
            }

            /deep/img {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>
