<template>
  <div class="f-pager m-t-1">
    <ul class="f-pager-list m-b-1">
      <li class="pre f-pager-item" @click="prev()">
        <f-icon icon="chevron-left"></f-icon>
      </li>
      <li
        v-for="(item, i) in pageNums"
        :key="i"
        class="f-pager-item"
        @click="pageItemClick(item.index)"
        :class="[
          item.index == data.index ? 'f-pager-item-selected' : '',
          item.index == -1 ? 'f-pager-item-ellipsis' : '',
        ]"
      >
        <span v-if="item.type == 0">{{ item.index }}</span>
        <span v-if="item.type == 1">...</span>
      </li>
      <li class="next f-pager-item" @click="next()">
        <f-icon icon="chevron-right"></f-icon>
      </li>
    </ul>
    <span class="f-pager-sum m-b-1">一共:{{ count }}条</span>
    <select
      @change="limitChange"
      class="f-pager-changesize m-b-1 m-l-1"
      v-model="data.size"
    >
      <option :value="item" v-for="(item, i) in limit" :key="i">
        {{ item }}
      </option>
    </select>
    <span class="f-pager-jump m-b-1">
      跳到
      <input
        type="number"
        v-model.number="data.inputIndex"
        @keydown.enter="enter"
      />
      页
      <f-button
        text="跳转"
        class="m-l-1"
        @click="enter"
        :mini="true"
      ></f-button>
    </span>
  </div>
</template>

<script lang="ts">
import { computed, getCurrentInstance, reactive, watch } from "vue";
export default {
  name: "f-pager",
  props: {
    /**
     * 总条数
     */
    count: {
      type: Number,
      default: 0,
    },
    /**
     * 当前页码
     */
    index: {
      type: Number,
      default: 1,
    },
    /**
     * 当前页大小
     */
    size: {
      type: Number,
      default: 10,
    },
    bgColor: {
      type: String,
      default: "",
    },
    /**
     * 分页条数选择
     */
    limit: {
      type: Array,
      default: () => [10, 20, 50],
    },
  },
  setup(props, context) {
    const ctx = getCurrentInstance();

    const data = reactive({
      index: props.index,
      size: props.size,
      inputIndex: props.index,
    });

    const pageCount = computed(() => {
      if (props.count % data.size == 0) {
        return props.count / data.size;
      }
      return Math.floor(props.count / data.size) + 1;
    });
    const pageItemClick = (index: number) => {
      console.log(index);
      if (index >= 1) {
        data.index = index;
        context.emit("page-change", { size: data.size, index: data.index });
      }
    };
    const prev = () => {
      if (data.index > 1) {
        data.index -= 1;
        context.emit("page-change", { size: data.size, index: data.index });
      }
    };
    const next = () => {
      if (data.index < pageCount.value) {
        data.index += 1;
        context.emit("page-change", { size: data.size, index: data.index });
      }
    };
    const limitChange = (e) => {
      data.size = e.target.value;
      data.index = 1;
      context.emit("page-change", { size: data.size, index: data.index });
    };
    const enter = () => {
      data.index = data.inputIndex;
    };
    watch(
      () => data.index,
      () => {
        data.inputIndex = data.index;
      }
    );

    /**
     * 生成分页页码
     */
    const pageNums = computed(() => {
      // console.log("生成页码");
      let count = pageCount.value;
      let currIndex = data.index;
      let list: { type: number; index: number }[] = [];
      if (pageCount.value < 6) {
        for (let i = 1; i <= pageCount.value; i++) {
          list.push({
            type: 0,
            index: i,
          });
        }
      } else {
        list.push({
          type: 0,
          index: 1,
        });
        let index = data.index;
        for (let i = 3; i >= 1; i--) {
          // if(index)
          let j = index - i;
          if (j > 1 && j < pageCount.value) {
            if (i == 3) {
              list.push({
                type: 1,
                index: -1,
              });
            } else {
              list.push({
                type: 0,
                index: j,
              });
            }
          }
        }
        if (list.findIndex((a) => a.index == index) == -1) {
          if (index < pageCount.value) {
            list.push({
              type: 0,
              index: index,
            });
          }
        }
        for (let i = 1; i <= 2; i++) {
          let j = index + i;
          if (j < pageCount.value) {
            list.push({
              type: 0,
              index: j,
            });
            // console.log("j:" + j);
          }
          if (i == 2) {
            if (pageCount.value - j > 1) {
              list.push({
                type: 1,
                index: -1,
              });
            }
          }
        }
        list.push({
          type: 0,
          index: pageCount.value,
        });
      }
      // console.log("生成页码:" + pageCount.value);
      // console.log(list);

      return list;
    });

    return {
      pageCount,
      pageItemClick,
      prev,
      next,
      data,
      limitChange,
      enter,
      pageNums,
    };
  },
};
</script>

<style>
</style>