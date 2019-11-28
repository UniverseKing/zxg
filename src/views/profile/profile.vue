<template>
<div class="profile">
    <z-header>账号管理</z-header>
    <section class="profile-content">
        <h3 class="profile-title">当前登录账号</h3>
        <div class="profile-item info">
            <img src="@/assets/user.png">
            <div>
                <span class="username">{{$store.state.userinfo.username}}</span>
                <span class="email">邮箱：{{$store.state.userinfo.email}}</span>
            </div>
        </div>
        <router-link tag="div" to="/" class="profile-item">
            <span>修改登录密码</span>
            <i class="iconfont icon-right"></i>
        </router-link>
        <router-link tag="div" to="/" class="profile-item">
            <span>修改个人信息</span>
            <i class="iconfont icon-right"></i>
        </router-link>
        <router-link tag="div" to="/" class="profile-item">
            <span>收货地址管理</span>
            <i class="iconfont icon-right"></i>
        </router-link>
    </section>
    <section class="profile-footer">
        <div class="footer-con">
            <div>
                <i class="iconfont icon-yijian"></i>
                <span>意见反馈</span>
            </div>
            <div class="client">
                <i>ZXG</i>
                <span>客户端</span>
            </div>
            <div class="logout" @click="userLogout">
                <i class="iconfont icon-40one"></i>
                <span>退出登录</span>
            </div>
        </div>
        <p class="zxg">知心购</p>
    </section>
</div>
</template>

<script>
import {
    logout
} from "@/http/index.js";

import zHeader from '@/components/common/z-header.vue'

export default {
    components: {
        zHeader
    },
    methods: {
        userLogout() {
            logout().then(res => {
                if (res.status == 0) {
                    localStorage.removeItem('zxgToken')
                    localStorage.removeItem('userinfo')
                    this.$store.commit('clearUser')
                    this.$store.commit('clearCars')
                    this.$router.replace('/')
                }
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../common/style/mixin';

.profile {
    .profile-content {
        width: 100%;
        margin-top: 88px;
        
        .profile-title {
            width: 100%;
            padding: 30px;
            @include boxSizing;
            font-weight: normal;
            color: #999;
            border-bottom: 1px solid #f7f7f7;
        }

        .profile-item {
            @extend .profile-title;
            @include fj;
            color: #999;
            font-size: 30px;

            &.info {
                justify-content: left;

                img {
                    width: 100px;
                    height: 100px;
                    @include borderRadius(50%);
                }

                div {
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding-left: 30px;
                    font-size: 30px;
                    color: #666;

                    span:last-child {
                        color: #999;
                    }
                }
            }

            .iconfont {
                font-size: 38px;
            }
        }
    }

    .profile-footer {
        width: 100%;
        margin-top: 200px;

        .footer-con {
            display: flex;
            width: 100%;

            div {
                flex: 1;
                height: 40px;
                text-align: center;
                line-height: 34px;
                font-size: 26px;
                color: #333;

                &.client {
                    line-height: 50px;
                }

                &.logout {
                    line-height: 44px;
                }

                i {
                    font-style: normal;
                    font-size: 30px;
                    color: #999;

                    &.iconfont {
                        font-size: 44px;
                    }
                }
            }
        }

        .zxg {
            width: 100%;
            margin-top: 140px;
            text-align: center;
            font-size: 50px;
            color: $red;
        }
    }
}
</style>
