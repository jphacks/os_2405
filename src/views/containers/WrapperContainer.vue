<script setup>
import { ref, onMounted } from 'vue';
import { readWithConditionLoginUser } from '@/firestoreOperation';
import Navigationvar from '@/components/Navigationvar.vue';
import { navigate } from '@/function';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '@/config/firebase';
import { create } from '@/firestoreOperation';
import FloatingActionButtons from '@/components/FloatingActionButtons.vue';
import AddItemDialog from '@/components/AddItemDialog.vue';

const items = ref([]);
const rail = ref(false);
const dialog = ref(false);

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

const signout = () => {
    signOut(firebaseAuth).then(() => {
        navigate('/login'); // Redirect to login page after sign out
    }).catch((error) => {
        console.error('Sign out error:', error);
    });
};

/**
 * フォームの入力内容をFirestoreに登録する
 */
 const submitNewData = async (title, quantity, date) => {
    const addItem = {
        title: title,
        quantity: quantity,
        deadline: date,
        createdAt: new Date()
    }
    try {
        await create(['items'], addItem);
    } catch (error) {
        console.error(error);
    }
}
</script>

<template>
    <div class="home-view">
        <div>
            <Navigationvar
                :handle-logout="() => signout()"
                :my-task-button="() => navigate('/')"
                :memo-button="() => navigate('/memos')"
                :rail = "rail"
                v-model:rail="rail"
            ></Navigationvar>
        </div>
        
        <div class="ml-12">
            <!--ここにナビゲーションバーとボタン群つけたい画面-->
            <slot></slot>

            <FloatingActionButtons
                :on-click-plus-button="() => dialog = true"
                :on-click-menu-button="() => rail = !rail"
            >
            </FloatingActionButtons>

            <v-dialog
                v-model="dialog"
                max-width="400"
            >
                <AddItemDialog 
                    :button_function="submitNewData"
                    button_text="登録する"
                />
            </v-dialog>
        </div>
    </div>
</template>

<style scoped>
.home-view {
    display: flex;
}
</style>