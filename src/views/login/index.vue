<script setup>
import {GetHitokoto} from "@/api/index.js";
import {onMounted, ref,nextTick} from "vue";

onMounted(()=>{
  getYiyan()
})

const yiyan = ref({})
const getYiyan = () => {
  GetHitokoto().then(res => {
    console.log(res)
    nextTick(()=>{
      yiyan.value = res
    })
  })
}

const copyText = () => {
  navigator.clipboard.writeText(yiyan.value.hitokoto).then(()=>{
    ElMessage.success('复制成功')
  })
}
</script>

<template>
  <div class="login-main">
    <div class="login-box">
      <div class="left"></div>
      <div class="right"></div>
    </div>

    <div class="bottom-text">
      <div class="text-info" @click="copyText" @contextmenu.prevent="getYiyan()">
        {{ yiyan.hitokoto }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-main {
  position: relative;
  width: 100%;
  height: 100vh;
  //background: url("@/assets/bg.jpg");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-box {
    height: 300px;
    width: 400px;
    background: rgba(255, 255, 255, .4);
    backdrop-filter: blur(2px);
  }

  .bottom-text{
    position: absolute;
    bottom: 0;
    margin: 0 auto;
    height: 50px;
    display: flex;
    justify-content: center;
    .text-info {
      color: black;
      font-size: 14px;
      cursor: pointer;
      transition: all .3s;
      &:hover {
        color: #252121;
      }
    }
  }
}
</style>