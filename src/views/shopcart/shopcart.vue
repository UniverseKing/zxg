<template>
<div class="shopcart">
    <z-header :sm='true'>购物车</z-header>
    <section class="shopcart-page">
        <div class="shopcart-list">
            <shopcart-box v-for="(item,index) in carList" :key="item.id" :car='item' :currentIndex='index' @refresh='refreshCar'></shopcart-box>
        </div>

        <van-submit-bar :price="this.$store.getters.goodsCP.allPrice" button-text="提交订单" @submit="onSubmit" v-if="carList.length>0">
            <van-checkbox v-model="checked" checked-color="#F63515" @click="change">全选</van-checkbox>
            {{this.$store.getters.isAllChecked}}
        </van-submit-bar>

        <div v-else>
            <div class="shopcart-empty">
                <img src="//img11.360buyimg.com/jdphoto/s180x180_jfs/t18163/292/540553659/74408/adeb7463/5a93c51cN3bb5e37b.png">
                <p>购物车空空如也，去逛逛吧~</p>
            </div>
        </div>

    </section>
    <section class="recommend">
        <div class="recommend-title">
            <van-divider :style="{borderColor:'#ccc',padding:'0 16px'}">可能你还想要</van-divider>
        </div>
        <div class="recommend-list">
            <div class="recommend-item" v-for="(item,index) in recommendList" :key="index" @click="goProduct(item.id)">
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
import {
    mapGetters
} from 'vuex'
export default {
    data() {
        return {
            carList: [],
            recommendList: [],
            checked: false
        }
    },
    created() {
        this.fetchCarList()
        this.fetchRecommend()
    },
    watch:{
        isAllChecked(){
            this.checked = this.isAllChecked
        }
    },
    computed: mapGetters([
        'isAllChecked'
    ]),
    methods: {
        change() {
            console.log(this.checked)
            this.$store.commit('updateGoodsChecked', !this.checked)
        },
        onSubmit() {

        },
        goProduct(id) {
            this.$router.push('/product/' + id)
        },
        refreshCar(id) {
            const index = this.carList.findIndex(v => v.productId == id)
            this.carList.splice(index, 1)

            // store中移出商品
            this.$store.commit('removeGoods', id)
        },
        fetchCarList() {
            getCarList().then(res => {
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

        .van-submit-bar {
            bottom: 100px;
            background-color: #f7f7f7;
        }

        .shopcart-empty {
            width: 100%;
            padding: 60px 0;
            text-align: center;
            background: #F7F7F7;

            p {
                font-size: 30px;
                padding-top: 20px;
                color: rgba(51, 51, 51, .66);
            }
        }
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
