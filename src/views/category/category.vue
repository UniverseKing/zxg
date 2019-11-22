<template>
<div>
    <!-- header区域 -->
    <header class="category-header wrap">
        <i class="iconfont icon-left" @click="gohome"></i>
        <div class="header-search">
            <i class="iconfont icon-search"></i>
            <span class="search-title" to="./search">11.11随心所欲Go</span>
        </div>
        <i class="iconfont icon-More"></i>
    </header>

    <!-- 内容区域 -->
    <section class="category-wrap" ref="categoryWrap">
        <!-- 左侧分类导航 -->
        <div class="nav-side-wrapper" ref="sidewrapper">
            <ul class="nav-side">
                <li v-for="(item,index) in categoryData" :key="index" @click="selectMenu(index)" :class="{'active' : currentIndex === index}">{{item.name}}</li>
            </ul>
        </div>
        <!-- 右侧商品数据 -->
        <div class="content-wrapper" ref="contentwrapper">
            <div class="content-slide" v-for="(item,index) in categoryList" :key="index">
                <img :src="item.mainImgUrl" class="category-main-img" />
                <div class="category-list" v-for="(category,index) in item.list" :key="index">
                    <p class="catogory-title">{{category.title}}</p>
                    <div class="product-item" v-for="(product,index) in category.productList" :key="index">
                        <img :src="product.imgUrl" class="product-img">
                        <p class="product-title">{{product.title}}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 底部导航区域 -->
    <tabBar></tabBar>
</div>
</template>

<script>
import tabBar from "@/components/tabBar";
import BScroll from "better-scroll";
import {
    getcategoryData
} from '@/http/index.js'
export default {
    data() {
        return {
            categoryData: [],
            currentIndex: 0
        }
    },
    created() {
        this.fetchCategory()
    },
    mounted() {
        this.setSearchWrapHeight()
    },
    methods: {
        fetchCategory() {
            getcategoryData().then(res => {
                this.categoryData = res
                this.$nextTick(() => {
                    new BScroll(this.$refs.sidewrapper, {})
                    new BScroll(this.$refs.contentwrapper, {})
                });
            })
        },
        setSearchWrapHeight() {
            let $screenHeight = document.documentElement.clientHeight
            this.$refs.categoryWrap.style.height = $screenHeight - 100 + 'px'
        },
        gohome() {
            this.$router.push("/home");
        },
        selectMenu(index) {
            this.currentIndex = index
        }
    },
    computed: {
        categoryList() {
            return this.categoryData.filter((v, i) => this.currentIndex == i)
        }
    },
    components: {
        tabBar
    }
}
</script>

<style lang="scss" scoped>
@import "../../common/style/mixin";

.category-header {
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
        width: 80%;
        height: 40px;
        line-height: 40px;
        margin: 20px 0;
        padding: 10px 0;
        color: #232326;
        background: #f7f7f7;
        @include borderRadius(40px);

        .icon-search {
            padding: 0 20px 0 40px;
            font-size: 34px;
        }

        .search-title {
            font-size: 24px;
            color: #666;
        }
    }

    .icon-More {
        font-size: 40px;
    }
}

.category-wrap {
    @include fj;
    width: 100%;
    margin-top: 100px;
    background: #f8f8f8;
    border-top: 1px solid #999;

    .nav-side-wrapper {
        width: 28%;
        height: 100%;
        overflow: hidden;

        .nav-side {
            width: 100%;
            @include boxSizing;
            background: #f8f8f8;

            li {
                width: 100%;
                height: 92px;
                text-align: center;
                line-height: 92px;
                font-size: 28px;

                &.active {
                    color: $red;
                    background: #fff;
                }
            }
        }
    }

    .content-wrapper {
        width: 72%;
        height: 100%;
        overflow: hidden;

        .content-slide {
            width: 100%;
            padding: 0 20px;
            background: #fff;
            @include boxSizing;

            .category-main-img {
                width: 100%;
            }

            .category-list {
                display: flex;
                flex-wrap: wrap;
                flex-shrink: 0;
                width: 100%;

                .catogory-title {
                    width: 100%;
                    font-size: 34px;
                    font-weight: 500;
                    padding: 40px 0;
                }

                .product-item {
                    width: 33.3333%;
                    margin-bottom: 20px;
                    text-align: center;
                    font-size: 30px;

                    img {
                        width: 100%;
                    }
                }
            }
        }
    }
}
</style>
