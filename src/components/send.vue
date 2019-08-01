<template>
    
     <div class="send">
         <div style="height:30px;width:100%;"></div>
        
        <div style="position:relative">
            <img src="" alt="选择上传的图片" style="height: 200px;width:242px;border:1px solid black; margin-left:300px;" id="result">
         
                <input type="file" id="file" class=" btn btn-default" style="height: 50px; width: 300px;text-align-last: 0; display:none; " />
            <input type="button" value="上传照片" class="btn btn-default" style="color:#FF3366; border-color:#FF3366;height:48px;width:142px;font-size:20px;border-radius:10px;position:absolute;bottom:0;margin-left:200px;font-weight:bold" @click="load">
        </div>
        <div style="height:30px;width:100%;"></div>
        <div style="height:2px;width:953px;border:2px solid #DCDCDC;margin-left:300px;"></div>
 <div style="height:30px;width:100%;"></div>
 <div  style="margin-left:300px;">
     
      <span style="font-size:28px;color:#666666;height:60px;float:left;">
        标题
      </span>
      <input type="text" class="form-control" style="height:50px; width:345px;border-color:#666666;font-size:28px; margin-left:200px;" v-model="biaoti">
    </div><!-- /input-group -->
    <div style="height:30px;width:100%;"></div>
        <div style="height:2px;width:953px;border:2px solid #DCDCDC;margin-left:300px;"></div>
        <div style="height:30px;width:100%;"></div>

       <div  style="margin-left:300px;">
      <span style="font-size:28px;color:#666666;height:60px;float:left;">
        正文
      </span>
      <textarea name="textbody" id="" style="height:349px;width:400px;border: 1px solid #666666;font-size:16px; margin-left:143px;border-radius:10px;"></textarea>
    </div><!-- /input-group -->
    <div style="height:30px;width:100%;"></div>
    <div style="text-align:center">
    <input type="button"  class="btn btn-default" value="发帖" style="text-align:center;background-color:#FF3366;color:white;height:48px;width:142px;font-size:20px;font-weight:bold;border-radius:10px;" @click="send">
       </div> 
        </div>  
</template>

<script>

export default{
    data(){
        return{
       biaoti:'',
       zhengwen:'',
        };
    },
    methods:{
    load(){
$("#file").click();
//因为input.file的样式不好看，所以通过button来控制input.file的点击，然后Input.file display:none
 var file = document.getElementById("file").files[0];
        if(!/image\/\w+/.test(file.type)) {
            alert("这不是图片文件！请检查！");
            return false;
        }
        var reader = new FileReader();
        //将文件以Data URL形式读入页面  
         reader.readAsDataURL(file);
    reader.onload=function(e)
    {
     $("#result").attr('src',e.target.result);//把reader的dataurl放到img的src中
    }
    
        // var reader = new FileReader();
        // //将文件以Data URL形式读入页面  
        // reader.readAsDataURL(file);
        // reader.onload = function(e) {
        //     var result = document.getElementById("result");
        //     result.innerHTML = '<img src="' + this.result + '" alt=""/>';
          //  }
    },
    send(){
     window.alert(this.biaoti);
    }
}
}
</script>

<style lang="scss" scoped>

</style>