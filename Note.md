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

