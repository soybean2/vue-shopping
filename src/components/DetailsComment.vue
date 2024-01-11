<template>
  <div class="commentDetails" >
    <textarea id="content" name="content" placeholder="发表神评妙论"></textarea>
    <button id="btn_co" @click="submit">发表评论</button>
    <ul v-for="item in commentList">
      <li>
        <el-card shadow="always" class="comment-item">
          <div class="left">
            <el-avatar :src="item.frontUserAvatar" />
            <h3>{{item.frontUserName}}</h3>
          </div>
          <div class="right">
            {{ item.content }}
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from "axios";
import {ref} from "vue";

export default {
  props:['id'],


  setup(props) {
    const commentList = ref({})

    const handleComment =(id)=>{
      // https://you.163.com/xhr/comment/listByItemByTag.json?itemId=${id}
      axios.get(`/xhr/comment/listByItemByTag.json?itemId=${id}`)
          .then(response => {
            commentList.value = response.data.data.commentList
          })
          .catch(error => {
            console.error(error) // 打印错误信息
          });

    }

    const submit = ()=>{
      console.log('发表评论')
      //获取评论内容
      const content = document.getElementById('content').value
      //获取用户信息
      const frontUserName = "苏孝炅"
      const frontUserAvatar=  "http://yanxuan.nosdn.127.net/9a37bdd9b915a24e60fe6b0c1e3d0e37.jpg"
      //向列表中插入数据
      commentList.value.unshift({content,frontUserName,frontUserAvatar})
      console.log(commentList.value)

    }
    handleComment(props.id)
    return {
      commentList,
      submit
    }
  }
}

</script>
<style lang="less" scoped>
#content{
  padding: 16px 16px 23px;
  width: 75%;
  resize: none;
  background: #c4bfbf;
  border-radius: 12px;
  border: none;
  color: #1f1f1f;
}

#btn_co{
  width: 80px;
  height: 40px;
  float: right;
  margin-right: 130px;
  margin-top: 15px;
  background: #c4bfbf;
  border-radius:15px;
  cursor: pointer;
}

.commentDetails{
  margin:30px 30px;

  .comment-item{
    display: flex;
    height: 100px;
    margin-bottom: 20px;
  }

  .left{
    float: left;
  }
  .right{
    font-size: 14px;
    line-height: 20px;
    margin-bottom:20px;
    margin-left: 50px;
  }
}
</style>