import {
    hideToast as taroHideToast,
    showToast as taroShowToast,
    showModal as TaroShowModal,
    showLoading as taroShowLoading,
    hideLoading as taroHideLoading,
  
} from '@tarojs/taro'

// 提示框 start
export interface IShowToast {
    // 是否自动隐藏
    autoHide?: boolean;
}
  
// 模态对话框
export const showModal = (params: any) => {
    TaroShowModal(params);
};
  

// 隐藏
export const hideToast = () => {
    taroHideToast();
};
  
  
  
// 显示
export const showToast = (title: string, params?: IShowToast): void => {
    taroShowToast({
        title,
        icon: 'none',
        duration: 2000,
    });

    if (params?.autoHide) {
        setTimeout(() => {
        hideToast();
        }, 2000);
    }
};
 // 提示框 end
  
// 加载提示框 start
  
// 显示
export const showLoading = (title: string = '加载中...') => {
    taroShowLoading({
        title,
    });
};
  
// 隐藏
export const hideLoading = () => {
    taroHideLoading();
};
// 加载提示框 end
  