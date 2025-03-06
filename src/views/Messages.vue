<template>
  <!--  <h1>交通</h1>-->
  <!-- <DefaultHeader/> -->
  <!-- <div class="container">
    <img src="/img/mbanner.jpg">
  </div> -->
  <el-card class="el-card-d" shadow="always">
    <button @click="fresh_msg" class="fresh_msg">刷新留言板</button>
    <div class="infinite-list-wrapper" style="overflow:auto;">
      <el-timeline infinite-scroll-disabled="disabled">

        <div v-if="allmessages.length > 0">
          <el-timeline-item v-for="(item, index) in allmessages" :key="index" :timestamp='item.createTime'
            placement="top">
            <el-card class="el-card-m" style="height:120px">
              <h4>{{ item.nickname }}：</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ item.messageContent }}</p>
              <el-button type="danger" class="delete" @click="delete_msg(item)">删除</el-button>
            </el-card>
          </el-timeline-item>
        </div>
        <div v-else>
          <el-timeline-item placement="top">
            <el-card class="el-card-m" style="height:120px">
              <h4>大黄子：</h4>
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 说点什么吧😁</p>
            </el-card>
          </el-timeline-item>
        </div>
      </el-timeline>
    </div>
    <div class="el-card-messages">
      <el-input type="textarea" :rows="5" placeholder="输入留言" maxlength="200" v-model="message"></el-input>
      <el-button type="info" round class="submit-message" @click="submitMessage">留言</el-button>
    </div>
  </el-card>

  <!-- <HomeFooter/> -->
</template>


<!--bbc1-fyqrewi8365371.jpg-->
<script setup>
import DefaultHeader from "@/components/DefaultHeader.vue";
import { ref, onMounted, inject } from 'vue'
import { getAllMessageService, addMessageService, deleteMessageService } from '@/api/messages.js'
import { useUserInfoStore } from '@/store/userInfo.js'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()

const message = ref('')
const allmessages = ref({})
const componentKey = ref(0)

const fresh_msg = async () => {
  let res = await getAllMessageService()
  allmessages.value = res.data
}
const submitMessage = async () => {
  if (message.value == '' || message.value.replace(/(^\s*)|(\s*$)/g, "") == "") {
    ElMessage('写点啥提交也行呀😉');
    return;
  }
  //  这里往下写调用后端的代码；
  const userInfo = useUserInfoStore();
  console.log(userInfo);
  await addMessageService({
    messageContent: message.value,
    username: userInfo.info.nickName
  })
  let res = await getAllMessageService()
  allmessages.value = res.data
  componentKey.value += 1
  message.value = ''
}

onMounted(async () => {
  let res = await getAllMessageService()
  allmessages.value = res.data
})

const delete_msg = async (val) => {
  console.log(val)
  await deleteMessageService({
    messageId: val.messageId
  })
}
</script>

<style scoped>
.container {
  width: 980px;
  margin-left: 470px;
  padding-bottom: 360px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.fresh_msg {
  margin-bottom: 5px;
}

.infinite-list-wrapper {
  width: 100%;
  height: 520px;
}

.submit-message {
  width: 100%;
  background: rgb(235, 245, 247);
  color: cadetblue;
  letter-spacing: 20px;
}

@media screen and (max-width: 3000px) and (min-width: 767px) {
  .el-card-d {
    float: left;
    margin-top: 20px;
    margin-left: 10%;
    width: 80%;
    height: 90%;
  }

}

/*
  屏幕小于768px的
  */
@media screen and (max-width:768px) and (min-width: 100px) {
  .el-card-d {

    width: 100%;
    height: 100%;
  }

}

.delete {
  margin-top: 10px;
  margin-bottom: 2000px;
  margin-left: 80%;
}
</style>