<template>
    <div style="height:500px;width:500px">
        <div id="tabCons">
            <div class="tabCon">
                内容1
            </div>
            <div class="tabCon" style="display:none;">
                内容2
            </div>
        </div>
        <!--页单-->
        <ul id="tab" class="tab">
            <li class="cur">NFC标签扫描</li>
            <li>标签编号查询</li>
        </ul>
    </div>
</template>

<script>
export default{
    data(){

    },
    mounted:function(){
        $(".tab li").click(function(){
        $(this).addClass("cur").siblings().removeClass("cur");
        $("#tabCons .tabCon").hide().eq($(this).index()).show();
    });
    }
}

</script>

<style lang="scss" scoped>
    .tab{
        width:100%;
        position:absolute;
        bottom:0;
        margin:0;
        list-style: none;
        background-color: #eee;
        overflow: hidden;
        padding-left: 0px;
    }
    .tab li{
        float: left;
        width: 50%;
        height: 60px;
        line-height: 60px;
        text-align: center;
    }
    .tab li.cur {
        border: none;
        color: #c40001;
        margin-left: 0;
        background-color: #fff;
        border-top: 3px solid #c40001;
    }
    .tabCon{
        width:100%;
        height:100%;
    }
</style>
