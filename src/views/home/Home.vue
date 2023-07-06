<template>
  <div>
    <el-page-header icon="" title="企业门户管理系统">
      <template #content>
        <span class="text-large font-600 mr-3">首页</span>
      </template>
    </el-page-header>
    <el-card class="box-card">
      <el-row>
        <el-col :span="8"> <el-avatar :size="100" :src="avatarUrl" /></el-col>
        <el-col :span="15">
          <h3>欢迎{{ userInfo.username }}回来，{{ welcomeText }}</h3>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>公司产品</span>
          <el-carousel :interval="4000" type="card" height="200px">
            <el-carousel-item v-for="item in 6" :key="item">
              <h3 text="2xl" justify="center">{{ item }}</h3>
            </el-carousel-item>
          </el-carousel>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script setup>
import axios from "axios";
import { useStore } from "vuex";
import { computed, reactive } from "vue";
const store = useStore();
let userInfo = {...store.state.userInfo};
const avatarUrl = computed(() => {
  return userInfo.avatar
    ? "http://localhost:3000" + store.state.userInfo.avatar
    : "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
});
const welcomeText = computed(() => {
  let currentHour = new Date().getHours();
  if (currentHour >= 0 && currentHour <= 6) {
    return "喝杯咖啡提提神吧.";
  } else {
    return "要开心每一天.";
  }
});
</script>

<style lang="scss" scoped>
.box-card {
  margin-top: 50px;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>