<script setup>
import InputField from './InputField.vue';
import { ref, watch } from 'vue';
import { validate } from '@/function';

defineProps({
    label: {
        type: String,
        default: 'メモ帳の名前'
    },
    placeholder: {
        type: String,
        default: '新規メモ帳名'
    },
    width: {
        type: String,
        default: '100%'
    }
});

const memo_name = ref('');
</script>

<template>
    <InputField
        :label="label"
        type="text"
        :placeholder="placeholder"
        v-model:value="memo_name"
        :width="width"
    ></InputField>
</template>

