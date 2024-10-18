<script setup>
import { ref } from 'vue';
import InputMail from '@/components/InputMail.vue';
import InputPassword from '@/components/InputPassword.vue';
import CustomDivider from '@/components/CustomDivider.vue';
import ButtonWithLogo from '@/components/ButtonWithLogo.vue';
import {navigate} from '@/function';
import { googleLogin } from '@/auth';

defineProps({
    onClick: {
        type: Function,
        default: () => googleLogin()
    }
})

const email = ref('');
const password = ref('');
</script>

<template>
    <h1 class="title">ログイン</h1>
    <div class="my-form">
        <ButtonWithLogo class="center-block" :on-click="onClick"></ButtonWithLogo>
        <CustomDivider text="または" />
        <InputMail 
            label="メールアドレス"
            placeholder="sample@example.com" 
            v-model:email="email"
        />
        <InputPassword 
            label="パスワード"
            placeholder="半角英数字記号のみ" 
            v-model:password="password"
        /> 
        <v-btn
            color="primary"
            class="my-btn font-weight-bold"
        >
            ログイン
        </v-btn>

        <v-btn variant="text" color="primary" width="100%" @click="navigate('/signup')">
            新規アカウントを作成する
        </v-btn>
    </div>
</template>

<style scoped>
.title {
    color: #1A69C8;
    text-align: center;
    margin-bottom: 20px;
}

.center-block {
    margin: 20px auto;
}

.center-text {
    text-align: center;
}

.my-form {
    width: 80%;
    margin: 0 auto;
    
    @media (min-width: 1024px) {
        width: 50%;
    }
}

.my-btn {
    width: 100%;
    margin: 20px 0;
}
</style>