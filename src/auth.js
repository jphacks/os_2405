import { GoogleAuthProvider, signInWithPopup, sendEmailVerification, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { firebaseAuth } from '@/config/firebase';


/**
 * Google認証を行う関数
 * @returns {Promise} Firebaseの認証情報
 */
const googleLogin = async () => {
    const provider = new GoogleAuthProvider();
    return await signInWithPopup(firebaseAuth, provider);
}

const firebaseErrors = {
    'auth/email-already-in-use': 'このメールアドレスは既に使用されています。',
    'auth/invalid-email': 'メールアドレスの形式が正しくありません。',
    'auth/weak-password': 'パスワードが弱すぎます。',
    'auth/user-disabled': 'このユーザーアカウントは無効化されています。',
    'auth/user-not-found': 'ユーザーが見つかりません。',
    'auth/wrong-password': 'パスワードが間違っています。',
    'auth/invalid-credential': 'ユーザ名またはパスワードが間違っています。',
    'auth/network-request-failed': 'ネットワークリクエストに失敗しました。',
};

/**
 * メール認証を行う関数
 * @param {*} email
 * @param {*} password
 */
const emailAuth = async (email, password) => {
    const actionCodeSettings = {
        url: 'http://localhost:5143/login', //NOTE: 本番環境に合わせて変更する
        handleCodeInApp: true,
    };

    try {
        const cred = await createUserWithEmailAndPassword(firebaseAuth, email, password)
        await sendEmailVerification(cred.user, actionCodeSettings);
    } catch (e) {
        if (e.code in firebaseErrors) {
            throw new Error(firebaseErrors[e.code]);
        }
        throw e;
    }
}

const emailLogin = async (email, password) => {
    try {
        const cred = await signInWithEmailAndPassword(firebaseAuth, email, password);
        if (!cred.user.emailVerified) {
            throw new Error('メール認証が完了していません。');
        }
    } catch (e) {
        if (e.code in firebaseErrors) {
            throw new Error(firebaseErrors[e.code]);
        }else {
            throw new Error('不明なエラーが発生しました。');
        }
    }
}

export { googleLogin, emailAuth, emailLogin };