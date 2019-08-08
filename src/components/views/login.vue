<template>
    <div>
        <div class="header" style="margin:0;padding:0;height:200px;">
      
            <img src="../../images/header.png" alt="logo" >
        </div>

        <div class="box">
            <div class="h2"></div>
            <br>

            <form class="form-horizontal">    
            <div class="form-group">
            <div class="col-sm-10 form-inline">
            <span class="glyphicon glyphicon-user"></span>
            <input type="text" id="id" class="form-control" v-model="username" placeholder="用户名或邮箱" autofocus required style="width:200px;">
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
               <button type="summit" class="btn btn-primary" style="width:200px;" @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;录</button>
            </div>   
          
             <div  class="col-sm-10 form-inline" style="text-align:center;margin-left:105px;margin-top:10px;" >
            <router-link to="/forget" class="forgetPassword">忘记密码</router-link>
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <router-link to="/register" class="register">立即注册</router-link>
            
             </div>
           
            </form>        
        </div>

        <div class="footer"></div>
          <router-view></router-view> 
    </div>

</template>

<script>
import { Toast } from 'mint-ui';

export default{
    data(){
        return{
            username:'',
            password:''
        };
    },
    methods:{
        login(){
var userName=this.username;
 var password=this.password;       
            if(userName==''){
                alert('账号不能为空');
                // this.errorTip=true;
                // this.errorTip="账号不能为空";
                // return;
            }
            else if(password==''){
                alert('密码不能为空');
                // this.errorTip=true;
                // this.errorTip="密码不能为空";
                // return;
            }else{


this.$http.post('/userLogin',{userName,password},{emulateJSON:true}).then(function(res){
    window.alert("发送成功");
    console.log(res.body);
     if(res.body===true)
    {
     //this.$cookie.set('loginuser',res.body,1);
    this.$router.push('/header');
    }
})




            }
            // else{
            //     Toast({
            //     message:'登录成功',
            //     duration:1000,
            //     position:'top',
            //     iconClass: 'glyphicon glyphicon-ok',
            //     className:'mytoast',
            // });
           
            
            }
        }
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







