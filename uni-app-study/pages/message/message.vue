<template>
	<view>
		<button type="primary" @click="chooseImg">上传图片</button>
		<image v-for="item in imgArr" :src="item" @click="preview(item)"></image>
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
	}
</script>

<style>
</style>
