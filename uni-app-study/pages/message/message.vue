<template>
	<view>
		<button type="primary" @click="chooseImg">上传图片</button>
		<image v-for="item in imgArr" :src="item" @click="preview(item)"></image>
		<!--#ifdef H5-->
		<view>我只希望H5页面中看见</view>
		<!--#endif-->
		<!-- #ifdef MP-WEIXIN -->
		<view>我只希望在小程序中看见</view>
		<!-- #endif -->
	</view>
</template>

<script>
	export default{
		data(){
			return{
				imgArr:[]
			}
		},
		methods:{
			chooseImg(){
				uni.chooseImage({
					count:5,
					success:res=> {
						this.imgArr = res.tempFilePaths
					}
				})
			},
			preview(current){
				uni.previewImage({
					current,
					urls:this.imgArr,
					loop:true,
					indicator:"number"
				})
				console.log(current)
			}
		}
		,
		onLoad(){
			// #ifdef H5
			console.log("我希望H5中打印")
			// #endif
			
			// #ifdef MP-WEIXIN
			console.log("我希望微信消除中打印中打印")
			// #endif
		}
	}
</script>

<style>
	/*H5的样式*/
	/* #ifdef H5 */
	view{
		color:hotpink
	}
	/* #endif */
	
	/*微信小程序中的样式*/
	/* #ifdef MP-WEIXIN */
	view{
		color:#0000FF
	}
	/* #endif */
</style>
