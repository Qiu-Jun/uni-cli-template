<template>
  <view>mine</view>
  <Cfooter />
</template>

<script lang="ts" setup>
import Cfooter from '@/components/Footer/index.vue'
import useAppStore from '@/store/app'

const appStore = useAppStore()
console.log(appStore.systemInfo)
</script>
