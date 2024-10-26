<script setup>
import HomeContainer from '@/views/containers/HomeContainer.vue';
import WrapperContainer from '@/views/containers/WrapperContainer.vue';

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