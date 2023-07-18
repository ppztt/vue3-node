# 1.路由配置

利用router.addRoute动态添加路由，这里可以根据后台发的权限来判断该显示哪些模块

# 2.登录模块

vue3使用ref需要先在script里面新建一个ref，const refs = ref()，再绑定到对应的地方

使用element-plus的布局容器时，将el-header二次封装后需要将el-container的direction="vertical"设置好

# 3.侧边菜单

使用vuex-persistedstate可以实现持久化vuex

```
 plugins: [createPersistedState({
    path: ['isCollapse'] //控制哪个属性持久化
  })],
```

# 4.上传FormData格式

```js
let Form = new FormData();
      for (let i in userForm) {
        Form.append(i, userForm[i]);
      }
      axios.post("/admin/user/updateInfo", Form,{
          // 告诉后端文件格式
        headers:{
            "Content-Type": "multipart/form-data"
        }
      }).then((res) => {
        console.log(res.data);
      });
```

# 5.更新状态

```js
// 这样赋值后，在store.state.userInfo更新之后，它的值并没有变化，只有在页面刷新的时候才会改变，就导致使用到这个值的视图无法更新
let userInfo = store.state.userInfo;
// 使用计算属性
let userInfo = computed(()=>{
    return store.state.userInfo
});

```

# 6.控制权限

在控制权限上，除了控制页面显示，也要防止其他等级用户通过路径进入，可以在路由中添加属性去判断是否该显示，也可在路由守卫上判断控制拦截，后端上也可以做权限设置

