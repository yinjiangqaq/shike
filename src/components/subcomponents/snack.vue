<template>
    <ul>
        <li v-for="item in postlist_snack" :key="item.id">
            <a href="#">
                <div>
                    <img :src="item.img_url" alt="">
                </div>
                <div class="info">
                    <div class="title">
                        {{item.title}}
                    </div>
                    <div class="content">
                        {{item.msg}}
                    </div>
                    <div class="author_info">
                        <div class="author_name">
                            {{item.author}}
                        </div>
                        <div class="comment_number">
                            <span class="glyphicon glyphicon-comment" aria-hidden="true"></span>&nbsp;{{item.comment}}
                        </div>
                        <div class="like">
                            <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>&nbsp;{{item.like}}
                        </div>
                    </div>
                </div>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            postlist_snack:[{
                id:'1',
                title:'标题',
                msg: '帖子内容',
                author:'作者名称',
                comment:'评论数',
                like:'点赞量',
                img_url:'https://avatars3.githubusercontent.com/u/40078051?s=40&v=4'
            },
            {
                id:'2',
                title:'标题',
                msg: '帖子内容',
                author:'作者名称',
                comment:'评论数',
                like:'点赞量',
                img_url:'https://avatars3.githubusercontent.com/u/40078051?s=40&v=4'
            },
            {
                id:'3',
                title:'标题',
                msg: '帖子内容',
                author:'作者名称',
                comment:'评论数',
                like:'点赞量',
                img_url:'https://avatars3.githubusercontent.com/u/40078051?s=40&v=4'
            },]
        }
    }
}
</script>

<style lang="scss" scoped>
ul{
    list-style: none;
}

li{
    height:180px;
    width:1000px;
    border-bottom:1px solid rgba(247, 243, 243, 0.87);
    margin-top:60px;
    a{
        display: flex;
        // align-items: center;
    }
    a:hover{
        text-decoration:none;
    }
    img{
        height:150px;
        width:150px;
    }
    .title{
        margin-left:50px;
        font-size:20px;
        color:#3a3939;
    }
    .content{
        margin-left:50px;
        margin-top:30px;
        font-size:15px;
        color:#797878;
    }
    .author_info{
        display: flex;
        margin-left:50px;
        margin-top:30px;
        color:#797878;
        .comment_number{
            margin-left:20px;
        }
        .like{
            margin-left:20px;
        }
    }
}
</style>
