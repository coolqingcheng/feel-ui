<template>
  <div class="f-tab">
    <div class="f-tab-header">
      <ul>
        <li
          v-for="(item, i) in titles"
          :key="i"
          @click="headerClick(item)"
          :class="[item == selectTitle ? 'active' : '']"
        >
          {{ item }}
        </li>
      </ul>
    </div>
    <div ref="tabcontent" class="f-tab-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "f-tab",
  props: {
    active: {
      type: String,
      default: "",
    },
  },
  provide() {
    return {
      tab: this,
    };
  },
  data() {
    return {
      titles: [],
      selectTitle: this.active,
    };
  },
  methods: {
    register(title) {
      let count = this.titles.filter((a) => a == title).length;
      if (count == 0) {
        this.titles.push(title);
      }

      this.selectTitle = title;
      console.log(this.selectTitle);
    },
    headerClick(title) {
      this.selectTitle = title;
      console.log(title);
    },
    test() {
      //   this.title = new Date().toLocaleString();
      this.selectTitle = "ok:" + new Date().toLocaleString();
      console.log(this);
      console.log(this.selectTitle);
      console.log(this.titles);
    },
  },
};
</script>

<style>
</style>