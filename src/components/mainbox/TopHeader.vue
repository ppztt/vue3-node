<template>
  <el-header>
    <div class="left">
      <el-icon @click="handleCollapse"><Menu /></el-icon>
      <span>企业门户管理系统</span>
    </div>
    <div class="right">
      <span>欢迎{{ store.state.userInfo.username }}</span>
      <el-dropdown>
        <span class="el-dropdown-link">
          <el-icon :size="20" color="white"><UserFilled /></el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="toUser">个人中心</el-dropdown-item>
            <el-dropdown-item @click="toLogin">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script setup>
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { Menu, UserFilled } from "@element-plus/icons-vue";
const store = useStore();
const userInfo = store.state.userInfo
const router = useRouter();
const handleCollapse = () => {
  store.dispatch("changeCollapse");
};
const toUser = () => {
  router.push("/center");
};
const toLogin = () => {
  localStorage.removeItem("token");
  store.commit('clearUserInfo')
  router.push("/login");
};
</script>

<style lang="scss" scoped>
.el-header {
  height: 60px;
  background: #2d3a4b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  line-height: 60px;
  .left {
    display: flex;
    i {
      margin: auto;
      margin-right: 5px;
      cursor: pointer;
    }
  }
  .right {
    display: flex;
    .el-dropdown {
      margin: auto;
      margin-left: 5px;
    }
  }
}
</style>