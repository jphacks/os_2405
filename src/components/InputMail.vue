<script setup>
import InputField from '@/components/InputField.vue';
import { ref, watch } from 'vue';
import { validate } from '@/function';

defineProps({
    label: {
        type: String,
        default: 'メールアドレス'
    },
    placeholder: {
        type: String,
        default: 'メールアドレスを入力'
    },
    width: {
        type: String,
        default: '100%'
    }
});

const email = ref('');
const errorMessage = ref('');

const emailPattern = /^[a-zA-Z0-9_\-]+(\.[a-zA-Z0-9_\-]+)*@([a-zA-Z0-9][a-zA-Z0-9\-]*[a-zA-Z0-9]\.)+[a-zA-Z]{2,}$/;
const emailRules = [
    (v) => !!v || 'メールアドレスを入力してください',
    (v) => emailPattern.test(v) || 'メールアドレスの形式が正しくありません'
];

watch(email, (value) => {
    const message = validate(value, emailRules);
    errorMessage.value = message;
});

const emit = defineEmits(['update:email', 'error']);
</script>

<template>
    <InputField
        :label="label"
        type="email"
        :placeholder="placeholder"
        v-model:value="email"
        :error-message="errorMessage"
        @input="emit('update:email', email)"
        @error="emit('error', $event)"
        :width="width"
    ></InputField>
</template>