<script setup>
import { ref, onMounted} from 'vue';
import HomeContainer from '@/views/containers/HomeContainer.vue';
import WrapperContainer from '@/views/containers/WrapperContainer.vue';
import { readWithConditionLoginUser } from '@/firestoreOperation';

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