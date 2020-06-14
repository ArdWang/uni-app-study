<template>
	<view>
		<view>数据绑定学习</view>
		<view>{{msg}}</view>
		<view>{{1+'你好'}}</view>
		<view>{{'你好'+'世界'}}</view>
		<view>{{1+2}}</view>
		<view>{{flag?'这是假的':'我是真的'}}</view>
		<view>
			<image :src="imgUrl"></image>
		</view>
		
		<view v-for="(item,index) in arr" :key="item.id">
			讯号:{{index}},名字:{{item.name}} ,年龄:{{item.age}}
		</view>
		
		<button @click="clickHandle(20,$event)">按钮</button>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				msg:'hello',
				flag:false,
				imgUrl:"../../static/tabs/contact-active.png",
				arr:[
					{
						name:'宋小宝',
						age:20,
						id:1
					},
					{
						name:'刘能',
						age:20,
						id:2
					},
					{
						name:'赵四',
						age:22,
						id:3
					}
				]
				
			}
		},
		methods: {
			clickHandle(num,e){
				console.log('点击了',num,e)
			}
		}
	}
</script>

<style>

</style>
