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
                <li class="active">手机数码</li>
                <li>电脑办公</li>
                <li>家用电器</li>
                <li>美妆护肤</li>
                <li>男装男鞋</li>
                <li>女装女鞋</li>
                <li>母婴童装</li>
                <li>图书音像</li>
                <li>户外运动</li>
                <li>食品生鲜</li>
                <li>酒水饮料</li>
                <li>家居家装</li>
                <li>箱包手袋</li>
                <li>钟表珠宝</li>
                <li>玩具乐器</li>
            </ul>
        </div>
        <!-- 右侧商品数据 -->
        <div class="content-wrapper" ref="contentwrapper">
            <div class="content-slide"><img src="//img20.360buyimg.com/mcoss/jfs/t16273/143/46476745/45673/cba0840c/5a28ef10N82ab81d3.jpg" class="category-main-img">
                <div class="category-list">
                    <p class="catogory-title">手机通讯</p>
                    <div class="product-item"><img src="//img10.360buyimg.com/focus/s140x140_jfs/t11503/241/2246064496/4783/cea2850e/5a169216N0701c7f1.jpg" class="product-img">
                        <p class="product-title">手机</p>
                    </div>
                    <div class="product-item"><img src="//img30.360buyimg.com/focus/s140x140_jfs/t18955/187/1309277884/11517/fe100782/5ac48d27N3f5bb821.jpg" class="product-img">
                        <p class="product-title">全面屏手机</p>
                    </div>
                    <div class="product-item"><img src="//img11.360buyimg.com/focus/s140x140_jfs/t11470/45/2362968077/2689/fb36d9a0/5a169238Nc8f0882b.jpg" class="product-img">
                        <p class="product-title">游戏手机</p>
                    </div>
                    <div class="product-item"><img src="//img20.360buyimg.com/focus/s140x140_jfs/t12022/66/917351804/2257/7ddc58e5/5a169232Ndf76f53c.jpg" class="product-img">
                        <p class="product-title">拍照手机</p>
                    </div>
                    <div class="product-item"><img src="//img12.360buyimg.com/focus/s140x140_jfs/t11461/339/2354953633/8254/8c8c50d3/5a169217N5d1b842e.jpg" class="product-img">
                        <p class="product-title">老年机</p>
                    </div>
                    <div class="product-item"><img src="//img12.360buyimg.com/focus/s140x140_jfs/t15790/6/2311892256/2742/5ed77924/5a9fa728Nbff29ad2.jpg" class="product-img">
                        <p class="product-title">女性手机</p>
                    </div>
                </div>
                <div class="category-list">
                    <p class="catogory-title">手机配件</p>
                    <div class="product-item"><img src="//img12.360buyimg.com/focus/s140x140_jfs/t18055/312/1342501458/9462/4699ed8a/5ac48672N11cf61fe.jpg" class="product-img">
                        <p class="product-title">数据线</p>
                    </div>
                    <div class="product-item"><img src="//img30.360buyimg.com/focus/s140x140_jfs/t18502/160/1284774717/9251/feb8a496/5ac4878cN658cbb07.jpg" class="product-img">
                        <p class="product-title">手机壳</p>
                    </div>
                    <div class="product-item"><img src="//img30.360buyimg.com/focus/s140x140_jfs/t19537/23/1276961949/9676/f4b5be0d/5ac48791Nb224f939.jpg" class="product-img">
                        <p class="product-title">充电宝</p>
                    </div>
                    <div class="product-item"><img src="//img11.360buyimg.com/focus/s140x140_jfs/t17548/288/1331085893/6458/52545456/5ac486c6N0c8a93dc.jpg" class="product-img">
                        <p class="product-title">手机贴膜</p>
                    </div>
                    <div class="product-item"><img src="//img10.360buyimg.com/focus/s140x140_jfs/t17284/353/1280266808/3696/32c00915/5ac486ccN2d8031c1.jpg" class="product-img">
                        <p class="product-title">耳机</p>
                    </div>
                    <div class="product-item"><img src="//img11.360buyimg.com/focus/s140x140_jfs/t16774/124/1318736793/3884/cb658723/5ac4874fN6bc007b0.jpg" class="product-img">
                        <p class="product-title">充电器</p>
                    </div>
                </div>
                <div class="category-list">
                    <p class="catogory-title">摄影摄像</p>
                    <div class="product-item"><img src="//img14.360buyimg.com/focus/s140x140_jfs/t13765/295/926307178/7966/3228af24/5a1679f2Nc2f659b6.jpg" class="product-img">
                        <p class="product-title">单反相机</p>
                    </div>
                    <div class="product-item"><img src="//img20.360buyimg.com/focus/s140x140_jfs/t12814/251/897168610/8107/60a873f/5a1679caNada7f827.jpg" class="product-img">
                        <p class="product-title">数码相机</p>
                    </div>
                    <div class="product-item"><img src="//img30.360buyimg.com/focus/s140x140_jfs/t12154/164/880046972/2880/86b45b51/5a1679b9N42a5f8e5.jpg" class="product-img">
                        <p class="product-title">镜头</p>
                    </div>
                    <div class="product-item"><img src="//img10.360buyimg.com/focus/s140x140_jfs/t12586/176/939117172/2550/d16b4b6c/5a1679c3N67e2b3f1.jpg" class="product-img">
                        <p class="product-title">户外器材</p>
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
export default {
    mounted() {
        this.setSearchWrapHeight()
        this.$nextTick(() => {
            new BScroll(this.$refs.sidewrapper, {})
            new BScroll(this.$refs.contentwrapper, {})
        });
    },
    methods: {
        setSearchWrapHeight() {
            let $screenHeight = document.documentElement.clientHeight
            this.$refs.categoryWrap.style.height = $screenHeight - 100 + 'px'
        },
        gohome() {
            this.$router.push("/home");
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
