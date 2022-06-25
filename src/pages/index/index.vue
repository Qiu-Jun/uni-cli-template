<template>
	<view class="content">
		<image class="logo" src="/static/logo.png"></image>
		<view>
			<text class="title">{{title}}</text>
		</view>
		<view style="width: 500rpx;height: 600rpx;overflow-x: hidden;overflow-y: scroll;">
			<rich-text
				v-if="text"
				:nodes="text"
			/>
		</view>
		<navigator url="/subPages/test/index">
			<u-button type="primary" text="去分包"></u-button>
		</navigator>
		
		<u-button type="primary" :plain="true" text="镂空"></u-button>
		<u-button type="primary" :plain="true" :hairline="true" text="细边"></u-button>
		<u-button type="primary" :disabled="disabled" text="禁用"></u-button>
		<u-button type="primary" loading loadingText="加载中"></u-button>
		<u-button type="primary" icon="map" text="图标按钮"></u-button>
		<u-button type="primary" shape="circle" text="按钮形状"></u-button>
		<u-button text="渐变色按钮" color="linear-gradient(to right, rgb(66, 83, 216), rgb(213, 51, 186))"></u-button>
		<u-button type="primary" size="small" text="大小尺寸"></u-button>
	</view> 
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import {  getAgreement } from '@/apis/common'
export default {
	data() {
		return {
			title: 'Hello',
			text: ''
		}
	},
	onLoad() {
		// getAgreement()
		// 	.then(res => {
		// 		console.log(res)
		// 		this.text = res.data.value
		// 	})
	},
	computed: {
		...mapState(['app']),
		...mapGetters(['token', 'userInfo'])
	},
	methods: {

	}
}
</script>

<style lang="scss">

	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin: 200rpx auto 50rpx auto;
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
