<script setup>
import { ref, watch, computed } from 'vue';
import InputMail from '@/components/InputMail.vue';
import InputPassword from '@/components/InputPassword.vue';
import CustomDivider from '@/components/CustomDivider.vue';
import ButtonWithLogo from '@/components/ButtonWithLogo.vue';
import {navigate, areAllFieldsFilled} from '@/function';
import { googleLogin, emailLogin } from '@/auth';
import MessageBox from '@/components/MessageBox.vue';

const props = defineProps({
    onClick: {
        type: Function,
        default: async () => {
            await googleLogin();
            navigate('/');
        }
    },
    systemMessageProp: {
        type: String,
        default: ''
    }
})

const email = ref('');
const password = ref('');
const systemMessage = ref(props.systemMessageProp);
const buttonFlag = ref(false);
const isError = ref(false);

const isShowMessageBox = computed(() => systemMessage.value !== '');

watch([email, password], () => {
    buttonFlag.value = areAllFieldsFilled(email.value, password.value);
});

const emit = defineEmits(['update:loading']);

const submitLogin = async () => {
    systemMessage.value = '';
    // ログイン処理

    try {
        emit('update:loading', true);
        await emailLogin(email.value, password.value);
        emit('update:loading', false);
    
        navigate('/');
    }catch (error) {
        systemMessage.value = error.message;
        isError.value = true;
    }finally {
        emit('update:loading', false);
    }
};

</script>

<template>
    <h1 class="title">ログイン</h1>
    <div class="my-form">
        <ButtonWithLogo class="center-block" :on-click="onClick"></ButtonWithLogo>
        <CustomDivider text="または" />
        <MessageBox v-show="isShowMessageBox" :message="systemMessage" :isError=isError class="my-5"/>
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
            :disabled="!buttonFlag"
            @click="submitLogin"
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