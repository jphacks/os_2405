<script setup>
import MemoContainer from './containers/MemoContainer.vue';
import WrapperContainer from './containers/WrapperContainer.vue';
import router  from '@/router';
import { onMounted } from 'vue';

import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { firestore, firebaseAuth } from "@/config/firebase";
import { readMemos } from '@/firestoreOperation';

const memoItems = ref([]);

onMounted(async () => {
    console.log("mounted");
    const memoId  = router.currentRoute.value.params.id;
    console.log("memoID: " + memoId);

    try {
        const items = await readWithMemoId(['items'], memoId);
        
        memoItems.value = await readMemos();
    } catch (error) {
        console.error("Error fetching items:", error);
    }
});

/**
 * 特定のmemoIdを持つデータを読み込む関数
 * @param {*} collectionPath (例: ['items'])
 * @param {*} memoId
 * @returns 
 */
 const readWithMemoId = async (collectionPath, memoId) => {
    try {
        const dbCollection = collection(firestore, ...collectionPath);
        const snapshot = await getDocs(query(dbCollection, where('memoId', '==', memoId)));
        const data = snapshot.docs.map(doc => ({
            id: doc.id, // ドキュメントIDを追加
            ...doc.data()
        }));
        return data;
    } catch (e) {
        throw new Error(e);
    }
};

</script>

<template>

    <WrapperContainer
        :memoItems="memoItems"
    >
        <MemoContainer
            title="後で変える"
            :items="sampleMemos"
        ></MemoContainer>
    </WrapperContainer>

</template>