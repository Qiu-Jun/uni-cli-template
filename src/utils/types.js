const toString = Object.prototype.toString
function typeOf(obj) {
    const maps = {
        '[object Boolean]': 'boolean',
        '[object Number]': 'number',
        '[object String]': 'string',
        '[object Function]': 'function',
        '[object Array]': 'array',
        '[object Date]': 'date',
        '[object RegExp]': 'regExp',
        '[object Undefined]': 'undefined',
        '[object Null]': 'null',
        '[object Object]': 'object'
    }
    return maps[toString.call(obj)]
}
/**
 * @desc 检查函数
 * @param obj
 * @returns { Boolean }
 */
export function isFunction(obj) {
    return typeOf(obj) === 'function'
}

/**
 * @desc 检查对象
 * @param obj
 * @returns { Boolean }
 */
export function isObject(obj) {
    return typeOf(obj) === 'object'
}

/**
 * @desc 检查数组
 * @param obj
 * @returns { Boolean }
 */
export function isArray(obj) {
    return typeOf(obj) === 'array'
}

/**
 * @desc 检查数字
 * @param obj
 * @returns { Boolean }
 */
export function isNumber(obj) {
    return typeOf(obj) === 'number'
}

/**
 * @desc 检查字符串
 * @param obj
 * @returns { Boolean }
 */
export function isString(obj) {
    return typeOf(obj) === 'string'
}