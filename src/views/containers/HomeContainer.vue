<script setup>
import TodoItem from '@/components/TodoItem.vue';

defineProps({
    items: {
        type: Array,
        default: () => []
    },
})

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