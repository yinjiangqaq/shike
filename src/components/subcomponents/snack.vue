<template>
    <ul>
        <li>
            <a href="#">
                <div>
                    <img src="https://avatars3.githubusercontent.com/u/40078051?s=40&v=4" alt="">
                </div>
                <div class="info">
                    <div class="title">
                        标题
                    </div>
                    <div class="content">
                        文章内容
                    </div>
                    <div class="author_info">
                        <div class="author_name">
                            作者名称
                        </div>
                        <div class="comment_number">
                            <span class="glyphicon glyphicon-comment" aria-hidden="true"></span>&nbsp;评论数
                        </div>
                        <div class="like">
                            <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>&nbsp;点赞量
                        </div>
                    </div>
                </div>
            </a>
        </li>
        <li>
            <a href="#">
                <div>
                    <img src="https://avatars3.githubusercontent.com/u/40078051?s=40&v=4" alt="">
                </div>
                <div class="info">
                    <div class="title">
                        标题
                    </div>
                    <div class="content">
                        文章内容
                    </div>
                    <div class="author_info">
                        <div class="author_name">
                            作者名称
                        </div>
                        <div class="comment_number">
                            <span class="glyphicon glyphicon-comment" aria-hidden="true"></span>&nbsp;评论数
                        </div>
                        <div class="like">
                            <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>&nbsp;点赞量
                        </div>
                    </div>
                </div>

            </a>
        </li>
        <li>
            <a href="#">
                <div>
                    <img src="https://avatars3.githubusercontent.com/u/40078051?s=40&v=4" alt="">
                </div>
                <div class="info">
                    <div class="title">
                        标题
                    </div>
                    <div class="content">
                        文章内容
                    </div>
                    <div class="author_info">
                        <div class="author_name">
                            作者名称
                        </div>
                        <div class="comment_number">
                            <span class="glyphicon glyphicon-comment" aria-hidden="true"></span>&nbsp;评论数
                        </div>
                        <div class="like">
                            <span class="glyphicon glyphicon-heart" aria-hidden="true"></span>&nbsp;点赞量
                        </div>
                    </div>
                </div>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    
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
