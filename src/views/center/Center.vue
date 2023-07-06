 <template>
  <div>
    <el-page-header icon="" title="企业门户管理系统">
      <template #content>
        <span class="text-large font-600 mr-3"> 个人中心 </span>
      </template>
    </el-page-header>
    <el-row class="userInfo">
      <el-col :span="8" class="left"
        ><el-card class="box-card">
          <el-avatar :size="100" :src="avatarUrl" />
          <h3>{{ userInfo.username }}</h3>
          <h3>{{ roleInfo[userInfo.role] }}</h3>
        </el-card></el-col
      >
      <el-col :span="15" class="right"
        ><el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>个人信息</span>
            </div>
          </template>
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
              <Uploaded :avatar="userInfo.avatar" @changeUserInfo="handleChange"></Uploaded>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitInfo()"> 更新 </el-button>
            </el-form-item>
          </el-form>
        </el-card></el-col
      >
    </el-row>
  </div>
</template>
 
 <script setup>
import { useStore } from "vuex";
import { ref, computed, reactive } from "vue";
import { ElMessage } from "element-plus";
import updatedInfo from '@/util/updatedInfo.js'
import Uploaded from '@/components/upload/Uploaded'
const store = useStore();
let userInfo = computed(() => {
  return store.state.userInfo;
});
const { username, gender, introduction, avatar } = store.state.userInfo;
const userForm = reactive({ username, gender, introduction, avatar, file: "" });
const userRef = ref();
const avatarUrl = computed(() => {
  return store.state.userInfo
    ? "http://localhost:3000" + store.state.userInfo.avatar
    : "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
});
const roleInfo = ["", "管理员", "编辑"];
const userRule = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  gender: [{ required: true, message: "请选择性别", trigger: "blur" }],
};
const handleChange = (file) => {
  userForm.file = file.raw;
};
const submitInfo = () => {
  userRef.value.validate(async (valid) => {
    if (valid) {
      const res = await updatedInfo("/admin/user/updateUserInfo", userForm);
      if (res.data.code === 200) {
        store.commit("changeUserInfo", res.data.data);
        ElMessage.success("更新成功");
      } else {
        ElMessage.error("请检验信息");
      }
    }
  });
};
</script>
 
 <style lang="scss" scoped>
.userInfo {
  margin-top: 50px;
  .left {
    margin-right: 10px;
    .box-card {
      :deep .el-card__body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
::v-deep .avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

::v-deep .avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

::v-deep .el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>