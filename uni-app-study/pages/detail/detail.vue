<template>
	<view>
		<!-- <view>
			<text>唱歌跳舞打篮球</text>
		</view>
		<view>
			<text selectable>唱歌跳舞打篮球</text>
		</view>
		<view>
			<text selectable space="nbsp" style="font-size: 100px;">唱歌   跳舞打篮球</text>
		</view>
		<view>
			<text>&amp;</text>
		</view> -->
		<view class="box2" hover-class="box2-active">
			<view class="box" hover-start-time="2000" hover-stay-time="2000" hover-class="box-active" hover-stop-propagation>我是一个大盒子</view>
		</view>
		<view>我是一个大盒子</view>
		<view>我是一个大盒子</view>
		<button>按钮</button>
		<button size="mini">按钮</button>
		<button size="primary">按钮</button>
		<button size="primary" plain>按钮</button>
		<button size="primary" :disabled="true">按钮</button>
		<button loading></button>
		<image src="../../static/logo.png" mode="aspectFit"></image>
		<image src="../../static/logo.png" mode="aspectFill"></image>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onLoad(options) {
			console.log(options)
		},
		methods: {
			
		}
	}
</script>

<style>
	.box{
		width: 100px;
		height: 100px;
		background: #4CD964;
	}
	.box-active{
		background: #DD524D;
	}
	
	.box2{
		width: 200px;
		height: 200px;
		background: blue;
	}
	
	.box2-active{
		background: pink;
	}
	
</style>
