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
    <v-row justify="center">
        <v-btn 
            color="primary"
            class="my-btn font-weight-bold"
        >
            メモ帳を作成
        </v-btn>
    </v-row>
    
</template>

<style scoped>
.my-btn {
    /* width: 40%; */
    margin: 20px 0;
}
</style>