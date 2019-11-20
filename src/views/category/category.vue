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
    <!-- 底部导航区域 -->
    <tabBar></tabBar>
</div>
</template>

<script>
import tabBar from '@/components/tabBar'
export default {
    methods:{
        gohome(){
            this.$router.push('/home')
        }
    },
    components: {
        tabBar
    }
}
</script>

<style lang="scss" scoped>
@import '../../common/style/mixin';

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
        background: #F7F7F7;
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
</style>
