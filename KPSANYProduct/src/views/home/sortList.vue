<template>
    <div class='sortList'>
        <ul class='listItem'>
            <li class='item' v-for='(item,index) in list' :key='index'>
                <div class='itemCircle'>
                    <i class='iconfont icon-truck'></i>
                </div>
                <p class='itemText'>{{item.text}}</p>
            </li>
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">

export default {
    name:'sortList',
    props:{

    },
    components:{
    },
    data(){
        return {
            list:[
                {
                    icon:'',
                    text:'微型挖机'
                },
                {
                    icon:'',
                    text:'压路机'
                },
                {
                    icon:'',
                    text:'泵车'
                },
                {
                    icon:'',
                    text:'全部分类'
                },
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
.sortList{
    width:100%;
    height:8rem;
    .listItem{
        display:flex;
        justify-content: space-around;
        width:100%;
        height:100%;
        align-items: center;
        .item{
            .itemText{
                text-align: center;
            }
            .itemCircle{
                width:4rem;
                height:4rem;
                background:#E70011;
                border-radius:50%;
                position:relative;
                margin-bottom:0.5rem;
                .iconfont{
                    position:absolute;
                    font-size:40px;
                    color:#FFFFFF;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%,-50%);
                }
            }
        }
    }
}
</style>