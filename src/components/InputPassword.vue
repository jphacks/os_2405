<script setup>
import { ref, watch } from 'vue';
import InputField from '@/components/InputField.vue';

const password = ref('');
const errorMessage = ref('');

const passwordRules = [
    (v) => !!v || 'パスワードを入力してください',
    (v) => v.length >= 8 || 'パスワードは8文字以上で入力してください'
]

const emit = defineEmits(['update:password']);

/**
 * パスワードが指定のルールに従っているかチェックする
 * @param value チェックする値
 * @param rules チェックするルール
 */
 const validatePassword = (value, rules) => {
    console.log("value", value);
    //ruleは(v) => !!v || 'パスワードを入力してください'のような関数
    for (const rule of rules) {
        const message = rule(value);
        console.log("message", message);
        if (message !== true) {
            errorMessage.value = message;
            return false;
        }
    }
    errorMessage.value = '';
    return true;
};

watch(password, (value) => {
    validatePassword(value, passwordRules);
});
</script>

<template>
    <InputField
        label="パスワード"
        type="password"
        v-model:value="password"
        :rules="passwordRules"
        :error-message="errorMessage"
    ></InputField>
</template>