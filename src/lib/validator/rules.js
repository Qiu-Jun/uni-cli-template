// 非空
export const notEmpty = (value, errorMsg) => {
    if(!value) return errorMsg;
}

// 手机号码
export const isMobile = (value, errorMsg) => {
    if(!(/^1[3-9]\d{9}$/.test(value))) return errorMsg;
}

// 两个值是否一致
export const unque = (value, val, errorMsg) => {
    if(value !== val) return errorMsg
}

// 最小长度
export const minLen = (val, minlen, errorMsg) => {
    if(val.length < minlen) return errorMsg
}

// 最大长度
export const maxLen = (val, maxlen, errorMsg) => {
    if(val.length > maxlen) return errorMsg
}