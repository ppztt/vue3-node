<template>
  <div>
    <el-page-header icon="" title="用户管理">
      <template #content>
        <span class="text-large font-600 mr-3">添加用户</span>
      </template>
    </el-page-header>
    <div class="main">
      <el-form
        ref="userRef"
        label-width="120px"
        :model="userForm"
        :rules="userRule"
        class="demo-userForm"
        status-icon
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="userForm.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password" >
          <el-input v-model="userForm.password" type="password" show-password />
        </el-form-item>
        <el-form-item label="角色" prop="role">
          <el-select
            v-model="userForm.role"
            placeholder=" "
            style="width: 100%"
          >
            <el-option label="管理员" :value="1" />
            <el-option label="编辑" :value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="性别" prop="gender">
          <el-select
            v-model="userForm.gender"
            placeholder="秘密"
            style="width: 100%"
          >
            <el-option label="男" :value="0" />
            <el-option label="女" :value="1" />
            <el-option label="秘密" :value="2" />
          </el-select>
        </el-form-item>
        <el-form-item label="个人简介" prop="introduction">
          <el-input v-model="userForm.introduction" type="textarea" />
        </el-form-item>
        <el-form-item label="头像" prop="avatar">
          <Uploaded @changeUserInfo="handleChange"></Uploaded>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitInfo()"> 添加用户 </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import Uploaded from "@/components/upload/Uploaded";
import updatedInfo from '@/util/updatedInfo'
import { ElMessage } from "element-plus";
export default {
  components: {
    Uploaded,
  },
  setup() {
    const userForm = reactive({
      username: "",
      gender: 2,
      password: "",
      introduction: "",
      role: "",
      avatar: "",
      file: "",
    });
    const userRule = {
      username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
      gender: [{ required: true, message: "请选择性别", trigger: "blur" }],
      password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      role: [{ required: true, message: "请选择角色", trigger: "blur" }],
    };
    const userRef = ref();
    const submitInfo = () => {
      userRef.value.validate(async (valid) => {
        if (valid) {
          const res = await updatedInfo("/admin/user/addUserInfo", userForm);
          if (res.data.code === 200) {
            ElMessage.success("添加成功");
          } else {
            ElMessage.error("请检验信息");
          }
        }
      });
    };
    const handleChange = (file) => {
      userForm.file = file.raw;
    };
    return {
      userForm,
      userRef,
      userRule,
      submitInfo,
      handleChange,
    };
  },
};
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  margin-top: 50px;
}
</style>