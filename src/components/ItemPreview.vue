<script setup>
import ItemDataField from '@/components/ItemDataField.vue';
import { ref } from 'vue';

defineProps({
    informations: {
        type: Array,
        required: true
    },
    datafield_width: {
        type: String,
        default: '80%'
    }
});

const dialog = ref(true);
</script>

<template>
    <v-dialog v-model="dialog" max-width="800">
        <v-card class="py-10">
            <v-row justify="center">
                <v-col cols="auto">
                    <h1>
                        商品名
                    </h1>
                </v-col>
            </v-row>

            <v-row justify="center" class="my-4">
                <v-col cols="auto">
                    <v-btn
                        color="primary"
                        class="mybtn font-weight-bold"
                        @click="dialog = false"
                    >
                        編集
                    </v-btn>
                </v-col>
            </v-row>

                
               
            <!-- ItemDataFieldを動的に生成 -->
            <v-row justify="center">
                <v-col v-for="(info, index) in informations" :key="index" cols="12" class=" text-center">
                    <v-divider></v-divider>

                    <ItemDataField
                        :label="info.label"
                        :value="info.value"
                        :width="datafield_width"
                        class="my-4"
                    ></ItemDataField>
                </v-col>
            </v-row>
        </v-card>
        
    </v-dialog>
</template>

<style scoped>
.my-btn {
    /* width: 40%; */
    margin: 20px 0;
}
</style>