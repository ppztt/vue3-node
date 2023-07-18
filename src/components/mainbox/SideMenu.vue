<template>
  <el-aside width="auto">
    <el-menu :collapse="$store.state.isCollapse" :router="true" :default-active="route.fullPath">
      <el-menu-item index="/home">
        <el-icon><HomeFilled /></el-icon>
        <span>首页</span>
      </el-menu-item>
      <el-menu-item index="/center">
        <el-icon><Avatar /></el-icon>
        <span>个人中心</span>
      </el-menu-item>
      <el-sub-menu index="/use-manage" v-admin>
        <template #title>
          <el-icon><Avatar /></el-icon>
          <span>用户管理</span>
        </template>
        <el-menu-item index="/use-manage/useradd">添加用户</el-menu-item>
        <el-menu-item index="/use-manage/userlist">用户列表</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/new-manage">
        <template #title>
          <el-icon><MessageBox /></el-icon>
          <span>新闻管理</span>
        </template>
        <el-menu-item index="/new-manage/newsadd">创建新闻</el-menu-item>
        <el-menu-item index="/new-manage/newslist">新闻列表</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="/product-manage">
        <template #title>
          <el-icon><Reading /></el-icon>
          <span>产品管理</span>
        </template>
        <el-menu-item index="/product-manage/productadd">添加产品</el-menu-item>
        <el-menu-item index="/product-manage/productlist">产品列表</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </el-aside>
</template>

<script setup>
import {
  HomeFilled,
  Reading,
  MessageBox,
  Avatar,
} from "@element-plus/icons-vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
const route = useRoute()
const store = useStore()
const vAdmin = {
  mounted(el) {
    console.log(el)
    if(store.state.userInfo.role != 1){
      el.parentNode.removeChild(el)
    }
  },
}

</script>

<style lang="scss" scoped>
.el-aside {
  height: 100vh;
}
</style>