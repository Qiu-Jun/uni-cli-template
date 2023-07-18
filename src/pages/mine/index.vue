<template>
    <view>mine</view>
</template>

<script lang="ts" setup>
import  useAppStore  from '@/store/app'

const appStore = useAppStore()
console.log(appStore.systemInfo)
</script>