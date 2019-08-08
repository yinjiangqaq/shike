<template>
    <div class="homecontainer">
     <div style="height:30px; width:100%;"></div>
        <div class="row" >
            <div class="col-sm-6 col-md-4 col-lg-3" v-for="(item,index) in list" :key=index style="text-align:center;">
                <div class="thumbnail">
                    <img src="../images/post1.png" alt="..." style="height: 200px;width:242px;">
                    <div class="caption">
                        <h3>Thumbnail label</h3>
                        <p>{{item.msg}}</p>
                       <p><button class="btn btn-primary" @click="link(index)">好感 <span class="badge">{{item.likability}}</span></button> <router-link :to="'/detail/'+item.id"><button class="btn btn-default" >详情</button></router-link></p>
                        <!-- <p><a href="" class="btn btn-primary" role="button" @click="uplikabilty">好感  <span class="badge">{{item.likability}}</span></a> <a href="#" class="btn btn-default" role="button">详情</a></p> -->
                    </div>
                </div>
            </div>
        </div>
        <div class="ending" style="text-align: center">
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
                msg: '这项小吃在淘宝上有卖',
                likability:'0',
            }, {
                id:'2',
                msg: '这项小吃在淘宝上有卖',
                likability:'1',
            }, {
                id:'3',
                msg: '这项小吃在淘宝上有卖',
                likability:'2',
            }, {
                id:'4',
                msg: '这项小吃在淘宝上有卖',
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
width: 1500px;

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
</style>

