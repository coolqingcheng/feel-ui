<template>
  <div class="f-collapse-panel">
    <div class="f-collapse-panel-header" @click="panelClick">
      <div v-if="label">{{label}}</div>
      <div v-if="!label">
        <slot name="header"></slot>
      </div>
      <div>
        <span class="iconfont icon-right" :class="[show?'bottom':'right']"></span>
      </div>
    </div>
    <f-expand-transition>
      <div class="f-collapse-panel-body" v-show="show">
        <div class="body" :style="{minHeight:height+'px',maxheight:height+'px'}">
          <slot name="body"></slot>
        </div>
      </div>
    </f-expand-transition>
  </div>
</template>

<script>
export default {
  name: "f-collapse-panel",
  props: {
    id: String,
    label: String,
  },
  data() {
    return {
      height: 150,
    };
  },
  inject: ["collapse"],
  methods: {
    panelClick() {
      this.collapse.event.emit("expand", { id: this.id });
    },
  },
  computed: {
    show: function () {
      let index = this.collapse.panels.indexOf(this.id);
      return index > -1;
    },
  },
};
</script>

<style>
</style>