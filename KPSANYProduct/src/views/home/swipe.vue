<template>
    <div class='swipe'>
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img class='swipeImg' :src='image' />
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
import { Swipe, SwipeItem } from 'vant';

export default {
    name:'swipe',
    props:{

    },
    components:{
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem,
    },
    data(){
        return {
            images:[
                "http://www.tansun.com.cn/tyhy/resource/cms/2018/02/nianhuibanner3.jpg",
                "http://www.tansun.com.cn/tyhy/resource/cms/2018/05/IDCnew.jpg",
                "http://www.tansun.com.cn/tyhy/resource/cms/2017/02/2017022815535559388.jpg",
                "http://www.tansun.com.cn/tyhy/resource/cms/2016/08/2016081616415161821.jpg",
            ]
        }
    },
    methods:{

    },
    mounted(){

    }
}
</script>

<style lang="less" rel="stylesheet/less">
.swipe{
    .swipeImg{
        width:100%;
        height:10rem;
    }
}
</style>
