<template>
    <div class="container">
        <div class="app1">
            <div class="title">
                <span class="glyphicon glyphicon-home" aria-hidden="true"></span>&nbsp;我的主页
            </div>
            <div class="userinfo">
                <div class="image">
                    <img src="../images/personphoto.jpg" alt="">
                </div>
                <div class="username">
                    <div class="nickname">
                        用户昵称
                    </div>
                    <div class="introduction">
                        个人简介
                    </div>
                </div>
                <div class="follow">
                    <div class="follower">
                        <div class="follow_word">
                            关注数
                        </div>
                        <div class="follow_number">
                            xxx
                        </div>
                    </div>
                    <div class="fan">
                        <div class="fan_word">
                            粉丝数
                        </div>
                        <div class="fan_number">
                            xxx
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="app2">
            <div class="nav_bar">
                <ul class="nav nav-tabs">
                    <li role="presentation" data-toggle="tab" class="active"><router-link to="/header/personalhomepage/snack" class="router_link"><span class="glyphicon glyphicon-th-list" aria-hidden="true"></span>&nbsp;零食帖</router-link></li>
                    <li role="presentation" data-toggle="tab"><router-link to="/header/personalhomepage/myfavourite" class="router_link"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span>&nbsp;我的喜爱</router-link></li>
                    <li role="presentation" data-toggle="tab"><router-link to="/header/personalhomepage/dynamic" class="router_link"><span class="glyphicon glyphicon-bell" aria-hidden="true"></span>&nbsp;动态</router-link></li>
                </ul>
            </div>
            
                <router-view></router-view>

            <div class="block">
            <el-pagination
                layout="prev, pager, next"
                :total="50">
            </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            activeName:'first'
        }
    }
}
</script>

<style lang="scss" scoped>
.container{
  background-color: rgba(247, 243, 243, 0.87);
  height:1200px;
  width:1550px;
}

.app1{
  background-color: #fff;
  height:250px;
  width:1150px;
  margin-left:180px;
  border-radius:0 0 5px 5px;
}

.app2{
  background-color: #fff;
  height:900px;
  width:1150px;
  margin-left:180px;
  margin-top:50px;
  border-radius:5px 5px 0 0;

  .nav_bar{
      li{
          height:50px;
          width:200px;
          font-size:20px;
      }
      
      .router_link{
          height:50px;
          width:200px;
          padding-left:50px;
      }
      router-link:active{
          color:rgb(230, 102, 166);
      }
  }
}

.title{
  font-size:30px;
  padding-top:20px;
  padding-left:100px;
  color:#797878;
}

.userinfo{
  display: flex;
  align-items: center;
  margin-top:10px;
}

.image{
    img{
        width:80px;
        height:80px;
        border-radius:40px;
        margin-top:30px;
        margin-left:100px;
        border-color:rgba(247, 243, 243, 0.87);
        border:2px solid rgba(206, 204, 204, 0.87);
        }
}

.username{
    margin-left:50px;
    margin-top:20px;
    .nickname{
        font-size:20px;
        font-weight:bold;
    }
    .introduction{
        margin-top:5px;
    }
}

.follow{
  display: flex;
  align-items: center;
  margin-left:550px;
  margin-top:20px;
  .follower{
      .follow_word{
          font-size:20px;
      }
      .follow_number{
          margin-top:5px;
          margin-left:20px;
      }
  }
  .fan{
      margin-left:50px;
      .fan_word{
          font-size:20px;
      }
      .fan_number{
          margin-top:5px;
          margin-left:20px;
      }
  }
}

.block{
    margin-left:400px;
    margin-top:30px;
}


    
</style>

