<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { updateMpWx } from '@/utils/update'
import useAppStore from '@/store/app'

const appStore = useAppStore()

onLaunch(async () => {
  const systemInfo = uni.getSystemInfoSync()
  appStore.setSystemInfo(systemInfo)
  // console.log(appStore.systemInfo)
  // #ifdef MP-WEIXIN
  const extJson = await uni.getExtConfigSync()
  console.log(extJson)
  // #endif
})
onShow(() => {
  console.log('App Show')
  // #ifdef MP-WEIXIN
  updateMpWx()
  // #endif
})
onHide(() => {
  console.log('App Hide')
})
</script>
<style></style>
