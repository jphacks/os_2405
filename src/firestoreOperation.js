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

/**
 * 条件を指定してログインユーザーのメモを読み込む関数
 * @returns {Promise<Array>} メモのIDとタイトルの配列
 */
const readMemosForCurrentUser = async () => {
    try {
        const user = firebaseAuth.currentUser;
        if (!user) throw new Error('User not logged in');

        // 'memos' コレクションを参照
        const dbCollection = collection(firestore, 'memos');

        // クエリを作成: userId に基づいてフィルタリング
        const snapshot = await getDocs(query(dbCollection, where('userID', '==', user.uid)));

        // メモのIDとタイトルの配列を作成
        const memos = snapshot.docs.map(doc => ({
            id: doc.id,      // ドキュメントIDを追加
            title: doc.data().title // タイトルを追加
        }));

        return memos; // メモの配列を返す
    } catch (e) {
        console.error('Error reading memos:', e);
        return []; // エラー時は空の配列を返す
    }
};


export { create, read, readWithConditionLoginUser , deleteById, getDataByIdForCurrentUser, updateById, readMemosForCurrentUser};