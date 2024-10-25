<script setup>
import HomeContainer from '@/views/containers/HomeContainer.vue';
import { ref } from 'vue';
import { read } from '@/firestoreOperation';

const items = ref([
    {
        title: 'タイトル1',
    },
    {
        title: 'タイトル2',
    }
]);

const test = async () => {
    const data = await read(['items']);
    console.log(data);
    //items.valueの末尾に追加
    items.value.push(...data);
};
</script>

<template>
    <v-btn @click="test"></v-btn>
    <HomeContainer :items="items"/>
</template>