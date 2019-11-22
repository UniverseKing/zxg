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
        <div class="product-container">
            <van-card v-for='(item,index) in productList' :key='index' :num="item.stock" :price="item.price" :desc="item.subtitle" :title="item.name" :thumb="item.imageHost+item.mainImage" :origin-price="item.originalPrice" @click="goDetail(item.id)" />
        </div>
    </section>
</div>
</template>

<script>
import {
    getProcuctList
} from '@/http/index.js'
export default {
    data() {
        return {
            categoryId: this.$route.query.categoryId,
            orderBy: 'default',
            pageNum: 1,
            pageSize: 20,
            productList: []
        }
    },
    created() {
        this.fetchProductlist()
    },
    methods: {
        fetchProductlist() {
            const params = {
                categoryId: this.categoryId,
                orderBy: this.orderBy,
                pageNum: this.pageNum,
                pageSize: this.pageSize
            }
            getProcuctList(params).then(res => {
                // console.log(res)
                this.productList = res.list
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
            this.fetchProductlist()
        },
        goDetail(id) {
            this.$router.push('/product/' + id)
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
