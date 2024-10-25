import { addDoc, collection } from "firebase/firestore";
import { firestore, firebaseAuth } from "@/config/firebase";

/**
 * データを作成する関数
 * @param {*} collectionPath(例: ['users', 'userid', 'items'])
 * @param {*} data (例: {name: '商品名', price: 1000})
 */
const create = async (collectionPath, data) => {
    try {
        const user = firebaseAuth.currentUser;
        if (!user) {
            throw new Error('ログインしていません。');
        }
        
        // userIDをdataに追加
        data.userID = user.uid;

        const dbCollection = collection(firestore, ...collectionPath);
        await addDoc(dbCollection, data);

    } catch (e) {
        throw new Error(e);
    }
};

/**
 * データを読み込む関数
 * @param {*} collectionPath (例: ['users', 'userid', 'items'])
 */
const read = async (collectionPath) => {
    try {
        const dbCollection = collection(firestore, ...collectionPath);
        const snapshot = await getDocs(dbCollection);
        const data = snapshot.docs.map(doc => doc.data());
        return data;
    } catch (e) {
        throw new Error(e);
    }
};

/**
 * 条件を指定してデータを読み込む関数
 * @param {*} collectionPath (例: ['users', 'userid', 'items'])
 * @param {*} condition (例: ['price', '>', 1000])
 * @returns 
 */
const readWithCondition = async (collectionPath, condition) => {
    try {
        const dbCollection = collection(firestore, ...collectionPath);
        const snapshot = await getDocs(query(dbCollection, where(...condition)));
        const data = snapshot.docs.map(doc => doc.data());
        return data;
    } catch (e) {
        throw new Error(e);
    }
};

export { create, read, readWithCondition };