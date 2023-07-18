<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { updateMpWx } from '@/utils/update'
import  useAppStore  from '@/store/app'

const appStore = useAppStore()

onLaunch(() => {
  const systemInfo = uni.getSystemInfoSync()
  appStore.setSystemInfo(systemInfo)
  console.log(appStore.systemInfo)
});
onShow(() => {
  console.log("App Show");
  // #ifdef MP-WEIXIN
  updateMpWx()
  // #endif
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style>
</style>
