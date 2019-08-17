<template>
    <div class="homecontainer">
     <div style="height:30px; width:100%;"></div>
        <div class="row" >
            <div class="col-sm-6 col-md-4 col-lg-3" v-for="(item,index) in list" :key=index>
                <router-link :to="'/detail/'+item.id" >
                <div class="thumbnail">
                    <img :src="item.image" class="img-responsive" alt="Responsive image" style="width:400px;height:400px;">
                    <div class="caption">
                        <div style="font-size:22px;margin-bottom:8px">{{item.title}}</div>
                        <span><img :src="item.author.headPortrait" alt="" style="width:20px;height:20px;border-radius:10px"></span>&nbsp;<span>{{item.author.userName}}</span>
                       
                        <!-- <p><a href="" class="btn btn-primary" role="button" @click="uplikabilty">好感  <span class="badge">{{item.likability}}</span></a> <a href="#" class="btn btn-default" role="button">详情</a></p> -->
                    </div>
                </div>
                </router-link>
                <!-- class="btn btn-danger" -->

                <div style="display:flex;margin-left:270px;margin-top:-60px;"  class="pink">
                    <span class="glyphicon glyphicon-heart" aria-hidden="true" style="font-size:20px;padding-right:5px"></span>
                    {{item.likeNum}}
                </div>
            </div>
        </div>
        <div class="ending" style="text-align: center;margin-top:80px">
            <nav aria-label="Page navigation">
                <ul class="pagination">
                    <li @click="down">
                        <a href="#" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                        </a>
                    </li>
                    <li @click="page(0)"><a href="#">1</a></li>
                    <li @click="page(1)"><a href="#">2</a></li>
                    <li @click="page(2)"><a href="#">3</a></li>
                    <li @click="page(3)"><a href="#">4</a></li>
                    <li @click="page(4)"><a href="#">5</a></li>
                    <li @click="up">
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
          likeNum:'',
            list: [],
           pageNum:0,
        };
    },
    created(){
  this.$http.get('/posts/'+0).then(function(res){
      console.log(res.body);
     this.list=res.body;
    //  this.$cookie.set('pageNum',0,1);
  
    
        },function(res){
        window.alert("失败");
  })
    },
    methods:{
        // link(i){
           
        //     this.list[i].changeColor=!this.list[i].changeColor;
        //     if(this.list[i].flg){
        //         this.list[i].likeNum++;
        //         this.list[i].flg=false;
        //     }else{
        //         this.list[i].likeNum--;
        //         this.list[i].flg=true;
        //     }
        // },
        page(i){
           this.$http.get('/posts/'+i).then(function(res){
               console.log(res.body);
              this.list=res.body;
            // this.$cookie.set('pageNum',i,1);
            this.pageNum=i;
        },function(res){
            window.alert("失败");
        })
    },
    down(){
// var i=this.$cookie.get('pageNum');
var i=this.pageNum;
if(i>0)
{
   this.$http.get('/posts/'+(i-1)).then(function(res){
               console.log(res.body);
               this.list=res.body;
                // this.$cookie.set('pageNum',i-1,1);
                this.pageNum=i-1;
   },function(res){
            window.alert("失败");
        })
}else{
     this.$http.get('/posts/'+0).then(function(res){
      console.log(res.body);
     this.list=res.body;
     },function(res){
        window.alert("失败");
  })
}
    },
    up(){
    //    var i=this.$cookie.get('pageNum');
    //   var j= parseInt(i);
      var j=this.pageNum;
       this.$http.get('/posts/'+(j+1)).then(function(res){
               console.log(res.body);
             this.list=res.body;
                // this.$cookie.set('pageNum',(j+1),1);
                this.pageNum=j+1;
   },function(res){
            window.alert("失败");
        })
    },

    
    //  mounted:function(){
    //     $(".btn_heart").click(function(){
    //         if(this.flg){
    //             $(this).addClass("pink");
    //             $(this).removeclass("grey");
    //         }else{
    //             $(this).addClass("grey");
    //             $(this).removeclass("pink");
    //         }
            
    // });
    // }
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

.gray span{
    color:rgb(161, 159, 159);
}

.pink span{
    color:rgb(243, 129, 192);
}
</style>

