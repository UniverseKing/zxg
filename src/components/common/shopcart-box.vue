<template>
<div class="shopcar-container">
    <van-swipe-cell :on-close="onClose">
        <div class="shopcart-box">
            <van-checkbox v-model="$store.state.cars[currentIndex].ischecked" checked-color="#F63515" v-if="$store.state.cars.length"></van-checkbox>
            <img :src="car.imageHost + car.mainImage">
            <div class="shopcart-item-info">
                <p class="shopcart-name">{{car.name}}</p>
                <p class="shopcart-subtitle">{{car.subtitle}}</p>
                <div class="shopcart-stepper">
                    <span class="shopcart-price">￥{{car.price}}</span>
                    <van-stepper v-model="value" @change='countChange' />
                </div>
            </div>
        </div>
        <template slot="right">
            <van-button square type="danger" text="删除" />
        </template>
    </van-swipe-cell>
</div>
</template>

<script>
import {
    Dialog
} from 'vant';
import {
    delCar
} from '@/http'

export default {
    data() {
        return {
            checked: false,
            value: 1
        }
    },
    created() {
        this.value = this.car.count
    },
    methods: {
        countChange(count){
            this.$store.commit('updateGoodsCount',{
                id:this.car.productId,
                count:count
            })
        },
        onClose(clickPosition, instance) {
            switch (clickPosition) {
                case 'left':
                case 'cell':
                case 'outside':
                    instance.close();
                    break;
                case 'right':
                    Dialog.confirm({
                        message: '确定删除吗？'
                    }).then(() => {
                        const params = {
                            id: this.car.id
                        }
                        delCar(params).then(res => {
                            if (res.status == 0) {
                                this.$emit('refresh', this.car.productId)
                                instance.close();

                            } else {
                                this.$toast(res.msg)
                            }
                        })
                    });
                    break;
            }
        }
    },
    props: {
        car: {
            type: Object
        },
        currentIndex: {
            type: Number,
            default: 0
        }
    }
}
</script>

<style lang="scss" scoped>
@import '@/common/style/mixin.scss';

.shopcar-container {
    .shopcart-box {
        display: flex;
        justify-content: space-around;
        background: #fff;
        padding: 10px;
        margin: 10px 0;
        height: 200px;

        img {
            width: 180px;
            height: 180px;
            margin: 0 10px;
        }

        .shopcart-item-info {
            display: flex;
            flex: 70%;
            flex-direction: column;
            justify-content: space-between;

            .shopcart-name {
                height: 70px;
                font-size: 26px;
                overflow: hidden;
            }

            .shopcart-subtitle {
                font-size: 24px;
                color: #999;
            }

            .shopcart-stepper {
                display: flex;
                justify-content: space-between;
                align-items: center;

                .shopcart-price {
                    font-size: 30px;
                    color: $red;
                }
            }
        }

    }

    .van-button {
        height: 200px;
    }
}
</style>
