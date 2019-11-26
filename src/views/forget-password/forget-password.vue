<template>
<div>
    <!-- 导航区域 -->
    <z-header>找回密码</z-header>
    <section class="page">
        <div class="forget-content slide-username" v-show="usernameShow">
            <input type="text" placeholder="请输入用户名" v-model="username" />
            <button @click="usernameNext" :class="{'active' : removeSpace(username)}">下 一 步</button>
        </div>
        <div class="forget-content slide-question" v-show="answerShow">
            <p>密码提示问题是：<span>{{questionText}}</span>
            </p>
            <div>
                <span>请输入答案:</span>
                <input type="text" placeholder="请输入密码提示问题答案" v-model="answer" />
            </div>
            <button @click="answerNext" :class="{'active' : removeSpace(answer)}">下 一 步</button>
        </div>
        <div class="forget-content slide-password" v-show="passwordShow">
            <div>
                <input type="password" placeholder="请重置密码" v-model="password" />
            </div>
            <button @click="passwordSubmit" :class="{'active' : removeSpace(password)}">提 交</button>
        </div>
    </section>
</div>
</template>

<script>
import zHeader from '@/components/common/z-header.vue'
import {
    removeSpace,
    formValidate
} from "@/common/js/util";

export default {
    data() {
        return {
            username: '',
            answer: '',
            password: '',
            questionText: '',
            forgetToken: '',
            usernameShow: true,
            answerShow: false,
            passwordShow: false
        }
    },
    methods: {
        usernameNext() {
            if (!formValidate(this.username, 'require')) {
                return
            }
            this.usernameShow = false
            this.answerShow = true
        },
        answerNext() {
            if (!formValidate(this.answer, 'require')) {
                return
            }
            this.usernameShow = false
            this.answerShow = false
            this.passwordShow = true
        },
        passwordSubmit() {
            if (!formValidate(this.password, 'require')) {
                return
            }
        },
        removeSpace(value) {
            return removeSpace(value)
        }
    },
    components: {
        zHeader
    }
}
</script>

<style lang="scss" scoped>
@import '../../common/style/mixin';

.page {
    padding: 0 50px;
    width: 100%;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;

    .forget-content {
        width: 100%;
        margin-top: 188px;

        &.slide-question {
            div {
                display: flex;
                flex-direction: column;

                span {
                    padding: 10px 0 20px 0;
                    font-size: 30px;
                }
            }
        }

        p {
            padding-bottom: 20px;
            color: #000;
            font-size: 34px;
        }

        input {
            width: 100%;
            height: 60px;
            padding: 10px 0;
            margin-right: 20px;
            line-height: 60px;
            color: #222;
            font-size: 32px;
            text-indent: 20px;
            border: 1px solid #dcdcdc;
        }

        button {
            width: 100%;
            height: 80px;
            margin-top: 80px;
            text-align: center;
            line-height: 80px;
            color: #fff;
            font-size: 32px;
            background: rgba(246, 53, 21, .5);
            @include borderRadius(60px);

            &.active {
                background: rgb(246, 53, 21)
            }
        }
    }
}
</style>
