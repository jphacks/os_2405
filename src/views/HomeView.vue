<script setup>
import HomeContainer from './containers/HomeContainer.vue';
import WrapperContainer from './containers/WrapperContainer.vue';

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