<template>
  <div class="f-date-picker-select f-shadow">
    <!-- <span>{{ data.selectDate }}</span> -->
    <div class="f-date-picker-select-header">
      <div class="f-date-picker-select-header-tool">
        <span class="f-icon icon-left" @click="nextYear('left')"></span>
        <span class="f-icon icon-left" @click="nextMonth('left')"></span>
      </div>
      <div class="f-date-yyyyMM">
        <span @click="setShowYear">{{ data.year }}年</span>
        <span @click="setShowMonth">{{ data.month }}月</span>
      </div>
      <div class="f-date-picker-select-header-tool">
        <span class="f-icon icon-right" @click="nextMonth('right')"></span>
        <span class="f-icon icon-right" @click="nextYear('right')"></span>
      </div>
    </div>
    <div class="f-date-picker-select-content">
      <div class="f-date-picker-content-header">
        <div
          class="f-date-picker-content-header-item"
          v-for="(item, i) in data.headers"
          :key="i"
        >
          {{ item }}
        </div>
      </div>
      <div class="f-date-picker-content-time">
        <ul>
          <li
            v-for="(item, i) in data.dayList"
            :key="i"
            @click="timeItemClick(item)"
            :class="[
              item.type != 'curr' ? 'f-date-picker-nextpre' : '',
              checkEq(item.date, data.toDay) ? 'f-today' : '',
              checkEq(item.date, data.selectDate) ? 'f-selectday' : '',
              rangeValidator(item.date) == false ? 'f-date-disabled' : '',
            ]"
          >
            <slot>{{ item.day }}</slot>
          </li>
        </ul>
      </div>
    </div>
    <div class="f-date-picker-footer">
      <div class="f-date-picker-footer-tool" @click="showSelectTime">
        <span class="f-icon icon-time m-l-1"></span>
        <span>{{ time }}</span>
      </div>
      <div class="f-date-picker-footer-tool">
        <button type="button" class="f-button" @click="clear">清空</button>
        <button type="button" class="f-button" @click="currClick">现在</button>
        <button type="button" class="f-button" @click="close">确定</button>
      </div>
    </div>
    <f-year-picker v-if="data.showYear" @select="selectYear"></f-year-picker>
    <f-month-picker
      v-if="data.showMonth"
      @select="selectMonth"
      :year="data.year"
      :month="data.month"
    ></f-month-picker>
    <div class="f-picker-time" v-if="data.showTime">
      <f-time-picker :time="time" @select="selectTime"></f-time-picker>
    </div>
  </div>
</template>
<script lang="ts">
import { computed, onMounted, reactive, watch } from "vue";
import d from "./date";

import moment from "moment";

