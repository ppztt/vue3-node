<template>
  <div id="login">
    <vue-particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="options"
    />
    <div class="loginForm">
      <div class="title">企业门户管理系统</div>
      <el-form
        ref="loginForm"
        label-width="70px"
        :model="formLabelAlign"
        :rules="loginRules"
        style="max-width: 460px"
      >
        <el-form-item label="用户名" prop="username">
          <el-input v-model="formLabelAlign.username" />
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input v-model="formLabelAlign.password" type="password" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)">
            登录
          </el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "vue";
import { loadFull } from "tsparticles";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter()
    const formLabelAlign = reactive({
      username: "",
      password: "",
    });
    const loginForm = ref()
    const loginRules = reactive({
      username: [
        { required: true, message: "请输入用户名", trigger: "blur" },
        { min: 3, max: 12, message: "请输入3-12个字符", trigger: "blur" },
      ],
      password: [
        { required: true, message: "请输入密码", trigger: "blur" },
        { min: 6, max: 18, message: "请输入6-18位的密码", trigger: "blur" },
      ],
    });
    // 登录
    const submitForm = () => {
        loginForm.value.validate((valid)=>{
            console.log(valid)
            if(valid){
                localStorage.setItem('token','ttwl')
                router.push('/home')
            }else{

            }
        })
    };

    const particlesInit = async (engine) => {
      await loadFull(engine);
    };

    const particlesLoaded = async (container) => {
      //   console.log("Particles container loaded", container);
    };
    const options = reactive({
      background: {
        color: {
          value: "#2D3A4A",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.8,
            size: 40,
          },
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        collisions: {
          enable: true,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    });
    return {
      formLabelAlign,
      submitForm,
      particlesInit,
      particlesLoaded,
      options,
      loginRules,
      loginForm
    };
  },
};
</script>

<style lang="scss" scoped>
#login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .loginForm {
    width: 500px;
    height: 400px;
    background-color: rgba($color: #000000, $alpha: 0.5);
    padding: 30px;
    box-sizing: border-box;
    z-index: 10;
    .title {
      width: 100%;
      height: 50px;
      text-align: center;
      color: #fff;
      font-weight: 700;
      font-size: 30px;
    }
    ::v-deep .el-form-item__label {
      color: #fff !important;
    }
  }
}
</style>