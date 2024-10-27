import router from "@/router";

/**
 * 入力が指定のルールに従っているかチェックする
 * @param value チェックする値
 * @param rules チェックするルール
 * @returns string エラーメッセージまたは空文字
 */
const validate = (value, rules) => {
    for (const rule of rules) {
        const message = rule(value);
        if (message !== true) {
            return message;
        }
    }
    return "";
};

/**
 * すべてのフィールドが入力されているかチェックする
 * @param  {...any} fields
 * @returns boolean
 */
const areAllFieldsFilled = (...fields) => 
    fields.every(field => field !== '');

/**
 * 画面遷移を行う用の関数
 * @param string path 
 */
const navigate = (path) => {
    router.push(path);
}

/**
 * クエリ付きで画面遷移を行う用の関数 
 * @param {*} name 例: 'home'
 * @param {*} param 例: { id: 1 }
 */
const navigateWithQuery = (name, param) => {
    router.push({ name: name, query: param });
}

export { validate, navigate, areAllFieldsFilled, navigateWithQuery };