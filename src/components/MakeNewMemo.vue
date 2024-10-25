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

const dialog = ref(true);
const memo_name = ref('');

</script>

<template>
    <v-dialog v-model="dialog" max-width="800">
        <v-card>
            <v-card-actions>
                <v-row justify="end">
                    <v-col cols="auto" justify="right">
                        <v-btn icon @click="dialog = false">
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
                        @click="dialog = false"
                    >
                    メモ帳を作成
                    </v-btn>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-dialog>
    
</template>

<style scoped>
.my-btn {
    /* width: 40%; */
    margin: 20px 0;
}
</style>