<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view :style="{ height: wrapperHeight + 'px' }" class="text-area">
			<Loadmore class="all" :style="{ height: wrapperHeight + 'px' }" :topMethod="loadTop" @topMethods="loadTop"
			 :bottomMethod="loadBottom" @bottomMethods="loadBottom" :bottomAllLoaded="allLoaded" :autoFill="false"
			 :controlBottom="controlBottom" ref="loadmore" :top="top" :bottom="bottom">
				<view class="uni-list">
					<checkbox-group @change="checkboxChange">
						<label class="uni-list-cell uni-list-cell-pd" v-for="(item, index) in list" :key="item.pono">
							<view class="card">
								<view class="box-content">
									<view class="box-left">
										<checkbox style="transform:scale(0.9)" :value="item.pono" :checked="item.isSelect"></checkbox>
									</view>

									<view class="box-right" @click="onBoxClick(item,index)">
										<view class="box-right-top">
											<view class="box-right-top-left">
												{{item.pono}}
											</view>
											<view class="box-right-top-right">
												{{changeDate(item.addDate)}}
											</view>
										</view>
										<view class="box-right-bottom">
											{{item.supplier_Name}}
										</view>
									</view>
								</view>
							</view>
						</label>
					</checkbox-group>

				</view>
			</Loadmore>
		</view>
		<view style="height: 50px;"></view>

		<view class="box-bottom-style">
			<checkbox-group @change="changeBook" style="margin-left: 10px;">
				<label>
					<checkbox style="transform:scale(0.9)" :checked="allFlag.checked" :value="allFlag.cb" /> 全选
				</label>
			</checkbox-group>
			<view style="margin-right: 10px;">
				<button style="width: 80px; height: 35px; font-size: 14px; color: #FFF; background: #1E90FF;" @click="onShCick()">审核</button>
			</view>
		</view>
		
		<!--对话框显示-->
		<uni-popup ref="popup" type="dialog">
		    <uni-popup-dialog type="input" message="成功消息" :duration="2000" :before-close="true" @close="close" @confirm="confirm"></uni-popup-dialog>
		</uni-popup>
		
	</view>
	
</template>

