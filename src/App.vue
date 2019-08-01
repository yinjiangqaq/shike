<template>
    <div>
        <!-- rooterv-view区域页面变化区域 -->
        <!-- <h1>这是一个app组件</h1>
        <img src="src\images\帖子2.png" alt=""> -->
         <!-- <div class="header" style="height: 200px;">
            <img src="./images/logo2.png" alt="logo" style="position: absolute">
            <div style="position: relative; height:80px;">
                <nav>
                    <ul class="nav  nav-pills navbar-right" id="jianju">
                        <li>
                            <router-link to="/homecontainer" style="color: white;text-decoration: none;font-size: 28px;font-family: Arial;font-weight: bold;">关于我们</router-link>
                        </li>
                        <li class="dropdown" role="presentation">
                            <a class="dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false" style="color: white;font-size:28px;text-decoration:none;">
                                <img src="./images/排行榜.png" alt="" class="img-circle" style="height: 40px;width:40px;">

                                <span class="caret"></span>
                            </a>
                            <ul class="dropdown-menu">
                                <li><router-link to="/login">登录/注册</router-link ></li>
                                <li><router-link to="/homecontainer">我的主页</router-link ></li>
                                <li><router-link  to="/homecontainer">设置</router-link ></li>
                            </ul>
                        </li>
                        <li>
                            <router-link to="/send" style="color: white;text-decoration: none;font-size: 28px;font-family: Arial;font-weight: bold;background-color: #FF6C92!important; border-bottom-left-radius: 20px;border-bottom-right-radius: 20px; padding:15px 20px;">发帖</router-link>
                        </li>
                    </ul>
                </nav>

            </div>
            <div style="position: absolute; width:100%;height:53px;margin-top:42px;">
                <ul style="list-style: none;" id="sousuolan">

                    <li style="height:53px;width:300px; ">
                        <div class="input-group" style="height:43px;width:300px;">
                            <input type="text" class="form-control" placeholder="请输入你想查找的零食" v-model="searchtext" style="padding:0;margin-top:4px;vertical-align:middle;"  autofocus required>
                            <span class="input-group-btn">
                            <button class="btn btn-default" type="button" style="margin:0;padding: 0">
                        <img src="./images/搜索.png">
                            </button>
                        </span>
                        </div>
                    </li>
               
                    <li style=" font-size:20px; font-family: Arial; width:130px;height:40px; border-radius: 15px;background-color: #E8F3FD;line-height:40px;font-size: 22px;margin-right: 10px;">
                        <a href="" style="color: #FF6C92;text-decoration: none;">
                            <span>
                                <img src="./images/排行榜.png" alt="" style="padding-left:10px;">
                        </span> 排行榜</a>
                    </li>
                </ul>
            </div>
        </div> -->
      
        
        <router-view></router-view> 
    </div>
</template>

<script>
export default{
    data(){
        return{
           
           
        };
    },
    methods:{

    }
}
</script>

<style lang="scss" scoped>

</style>

