<template>
<div class="product-detail">
    <!-- 头部区域 -->
    <header class="detail-nav">
        <i class="iconfont icon-left"></i>
        <div class="nav-list">
            <span class="active">
                <i class="iconfont icon-location"></i>商品
            </span>
            <span>
                <i class="iconfont icon-location"></i>商品详情
            </span>
            <span>
                <i class="iconfont icon-location"></i>商品推荐
            </span>
        </div>
        <i class="iconfont icon-More"></i>
    </header>
</div>
</template>

<script>
export default {
    data() {
        return {
            id: this.$route.params.id
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
}
</style>
