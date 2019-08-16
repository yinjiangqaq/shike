<template>
    <div>
        <div class="header" >
            <img src="../../images/header.png" alt="" class="header_image">
            <div class="subheader" display:inline>
                <div class="blurheader">
                </div>
                 <div class="logging-detail">
                <!-- 亲爱的&nbsp;{{userName}}&nbsp;欢迎访问食刻 -->
                </div>
                <router-link to="/header">
                    <div class="aboutus">
                        首页
                    </div>
                </router-link>
                <div class="dropdown">
                    <a class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                        <img src="../../images/personphoto.jpg" alt=""  class="personphoto">
                        <span class="caret"></span>
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenu1">
                        <li class="content"><router-link to="/header/personalhomepage"><span class="glyphicon glyphicon-user" aria-hidden="true"></span>&nbsp;&nbsp;&nbsp;我的主页</router-link></li>
                        <li role="separator" class="divider"></li>
                        <li class="content"><router-link to="/header/setting"><span class="glyphicon glyphicon-cog" aria-hidden="true"></span>&nbsp;&nbsp;&nbsp;我的设置</router-link></li>
                        <li role="separator" class="divider"></li>
                        <li class="content"><router-link to="/"><span class="glyphicon glyphicon-home" aria-hidden="true"></span>&nbsp;&nbsp;&nbsp;退出登录</router-link></li>
                    </ul>
                </div>
                <router-link to="/header/send">
                    <div class="publishbutton">
                        <h5>发布</h5>
                    </div>
                </router-link>
            </div>

            <router-link class="rank" to="/header/rank">
                <span class="glyphicon glyphicon-stats" aria-hidden="true">&nbsp;排行榜</span>
            </router-link>
            
            <div class="search">
                <form class="navbar-form navbar-left" role="search">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="请输入你想查找的零食" style="width:240px" v-model="searchText">
                    </div>
                    <a href="#">
                        <button type="submit" class="glyphicon glyphicon-search" @click="search">
                        </button>
                    </a>
                </form>       
            </div>
            
        </div>

        <div class="display">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            userName:'',
            backgroundImage:'url('+require('../../images/header.png')+')',
            searchText:'',
           
        }
    },
       created(){
this.getUsername();
//  var userID=this.$cookie.get('user');
// this.$http.post('',{userID,{emulateJSON:true}).then(function(res){

// });
    },

    methods:{
getUsername(){

    this.userName=this.$cookie.get('user');
},
search(){
this.$http.post('/',{searchText},{emulateJSON:true}).then(function(res){
    window.alert("发送成功");
    this.searchText='';
})   
}
    }
}
</script>

<style lang="scss" scoped>

.header{
    position:absolute;
    height:200px;
    width:100%;
}

.subheader{
    position:absolute;
    height:30%;
    width:100%;
    // background-color: #fff;
}

.blurheader{
    
    background-color: white;
    opacity: 0.3;
    height:100%;
    width:100%;
}

.aboutus{
    font-size:18px;
    margin-left:66%;
    position:absolute;
    top:25%;
    text-decoration: none;
    router-link{
        text-decoration: none;
        router-link:active{
            color:#fff;
        }
    }
}
.logging-detail{
    color: black;
    font-size: 15px;
    margin-left: 40%;
    top: 10%;
    position: absolute;
}
a{
    color:white;
    font-weight:bold;
    // opacity:1
}

.btn-default{
    background: transparent;
    border:none;
    height:100%
}

.btn{
    border-radius: 0px;
}

.btn-default:hover{
    background-color: rgb(161, 185, 231);
}

.dropdown{
    position:absolute;
    top:0%;
    margin-left:74%;
    height:100%;
    .glyphicon{
        color:rgb(230, 102, 166);
    }
}

.personphoto{
    // margin-left:78%;
    height:35px;
    width:35px;
    // position:absolute;
    top:20%;
    margin-top:5px;
    border-radius:17.5px;
}

.publishbutton{
    position:absolute;
    height:65px;
    width:80px;
    background-color: rgb(230, 102, 166);
    margin-top:-4%;
    margin-left:84%;
    border-radius:0px 0px 10px 10px;
    text-align: center;
    h5{
        color:white;
        font-size:18px;
        font-weight:bold;
        margin-top:30%;
    }
}

.publishbutton:hover{
    background-color: rgb(236, 106, 182) ;
}

.header_image{
    position:absolute;
    margin-top:0px;
    margin-left:0px;
    border-radius:5px;
}

.input-group{
    margin-left:70%;
    margin-top:8.5%;
}

.input-group-btn{
    background-color: #fff;
    height:20px;
}

.rank{
    position:absolute;
    margin-top:8.8%;
    margin-left:65%;
    height:16%;
    width:6%;
    border-radius:4px;
    background-color: rgba(255, 255, 255, 0.925);
    
    .glyphicon{
        font-weight:bold;
        margin-top:8px;
        margin-left:7px;
        color:rgb(248, 128, 188);
    }
}

.rank:hover{
    background-color: #fff;
}

.search{
    position:absolute;
    margin-top:8%;
    margin-left:70.3%;
    a{
        bottom: rgba(255, 255, 255, 0.925);
        color:rgb(88, 146, 221);
    }
    a:hover{
        color:rgb(230, 102, 166);
    }
    .glyphicon{
    top:3px;
    height:35px;
    width:30px;
    border-radius:5px;
    background-color: #fff;
    border-color:#fff;
    }
    .form-control{
        background-color: rgba(255, 255, 255, 0.925);
    }
    .form-control:hover{
        background-color: #fff;
    }
}

.display{
    // height:100%;
    position:absolute;
    margin-top:200px;
}
</style>
