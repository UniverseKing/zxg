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
            <van-swipe-item v-for="(item,index) in sliderImageList" :key="index">
                <img :src="item.imgUrl" class="swiper_img" alt />
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
    <!-- 商品导航  -->
    <van-goods-action>
        <van-goods-action-icon icon="chat-o" text="客服" />
        <van-goods-action-icon icon="cart-o" text="购物车" info="5" />
        <van-goods-action-button type="warning" text="加入购物车" @click.native="addToCar" />
        <van-goods-action-button type="danger" text="立即购买" />
    </van-goods-action>
    <!-- SKU 商品规格 -->
    <van-sku v-model="show" :sku="sku" :goods="goods" @buy-clicked="onBuyClicked" @add-cart="onAddCartClicked" />
</div>
</template>

<script>
import {
    getProcuctDetail
} from "@/http/index.js";
export default {
    data() {
        return {
            id: this.$route.params.id,
            navIndex: 0, //导航索引
            productDetail: {},
            sliderImageList: [],
            show: false,
            sku: {
                tree: [{
                    k: "颜色", // skuKeyName：规格类目名称
                    v: [{
                            id: "001", // skuValueId：规格值 id
                            name: "红色", // skuValueName：规格值名称
                            imgUrl: "http://img.happymmall.com/570186f3-c0d2-4336-a1b7-3e1aff88f73a.jpg", // 规格类目图片，只有第一个规格类目可以定义图片
                            previewImgUrl: "http://img.happymmall.com/570186f3-c0d2-4336-a1b7-3e1aff88f73a.jpg" // 用于预览显示的规格类目图片
                        },
                        {
                            id: "002",
                            name: "蓝色",
                            imgUrl: "http://img.happymmall.com/a73b6326-1204-4937-aa88-097c9eda8a2a.jpg",
                            previewImgUrl: "http://img.happymmall.com/a73b6326-1204-4937-aa88-097c9eda8a2a.jpg"
                        }
                    ],
                    k_s: "s1" // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
                }],
                list: [{
                        id: 2259, // skuId，下单时后端需要
                        price: 100, // 价格（单位分）
                        s1: "001", // 规格类目 k_s 为 s1 的对应规格值 id
                        stock_num: 50 // 当前 sku 组合对应的库存
                    },
                    {
                        id: 2259, // skuId，下单时后端需要
                        price: 100, // 价格（单位分）
                        s1: "002", // 规格类目 k_s 为 s1 的对应规格值 id
                        stock_num: 50 // 当前 sku 组合对应的库存
                    }
                ],
                price: "100", // 默认价格（单位元）
                stock_num: 100, // 商品总库存
                collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
                none_sku: false // 是否无规格商品
            },
            goods: {
                // 商品标题
                title: "测试商品",
                // 默认商品 sku 缩略图
                picture: "http://img.happymmall.com/570186f3-c0d2-4336-a1b7-3e1aff88f73a.jpg"
            }
        };
    },
    created() {
        this.fetchProductDetail();
    },
    methods: {
        onBuyClicked() {
            console.log("onBuyClicked");
        },
        onAddCartClicked() {
            console.log("onAddCartClicked");
        },
        addToCar() {
            this.show = true;
        },
        fetchProductDetail() {
            const params = {
                id: this.id
            };
            getProcuctDetail(params).then(res => {
                this.productDetail = res;
                let subImages = res.subImages.split(",");
                let imageHost = res.imageHost;
                subImages.forEach(item => {
                    this.sliderImageList.push({
                        imgUrl: imageHost + item
                    });
                });
            });
        },
        goBack() {
            this.$router.go(-1);
        },
        scrollToView(e) {
            let $type = e.target.getAttribute("data-type");
            console.log($type);
            switch ($type) {
                case "product":
                    this.navIndex = 0;
                    window.scroll(0, 0);
                    break;
                case "detail":
                    this.navIndex = 1;
                    window.scroll(0, document.querySelector("#content").offsetTop);
                    break;
                case "recommend":
                    this.navIndex = 2;
                    break;
            }
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../common/style/mixin";

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
