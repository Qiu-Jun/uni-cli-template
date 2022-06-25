// 检验
class Validate {
    constructor(strategies) {
        if(!strategies || '[object Object]' !== Object.prototype.toString.call(strategies)) throw new Error('strategies错误');
        this.validate_strategies = strategies;
        this.cache =[];
    }

    // 添加规则
    add(el, rules) {
        for(let i = 0, rule; rule = rules[i ++];) {
            (rule => {
                let strategyArr = rule.strategy.split(':');
                let errorMsg = rule.errorMsg;
                this.cache.push(() => {
                    let strategy = strategyArr.shift();
                    strategyArr.unshift(el);
                    strategyArr.push(errorMsg);
                    return this.validate_strategies[strategy].apply(el, strategyArr);
                })
            })(rule)
        }
    } 

    // 校验
    validate() {
        for(let i = 0, validateFn; validateFn = this.cache[i++];) {
            let errorMsg = validateFn()
            if(errorMsg) return errorMsg
        }
    }
}

export default Validate;
