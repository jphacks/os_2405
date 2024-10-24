<script setup>
import InputDateField from '@/components/InputDateField.vue';
import InputField from '@/components/InputField.vue';
import NumberInput from '@/components/NumberInput.vue';
import { ref, watch } from 'vue';
import { create } from '@/firestoreOperation';

const date = ref('');
const title = ref('');
const quantity = ref(0);

const emit = defineEmits(['update:title', 'update:quantity', 'update:date'])
watch(quantity, (value) => {
    //const message = validate(value, dateRules);
    //errorMessage.value = message;
    
    console.log(value);
});

/**
 * フォームの入力内容をFirestoreに登録する
 */
const submitForm = async () => {
    const addItem = {
        title: title.value,
        quantity: quantity.value,
        deadline: date.value,
        createdAt: new Date()
    }

    console.log(addItem);

    try {
        await create(['items'], addItem);
    } catch (error) {
        console.error(error);
    }
}
</script>

<template>
    <InputField
        label="商品名"
        v-model:value="title"
        @input="emit('update:title', title)"
    ></InputField>
    <NumberInput
        label="数量"
        v-model:value="quantity"
        @input="emit('update:quantity', quantity)"
    ></NumberInput>
    <InputDateField
        label="期限"
        v-model:value="date"
        @input="emit('update:date', date)"
    ></InputDateField>
    <v-btn
        color="primary"
        class="my-btn font-weight-bold"
        @click="submitForm"
    >
        登録する
    </v-btn>
</template>

<style scoped>
.my-btn {
    width: 100%;
    margin: 20px 0;
}
</style>