<template>
  <div class="f-date-picker-select fixed-top-left">
    <div class="f-date-picker-select-header">
      <div class="f-date-picker-select-header-tool">
        <!-- <span class="iconfont icon-left2" @click="nextMonth('left')"></span> -->
      </div>
      <div class="f-date-yyyyMM">
        <span>{{ year }}年</span>
      </div>
      <div class="f-date-picker-select-header-tool">
        <!-- <span class="iconfont icon-right2" @click="nextMonth('right')"></span> -->
      </div>
    </div>
    <div class="f-date-picker-select-content">
      <ul class="f-date-month-item">
        <li
          v-for="(item, i) in 12"
          :key="i"
          :class="[item == month ? 'f-this' : '']"
          @click="itemClick(item)"
        >
          {{ item }}月
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getCurrentInstance } from "vue";
export default {
  name: "f-month-picker",
  props: {
    year: {
      type: Number,
      default: 0,
    },
    month: Number,
  },
  setup() {
    let ctx = getCurrentInstance();
    const itemClick = (e) => {
      ctx.emit("select", e);
    };
    return {
      itemClick,
    };
  },
};
</script>

<style>
</style>