<template>
    <header class="wrap">
        <i class="iconfont icon-left" @click="goBack"></i>
        <span><slot></slot></span>
    </header>
</template>

<script>
    export default {
        methods: {
            goBack() {
                this.$router.go(-1)
            }
        }
    }
</script>

<style lang="scss" type="text/scss" scoped>
    @import '../../common/style/mixin';

    header {
        position: relative;
        width: 100%;
        height: 88px;
        text-align: center;
        line-height: 88px;
        padding: 0 20px;
        font-size: 34px;
        @include boxSizing;
        border-bottom: 1px solid #f7f7f7;
        .iconfont {
            position: absolute;
            left: 20px;
            top: 0;
            font-size: 50px;
            font-weight: bold;
        }
    }
</style>
