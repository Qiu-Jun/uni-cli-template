<template>
  <uni-nav-bar
    title="导航栏组件"
    statusBar
    :border="false"
    backgroundColor="transparent"
    fixed
  ></uni-nav-bar>
  <view
    style="
      background: red;
      height: 100px;
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
    "
    >mine</view
  >
  <Cfooter />
</template>

<script lang="ts" setup>
import Cfooter from '@/components/Footer/index.vue'
import { useAppStore } from '@/store'

const appStore = useAppStore()
console.log(appStore.systemInfo)
</script>
