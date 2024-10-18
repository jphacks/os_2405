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
 * 画面遷移を行う用の関数
 * @param string path 
 */
const navigate = (path) => {
    router.push(path);
}

export { validate, navigate };