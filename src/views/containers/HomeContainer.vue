<script setup>
import AddItemDialog from '@/components/AddItemDialog.vue';
import FloatingActionButtons from '@/components/FloatingActionButtons.vue';
import TodoItem from '@/components/TodoItem.vue';
import { ref } from 'vue';

const dialog = ref(false);

const openDialog = () => {
    dialog.value = true;
}

/**
 * フォームの入力内容をFirestoreに登録する
 */
 const submitNewData = async (title, quantity, date) => {
    const addItem = {
        title: title,
        quantity: quantity,
        deadline: date,
        createdAt: new Date()
    }

    try {
        await create(['items'], addItem);
    } catch (error) {
        console.error(error);
    }
}

defineProps({
    items: {
        type: Array,
        default: () => []
    },
    onClickMenuButton: {
        type: Function,
        required: true
    }
})

const onClickPlusButton = () => {
    openDialog();
}

</script>

<template>
    <v-sheet color="red-lighten-1">
        あなたの買い物一覧
    </v-sheet>

    <TodoItem 
        v-for="item in items"
        :key="item"
        :id="item.id"
        :title="item.title"
        :deadline="item.deadline"
        :quantity="item.quantity"
        class="my-8"
    />

    <FloatingActionButtons 
        :on-click-plus-button="onClickPlusButton"
        :on-click-menu-button="onClickMenuButton"
    
    ></FloatingActionButtons>

    <v-dialog
        v-model="dialog"
        max-width="400"
    >
        <AddItemDialog 
            :button_function="submitNewData"
            button_text="登録する"
        />
    </v-dialog>
</template>

<style scoped>
.v-sheet {
    display: inline-block;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: larger;
}
</style>