<script setup>
import MemoContainer from './containers/MemoContainer.vue';
import WrapperContainer from './containers/WrapperContainer.vue';
import router  from '@/router';
import { onMounted, ref } from 'vue';

import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { firestore } from "@/config/firebase";

const items = ref([]);
const memo = ref(null);

onMounted(async () => {
    console.log("mounted");
    const memoId  = router.currentRoute.value.params.id;
    console.log("-----------------memoID: " + memoId);

    try {
        items.value = await readWithMemoId(['items'], memoId);
        memo.value = await fetchMemoById(memoId);
        console.log(await fetchMemoById(memoId))
    } catch (error) {
        console.error("Error fetching items:", error);
    }
});

const fetchMemoById = async (memoId) => {
    try {
        const docRef = doc(firestore, 'memos', memoId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            return { id: docSnap.id, ...docSnap.data() };
        } else {
            throw new Error('Document not found');
        }
    } catch (e) {
        throw new Error(e);
    }
};

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

    <WrapperContainer>
        <MemoContainer
            v-if="memo"
            :title="memo.title"
            :items="items"
        ></MemoContainer>
    </WrapperContainer>

</template>