<script setup>
import InputField from '@/components/InputField.vue';
import { ref, watch } from 'vue';
import { validate } from '@/function';

defineProps({
    label: {
        type: String,
        default: '太郎'
    },
    placeholder: {
        type: String,
        default: 'ユーザー名(表示名)'
    },
    width: {
        type: String,
        default: '100%'
    }
});

const dialog = ref(true);
const user_name = ref('');

</script>

<template>
    <v-dialog v-model="dialog" persistent max-width="400">
        <v-card>
            <v-card-text class="input-container">
                <InputField
                    :label="label"
                    type="text"
                    :placeholder="placeholder"
                    v-model:value="user_name"
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
                    登録する
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

/* 上部の余白を設定 */
.input-container {
    margin-top: 40px; /* 余白を設定 */
}
</style>