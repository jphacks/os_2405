<script setup>
import InputDateField from '@/components/InputDateField.vue';
import { ref, watch } from 'vue';

const date = ref('');

watch(date, (value) => {
    //const message = validate(value, dateRules);
    //errorMessage.value = message;

    console.log(value);
});

const emit = defineEmits(['update:date']);
</script>

<template>
    <InputDateField
        label="日付"
        v-model:value="date"
        @input="emit('update:date', date)"
        width="100%"
    ></InputDateField>
</template>