<template>
  <Date ref="date">
    <template #body>
      <f-time-picker @select="select" :time="data.value"></f-time-picker>
    </template>
  </Date>
</template>

<script lang="ts">
import { inject, onMounted, reactive, ref, watch } from "vue";
import Date from "./Date.vue";
import moment from "moment";
export default {
  name: "f-date-time",
  components: {
    Date,
  },

  props: {
    format: {
      type: String,
      default: "HH:mm:ss",
    },
    time: String,
  },
  setup(props) {
    const data = reactive({
      value: props.time,
    });
    const select = (e) => {
      console.log(e);
      if (e.type == "ok") {
        let str = moment(e.timeStr, props.format)
          .format(props.format)
          .toString();
        data.value = str;
        date.value.setValue(str);
      }
      date.value.close();
    };
    watch(
      () => props.time,
      () => updateTime
    );

    const updateTime = () => {
      if (props.time) {
        let str = moment(props.time, props.format)
          .format(props.format)
          .toString();
        data.value = str;
        date.value.setValue(str);
      }
    };
    onMounted(() => {
      updateTime();
    });

    const date = ref();

    let color = inject("color");
    console.log("color:" + color);

    return {
      select,
      date,
      data,
    };
  },
};
</script>

<style>
</style>