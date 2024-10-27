<script setup>
import MemoContainer from './containers/MemoContainer.vue';
import WrapperContainer from './containers/WrapperContainer.vue';
import router  from '@/router';
import { onMounted } from 'vue';

//TODO: 後で変える
const sampleMemos = [
    {
        id: 1,
        title: 'サンプルメモ1',
        deadline: '2021-12-31',
        quantity: 1,
    }
]


const memoId  = router.currentRoute.value.params.id;
console.log("memoID: " + memoId);
</script>

<template>

    <WrapperContainer>
        <MemoContainer
            title="後で変える"
            :items="sampleMemos"
        ></MemoContainer>
    </WrapperContainer>

</template>