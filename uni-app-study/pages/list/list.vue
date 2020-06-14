<template>
	<view>
		<button @click="get">发送Get请求</button>
		<button type="primary" @click="setStroage">存储数据</button>
		<button type="primary" @click="getStroage">获取数据</button>
		<button type="primary" @click="removeId">移除Id</button>
		<view>这是列表页</view>
		<view class="box-item" v-for="item in list">
			{{item}}
		</view>
		<button @click="pullDown">下拉刷新</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list:[
					"前端","java","UI","测试","大数据","前端","java","UI","测试","大数据"
				]
			}
		},
		onPullDownRefresh() {
			console.log("触发了下拉刷新")
			
			setTimeout(()=>{
				this.list = ["APP","java","UI","测试","大数据","前端","java","UI","测试","大数据"]
				uni.stopPullDownRefresh()
			},2000)
		},
		onReachBottom() {
			console.log("页面触底了")
			this.list = [...this.list,...["APP","java","UI","测试","大数据"]]
		},
		methods: {
			pullDown(){
				uni.startPullDownRefresh()
			},
			
			get(){
				uni.request({
					url:"http://localhost:8082/api/getlunbo",
					method:"GET",
					setTimeout:10000,
					success(res) {
						console.log(res)
					}
				})
			}
			
			,
			setStroage(){
				// uni.setStorage({
				// 	key:"id",
				// 	data:80,
				// 	success(){
				// 		console.log("存储成功")
				// 	}
				// })
				uni.setStorageSync('id',100)
			},
			getStroage(){
				// uni.getStorage({
				// 	key:"id",
				// 	success(res){
				// 		console.log("获取成功"+res.data)
				// 	}
				// })
				const res = uni.getStorageSync('id')
				console.log(res)
			},
			removeId(){
				// uni.removeStorage({
				// 	key:"id",
				// 	success() {
				// 		console.log("删除成功!")
				// 	}
				// })
				uni.removeStorageSync("id")
			}
			
			
			
		},
		
		
		
		
	}
</script>

<style>
	.box-item{
		height: 100px;
		line-height: 100px;
	}
</style>
