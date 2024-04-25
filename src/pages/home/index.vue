<!--
 * @Author: June
 * @Description: 
 * @Date: 2024-04-24 09:32:13
 * @LastEditTime: 2024-04-25 08:44:00
 * @LastEditors: June
 * @FilePath: \uni-cli-template\src\pages\index\index.vue
-->
<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>

    <wd-icon name="add-circle" />
  </view>
</template>

<script setup lang="ts">
import { getUserData } from '@/apis/account'

getUserData()
const title = ref('Hello')
</script>

<style lang="scss">
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
