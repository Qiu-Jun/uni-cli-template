
/**
 * @description: 是否是 h5 端
 * @returns:
 * @example:
 */
 export function isH5(): boolean {
    return process.env.TARO_ENV === 'h5';
  }
  
  /**
   * @description: 是否是微信端
   * @returns:
   * @example:
   */
  export function isWx(): boolean {
    return process.env.TARO_ENV === 'weapp';
  }
  
  /**
   * @description: 是否是抖音端
   * @returns:
   * @example:
   */
  export function isTt(): boolean {
    return process.env.TARO_ENV === 'tt';
  }
  
  /**
   * @description: 是否是支付宝端
   * @returns:
   * @example:
   */
  export function isALiPay(): boolean {
    return process.env.TARO_ENV === 'alipay';
  }
  /**
   * @description: 是否是支付宝端
   * @returns:
   * @example:
   */
  export function getTaroEnv(): string {
    return process.env.TARO_ENV;
  }
  