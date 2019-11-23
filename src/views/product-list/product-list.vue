<template>
<div class="product-list-wrap">
    <!-- 头部区域 -->
    <div class="product-list-header">
        <!-- 头部搜索 -->
        <header class="category-header wrap">
            <i class="iconfont icon-left" @click="goBack"></i>
            <div class="header-search">
                <i class="iconfont icon-search"></i>
                <input type="text" class="search-title" />
            </div>
            <i class="iconfont icon-More"></i>
        </header>
        <!-- 排序 -->
        <section class="select-menu">
            <div class="select-item" :class="{'active' : orderBy === 'default'}" data-orderBy="default" @click="selectOrder($event)">
                默认排序
            </div>
            <div class="select-item" :class="{'active' : orderBy === 'price_asc'}" data-orderBy="price_asc" @click="selectOrder($event)">
                升序<i class="iconfont icon-up1" :class="{'active' : orderBy === 'price_asc'}"></i>
            </div>
            <div class="select-item" :class="{'active' : orderBy === 'price_desc'}" data-orderBy="price_desc" @click="selectOrder($event)">
                降序<i class="iconfont icon-down1" :class="{'active' : orderBy === 'price_desc'}"></i>
            </div>
            <div class="select-item">
                筛选<i class="iconfont icon-shaixuan"></i>
            </div>
        </section>
    </div>

    <!-- 商品列表 -->
    <section class="product-list">
        <div class="product-container" ref="scroller">
            <scroller :on-refresh="refresh" :on-infinite="infinite" refresh-layer-color="#ec4949" loading-layer-color="#ec4949" ref="myScroller">
                <!-- custom refresh spinner, use default `spinner` & viewBox 0,0,64,64 class -->
                <svg class="spinner" style="stroke: #ec4949;" slot="refresh-spinner" viewBox="0 0 64 64">
                    <g stroke-width="7" stroke-linecap="round">
                        <line x1="10" x2="10" y1="27.3836" y2="36.4931">
                            <animate attributeName="y1" dur="750ms" values="16;18;28;18;16;16" repeatCount="indefinite"></animate>
                            <animate attributeName="y2" dur="750ms" values="48;46;36;44;48;48" repeatCount="indefinite"></animate>
                            <animate attributeName="stroke-opacity" dur="750ms" values="1;.4;.5;.8;1;1" repeatCount="indefinite"></animate>
                        </line>
                        <line x1="24" x2="24" y1="18.6164" y2="45.3836">
                            <animate attributeName="y1" dur="750ms" values="16;16;18;28;18;16" repeatCount="indefinite"></animate>
                            <animate attributeName="y2" dur="750ms" values="48;48;46;36;44;48" repeatCount="indefinite"></animate>
                            <animate attributeName="stroke-opacity" dur="750ms" values="1;1;.4;.5;.8;1" repeatCount="indefinite"></animate>
                        </line>
                        <line x1="38" x2="38" y1="16.1233" y2="47.8767">
                            <animate attributeName="y1" dur="750ms" values="18;16;16;18;28;18" repeatCount="indefinite"></animate>
                            <animate attributeName="y2" dur="750ms" values="44;48;48;46;36;44" repeatCount="indefinite"></animate>
                            <animate attributeName="stroke-opacity" dur="750ms" values=".8;1;1;.4;.5;.8" repeatCount="indefinite"></animate>
                        </line>
                        <line x1="52" x2="52" y1="16" y2="48">
                            <animate attributeName="y1" dur="750ms" values="28;18;16;16;18;28" repeatCount="indefinite"></animate>
                            <animate attributeName="y2" dur="750ms" values="36;44;48;48;46;36" repeatCount="indefinite"></animate>
                            <animate attributeName="stroke-opacity" dur="750ms" values=".5;.8;1;1;.4;.5" repeatCount="indefinite"></animate>
                        </line>
                    </g>
                </svg>

                <van-card v-for="(item,index) in productList" :key="index" :num="item.stock" :price="item.price" :desc="item.subtitle" :title="item.name" :thumb="item.imageHost + item.mainImage" :origin-price="item.originalPrice" />

                <!-- custom infinite spinner -->
                <svg class="spinner" style="fill: #ec4949;" slot="infinite-spinner" viewBox="0 0 64 64">
                    <g>
                        <circle cx="16" cy="32" stroke-width="0" r="3">
                            <animate attributeName="fill-opacity" dur="750ms" values=".5;.6;.8;1;.8;.6;.5;.5" repeatCount="indefinite"></animate>
                            <animate attributeName="r" dur="750ms" values="3;3;4;5;6;5;4;3" repeatCount="indefinite"></animate>
                        </circle>
                        <circle cx="32" cy="32" stroke-width="0" r="3.09351">
                            <animate attributeName="fill-opacity" dur="750ms" values=".5;.5;.6;.8;1;.8;.6;.5" repeatCount="indefinite"></animate>
                            <animate attributeName="r" dur="750ms" values="4;3;3;4;5;6;5;4" repeatCount="indefinite"></animate>
                        </circle>
                        <circle cx="48" cy="32" stroke-width="0" r="4.09351">
                            <animate attributeName="fill-opacity" dur="750ms" values=".6;.5;.5;.6;.8;1;.8;.6" repeatCount="indefinite"></animate>
                            <animate attributeName="r" dur="750ms" values="5;4;3;3;4;5;6;5" repeatCount="indefinite"></animate>
                        </circle>
                    </g>
                </svg>
            </scroller>
        </div>
    </section>
