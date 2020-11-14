<template>
  <f-date
    format="YYYY年MM月DD日 HH:mm:ss"
    :begin="data.begin"
    :end="data.end"
  ></f-date>
  <p>限制范围:{{ data.begin }} - {{ data.end }}</p>
</template>

<script>
import { getCurrentInstance, onMounted, reactive } from "vue";
import moment from "moment";
export default {
  props: {},
  setup(props) {
    let format = "YYYY-MM-DD";
    const data = reactive({
      begin: moment().subtract(7, "days").format(format).toString(),
      end: moment().add(3, "days").format(format).toString(),
    });

    return {
      data,
    };
  },
};
</script>

<style>
</style>