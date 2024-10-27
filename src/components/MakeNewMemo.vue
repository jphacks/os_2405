<script setup>
import InputField from '@/components/InputField.vue';
import { ref } from 'vue';

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
    },
    closeDialog: {
        type: Function,
        required: true
    },
});

const memo_name = ref('');
</script>

<template>
    <v-card>
        <v-card-actions>
            <v-row justify="end">
                <v-col cols="auto" justify="right">
                    <v-btn icon @click="closeDialog">
                        <v-icon
                            icon="mdi-close"
                        ></v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </v-card-actions>
        <v-card-text>
            <InputField
                :label="label"
                type="text"
                :placeholder="placeholder"
                v-model:value="memo_name"
                :width="width"
            ></InputField>
        </v-card-text>
        <v-card-actions>
            <v-row justify="center">
                <v-btn 
                    color="primary"
                    class="my-btn font-weight-bold"
                    variant="elevated"
                    @click="closeDialog"
                >
                メモ帳を作成
                </v-btn>
            </v-row>
        </v-card-actions>
    </v-card>
</template>

<style scoped>
.my-btn {
    /* width: 40%; */
    margin: 20px 0;
}
</style>