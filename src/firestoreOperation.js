import { addDoc, collection, getDocs, query, where, doc, deleteDoc, getDoc, updateDoc } from "firebase/firestore";
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
        return await addDoc(dbCollection, data);
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
 * @param {*} collectionPath (例: ['items'])
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
 * 指定したIDのデータを取得する関数
 * @param {*} collectionPath (例: ['users', 'userid', 'items'])
 * @param {*} docId (取得したいドキュメントのID)
 * @returns ドキュメントデータ (存在しない場合はnull)
 */
const getDataByIdForCurrentUser = async (collectionPath, docId) => {
    try {
        // Firestoreのドキュメント参照を取得（doc内で展開）
        const docRef = doc(firestore, ...collectionPath, docId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            return docSnap.data(); // ドキュメントデータを返す
        } else {
            throw new Error("No such document!");
        }
    } catch (e) {
        console.error("Error in getDataByIdForCurrentUser:", e); // エラーログを表示
        throw new Error(e.message);
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

/**
 * 指定したIDのデータを更新する関数
 * @param {Array} collectionPath - コレクションのパス (例: ['items'])
 * @param {string} docId - 更新したいドキュメントのID
 * @param {Object} newData - 更新するデータ (例: { title: '新しいタイトル', quantity: 5 })
 */
const updateById = async (collectionPath, docId, fields) => {
    try {
        const docRef = doc(firestore, ...collectionPath, docId); // ドキュメントリファレンスを取得
        await updateDoc(docRef, fields); // 特定のフィールドを更新
    } catch (error) {
        throw new Error(`更新に失敗しました: ${error.message}`);
    }
};


export { create, read, readWithConditionLoginUser , deleteById, getDataByIdForCurrentUser, updateById};
//ユーザのidと一致するmemoをfirestoreの/memosから取得する
const readMemos = async () => {
    try {
        const user = firebaseAuth.currentUser;
        if (!user) throw new Error('User not logged in');
        
        const dbCollection = collection(firestore, 'memos');
        const snapshot = await getDocs(query(dbCollection, where('userID', '==', user.uid)));
        const data = snapshot.docs.map(doc => ({
            id: doc.id, // ドキュメントIDを追加
            ...doc.data()
        }));
        return data;
    } catch (e) {
        throw new Error(e);
    }
}

export { create, read, readWithConditionLoginUser, readMemos };
