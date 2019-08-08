<template>
<div class="app">
    <ul>
        <li>
            <div class="post_content">
                <div class="rank">
                    1
                </div>

                <div class="post_image">
                    <img src="https://avatars1.githubusercontent.com/u/275871?s=60&v=4" alt="">
                </div>

                <div class="post_info">
                    <div class="post_title">
                        标题
                    </div>
                    <div class="post_content">
                        帖子内容
                    </div>
                    <div class="post_comment">
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
            </div>
        </li>
        <li>
            <div class="post_content">
                <div class="rank">
                    2
                </div>

                <div class="post_image">
                    <img src="https://avatars1.githubusercontent.com/u/275871?s=60&v=4" alt="">
                </div>
                
                <div class="post_info">
                    <div class="post_title">
                        标题
                    </div>
                    <div class="post_content">
                        帖子内容
                    </div>
                    <div class="post_comment">
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
            </div>
        </li>
        <li>
            <div class="post_content">
                <div class="rank">
                    3
                </div>

                <div class="post_image">
                    <img src="https://avatars1.githubusercontent.com/u/275871?s=60&v=4" alt="">
                </div>
                
                <div class="post_info">
                    <div class="post_title">
                        标题
                    </div>
                    <div class="post_content">
                        帖子内容
                    </div>
                    <div class="post_comment">
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
            </div>
        </li>
        <li>
            <div class="post_content">
                <div class="rank">
                    3
                </div>

                <div class="post_image">
                    <img src="https://avatars1.githubusercontent.com/u/275871?s=60&v=4" alt="">
                </div>
                
                <div class="post_info">
                    <div class="post_title">
                        标题
                    </div>
                    <div class="post_content">
                        帖子内容
                    </div>
                    <div class="post_comment">
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
            </div>
        </li>
        <li>
            <div class="post_content">
                <div class="rank">
                    4
                </div>

                <div class="post_image">
                    <img src="https://avatars1.githubusercontent.com/u/275871?s=60&v=4" alt="">
                </div>
                
                <div class="post_info">
                    <div class="post_title">
                        标题
                    </div>
                    <div class="post_content">
                        帖子内容
                    </div>
                    <div class="post_comment">
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
            </div>
        </li>
        <li>
            <div class="post_content">
                <div class="rank">
                    5
                </div>

                <div class="post_image">
                    <img src="https://avatars1.githubusercontent.com/u/275871?s=60&v=4" alt="">
                </div>
                
                <div class="post_info">
                    <div class="post_title">
                        标题
                    </div>
                    <div class="post_content">
                        帖子内容
                    </div>
                    <div class="post_comment">
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
            </div>
        </li>

    </ul>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.app{
    margin-top:50px;
    height:900px;
    width:950px;
    margin-left:85px;
}

ul{
    list-style:none;
    
}

li{
    border-bottom:1px solid rgba(247, 243, 243, 0.87);
}

.post_content{
    display:flex;
    margin-top:20px;
    margin-bottom:10px;
    .rank{
        height:110px;
        width:80px;
        font-size:30px;
        color:rgba(145, 145, 145, 0.801);
        text-align: center;
        line-height: 100px;//垂直居中
    }

    .post_image{
        img{
            height:100px;
            width:100px;
        }
    }

    .post_info{
        .post_title{
            margin-left:50px;
            font-size:20px;
            font-weight:bold;
            color:#3a3939;
        }

        .post_content{
            margin-left:50px;
            margin-top:15px;
            font-size:15px;
            color:#3a3939;
        }

        .post_comment{
            display:flex;
            margin-left:50px;
            margin-top:15px;
            font-size:13px;
            color:rgba(145, 145, 145, 0.801);
            .comment_number{
                margin-left:15px;
            }

            .like{
                margin-left:15px;
            }
        }
    }
}

</style>
