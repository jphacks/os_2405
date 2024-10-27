<script setup>
import { readMemos } from '@/firestoreOperation';
import HomeContainer from '@/views/containers/HomeContainer.vue';
import WrapperContainer from '@/views/containers/WrapperContainer.vue';
import { defineProps, ref, onMounted } from 'vue';

defineProps({
    items: {
        type: Array,
        required: true,
    },
})

const memoItems = ref([]);

onMounted(async() => {
    try {
        memoItems.value = await readMemos();
    } catch (error) {
        console.log("error");
    }
})
</script>

<template>
    <WrapperContainer
        :memo-items="memoItems"
    >
        <HomeContainer 
            :items="items"
        />
    </WrapperContainer>
</template>