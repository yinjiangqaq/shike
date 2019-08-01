<template>
    <div>
        <div class="header" style="margin:0;padding:0;height:200px;">
            <!-- &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;欢迎登陆 -->
            <img src="../images/logo2.png" alt="logo" >
        </div>

        <div class="box">
            <div class="h2"><h2 style="text-align:center">登录</h2></div>
            <br>

            <form class="form-horizontal">    
            <div class="form-group">
            <!-- <label for="inputEmail3" class="col-sm-2 control-label">用户名</label> -->
            <div class="col-sm-10 form-inline">
            <span class="glyphicon glyphicon-user"></span>
            <input type="text" id="id" class="form-control" v-model="username" placeholder="账号" autofocus required>
            </div>
            </div>

            <div class="form-group">
            <!-- <label for="inputPassword3" class="col-sm-2 control-label">密码</label> -->
            <div class="col-sm-10 form-inline">
            <span class="glyphicon glyphicon-lock"></span>
            <input type="password" class="form-control" v-model="password" placeholder="密码" required>
            </div>
            </div>
            

            <router-link to="/forgetcode" class="forgetPassword">忘记密码</router-link>
            <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <router-link to="/register" class="register">立即注册</router-link>
            <br>

            <div style="text-align:center">
               <router-link to="/header"> <button type="summit" class="btn btn-primary" @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;录</button></router-link>
            </div>    
            </form>        
        </div>

        <div class="footer"></div>
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
            // if(this.username==''){
            //     alert('账号不能为空');
            //     // this.errorTip=true;
            //     // this.errorTip="账号不能为空";
            //     // return;
            // }
            // else if(this.password==''){
            //     alert('密码不能为空');
            //     // this.errorTip=true;
            //     // this.errorTip="密码不能为空";
            //     // return;
            // }
            // else{
            //     Toast({
            //     message:'登录成功',
            //     duration:1000,
            //     position:'top',
            //     iconClass: 'glyphicon glyphicon-ok',
            //     className:'mytoast',
            // });
            if((this.username!='')&&(this.password!='')){
                this.$router.push({name:'main'})
            }
             this.$router.replace('/header');
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
    height:470px;
}

.h2{
    margin-top:20px;
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
    padding-left:480px;
    padding-right:190px;
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
    height:40px;
    background-color: #f7f7f7;
}
</style>







