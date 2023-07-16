<template>
  <view class="index">
    <text>{{ msg }}</text>
    <text>{{ test }}</text>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { useAppStore } from '@/store';
import './index.scss'

const { test }  = useAppStore()
const msg = ref('Hello world')

</script>
