<template>
    <div class='wheader'>
         <div class='logo' @click='backHome'>
             <img src="../../assets/image/logo.jpg" alt="">
         </div>
         <div class='star' @click='star'>
             + 关注
         </div>
    </div>
</template>

<script type="text/ecmascript-6">

export default {
    name:'wheader',
    props:{

    },
    components:{
        
    },
    data(){
        return {

        }
    },
    methods:{
        backHome(){
            this.$router.push("/")
        },
        star(){
            //跳入关注的页面
        }
    },
    mounted(){

    }
}
</script>

<style lang="less" rel="stylesheet/less">
.wheader{
    height:3rem;
    width:100%;
    background: #E70013;
    display:flex;
    justify-content: space-between;
    line-height:3rem;
    .logo{
        margin-left:0.5rem;
        img{
            width:4rem;
            height:2rem;
            vertical-align: middle;
        }
    }
    .star{
        color:#FFFFFF;
        margin-right:0.5rem;
    }
}
</style>