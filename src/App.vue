<template>
  <div id="doc">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/table">表格控件</router-link>
      <router-link to="/uploader">上传文件</router-link>
      <router-link to="/input">输入框</router-link>
      <router-link to="/number">数字输入</router-link>
      <router-link to="/radio">单选框</router-link>
      <router-link to="/checkbox">复选框</router-link>
      <router-link to="/switch">开关</router-link>
      <router-link to="/pager">分页组件</router-link>
      <router-link to="/button">按钮</router-link>
      <router-link to="/progressbar">进度条</router-link>
      <router-link to="/datetime">时间选择器</router-link>
      <router-link to="/select">下拉框</router-link>
      <router-link to="/forms">表单</router-link>
      <router-link to="/dialog">对话框</router-link>
      <router-link to="/button">提示框</router-link>
      <router-link to="/tree">树</router-link>
      <router-link to="/spin">spin 加载中</router-link>
      <router-link to="/button">面板</router-link>
      <router-link to="/card">卡片</router-link>
      <router-link to="/button">手风琴面板</router-link>
      <router-link to="/button">导航条</router-link>
      <router-link to="/button">侧边菜单</router-link>
      <router-link to="/colorpicker">颜色选择器</router-link>
      <router-link to="/button">面包屑</router-link>
      <router-link to="/button">css帮助类</router-link>
      <router-link to="/button">Feel-Admin</router-link>
      <router-link to="/button">入门教程</router-link>
    </div>
    <div class="doc-right">
      <router-view />
    </div>
  </div>
</template>
<style lang="less">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }

#doc {
  display: flex;
  flex-direction: row;
  #nav {
    display: flex;
    flex-direction: column;
    width: 180px;
    padding-left: 30px;
    padding-top: 50px;
    box-sizing: border-box;
  }
  .doc-right {
    flex: 1;
  }
}
</style>
