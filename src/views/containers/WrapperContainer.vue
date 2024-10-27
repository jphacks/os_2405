<script setup>
import { ref, onMounted } from 'vue';
import { create, readMemos, readWithConditionLoginUser } from '@/firestoreOperation';
import Navigationvar from '@/components/Navigationvar.vue';
import { navigate } from '@/function';
import { signOut } from 'firebase/auth';
import { firebaseAuth } from '@/config/firebase';
import FloatingActionButtons from '@/components/FloatingActionButtons.vue';
import AddItemDialog from '@/components/AddItemDialog.vue';
import MakeNewMemo from '@/components/MakeNewMemo.vue';

const rail = ref(false);
const dialog = ref(false);

const signout = () => {
    signOut(firebaseAuth).then(() => {
        navigate('/login'); // Redirect to login page after sign out
    }).catch((error) => {
        console.error('Sign out error:', error);
    });
};

const memoDialog = ref(false);

const closeDialog = () => {
    memoDialog.value = false;
}

const openDialog = () => {
    memoDialog.value = true;
}

const memoCreate = async (title) => {
    const memoRef = await create(['memos'], {
        title: title,
        createdAt: new Date()
    });
    closeDialog();
    window.location.reload(); //一旦ゴリ押し実装
}

const memoItems = ref([])

onMounted(async() => {
    memoItems.value = await readMemos();
})

/**
 * フォームの入力内容をFirestoreに登録する
 */
 const submitNewData = async (not_use_param, title, quantity, date) => {
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
                :rail = "rail"
                v-model:rail="rail"
                :memo-create-button="() => openDialog()"
                :memo-items="memoItems"
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
                    @close="dialog = false"
                />
            </v-dialog>

            <v-dialog
                v-model="memoDialog"
                max-width="400"
            >
                <MakeNewMemo 
                    :close-dialog="() => closeDialog()"
                    :memo-create="memoCreate"
                    :dialog="memoDialog"
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