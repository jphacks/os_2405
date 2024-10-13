<script setup>
import { ref } from 'vue';
import InputMail from '@/components/InputMail.vue';
import InputPassword from '@/components/InputPassword.vue';
import CustomDivider from '@/components/CustomDivider.vue';

const password = ref('');
const passwordConfirmation = ref('');
const email = ref('');
</script>

<template>
    <h1 class="title">新規登録</h1>
    <CustomDivider text="または" />
    <div class="my-form">
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
            class="my-btn"
        >登録</v-btn>

        <v-btn variant="text" color="primary" width="100%">
            すでにアカウントを持っています
        </v-btn>
    </div>
</template>

<style scoped>
.title {
    color: #1A69C8;
    text-align: center;
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
}

.my-btn {
    width: 100%;
    margin: 20px 0;
}
</style>