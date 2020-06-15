<template>
	<view>
		<view>导航跳转的学习</view>
		<navigation url="/pages/detail/detail">跳转详情页</navigation>
		<navigation url="/pages/message/message" open-type="switchTab">跳转信息页</navigation>
		<navigation url="/pages/detail/detail">跳转详情页</navigation>
		<button @click="goDetail">跳转到详清页</button>
		<button @click="goMessage">跳转到信息</button>
		<button type="primary" @click="redirectDetail">跳转到详情页并关闭当前页</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		onUnload() {
			console.log("导航页面卸载了")
		},
		methods: {
			goDetail(){
				uni.navigateTo({
					url:"../detail/detail?id=80&name=xiaowang"
				})
			},
			goMessage(){
				uni.switchTab({
					url:"../message/message"
				})
			},
			redirectDetail(){
				uni.redirectTo({
					url:'../detail/detail'
				})
			}
		}
	}
</script>

<style>

</style>
