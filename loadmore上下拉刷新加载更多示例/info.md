
上下拉刷新加载更多，适用于多端

属性说明
    | 属性名 | 类型 | 默认值 | 说明 |
    | ------------- | ------------- | ------------- | ------------- |
    | topMethod | Function | 无 | 用于回调，上拉刷新回调 |
    | bottomMethod | Function | 无 | 用于回调，下拉刷新回调 |
    | bottomAllLoaded | Boolean | false | 控制底部信息切换显示 |
    | controlBottom | Boolean | true | 控制底部信息是否显示 |
    | top | Number | 无 | 组件距顶部的高度 |
    | bottom | Number | 无 | 组件距底部的高度 |
    | noMoreText | string | 没有更多数据了 | 底部说明文字 |

事件说明
    | 事件名 | 说明 | 返回值 |
    | ------------- | ------------- | ------------- |
    | topMethods | Function | 用于回调，上拉刷新回调 |
    | bottomMethods | Function | 用于回调，下拉刷新回调 |

属性事件
    | 事件名 | 说明 | 返回值 |
    | ------------- | ------------- | ------------- |
    | onTopLoaded | Function | 用于回复顶部位置 |
    | onBottomLoaded | Function | 用于回复底部位置 |

this.$refs.loadmore.onTopLoaded()
that.$refs.loadmore.onBottomLoaded()

在web版上topMethod可以直接使用，无需事件回调topMethods，而微信小程序着需要分开写；bottomMethods 同理