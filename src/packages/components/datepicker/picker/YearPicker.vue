<template>
  <div class="f-date-picker-select fixed-top-left">
    <div class="f-date-picker-select-header">
      <div class="f-date-picker-select-header-tool">
        <span class="f-icon icon-left" @click="nextMonth('left')"></span>
      </div>
      <div class="f-date-yyyyMM">
        <span>{{ yearValue - 7 }}年 - {{ yearValue + 7 }}年</span>
      </div>
      <div class="f-date-picker-select-header-tool">
        <span class="f-icon icon-right" @click="nextMonth('right')"></span>
      </div>
    </div>
    <div class="f-date-picker-select-content">
      <ul class="f-date-year-item">
        <li
          v-for="(item, i) in list"
          :key="i"
          :class="[item == yearValue ? 'f-this' : '']"
          @click="itemClick(item)"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div class="f-date-picker-select-footer">
      <div class="f-date-picker-select-footer-tool">
        <!-- <span class="m-l-1" @click="showSelectTime">时间</span> -->
      </div>
      <div class="f-date-picker-select-footer-tool">
        <!-- <span>现在</span>
        <span>确定</span>-->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "f-year-picker",
  props: {
    year: {
      type: Number,
      default: new Date().getFullYear(),
    },
  },
  data() {
    return {
      pos: {
        top: 0,
        left: 0,
      },
      yearValue: this.year,
    };
  },
  computed: {
    list() {
      let min = this.yearValue - 7;
      let max = this.yearValue + 7;
      let items = [];
      for (let i = min; i <= max; i++) {
        items.push(i);
      }
      return items;
    },
  },
  methods: {
    nextMonth(tag) {
      if (tag == "left") {
        this.yearValue -= 15;
      }
      if (tag == "right") {
        this.yearValue += 15;
      }
    },
    itemClick(item) {
      this.$emit("select", item);
    },
  },
};
</script>

<style>
</style>