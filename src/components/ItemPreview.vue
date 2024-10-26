<script setup>
import ItemDataField from '@/components/ItemDataField.vue';
import AddItemDialog from '@/components/AddItemDialog.vue';
import { ref } from 'vue';

defineProps({
    informations: {
        type: Array,
        required: true
    },
    datafield_width: {
        type: String,
        default: '80%'
    },
});

const dialog = ref(false);

const openDialog = () => {
    dialog.value = true;
}

const onClickEditButton = () => {
    openDialog();
}

/**
 * フォームで入力された変更内容を反映させる
 * （詳細な実装は後回し中）
 */
 const submitEditData = async (title, quantity, date) => {
    // const addItem = {
    //     title: title,
    //     quantity: quantity,
    //     deadline: date,
    //     createdAt: new Date()
    // }

    // try {
    //     await create(['items'], addItem);
    // } catch (error) {
    //     console.error(error);
    // }
    console.log('変更を保存するボタンが押されました')
}

</script>

<template>
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
                    @click="onClickEditButton"
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
    

    <v-dialog
        v-model="dialog"
        max-width="400"
    >
        <AddItemDialog 
            :button_function="submitEditData"
            button_text="変更を保存する"
        />
    </v-dialog>
</template>

<style scoped>
.my-btn {
    /* width: 40%; */
    margin: 20px 0;
}
</style>