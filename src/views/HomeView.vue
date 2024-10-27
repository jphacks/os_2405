<script setup>
import { readMemos } from '@/firestoreOperation';
import HomeContainer from '@/views/containers/HomeContainer.vue';
import WrapperContainer from '@/views/containers/WrapperContainer.vue';
import { defineProps, ref, onMounted } from 'vue';
import { readWithConditionLoginUser } from '@/firestoreOperation';
defineProps({
    items: {
        type: Array,
        required: true,
    },
})

const items = ref([]); // items を ref で定義

onMounted(async () => {
    // データを取得して items に代入
    items.value = await readWithConditionLoginUser(['items']);
});

</script>

<template>
    <WrapperContainer>
        <HomeContainer 
            :items="items"
        />
    </WrapperContainer>
</template>