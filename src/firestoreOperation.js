import { addDoc, collection, getDocs, query, where, doc, deleteDoc } from "firebase/firestore";
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
        const data = snapshot.docs.map(doc => ({
            id: doc.id, // ドキュメントIDを追加
            ...doc.data()
        }));
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
const readWithConditionLoginUser = async (collectionPath) => {
    try {
        const user = firebaseAuth.currentUser;
        if (!user) throw new Error('User not logged in');
        
        const dbCollection = collection(firestore, ...collectionPath);
        const snapshot = await getDocs(query(dbCollection, where('userID', '==', user.uid)));
        const data = snapshot.docs.map(doc => ({
            id: doc.id, // ドキュメントIDを追加
            ...doc.data()
        }));
        return data;
    } catch (e) {
        throw new Error(e);
    }
};

/**
 * 指定したIDのデータを削除する関数
 * @param {*} collectionPath (例: ['users', 'userid', 'items'])
 * @param {*} docId (削除したいドキュメントのID)
 */
const deleteById = async (collectionPath, docId) => {
    try {
        const dbCollection = collection(firestore, ...collectionPath);
        const docRef = doc(dbCollection, docId); // ドキュメントリファレンスを取得
        await deleteDoc(docRef); // ドキュメントを削除
    } catch (e) {
        throw new Error(e);
    }
};

export { create, read, readWithConditionLoginUser };