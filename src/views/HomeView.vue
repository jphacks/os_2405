<script setup>
import HomeContainer from '@/views/containers/HomeContainer.vue';
import { ref } from 'vue';
import { read, readWithConditionLoginUser } from '@/firestoreOperation';

const items = ref([]);

//マウント時に実行
onMounted(async () => {
    //データの取得
    const data = await readWithConditionLoginUser(['items']);
    items.value = data;
});

const test = async () => {
    //現在ログイン中のユーザーのデータを取得
    const data = await readWithConditionLoginUser(['items']);
    console.log(data);
    //items.valueの末尾に追加
    items.value.push(...data);
};
</script>

<template>
    <v-btn @click="test"></v-btn>
    <HomeContainer :items="items"/>
</template>