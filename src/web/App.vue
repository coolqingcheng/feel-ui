<template>
  <div id="doc" :class="[data.open?'nav-open':'nav-close']">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/icon">图标</router-link>
      <router-link to="/grid">栅格</router-link>
      <router-link to="/table">表格控件</router-link>
      <router-link to="/uploader">上传文件</router-link>
      <router-link to="/input">输入框</router-link>
      <router-link to="/number">数字输入</router-link>
      <router-link to="/slider">滑动条</router-link>
      <router-link to="/radio">单选框</router-link>
      <router-link to="/checkbox">复选框</router-link>
      <router-link to="/switch">开关</router-link>
      <router-link to="/pager">分页组件</router-link>
      <router-link to="/button">按钮</router-link>
      <router-link to="/rate">rate 评分</router-link>
      <router-link to="/progressbar">进度条</router-link>
      <router-link to="/circular">圆形进度条</router-link>
      <router-link to="/datetime">时间选择器</router-link>
      <router-link to="/select">下拉框</router-link>
      <router-link to="/forms">表单</router-link>
      <router-link to="/dialog">模态框</router-link>
      <router-link to="/alert">Alert对话框</router-link>
      <router-link to="/message">Message提示框</router-link>
      <router-link to="/notify">Notify通知</router-link>
      <router-link to="/tree">树</router-link>
      <router-link to="/spin">spin 加载中</router-link>
      <router-link to="/card">卡片</router-link>
      <router-link to="/collapse">手风琴面板</router-link>
      <router-link to="/breadcrumb">面包屑导航</router-link>
      <router-link to="/tab">选项卡</router-link>
      <router-link to="/button">导航条</router-link>
      <router-link to="/menu">菜单</router-link>
      <router-link to="/drawer">抽屉</router-link>
      <router-link to="/colorpicker">颜色选择器</router-link>
      <router-link to="/button">面包屑</router-link>
      <router-link to="/tag">标签</router-link>
      <router-link to="/timeline">时间线</router-link>
      <router-link to="/tooltips">tooltips</router-link>
      <router-link to="/directives">指令</router-link>
      <router-link to="/button">css帮助类</router-link>
      <router-link to="/button">Feel-Admin</router-link>
      <router-link to="/button">入门教程</router-link>
    </div>
    <div class="doc-right">
      <div class="menu">
        <f-icon :icon="data.open?'align-left':'align-right'" width="30" @click="click"></f-icon>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      open: false,
    });
    const click = () => {
      data.open = !data.open;
    };
    return {
      data,
      click,
    };
  },
};
</script>
<style lang="less">
@left: 200px;
#doc {
  position: relative;
   #nav {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: @left;
    padding-left: 30px;
    padding-top: 30px;
    padding-bottom: 30px;
    background: white;
    z-index: 10;
    transition: transform 0.3s linear;
  }
}
.nav-open {
    #nav {
      transform: translateX(0);
      transition: transform 0.3s linear;
    }

    .doc-right {
      transform: translateX(@left);;
      transition: transform 0.3s linear;
    }
  }
  .nav-close {
    #nav {
      transform: translateX(-@left);
      transition: transform 0.3s linear;
    }

    .doc-right {
      transform: translateX(0);;
      transition: transform 0.3s linear;
    }
  }

  .menu{
    margin-left: 20px;
    margin-top: 20px;
  }
</style>
