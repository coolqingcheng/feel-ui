<template>
  <f-menu :open-groups="['用户中心']" active-id="3">
    <f-menu-group label="用户中心" name="用户中心">
      <f-menu-item label="网站用户" id="1"></f-menu-item>
      <f-menu-item label="管理员" id="2"></f-menu-item>
      <f-menu-item label="用户角色" id="3"></f-menu-item>
    </f-menu-group>
    <f-menu-group label="设置" name="设置">
      <f-menu-item label="系统日志" id="4"></f-menu-item>
      <f-menu-group label="系统设置" name="网站设置">
        <f-menu-item label="网站设置" id="5"></f-menu-item>
        <f-menu-item label="邮件服务" id="6"></f-menu-item>
      </f-menu-group>
      <f-menu-group label="我的设置" name="我的设置">
        <f-menu-item label="我的资料" id="7"></f-menu-item>
        <f-menu-item label="安全服务" id="8"></f-menu-item>
      </f-menu-group>
    </f-menu-group>
    <f-menu-group label="运维中心" name="运维中心">
      <f-menu-item label="菜单1" id="9"></f-menu-item>
      <f-menu-item label="菜单1" id="10"></f-menu-item>
      <f-menu-item label="菜单1" id="11"></f-menu-item>
    </f-menu-group>
    <f-menu-group label="用户反馈" name="用户反馈">
      <f-menu-item label="菜单1" id="12"></f-menu-item>
      <f-menu-item label="菜单1" id="13"></f-menu-item>
      <f-menu-item label="菜单1" id="14"></f-menu-item>
    </f-menu-group>
    <f-menu-item label="关于" id="15"></f-menu-item>
  </f-menu>
</template>

<script>
export default {
  setup() {},
};
</script>

<style>
</style>