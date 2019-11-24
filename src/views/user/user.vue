<template>
<div class="user-box">
    <!-- header区域 -->
    <z-header>我的知心购</z-header>
    <!-- 页面核心区域 -->
    <section class="user-page">
        <!-- 用户信息 -->
        <div class="user-info">
            <div class="info">
                <img src="@/assets/user.png" />
                <div>
                    <p>zxx</p>
                    <span class="name">用户名：zxx</span>
                    <span>13312345678</span>
                </div>
                <a href="#" class="account-management">
                    <i class="iconfont icon-shezhi"></i>账号管理
                </a>
            </div>
        </div>
        <!-- 订单 -->
        <div class="user-menu">
            <div class="menu-item">
                <i class="iconfont icon-daifukuan1"></i>
                <span>待付款</span>
            </div>
            <div class="menu-item">
                <i class="iconfont icon-daishouhuo1"></i>
                <span>待收货</span>
            </div>
            <div class="menu-item">
                <i class="iconfont icon-money"></i>
                <span>已完成</span>
            </div>
            <div class="menu-item">
                <i class="iconfont icon-icon1"></i>
                <span>全部订单</span>
            </div>
        </div>
        <div>
            <div class="user-fork">
                <div class="fork-item">
                    <i>20</i>
                    <span>关注的商品</span>
                </div>
                <div class="fork-item">
                    <i>5</i>
                    <span>关注的店铺</span>
                </div>
                <div class="fork-item">
                    <i>10</i>
                    <span>我的足迹</span>
                </div>
            </div>
            <p class="recommend-title">为你推荐</p>
            <div class="recommend-list">
                <div class="recommend-item" v-for="(item,index) in recommendList" :key='index'>
                    <img :src="item.imageHost + item.mainImage">
                    <p>{{item.subtitle}}</p> <i>￥ {{item.price}}</i>
                </div>
            </div>
        </div>
    </section>
    <!-- tabbar区域 -->
    <tabBar></tabBar>
</div>
</template>

<script>
import tabBar from '@/components/tabBar'
import zHeader from '@/components/common/z-header.vue'
import {
    getRecommend
} from '@/http/index.js'
export default {
    data() {
        return {
            recommendList: []
        }
    },
    created(){
        this.fecthRecommend()
    },
    methods: {
        fecthRecommend() {
            getRecommend().then(res => {
                this.recommendList = res
            })
        }
    },
    components: {
        tabBar,
        zHeader
    }
}
</script>

<style lang="scss" scoped>
@import '../../common/style/mixin';

.user-box {
    background: #F7F7F7;

    .user-info {
        width: 94%;
        margin: 20px 3%;
        height: 230px;
        background: linear-gradient(90deg, #eb3c3c, #ff7459);
        box-shadow: 0 2px 5px rgba(255, 98, 98, .4);
        @include borderRadius(12px);

        .info {
            position: relative;
            display: flex;
            width: 100%;
            height: 100%;
            padding: 50px 30px;
            @include boxSizing;

            img {
                width: 120px;
                height: 120px;
            }

            div {
                display: flex;
                flex-direction: column;
                margin-left: 20px;
                line-height: 40px;
                font-size: 28px;
                color: #fff;

                .name {
                    color: hsla(0, 0%, 100%, .7);
                    font-size: 26px;
                    padding: 5px 0;
                }

                span {
                    &:nth-child(1) {
                        color: #999;
                        font-size: 26px;
                    }
                }
            }

            .account-management {
                position: absolute;
                top: 20px;
                right: 40px;
                font-size: 26px;
                color: rgba(76, 0, 0, .7);

                .iconfont {
                    padding-right: 10px;
                    font-size: 28px;
                    color: rgba(76, 0, 0, .7);
                }
            }
        }
    }

    .user-menu {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 150px;
        background: #fff;

        .menu-item {
            display: flex;
            flex-direction: column;
            flex: 1;
            height: 100px;
            text-align: center;
            margin: 25px 0;

            .iconfont {
                font-size: 50px;
                color: #DD9E58;

                &.icon-money {
                    font-size: 44px;
                    padding-top: 6px;
                }

                &.icon-icon1 {
                    @extend .icon-money;
                    color: $red;
                }
            }

            span {
                padding-top: 10px;
                font-size: 24px;
                color: #000;
            }
        }
    }

    .user-fork {
        margin: 30px 0;
        @extend .user-menu;

        .fork-item {
            display: flex;
            flex-direction: column;
            flex: 1;
            height: 100px;
            margin: 30px 0;
            text-align: center;

            i {
                font-style: normal;
                font-weight: bold;
                padding: 10px 0;
                font-size: 28px;
            }
        }
    }

    .recommend-title {
        width: 100%;
        height: 90px;
        padding-left: 20px;
        line-height: 90px;
        background: #fff;
        @include boxSizing;
    }

    .recommend-list {
        display: flex;
        flex-shrink: 0;
        flex-wrap: wrap;
        width: 100%;
        margin-top: 30px;
        padding-bottom: 150px;
        @include boxSizing;
        background: #fff;

        .recommend-item {
            display: flex;
            flex-direction: column;
            width: 50%;
            padding: 20px;
            @include boxSizing;
            border-bottom: 1px solid #dcdcdc;

            &:nth-child(2n-1) {
                border-right: 1px solid #dcdcdc;
            }

            img {
                width: 100%;
                height: 290px;
                margin: 0 auto;
            }

            p {
                height: 60px;
                padding: 20px 0;
                font-size: 26px;
                line-height: 40px;
                color: #333;
                overflow: hidden;
            }

            i {
                font-style: normal;
                font-size: 32px;
                color: $red;
            }
        }
    }
}
</style>
