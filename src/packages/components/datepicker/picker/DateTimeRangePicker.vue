<template>
  <div class="f-datetime-range">
    <f-date-picker @select-time="selectTime($event)" :begin="begin" :end="end"></f-date-picker>
    <f-date-picker @select-time="selectTime($event)"></f-date-picker>
  </div>
</template>

<script>
export default {
  name: "f-datetime-range",
  props: {
    /**
     * 范围
     */
    begin: String,
    end: String,
  },
  methods: {
    selectTime(e) {
      console.log(e);
      //   let date = new Date(e.date);
      //   this.time = d.format(date, this.format);
      //   this.close();
    },
  },
};
</script>

<style>
</style>