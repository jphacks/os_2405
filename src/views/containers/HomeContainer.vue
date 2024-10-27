<script setup>
import TodoItem from '@/components/TodoItem.vue';

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
})

</script>

<template>
    <v-sheet color="red-lighten-1" class="mt-8">
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