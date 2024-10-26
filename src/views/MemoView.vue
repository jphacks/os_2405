<script setup>
import MemoContainer from './containers/MemoContainer.vue';

//TODO: 後で変える
const sampleMemos = [
    {
        id: 1,
        title: 'サンプルメモ1',
        deadline: '2021-12-31',
        quantity: 1,
    }
]
</script>

<template>
    <MemoContainer
        title="後で変える"
        :items="sampleMemos"
    ></MemoContainer>

</template>