<script setup>
import { ref, watch } from 'vue';
import InputField from '@/components/InputField.vue';
import { validate } from '@/function';

const password = ref('');
const errorMessage = ref('');

defineProps({
    label: {
        type: String,
        default: 'パスワード'
    },
    placeholder: {
        type: String,
        default: 'パスワードを入力'
    },
    width: {
        type: String,
        default: '100%'
    }
})

const passwordRules = [
    (v) => !!v || 'パスワードを入力してください',
    (v) => v.length >= 8 || 'パスワードは8文字以上で入力してください'
]

const emit = defineEmits(['update:password']);

watch(password, (value) => {
    const message = validate(value, passwordRules);
    errorMessage.value = message;
});
</script>

<template>
    <InputField
        :label="label"
        type="password"
        :placeholder="placeholder"
        v-model:value="password"
        :rules="passwordRules"
        :error-message="errorMessage"
        @input="emit('update:password', password)"
        :width="width"
    ></InputField>
</template>