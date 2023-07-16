import {
    getUpdateManager as TarogetUpdateManager,
} from '@tarojs/taro'
import { showModal, showToast } from './base'
import { isWx } from './env'


export default function onUpdateMini() {
    if(isWx()) {
        const updateManager = TarogetUpdateManager();
        updateManager.onCheckForUpdate(function (res) {
            if (res.hasUpdate) {
                updateManager.onUpdateReady(() => {
                    showModal({
                        title: '更新提示',
                        content: '新版本已经准备好，是否重启应用？',
                        success: (res: any) => {
                            const { confirm, cancel } = res;
                            if (confirm) {
                                updateManager.applyUpdate();
                            } else if (cancel) {
                                showToast('用户关闭更新提示');
                            }
                        },
                    });
                });
                updateManager.onUpdateFailed(() => {
                    showToast('下载失败');
                });
            }
        });
        
    }
}