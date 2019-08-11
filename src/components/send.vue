<template>
    
     <div class="send" style="width:1600px;">
         <div style="height:30px;width:100%;"></div>
        <form action="/post" enctype="multipart/form-data" method="post">
      
        <div style="position:relative">
            <img src="" alt="选择上传的图片" style="height: 200px;width:242px;border:1px solid black; margin-left:300px;" id="result">
         
             
           
        <input type="button" value="上传照片" class="btn btn-default" style="color:#FF3366; border-color:#FF3366;height:48px;width:142px;font-size:20px;border-radius:10px;position:absolute;bottom:0;margin-left:200px;font-weight:bold" @click.stop="load">
        <input type="file" id="file" class=" btn btn-default" accept="image/*" style="height: 50px; width: 300px;text-align-last: 0; display:none; " @change="fileinput" name="postImage" />
     </div>
     
        <div style="height:30px;width:100%;"></div>
        <div style="height:2px;width:953px;border:2px solid #DCDCDC;margin-left:300px;"></div>
         <div style="height:30px;width:100%;"></div>
         <div  style="margin-left:300px;">
     
                   <span style="font-size:28px;color:#666666;height:60px;float:left;">
                         标题
                     </span>
      <input type="text" class="form-control" style="height:50px; width:345px;border-color:#666666;font-size:28px; margin-left:200px;"  name="title">
          </div><!-- /input-group -->
    <div style="height:30px;width:100%;"></div>
        <div style="height:2px;width:953px;border:2px solid #DCDCDC;margin-left:300px;"></div>
        <div style="height:30px;width:100%;"></div>

       <div  style="margin-left:300px;">
      <span style="font-size:28px;color:#666666;height:60px;float:left;">
        正文
      </span>
      <textarea  id="" style="height:349px;width:400px;border: 1px solid #666666;font-size:16px; margin-left:143px;" name="content"></textarea>
    </div><!-- /input-group -->
    <input type="text" name="userName" v-model="userName" style="display:none;" >
    <input type="text" name="postDate" v-model="date" style="display:none;">
    <div style="height:30px;width:100%;"></div>
    <div style="text-align:center">
    <input type="submit"  class="btn btn-default" value="发帖" style="text-align:center;background-color:#FF3366;color:white;height:48px;width:142px;font-size:20px;font-weight:bold;border-radius:10px;" >
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
          getUsername(){

    this.userName=this.$cookie.get('user');
},
//     send()
//     {

// var title=this.title;
// var content=this.content;
// var userName= this.$cookie.get('user');
// var Date= new Date();

// var image=document.getElementById("file").files[0];
// var post=new FormData();
// post.append('username',userName);
// post.append('title',title);
// post.append('content',content);
// post.append('postimage',image);

//     this.$http.post('/post',post).then(function(res){
//     window.alert("发布成功");
//     console.log(res.body);
    
//     this.$router.push('/header');
    
// })

//     },
  fileinput(e){
    
var file = document.getElementById("file").files[0];
this.postImg=file;
console.log(this.postImg);
  var reader = new FileReader();
   reader.readAsDataURL(file);
 reader.onload=function(e)
     {
   
    $("#result").attr('src',e.target.result);//把reader的dataurl放到img的src中
 
     }
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

getTime(){
  return new Date();
}
// let $target = e.target;
// let file =$target.files[0];
// var reader = new FileReader();
//  reader.readAsDataURL(file);
//  reader.onload=(data)=>{
//    let res =data.target;
//    this.postImg.avatar=data.result;
//  }


        // var reader = new FileReader();
        // //将文件以Data URL形式读入页面  
        // reader.readAsDataURL(file);
        // reader.onload = function(e) {
        //     var result = document.getElementById("result");
        //     result.innerHTML = '<img src="' + this.result + '" alt=""/>';
          //  }
    
}
}
</script>

<style lang="scss" scoped>

</style>