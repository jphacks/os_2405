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

</script>

<template>
    <WrapperContainer>
        <HomeContainer 
            :items="items"
        />
    </WrapperContainer>
</template>