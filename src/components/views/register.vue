<template>
    <div>
          <div class="header" style="margin:0;padding:0;height:200px;">
            <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎登陆 -->
            <img src="../../images/header.png" alt="logo" >
        </div>

        <div class="box">
            <div class="h2"></div>
            <form class="form-horizontal">    
            <div class="form-group">
            <div class="col-sm-10 form-inline">
            <span class="glyphicon glyphicon-user"></span>
            <input type="text" id="id" class="form-control" v-model="userName" placeholder="用户名" autofocus required style="width:200px;">
            </div>
            </div>
            <div style="height:40px;width:100%"></div>
             <div class="form-group">
            <div class="col-sm-10 form-inline">
            <span class="glyphicon glyphicon-envelope"></span>
            <input type="text" id="id" class="form-control" v-model="email" placeholder="邮箱" autofocus required style="width:200px;">
            </div>
            </div>
            <div style="height:40px;width:100%"></div>
            <div class="form-group">
            <div class="col-sm-10 form-inline">
            <span class="glyphicon glyphicon-lock"></span>
            <input type="password" class="form-control" v-model="password" placeholder="密码" required  style="width:200px;">
            </div>
            </div>
            
             <div style="height:40px;width:100%"></div>
              <div  class="col-sm-10 form-inline" style="text-align:center;margin-left:105px;">
               <el-button :plain="true" style="width:200px;" @click="register">注&nbsp;&nbsp;&nbsp;&nbsp;册</el-button>
            </div>   
          
            
           
            </form>        
        </div>

        <div class="footer"></div>
     
    </div>
</template>
<script>

export default {
    data(){
return{
    
userName:'',
password:'',
email:'',
};
    },
    methods:{
register(){
    var userName=this.userName;
    var password=this.password;
    var email=this.email;

    if(userName==''){
        this.$message({
                    showClose: true,
                    message: '账号不能为空',
                    type: 'error'
                })
    }else if(email==''){
        this.$message({
                    showClose: true,
                    message: '邮件不能为空',
                    type: 'error'
                })
    }else if(password==''){
        this.$message({
                    showClose: true,
                    message: '密码不能为空',
                    type: 'error'
                })
    }

    this.$http.post('/user',{userName,password,email},{emulateJSON:true}).then(function(res){
  
    console.log("发送成功");
    window.alert("发送成功");
          this.$router.push('/header');
    },function(res){
        window.alert("发送失败");
       
        });
   
 //发送get请求
               
}
    },
}
</script>
<style lang="scss" scoped>
.header{
    font-size:30px;
    padding-top:30px;
    background-color: #f7f7f7;
    height:80px;
    line-height: 40px;
}

.box{
    background-color: #fff;
    height:370px;
}

.h2{
    margin-top:20px;
    height: 40px;
}

.form-horizontal{
    margin-bottom:10px;
}

.form-control{
    width:40%;
}

.form-group{
    margin:0 auto;
    text-align: center;
    padding-left:170px;
}

.forgetPassword{
    color:black;
    font-size:15px;
    padding-right:60px;
   
}

.forgetPassword:hover{
    color:blue;
}

.register{
    color:black;
    font-size:15px;
    /* padding-left:210px; */
}

.register:hover{
        color:blue;
}

.btn_btn-default{
        width:10%;
}

.footer{
    height:140px;
    background-color: #f7f7f7;
}
</style>
