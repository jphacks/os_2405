<script setup>
import { ref, computed } from 'vue';
import InputMail from '@/components/InputMail.vue';
import InputPassword from '@/components/InputPassword.vue';
import CustomDivider from '@/components/CustomDivider.vue';
import ButtonWithLogo from '@/components/ButtonWithLogo.vue';
import {navigate} from '@/function';
import { emailAuth } from '@/auth';
import MessageBox from '@/components/MessageBox.vue';
import { googleLogin } from '@/auth';

const password = ref('');
const passwordConfirmation = ref('');
const email = ref('');
const systemMessage = ref('');
const isError = ref(false);

const submitForm = async () => {
    systemMessage.value = '';
    if (password.value !== passwordConfirmation.value) {
        systemMessage.value = 'パスワードが一致しません';
        isError.value = true;
        return;
    }
    try {
        await emailAuth(email.value, password.value);
    }catch (error) {
        systemMessage.value = error.message;
    }
};

const isShow = computed(() => systemMessage.value !== '');
</script>

<template>
    <h1 class="title">新規登録</h1>
    <div class="my-form">
        <ButtonWithLogo class="center-block" button-text="Googleで登録" :on-click="googleLogin"></ButtonWithLogo>
        <CustomDivider text="または" />
        <MessageBox :message="systemMessage" v-show="isShow" :is-error="isError" class="my-5"/>
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
        <InputPassword 
            label="パスワード（再入力）"
            placeholder="半角英数字記号のみ"
            v-model:password="passwordConfirmation"
        />
        <v-btn
            color="primary"
            class="my-btn font-weight-bold"
            @click="submitForm"
        >
            登録
        </v-btn>

        <v-btn variant="text" color="primary" width="100%" @click="navigate('/login')">
            すでにアカウントを持っています
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