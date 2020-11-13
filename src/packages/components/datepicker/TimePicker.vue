<template>
  <div class="f-date-picker-select f-time-picker f-shadow">
    <div class="f-date-picker-select-content f-time-picker-body">
      <ul>
        <TimePickerWheel :list="data.h" v-model="models.h"></TimePickerWheel>
        <TimePickerWheel :list="data.m" v-model="models.m"></TimePickerWheel>
        <TimePickerWheel :list="data.s" v-model="models.s"></TimePickerWheel>
      </ul>
    </div>
    <div class="f-date-picker-footer">
      <div></div>
      <div class="f-date-picker-footer-tool">
        <button class="f-button m-r-1" @click="cancelClick">取消</button>
        <button class="f-button" @click="okClick">确定</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, onUpdated, reactive, watch } from "vue";
import d from "./date";
import TimePickerWheel from "./timepicker/TimePickerWheel.vue";
import moment from "moment";
interface Data {
  h: Array<number>;
  m: Array<number>;
  s: Array<number>;
}
export default {
  name: "f-time-picker",
  components: {
    TimePickerWheel,
  },
  props: {
    time: String,
    format: {
      type: String,
      default: "HH:mm:ss",
    },
  },
  setup(props, context) {
    const data = reactive<Data>({
      h: [],
      m: [],
      s: [],
    });
    const models = reactive({
      h: 0,
      m: 0,
      s: 0,
    });
    onMounted(() => {
      data.h = [];
      data.m = [];
      data.s = [];
      for (let i = 0; i <= 23; i++) {
        data.h.push(i);
      }
      for (let i = 0; i <= 59; i++) {
        data.m.push(i);
      }
      for (let i = 0; i <= 59; i++) {
        data.s.push(i);
      }
    });

    watch(
      () => props.time,
      () => updateTime
    );

    const updateTime = () => {
      console.log("执行update");
      if (props.time) {
        //解析格式的分隔符

        let date = moment(props.time, props.format);
        console.log(`h:${date.hour()} m:${date.minute()} s:${date.second()}`);
        models.h = date.hour();
        models.m = date.minute();
        models.s = date.second();
      }
    };

    const time = computed(() => {
      let str = `${models.h}:${models.m}:${models.s}`;
      console.log(str);

      return moment(str, props.format).format(props.format);
    });

    const okClick = () => {
      context.emit("select", {
        type: "ok",
        time: {
          h: models.h,
          m: models.m,
          s: models.s,
        },
        timeStr: `${models.h}:${models.m}:${models.s}`,
      });
    };

    onMounted(() => {
      updateTime();
    });

    const cancelClick = () => {
      context.emit("select", {
        type: "cancel",
        time: {
          h: models.h,
          m: models.m,
          s: models.s,
        },
        timeStr: `${models.h}:${models.m}:${models.s}`,
      });
    };

    return {
      data,
      models,
      okClick,
      cancelClick,
      time,
    };
  },
};
</script>

<style>
</style>