<script>
	import Loadmore from '@/components/sjpeter-loadmore/loadmore.vue'
	import uniPopupDialog from '@/components/uni-popup/uni-popup-dialog.vue'
	import uniPopup from '@/components/uni-popup/uni-popup.vue'
	
	export default {
		components: {
			Loadmore,
			uniPopupDialog,
			uniPopup
		},
		data() {
			return {
				title: 'Hello',
				list: [],
				ponoList: [],
				allLoaded: false,
				controlBottom: true,
				pageNum: 1,
				wrapperHeight: 0,
				bottom: 0,
				top: 0,
				pageSize: 10,
				allFlag: {
					value: 'cb',
					isSelect: false
				}
			}
		},
		onLoad() {
			let res = wx.getSystemInfoSync()
			this.bottom = res.screenHeight
			this.wrapperHeight = res.screenHeight
		},
		onShow() {
			//_self = this
			let that = this
			setTimeout(function() {
				that.allLoaded = false
				that.getAllOrder(1, 10)
				that.$refs.loadmore.onTopLoaded()
			}, 500)
		},
		methods: {
			checkboxChange: function(e) {
				var items = this.list,
					values = e.detail.value;
				this.ponoList = values
				console.log("左边点击")
				
				// for (var i = 0; i < items.length; i++) {
				// 	const item = items[i]
				// 	//console.log("我选择了："+i+item.isSelect)
				// 	if (values.includes(item.pono)) {
				// 		console.log("我选择了："+item.isSelect)
				// 		this.$set(item, 'checked', true)
				// 	} else {
				// 		this.$set(item, 'checked', false)
				// 	}
				// }

				// //  商品是否全部勾选，判断全选与否状态
				// var offCarArr = []
				// this.list.forEach(item => item.isSelect == true ? offCarArr.push(item) : '')
				// let allChecks = offCarArr.every(item => item.isSelect == true)
				// allChecks ? this.$set(this.allFlag, 'isSelect', true) : this.$set(this.allFlag, 'isSelect', false)

				// for (var i = 0; i < offCarArr.length; i++) {
				// 	console.log(offCarArr[i].isSelect)
				// }
			},

			onBoxClick(item, index) {
				console.log("右边点击")
			},

			//点击审核按钮事件
			onShCick() {
				if (this.ponoList.length > 0) {
					console.log(this.ponoList);
					console.log(this.ponoList.length);
				} else {
					uni.showToast({
						icon: "none",
						title: "请你选择要审核的订单!"
					})
				}
			},

			// 全选或者反选 checkbox 最外层的选择
			changeBook(e) {
				if (e.detail.value.length == 0) {
					this.list.map(item => this.$set(item, 'isSelect', false))
					this.$set(this.allFlag, 'isSelect', false)
				} else {
					this.list.map(item => this.$set(item, 'isSelect', true))
					this.$set(this.allFlag, 'isSelect', true)
				}

				for (var i = 0; i < this.list.length; i++) {
					const item = this.list[i]
					if (item.isSelect) {
						//console.log("JBHDAFAHS")
						this.ponoList.push(item.pono)
					} else {
						this.ponoList.splice(item.pono, i);
					}
				}
			},

			loadTop() {
				console.log("下拉刷新")
				this.list = []
				this.pageNum = 1
				this.pageSize = 10
				this.getAllOrder(this.pageNum, this.pageSize)
				//this.list.push(this.orderList)
				this.$refs.loadmore.onTopLoaded()
			},
			loadBottom() {
				console.log("上拉获取下一页")
				// let more = this.$el.querySelector('.mint-loadmore-bottom')
				// 上拉加载
				this.more() // 上拉触发的分页查询
			},
			more() {
				let that = this
				// 分页查询
				this.pageNum = parseInt(this.pageNum) + 1 // 获得下一页
				this.getAllOrder(this.pageNum, this.pageSize)
				setTimeout(function() {
					//this.list.push(this.orderList)
					//console.log("qqq"+this.list.length)
					that.$refs.loadmore.onBottomLoaded()
				}, 2000)
			},
			//获取所有的订单数据
			getAllOrder(page, pagesize) {
				uni.request({
					url: "http://www.riltemp.top:8292/ErpProject/api/v1/order/getOrder",
					data: {
						page: page,
						pagesize: pagesize
					},
					method: 'POST',
					header: {
						"Content-Type": "application/json;charset=UTF-8"
					},
					success: (res) => {
						uni.hideLoading(); //刷新结束调用
						var okList = []
						//var a = this.order
						for (var i = 0; i < res.data['data'].length; i++) {
							var order = {}
							const od = res.data['data'][i];
							order.pono = od.pono
							order.supplier_Name = od.supplier_Name
							order.addDate = od.addDate
							order.isSelect = false
							okList.push(order)
						}

						this.list = this.list.concat(okList)
						console.log(this.list.length)
					},
					fail: (err) => {
						uni.hideLoading(); //刷新结束调用
						uni.showToast({
							icon: 'none',
							title: '数据加载失败了'
						})
					}
				});
			},

			//时间戳转日期格式 YYYY-mm-dd
			changeDate(value) {
				var date = new Date(value); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
				var Y = date.getFullYear() + '-';
				var M = (date.getMonth() + 1 < 10 ? '' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
				var D = date.getDate() + ' ';
				var h = date.getHours() + ':';
				var m = date.getMinutes() + ':';
				var s = date.getSeconds();
				// + h + m + s
				return Y + M + D;
			},
		}
	}
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		flex-flow: column wrap;
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
		height: 100%;
		width: 100%;
		overflow: scroll;
		display: flex;
		justify-content: center;
		align-self: flex-start;
	}

	.title {
		font-size: 36rpx;
		color: #8f8f94;
	}

	.all {
		width: 100%;
		height: 100%;
		overflow: scroll;
	}

	/* .card {
		height: 100px;
		width: 100%;
		display: flex;
		justify-content: center;
		    align-items: center; 
		background-color: #F1F1F1;
	} */

	/* .card view {
		width: 100%;
	} */



	/* .content {
		width: 100%;
	} */

	.card {
		width: 95%;
		background-color: white;
		margin: 0 auto 15upx auto;
		background: #FFFFFF;
		box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.10);
		border-radius: 5px;
		position: relative;
	}

	.noCard {
		width: 90%;
		height: 200upx;
		margin: auto;
		background-color: white;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #999999;
		box-shadow: 0 0 10upx 0 rgba(0, 0, 0, 0.10);
		border-radius: 10upx;
	}


	.nav {
		position: fixed;
		left: 0;
		top: 0;
		color: white;
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		justify-content: flex-start;
		font-size: 24upx;
		background-color: #1E90FF;
		z-index: 996;
	}

	.searchInput999 {
		width: 90%;
		margin: 0 auto;
		background: white;
		border-radius: 30upx;
		display: flex;
		align-items: center;
		justify-content: center;
		height: 56upx;
	}

	.search999 {
		width: 32upx;
		height: 32upx;
	}

	.searchBox999 {
		width: 56upx;
		height: 56upx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.input999 {
		color: #999;
		width: 80%;
	}

	.box-content {
		padding: 8px;
		font-size: 14px;
		width: 100%;
		display: flex;
		flex-direction: row; //行布局
	}

	.box-left {
		width: 12%;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.box-img {
		width: 35px;
		height: 35px;
	}

	.box-right {
		width: 85%;
		height: 100%;
		display: flex;
		flex-direction: column;
	}

	.box-right-top {
		width: 100%;
		display: flex;
		flex-direction: row;
	}

	.box-right-top-left {
		float: left;
		width: 50%;
	}

	.box-right-top-right {
		text-align: right;
		float: right;
		width: 45%;
	}

	.box-right-bottom {
		margin-top: 20px;
		width: 100%;
	}

	.box-bottom-style {
		padding-left: 5px;
		padding-right: 5px;
		width: 98%;
		height: 50px;
		background: #EEEEEE;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		font-size: 14px;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.gg {
		width: 500px;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}
</style>
