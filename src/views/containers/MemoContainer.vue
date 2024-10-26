<script setup>
import TodoItem from '@/components/TodoItem.vue';

defineProps({
    title: {
        type: String,
        default: 'タイトル'
    },
    items: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <div class="text-mylist text-h4 mb-4">
        <span class="text-truncate title-container">
            {{ title }}
        </span>
    </div>

    <div class="header-container">
        <v-sheet color="red-lighten-1" class="header-sheet">
            商品一覧
        </v-sheet>
    </div>

    <TodoItem 
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :deadline="item.deadline"
        :quantity="item.quantity"
        class="my-2"
    />
</template>

<style scoped>
.text-truncate {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
}

.header-container {
    display: flex;
    justify-content: flex-start;
}

.header-sheet {
    display: inline-block;
    padding: 10px;
    border-radius: 5px;
    margin-bottom: 10px;
    font-weight: bold;
    font-size: larger;
    width: fit-content;
}

.text-mylist {
    text-align: center;
}

.text-h4 {
    font-size: 2rem;
}

.mb-4 {
    margin-bottom: 1rem;
}

.title-container {
    width: 80%;
    margin: 0 auto; /* 中央寄せ */
    display: block;
}
</style>