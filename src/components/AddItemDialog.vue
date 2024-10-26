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

defineProps({
    button_function: {
        type: Function,
        default: () => { console.log('ボタンが押されました') }
    },
    button_text: {
        type: String,
        default: 'button'
    },
});

</script>

<template>
    <v-card
    >   
        <v-card-title class="d-flex justify-end pa-0 mb-4 close-btn-wrapper">
            <v-btn
                icon
                variant="text"
                @click="closeDialog"
            >
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </v-card-title>
        <div class="mx-8 mb-8 form-content">
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
                @click="button_function(title, quantity, date)"
            >
                {{ button_text }}
            </v-btn>
        </div>
    </v-card>
</template>

<style scoped>
.my-btn {
    width: 100%;
    margin: 20px 0;
}

.close-btn-wrapper {
    position: fixed;
    top: 8px;
    right: 8px;
    z-index: 1;
}

.form-content {
    position: relative;
    padding-top: 48px;
}

</style>