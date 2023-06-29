<template>
  <el-header>
    <el-button type="primary" :icon="Switch" circle @click="handleCollapse" />
    Header
  </el-header>
</template>

<script setup>
import { useStore } from "vuex";
import { Switch } from "@element-plus/icons-vue";
const store = useStore();
const handleCollapse = () => {
  store.dispatch("changeCollapse");
};
</script>

<style lang="scss" scoped>
</style>