<template>
<div class="shopcart">
    <z-header>购物车</z-header>
    <section class="shopcart-page">
        <div class="shopcart-list">
            <shopcart-box v-for="(item) in carList" :key="item.id" :car='item' @refresh='refreshCar'></shopcart-box>
        </div>
    </section>
    <section class="recommend">
        <div class="recommend-title">
            <van-divider :style="{borderColor:'#ccc',padding:'0 16px'}">可能你还想要</van-divider>
        </div>
        <div class="recommend-list">
            <div class="recommend-item" v-for="(item,index) in recommendList" :key="index">
                <img :src="item.imageHost + item.mainImage">
                <p>{{item.name}}</p> <i>￥ {{item.price}}</i>
            </div>
        </div>
    </section>
    <tabBar></tabBar>
</div>
</template>

<script>
import zHeader from '@/components/common/z-header.vue'
import tabBar from '@/components/tabBar'
import shopcartBox from '@/components/common/shopcart-box.vue'
import {
    getCarList,
    getRecommend
} from '@/http'
export default {
    data() {
        return {
            carList: [],
            recommendList: []
        }
    },
    created() {
        this.fetchCarList()
        this.fetchRecommend()
    },
    methods: {
        refreshCar(id) {
            const index = this.carList.findIndex(v => v.id == id)
            this.carList.splice(index,1)
        },
        fetchCarList() {
            getCarList().then(res => {
                console.log(res)
                this.carList = res
            })
        },
        fetchRecommend() {
            getRecommend().then(res => {
                this.recommendList = res
            })
        }
    },
    components: {
        tabBar,
        zHeader,
        shopcartBox
    }
}
</script>

<style lang="scss" scoped>
@import '@/common/style/mixin.scss';

.shopcart {
    .shopcart-page {
        background: #f7f7f7;
        margin-top: 88px;
    }

    .recommend {
        margin-bottom: 100px;

        .recommend-list {
            display: flex;
            flex-shrink: 0;
            flex-wrap: wrap;

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
}
</style>
