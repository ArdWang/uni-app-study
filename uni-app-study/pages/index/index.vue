<template>
	<view class="content">
		<test v-if="flag" :title="title" @myEven="getNum"></test>
		<button type="primary" @click="checkTest">切换test组件</button>
		这是子组件传递过来的{{num}}
		<text-a></text-a>
		<text-b></text-b>
	</view>
</template>

<script>
	import test from "../../compoments/test.vue"
	import testa from "../../compoments/a.vue"
	import testb from "../../compoments/b.vue"
	export default {
		components:{
			test,
			"text-a":testa,
			"text-b":testb
		},
		data() {
			return {
				title: 'Hello',
				num:0,
				flag:true
			}
		},
		
		onLoad(options) {
			console.log("页面加载了")
		},
		onShow() {
			console.log("页面显示")
		},
		onReady() {
			console.log("页面初次渲染完成")
		},
		onHide() {
			console.log("页面隐藏")
		},
		methods: {
			checkTest(){
				this.flag = !this.flag
			},
			getNum(num){
				console.log(num)
				this.num = num
			}
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.logo {
		height: 200rpx;
		width: 200rpx;
		margin-top: 200rpx;
		margin-left: auto;
		margin-right: auto;
		margin-bottom: 50rpx;
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
