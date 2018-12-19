<template>
    <div class='partShowList'>
        <div class='list' v-for='(item,index) in list' :key='index'>
            
        </div>
    </div>
</template>

<script type="text/ecmascript-6">

export default {
    name:'partShowList',
    props:{
        
    },
    components:{
    },
    data(){
        return {
            list:[
                {
                    title:'四川现代专区',
                    banner:require('../../assets/image/wajueji.jpg'),
                    item1:require('../../assets/image/pipe.jpg'),
                    item1:require('../../assets/image/pipe.jpg')
                },
                {
                    title:'半挂车专区',
                    banner:require('../../assets/image/wajueji.jpg'),
                    item1:require('../../assets/image/pipe.jpg'),
                    item1:require('../../assets/image/pipe.jpg')
                },
                {
                    title:'乘龙专区',
                    banner:require('../../assets/image/wajueji.jpg'),
                    item1:require('../../assets/image/pipe.jpg'),
                    item1:require('../../assets/image/pipe.jpg')
                },
                {
                    title:'H7专区',
                    banner:require('../../assets/image/wajueji.jpg'),
                    item1:require('../../assets/image/pipe.jpg'),
                    item1:require('../../assets/image/pipe.jpg')
                }
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
.partShowList{
    width:100%;
    height:100%;
    .list{

    }
}
</style>