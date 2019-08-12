<template>
<div class="container">
  <form action="/post" enctype="multipart/form-data" method="post">
  <div class="send">
    <div style="height:100px;width:100%;" class="title">
      <svg t="1565246592302" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2530" width="30" height="30"><path d="M817.657468 775.758196 454.710202 664.079674l362.949312-418.788062-474.627834 418.788062L63.836911 552.403199 957.255877 77.775364 817.657468 775.758196 817.657468 775.758196zM454.710202 943.275467 454.710202 747.839333l111.673405 55.838749L454.710202 943.275467 454.710202 943.275467z" p-id="2531" fill="#797878"></path></svg>
      发帖子
    </div>
        
    <div style="position:relative">
          <img src="https://avatars3.githubusercontent.com/u/40078051?s=40&v=4" alt="选择上传的图片" style="height: 200px;width:242px;border:1px solid rgba(206, 204, 204, 0.87);margin-left:250px;" id="result">
          <input type="button" value="上传照片" class="btn btn-default" style="color:#EC69AB; border:1.5px solid #EC69AB;height:48px;width:142px;font-size:20px;border-radius:30px;position:absolute;bottom:0;margin-left:220px;font-weight:bold" @click.stop="load">
          <input type="file" id="file" class=" btn btn-default" accept="image/*" style="height: 50px; width: 300px;text-align-last: 0; display:none; " @change="fileinput" name="postImage" />
    </div>

    <div style="height:30px;width:100%;"></div>
        <div style="height:1px;width:953px;border:1px solid #f7f7f7;margin-left:100px;"></div>
          <div style="height:30px;width:100%;"></div>
          <div  style="margin-left:250px;">
            <span style="font-size:28px;color:#666666;height:60px;float:left;">
                  标题
            </span>
          <input type="text" class="form-control" style="height:50px; width:400px;border-color:#666666;font-size:28px; margin-left:205px;"  placeholder="请输入标题" name="title">
        </div>
        <div style="height:30px;width:100%;"></div>
        <div style="height:1px;width:953px;border:1px solid #f7f7f7;margin-left:100px;"></div>
        <div style="height:30px;width:100%;"></div>

        <div  style="margin-left:250px;">
        <span style="font-size:28px;color:#666666;height:60px;float:left;">
          正文
        </span>
        <textarea name="content" id="" style="height:349px;width:400px;border: 1px solid #666666;font-size:16px; margin-left:143px;" placeholder="请输入正文内容"></textarea>
    </div>
    <input type="text" name="userName" v-model="userName" style="display:none;" >
    <input type="text" name="postDate" v-model="date" style="display:none;">
    <div style="height:30px;width:100%;"></div>
      <div style="margin-left:250px">
        <input type="submit"  class="btn btn-default" value="发帖" style="text-align:center;background-color:#EC69AB;color:white;height:48px;width:142px;font-size:20px;font-weight:bold;border-radius:30px;">
      </div> 
    </div>  
  </form>
</div>
</template>

<script>

export default{
    data(){
        return{
        userName:'',
        date:'',
        dialogImageUrl: '',
        dialogVisible: false
        };
    },
 created(){
 
this.getUsername();
this.formatDate(new Date());
console.log(this.date);
    },
    methods:{
    load(){
       $("#file").click();
        //因为input.file的样式不好看，所以通过button来控制input.file的点击，然后Input.file display:none

          },
    
      fileinput(e){
      
  var file = document.getElementById("file").files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
  reader.onload=function(e)
      {
      this.postImg=e.target.result;
      $("#result").attr('src',e.target.result);//把reader的dataurl放到img的src中
  
      }
      },
 getUsername(){

    this.userName=this.$cookie.get('user');
},
formatDate(date)
{
  var y = date.getFullYear();  
    var m = date.getMonth() + 1;  
    m = m < 10 ? ('0' + m) : m;  
    var d = date.getDate();  
    d = d < 10 ? ('0' + d) : d;  
    var h = date.getHours();  
    var minute = date.getMinutes();  
    minute = minute < 10 ? ('0' + minute) : minute; 
    var second= date.getSeconds();  
    second = minute < 10 ? ('0' + second) : second;  
    this.date= ''+ y + '-' + m + '-' + d+' '+h+':'+minute+':'+ second; 

},

}
}
</script>



<style lang="scss" scoped>
.container{
  background-color: rgba(247, 243, 243, 0.87);
  height:950px;
  width:1550px;
}

.send{
  background-color: #fff;
  height:950px;
  width:1150px;
  margin-left:180px;
}

.title{
  font-size:30px;
  padding-top:20px;
  padding-bottom:5px;
  margin-left:100px;
  color:#797878;
}


</style>