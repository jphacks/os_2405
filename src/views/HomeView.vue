<script setup>
import HomeContainer from '@/views/containers/HomeContainer.vue';
import { ref, onMounted } from 'vue';
import { readWithConditionLoginUser } from '@/firestoreOperation';
import Navigationvar from '@/components/Navigationvar.vue';
import { navigate } from '@/function';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '@/config/firebase';

const items = ref([]);
const rail = ref(false);

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

const toggleRail = () => {
    rail.value = !rail.value;
};

const signout = () => {
    signOut(firebaseAuth).then(() => {
        navigate('/login'); // Redirect to login page after sign out
    }).catch((error) => {
        console.error('Sign out error:', error);
    });
};
</script>

<template>
    <div class="home-view">
        <div>
            <Navigationvar
                :handle-logout="() => signout()"
                :my-task-button="() => navigate('/')"
                :memo-button="() => console.log('後で変える')"
                :rail = "rail"
                v-model:rail="rail"
            ></Navigationvar>
        </div>
        
        <div class="ml-12">
            <HomeContainer 
                :items="items"
                :onClickMenuButton="toggleRail"
            />
        </div>
    </div>
</template>

<style scoped>
.home-view {
    display: flex;
}
</style>