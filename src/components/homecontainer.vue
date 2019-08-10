<template>
    <div class="homecontainer">
     <div style="height:30px; width:100%;"></div>
        <div class="row" >
            <div class="col-sm-6 col-md-4 col-lg-3" v-for="(item,index) in list" :key=index>
                <router-link :to="'/detail/'+item.id">
                <div class="thumbnail">
                    <img src="../images/post2.jpg" class="img-responsive" alt="Responsive image">
                    <div class="caption">
                        <h3>{{item.title}}</h3>
                        <span><img src="../images/personphoto.jpg" alt="" style="width:20px;height:20px;border-radius:10px"></span>&nbsp;<span>{{item.msg}}</span>
                       
                        <!-- <p><a href="" class="btn btn-primary" role="button" @click="uplikabilty">好感  <span class="badge">{{item.likability}}</span></a> <a href="#" class="btn btn-default" role="button">详情</a></p> -->
                    </div>
                </div>
                </router-link>
                <p style="margin-left:240px;margin-top:-85px"><button class="btn btn-danger" @click="link(index)"><span class="glyphicon glyphicon-heart" aria-hidden="true"></span> <span class="badge">{{item.likability}}</span></button></p>
            </div>
        </div>
        <div class="ending" style="text-align: center;margin-top:80px">
            <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li>
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li>
                        <a href="#" aria-label="Next">
                            <span aria-hidden="true">&raquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
      
        </div>
  
</template>

<script>
export default{
    data(){
        return{
           msg: '',
           likability:'',
            list: [{
                id:'1',
                title:'标题',
                msg: '作者名称',
                likability:'0',
            }, {
                id:'2',
                title:'标题',
                msg: '作者名称',
                likability:'1',
            }, {
                id:'3',
                title:'标题',
                msg: '作者名称',
                likability:'2',
            }, {
                id:'4',
                title:'标题',
                msg: '作者名称',
                likability:'3',
            }, ],
        };
    },
    methods:{
link(i){
this.list[i].likability++;
//把list的索引值当成函数的参数从v-for那边传到后台，在手动修改list具体哪一项的好感度
}
    }
}
</script>

<style lang="scss" scoped>
.homecontainer{
width: 1400px;
margin-left:50px;

}
#jianju li {
    margin-right: 50px;
}

.nav li a:focus,
nav li a:hover {
    background-color: #89BEF7 !important;
}

#sousuolan li {
    float: right;
    margin-right: 40px;
}

.thumbnail:hover{
    // transform: scale(1.05);
    box-shadow:0 0 5px rgb(95, 166, 236);
    
}

a:hover{
    text-decoration: none;
}
</style>

