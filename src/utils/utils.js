/**
 * @desc 防抖
 * @param { Function } cb callback
 * @param { Number } wait 
 * @param { Boolean } immediate 
 * @returns 
 */
export function debounce(cb, wait = 1000, immediate = false) {
    if(!cb || 'function' !== typeof cb) throw new TypeError('cb不能为空或cb必须是一个函数');
    let timer = null;
    return function() {
        if(timer) clearTimeout(timer);
        if(immediate && !timer) {
            cb.apply(this, arguments);
        }
        timer = setTimeout(() => {
            cb.apply(this, arguments);
            clearTimeout(timer);
            timer = null;
        }, wait);
    }
}

/**
 * @desc 节流
 * @param { Function } cb callback
 * @param { Number } wait 
 * @returns 
 */
export function throttle(cb, wait = 1000) {
    if(!cb && 'function' !== typeof cb) {
        throw new TypeError('cb不能为空或者cb必须是funciton');
    }
    let preTimeStamp = 0;
    return function() {
        let now = Date.now();
        if(now - preTimeStamp > wait) {
            preTimeStamp = now;
            cb.apply(this, arguments);
        } 
    }
}