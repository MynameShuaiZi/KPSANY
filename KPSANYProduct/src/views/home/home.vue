<template>
    <div class='home'>
        <swipe></swipe>
        <sort-list></sort-list>
        <part-show-list></part-show-list>
    </div>
</template>

<script>
import swipe from './swipe';
import sortList from './sortList';
import partShowList from './partShowList';

export default {
    name:'home',
    props:{

    },
    components:{
        swipe,
        sortList,
        partShowList
    },
    data(){
        return {
        }
    },
    methods:{

    },
    mounted(){

    }
}
</script>

<style lang="less" rel="stylesheet/less">

</style>
