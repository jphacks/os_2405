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
 * @returns string エラーメッセージまたは空文字
 */
 const validatePassword = (value, rules) => {
    for (const rule of rules) {
        const message = rule(value);
        if (message !== true) {
            return message;
        }
    }
    return "";
};

watch(password, (value) => {
    const message = validatePassword(value, passwordRules);
    errorMessage.value = message;
});
</script>

<template>
    <InputField
        label="パスワード"
        type="password"
        placeholder="パスワードを入力"
        v-model:value="password"
        :rules="passwordRules"
        :error-message="errorMessage"
    ></InputField>
</template>