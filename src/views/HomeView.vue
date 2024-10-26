<script setup>
import HomeContainer from '@/views/containers/HomeContainer.vue';
import { ref, onMounted } from 'vue';
import { readWithConditionLoginUser } from '@/firestoreOperation';
import Navigationvar from '@/components/Navigationvar.vue';
import { navigate } from '@/function';

const items = ref([]);

//マウント時に実行
onMounted(async () => {
    //データの取得
    // const data = await readWithConditionLoginUser(['items']);
    // items.value = data;
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
    <div class="home-view">
        <div>

            <Navigationvar
                :handle-logout="() => console.log('hoge')"
                :my-task-button="() => navigate('/')"
                :memo-button="() => console.log('aaa')"
            ></Navigationvar>
        </div>
        
        <div class="ml-12">
            <HomeContainer :items="items"/>
        </div>
    </div>
</template>

<style scoped>
.home-view {
    display: flex;
}
</style>