</div>
</template>

<script>
import {
    getProcuctList
} from '@/http/index.js'
import Vue from 'vue'
import VueScroller from 'vue-scroller';
Vue.use(VueScroller)
export default {
    data() {
        return {
            categoryId: this.$route.query.categoryId,
            orderBy: 'default',
            pageNum: 0,
            pageSize: 5,
            productList: []
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.getHeight()
        })
    },
    methods: {
        refresh(done) {
            console.log('下拉')
            this.pageNum = 1
            setTimeout(() => {
                this.fetchProductList(done)
            }, 1500)
        },
        infinite(done) {
            console.log('上拉')
            this.pageNum++
            console.log(this)
            setTimeout(() => {
                console.log(this)
                this.fetchProductList(done)
            }, 1500)
        },
        fetchProductList(done) {
            const params = {
                categoryId: this.categoryId,
                orderBy: this.orderBy,
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }
            getProcuctList(params).then(res => {
                if (this.pageNum == 1) {
                    this.productList = res.list
                    done()
                } else {
                    this.productList = this.productList.concat(res.list)
                    if (res.list.length == 0) {
                        done(true)
                    } else {
                        done()
                    }
                }
            })
        },
        goBack() {
            this.$router.go(-1)
        },
        selectOrder(e) {
            let orderBy = e.currentTarget.getAttribute('data-orderBy')
            if (orderBy === this.orderBy) {
                return
            }
            this.orderBy = orderBy
            this.$refs.myScroller.triggerPullToRefresh()
        },
        goDetail(id) {
            this.$router.push('/product/' + id)
        },
        getHeight() {
            let bodyHeight = document.documentElement.clientHeight;
            let scroller = this.$refs.scroller;
            let scrollerTop = scroller.getBoundingClientRect().top;
            scroller.style.height = (bodyHeight - scrollerTop) + "px";
        }
    }
};
</script>

<style lang="scss" scoped>
@import "../../common/style/mixin";

.product-list-wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: 0 auto;
    -webkit-overflow-scrolling: touch;

    .product-list-header {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 1000;
        background: #fff;

        .category-header {
            @include fj;
            width: 100%;
            height: 100px;
            line-height: 100px;
            padding: 0 30px;
            @include boxSizing;
            font-size: 30px;
            color: #656771;
            z-index: 10000;

            &.active {
                background: $red;
            }

            .icon-left {
                font-size: 50px;
                font-weight: bold;
            }

            .header-search {
                display: flex;
                width: 76%;
                height: 40px;
                line-height: 40px;
                margin: 20px 0;
                padding: 10px 0;
                color: #232326;
                background: #f7f7f7;
                @include borderRadius(40px);

                .icon-search {
                    padding: 0 10px 0 40px;
                    font-size: 34px;
                }

                .search-title {
                    font-size: 24px;
                    color: #666;
                    background: #f7f7f7;
                }
            }

            .icon-More {
                font-size: 40px;
            }

            .search-btn {
                height: 70px;
                margin: 15px 0;
                line-height: 70px;
                padding: 0 10px;
                color: #fff;
                background: $red;
                @include borderRadius(10px);
            }
        }

        .select-menu {
            display: flex;
            justify-content: space-around;
            width: 100%;
            height: 100px;
            background: #fff;

            .select-item {
                flex: 1;
                height: 100%;
                text-align: center;
                line-height: 100px;
                font-size: 30px;
                border-top: 1px solid #dcdcdc;
                border-bottom: 1px solid #dcdcdc;

                &.active {
                    color: $red;
                }

                .iconfont {
                    &.icon-down1 {
                        color: #999;
                        padding-left: 10px;
                        font-size: 22px;
                    }

                    &.icon-up1 {
                        @extend .icon-down1;
                        font-size: 34px;
                    }

                    &.icon-shaixuan {
                        @extend .icon-down1;
                        font-size: 28px;
                    }

                    &.active {
                        color: $red;
                    }
                }
            }
        }
    }

    .product-list {
        width: 100%;

        .product-container {
            position: absolute;
            left: 0;
            top: 220px;
            width: 100%;
            overflow-y: scroll;
            height: auto;
        }
    }
}
</style>
