<template>
  <f-menu>
    <f-menu-group label="用户中心">
      <f-menu-item label="网站用户"></f-menu-item>
      <f-menu-item label="管理员"></f-menu-item>
      <f-menu-item label="用户角色"></f-menu-item>
    </f-menu-group>
    <f-menu-group label="设置">
      <f-menu-item label="系统日志"></f-menu-item>
      <f-menu-group label="系统设置">
        <f-menu-item label="网站设置"></f-menu-item>
        <f-menu-item label="邮件服务"></f-menu-item>
      </f-menu-group>
      <f-menu-group label="我的设置">
        <f-menu-item label="我的资料"></f-menu-item>
        <f-menu-item label="安全服务"></f-menu-item>
      </f-menu-group>
    </f-menu-group>
    <f-menu-group label="用户中心">
      <f-menu-item label="菜单1"></f-menu-item>
      <f-menu-item label="菜单1"></f-menu-item>
      <f-menu-item label="菜单1"></f-menu-item>
    </f-menu-group>
  </f-menu>
</template>

<script>
import { reactive } from "vue";
export default {
  setup() {
    const data = reactive({
      menu: [],
    });
    return {
      data,
    };
  },
};
</script>

<style>
</style>