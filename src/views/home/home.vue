<template>
<div class="home-container">
    <!-- header区域 -->
    <header class="home-header wrap" :class="{'active' : headerActive}">
        <router-link to="/category" tag="i" class="iconfont icon-caidan"></router-link>
        <div class="header-search">
            <span class="app-name">G</span>
            <i class="iconfont icon-search"></i>
            <span class="search-title">11.11随心所欲Go</span>
        </div>
        <router-link to="/login" tag="span" v-if="!isLogin">登录</router-link>
        <router-link tag="span" to="./user" v-else>
            <i class="iconfont icon-iconyonghu"></i>
        </router-link>
    </header>
    <!-- 轮播图区域 -->
    <van-swipe :autoplay="3000" indicator-color="white" class="swiper-container">
        <van-swipe-item v-for='(item,index) in sliderList' :key='index'>
            <router-link tag="a" :to="`/product-list?categoryId=${item.categoryId}`">
                <img :src="item.imgUrl" class="swiper_img" alt="">
            </router-link>
        </van-swipe-item>
    </van-swipe>
    <!-- 分类入口 -->
    <section class="category-list">
        <div v-for="(item,index) in categoryList" :key='index'>
            <img :src="item.imgUrl">
            <span>{{item.name}}</span>
        </div>
    </section>
    <!-- 购物楼层 -->
    <section class="floor-list">
        <div class="floor-wrap" v-for="(floor,index) in floorList" :key='index'>
            <img class="floor-head" :src="floor.headUrl">
            <div class="floor-content">
                <div class="floor-category" v-for="(category,index) in floor.list" :key='index'>
                    <p>{{category.title}}</p>
                    <p>{{category.desc}}</p>
                    <div class="floor-products">
                        <img :src="product.imgUrl" v-for="(product,index) in category.products" :key='index'>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- 底部导航 -->
    <tabBar></tabBar>
</div>
</template>

<script>
import tabBar from '@/components/tabBar'
import {
    getsliders,
    getCategories,
    getFloors,
    getUserInfo
} from '@/http/index.js'
export default {
    data() {
        return {
            sliderList: [],
            categoryList: [],
            floorList: [],
            headerActive: false,
            isLogin: false
        }
    },
    beforeCreate() {
        getUserInfo().then(res => {
            res.status == 0 ? this.isLogin = true : this.isLogin = false
        })
    },
    created() {
        this.fetchSliders()
        this.fetchCategories()
        this.fetchFloors()
    },
    mounted() {
        window.addEventListener('scroll', this.pageScroll)
    },
    methods: {
        fetchSliders() {
            getsliders().then(res => {
                this.sliderList = res
            })
        },
        fetchCategories() {
            getCategories().then(res => {
                this.categoryList = res
            })
        },
        fetchFloors() {
            getFloors().then(res => {
                this.floorList = res
            })
        },
        pageScroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
            scrollTop > 100 ? this.headerActive = true : this.headerActive = false
        }
    },
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

.floor-list {
    width: 100%;
    padding-bottom: 100px;

    .floor-head {
        width: 100%;
        height: 80px;
        background: #F6F6F6;
    }

    .floor-content {
        display: flex;
        flex-shrink: 0;
        flex-wrap: wrap;
        width: 100%;
        @include boxSizing;

        .floor-category {
            width: 50%;
            padding: 20px;
            border-right: 1px solid #dcdcdc;
            border-bottom: 1px solid #dcdcdc;
            @include boxSizing;

            &:nth-child(2n) {
                border-right: none;
            }

            p {
                font-size: 34px;
                color: #333;

                &:nth-child(2) {
                    padding: 10px 0;
                    font-size: 26px;
                    color: $red;
                }
            }

            .floor-products {
                display: flex;
                justify-content: space-around;
                width: 100%;

                img {
                    width: 130px;
                    height: 130px;
                }
            }
        }
    }
}
</style>