interface Data {
  headers: string[];
  dayList: { type: string; day: number; date: Date }[];
  currDate: Date;
  selectDate: Date;
  toDay: Date;
  year: number;
  month: number;
  showYear: boolean;
  showTime: boolean;
  showMonth: boolean;
  selectTimeDate: { h: number; m: number; s: number };
}
export default {
  name: "f-date-picker",
  props: {
    begin: String,
    end: String,
    value: String,
  },
  setup(props, context) {
    const data = reactive<Data>({
      headers: ["日", "一", "二", "三", "四", "五", "六"],
      dayList: [],
      currDate: moment().toDate(),
      toDay: moment().toDate(),
      selectDate: moment().toDate(),
      year: 0,
      month: 0,
      showYear: false,
      showTime: false,
      showMonth: false,
      selectTimeDate: { h: 0, m: 0, s: 0 },
    });
    onMounted(() => {
      updateDay();
      data.year = data.currDate.getFullYear();
      data.month = data.currDate.getMonth() + 1;

      if (!props.value) {
        let curr = moment();
        data.selectTimeDate = {
          h: curr.hour(),
          m: curr.minute(),
          s: curr.second(),
        };
      } else {
        moment(props.value);
      }
    });

    const time = computed(() => {
      console.log(data.selectTimeDate);

      return moment(
        `${data.selectTimeDate.h}:${data.selectTimeDate.m}:${data.selectTimeDate.s}`,
        "HH:mm:ss"
      ).format("HH:mm:ss");
    });

    const checkEq = (date1, date2) => {
      if (
        moment(date1).format("YYYY-MM-DD") == moment(date2).format("YYYY-MM-DD")
      ) {
        return true;
      }
      return false;
    };

    const rangeValidator = (date: Date) => {
      if (props.begin && props.end) {
        return moment(date).isBetween(props.begin, props.end);
      }
      let status = true;
      if (props.begin) {
        if (moment(date).isBefore(props.begin)) {
          status = false;
        }
      }
      if (props.end) {
        if (moment(date).isAfter(props.end)) {
          status = false;
        }
      }
      return status;
    };

    const updateDay = () => {
      data.dayList = [];
      let year = data.currDate.getFullYear();
      let month = data.currDate.getMonth();
      let maxDay = getMonthMaxDay(year, month + 1);
      //判断第一天是第几位
      let date = new Date(year, month, 1);
      let weekIndex = date.getDay();
      //获取应该从上个月获取weekIndex-1天
      let preGetDayCount = weekIndex - 1;
      let preDayCount = getMonthMaxDay(year, month);
      for (let i = 0; i <= preGetDayCount; i++) {
        data.dayList.push({
          type: "pre",
          day: preDayCount - (preGetDayCount - i),
          date: new Date(
            data.currDate.getFullYear(),
            data.currDate.getMonth() - 1,
            preDayCount - (preGetDayCount - i)
          ),
        });
      }
      for (let i = 1; i <= maxDay; i++) {
        data.dayList.push({
          type: "curr",
          day: i,
          date: new Date(
            data.currDate.getFullYear(),
            data.currDate.getMonth(),
            i
          ),
        });
      }
      //下一个月补位的数量
      let nextGetDayCount = 41 - (maxDay + preGetDayCount);
      for (let i = 1; i <= nextGetDayCount; i++) {
        data.dayList.push({
          type: "next",
          day: i,
          date: new Date(
            data.currDate.getFullYear(),
            data.currDate.getMonth() + 1,
            i
          ),
        });
      }
    };
    const getMonthMaxDay = (year, month) => {
      let maxDay = new Date(year, month, 0).getDate();
      return maxDay;
    };

    const nextYear = (diretion: string) => {
      let date = data.currDate;
      if (diretion == "left") {
        date.setFullYear(date.getFullYear() - 1);
      }
      if (diretion == "right") {
        date.setFullYear(date.getFullYear() + 1);
      }
      data.year = data.currDate.getFullYear();
      updateDay();
    };

    const nextMonth = (diretion) => {
      let date = data.currDate;
      if (diretion == "left") {
        if (date.getMonth() > 0) {
          date.setMonth(date.getMonth() - 1);
        } else {
          date.setFullYear(date.getFullYear() - 1);
          date.setMonth(11);
        }
      }
      if (diretion == "right") {
        if (date.getMonth() == 11) {
          date.setFullYear(date.getFullYear() + 1);
          date.setMonth(0);
        } else {
          date.setMonth(date.getMonth() + 1);
        }
      }
      data.year = data.currDate.getFullYear();
      data.month = data.currDate.getMonth() + 1;
      updateDay();
    };

    const timeItemClick = (item) => {
      let date = item.date;
      if (rangeValidator(date) == false) return;
      date.setHours(data.selectTimeDate.h);
      date.setMinutes(data.selectTimeDate.m);
      date.setSeconds(data.selectTimeDate.s);
      // data.currDate = date;
      data.selectDate = date;
      context.emit("select-time", item.date);
    };

    const selectTime = (e) => {
      console.log(e);

      if (e.type == "ok") {
        data.showTime = false;
        data.selectTimeDate.h = e.time.h;
        data.selectTimeDate.m = e.time.m;
        data.selectTimeDate.s = e.time.s;
        let date = data.currDate;
        date.setHours(data.selectTimeDate.h);
        date.setMinutes(data.selectTimeDate.m);
        date.setSeconds(data.selectTimeDate.s);
        context.emit("select-time", data.currDate);
      }
      if (e.type == "cancel") {
        data.showTime = false;
      }
    };
    const showSelectTime = () => {
      data.showTime = true;
    };

    const selectYear = (e) => {
      console.log(e);
      data.year = e;
      data.showYear = false;
      data.currDate.setFullYear(e);
      updateDay();
    };

    const selectMonth = (e: number) => {
      console.log(e);
      data.month = e;
      data.showMonth = false;
      data.currDate.setMonth(e - 1);
      updateDay();
    };

    const setShowYear = () => {
      data.showYear = true;
      data.showMonth = false;
      data.showTime = false;
    };
    const setShowMonth = () => {
      data.showMonth = true;
    };

    const currClick = () => {
      context.emit("select-time", moment());
    };

    const close = () => {
      context.emit("close");
    };
    const clear = () => {
      data.selectDate = moment("0000-00-00").toDate();
      console.log(data.selectDate);

      context.emit("clear");
    };

    return {
      data,
      checkEq,
      setShowMonth,
      setShowYear,
      selectMonth,
      selectYear,
      showSelectTime,
      selectTime,
      timeItemClick,
      nextMonth,
      nextYear,
      getMonthMaxDay,
      updateDay,
      rangeValidator,
      time,
      currClick,
      close,
      clear,
    };
  },
};
</script>

<style>
</style>