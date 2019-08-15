<template>
<div class="container">
  <div class="app">
    <form action="/user" enctype="multipart/form-data" method="post" @submit.prevent="submit($event)" accept-charset="UTF-8">
    <input type="hidden" name="_method" value="put">
    <div class="title">
      <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>&nbsp;我的设置
    </div>

    <div class="item_bock head_p">
      <div class="head_img">
        <img src="https://avatars3.githubusercontent.com/u/40078051?s=40&v=4" id="result"/>
        <!-- <--图片地址动态绑定-->
      </div>
      <div class="setting_right">
        <input type="button" class="caption" value="更改头像"  @click.stop="uploadHeadImg">
      </div>
      <input type="file" accept="image/*" @change="handleFile" class="hiddenInput" name="putHeadPortrait" />
    </div>

    <div class="name_bock">
      <div class="name">
        用户名
      </div>
      <div class="input-group">
        <!-- <input type="text" class="form-control" placeholder="请输入昵称" aria-describedby="basic-addon1" style="border-radius:10px"> -->
        <el-input type="text" placeholder="请输入昵称" v-model="text" maxlength="10" name="userName">
        </el-input>
      </div>
    </div>

    <div class="gender_bock">
      <div class="gender">
        性别
      </div>
      <div class="radio_button">
        <label><input type="radio" name="gender" value="1" >&nbsp;男生</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		    <label><input type="radio" name="gender" value="2">&nbsp;女生</label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <label><input type="radio" name="gender" value="3">&nbsp;保密</label>
        
        <!-- <el-radio v-model="radio" label="1" fill="#E666A6">男生</el-radio>
        <el-radio v-model="radio" label="2" fill="#E666A6">女生</el-radio>
        <el-radio v-model="radio" label="3" fill="#E666A6">保密</el-radio> -->
      </div>
    </div>

    <div class="person_profile">
      <div class="profile">
        个人简介
      </div>
      <div class="text">
        <!-- <textarea rows="5" cols="40" name="text" value="text" placeholder=" 请输入个人简介" style="border-radius:10px">
        </textarea> -->
        <el-input type="textarea" placeholder="请输入个人简介" v-model="textarea" maxlength="120" show-word-limit rows=5 name="personalProfile">
        </el-input>

      </div>
    </div>

    <div class="birthday_bock">
      <div class="birthday">
        出生日期
      </div>
      <div class="date">
        <div class="block">
          <el-date-picker
            v-model="value1"
            type="date"
            placeholder="选择日期"
            name="putBirthday">
          </el-date-picker>
        </div>
      </div>
    </div>

    <div class="submit">
          <input type="submit" class="btn btn-default" value="保存" style="height: 40px;width:100px;color: #fff;font-size: 18px;border-radius:18px;background-color: rgb(230, 102, 166);border-style:solid;">
    </div>
</form>
</div>
</div>
  
</template>

<script>
  export default{
    data(){
        return{
            userInfo:{
                avatar:'https://avatars3.githubusercontent.com/u/40078051?s=40&v=4'
            },
            text:'',
            textarea: '',
            value1: '',
            radio:'1'
        }
    },
    
    methods:{
        uploadHeadImg: function () {
          $(".hiddenInput").click();
            // this.$el.querySelector('.hiddenInput').click()
        },
    // 将头像显示
        handleFile: function (e) {
        let $target = e.target || e.srcElement
        let file = $target.files[0]
        var reader = new FileReader()
        reader.onload = (data) => {
            
            let res = data.target || data.srcElement
            // this.userInfo.avatar = res.result
            $("#result").attr('src',res.result);
        }
        reader.readAsDataURL(file)
        },
        submit:function(e){
          var formData=new FormData(e.target);
          this.$http.post('/post',formData).then(function(res){
            this.$router.push('/header');
          },function(res){
            window.alert("失败")
          })
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
  background-color: rgba(247, 243, 243, 0.87);
  // height:1100px;
  width:1550px;
}
.app{
  background-color: #fff;
  // height:1100px;
  width:1150px;
  margin-left:180px;
}
.title{
  font-size:30px;
  padding-top:20px;
  padding-bottom:5px;
  width:900px;
  margin-left:100px;
  // border-bottom: 2px solid #f7f7f7;
  color:#797878;
}
.item_bock {
  display: flex;
  align-items: center;
  // justify-content: space-between;
  height:200px;
  width: 900px;
  padding:0px 24px 0px 38px;
  margin-top:15px;
  margin-left:100px;
  border-bottom: 2px solid #f7f7f7;
  background: #fff;
}
.head_p {
  height:132px;
}
.head_img{
  margin-left:18%;
  height: 90px;
}
.head_img img{
  width:90px;
  height:90px;
  border-radius:50px;
  
}
.setting_right{
  display: flex;
  height: 37px;
  justify-content: flex-end;
  align-items: center;
  margin-left:80px;
  width:200px;
}
.hiddenInput{
  display: none;
}
.caption {
  color: rgb(230, 102, 166);
  font-size: 18px;
  height: 40px;
  border-radius:18px;
  background-color: #fff;
  border-color:rgb(230, 102, 166);
}
.caption:hover{
  background-color: rgba(245, 228, 235, 0.5);
}
.name_bock{
  display: flex;
  align-items: center;
  height:180px;
  width: 900px;
  margin-left:100px;
  border-bottom: 2px solid #f7f7f7;
  .name{
    margin-left:190px;
    font-size:20px;
    color:#797878;
  }
  .input-group{
    margin-left:220px;
    .form-control{
      background-color: rgba(240, 240, 240, 0.781);
    }
  }
}
.gender_bock{
  display: flex;
  align-items: center;
  height:180px;
  width: 900px;
  margin-left:100px;
  border-bottom: 2px solid #f7f7f7;
  .gender{
    margin-left:190px;
    font-size:20px;
    color:#797878;
  }
  .radio_button{
    margin-left:240px;
    font-size:16px;
    label{
      font-weight:400;
    }
  }
}
.person_profile{
  display: flex;
  align-items: center;
  height:180px;
  width: 900px;
  margin-left:100px;
  border-bottom: 2px solid #f7f7f7;
  .profile{
    margin-left:190px;
    font-size:20px;
    color:#797878;
  }
  .text{
    margin-left:200px;
    font-size:14px;
    border-radius:10px;
    .el-textarea{
      width:300px;
      height:115px;
      // background-color: rgba(240, 240, 240, 0.781);
      // border-color:rgb(212, 211, 211);
    }
  }
}
.birthday_bock{
  display: flex;
  align-items: center;
  height:180px;
  width: 900px;
  margin-left:100px;
  .birthday{
    margin-left:190px;
    font-size:20px;
    color:#797878;
  }
  .date{
    margin-left:200px;
    font-size:14px;
    .input{
      border-radius:5px;
      background-color:rgba(240, 240, 240, 0.781) ;
    }
  }
}
.submit{
  height:160px;
  width: 900px;
  margin-left:290px;
  margin-top:10px;
}
</style>