<template>
  <div class="f-table" ref="container">
    <div class="f-table-header" ref="cols">
      <table>
        <thead>
          <tr>
            <td v-for="(item, index) in data.headerList" :key="index">
              <div
                class="f-table-td"
                :class="{ 'f-table-td-center': item.center }"
                :style="{ width: getWidth(item), textAlign: item.align }"
                v-if="!item.type"
              >
                <div class="f-table-header-item">
                  <span>{{ item.title }}</span>
                  <TableSort
                    v-if="item.sort"
                    :status="
                      item.field == data.sort.field ? data.sort.value : ''
                    "
                    @change="sortChange($event, item.field)"
                  ></TableSort>
                </div>
              </div>
              <div v-else :style="{ width: '60px' }" class="f-table-type">
                <TableCheckBox
                  v-if="item.type == 'checkbox'"
                  :status="data.checkedList.length == data.dataList.length"
                  @change="checkAll($event)"
                ></TableCheckBox>
              </div>
            </td>
            <td v-if="test()" class="f-table-patch">
              <div style="width: 17px"></div>
            </td>
          </tr>
        </thead>
      </table>
    </div>
    <div
      class="f-table-content"
      :style="{ maxHeight: contentHeight > 0 ? contentHeight + 'px' : '' }"
      @scroll="contentScroll"
      :class="{
        'f-table-content-boderbottom':
          !data.dataList || data.dataList.length == 0,
      }"
      ref="content"
    >
      <table v-if="data.dataList && data.dataList.length > 0" border="0">
        <tbody>
          <tr v-for="(item, index) in data.dataList" :key="index">
            <td v-for="(header, i) in data.headerList" :key="i">
              <div
                v-if="!header.type"
                class="t-table-content-item f-table-td"
                :style="{ width: getWidth(header), textAlign: header.align }"
              >
                <div v-if="!header.slot">
                  {{ item[header.field] }}
                </div>
                <slot v-else :name="header.field" v-bind="item"></slot>
              </div>
              <div v-else :style="{ width: '60px' }" class="f-table-type">
                <TableCheckBox
                  v-if="header.type == 'checkbox'"
                  :status="
                    data.checkedList.findIndex((a) => a == item[idkey]) > -1
                  "
                  @change="itemChecked($event, item[idkey])"
                ></TableCheckBox>
                <TableRadio
                  v-if="header.type == 'radio'"
                  :status="data.radioValue == item[idkey]"
                  @change="radioChange($event, item[idkey])"
                >
                </TableRadio>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Empty v-if="!data.dataList || data.dataList.length == 0"></Empty>
    </div>
    <!-- <TableFooter></TableFooter> -->
    <div class="f-table-pager">
      <slot name="pager">
        <!-- <f-pager :count="500"></f-pager> -->
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  getCurrentInstance,
  onMounted,
  PropType,
  reactive,
  ref,
  watch,
} from "vue";
// import TableFooter from "./TableFooter";
import TableCheckBox from "./TableCheckBox.vue";
import TableRadio from "./TableRadio.vue";
import TableSort from "./TableSort.vue";

import cdk from "../../utils/cdk";

import Empty from "@/packages/components/empty/Empty.vue";

import { TableData, HeaderListItem } from "@/packages/types/FeelTable";

export default {
  name: "f-table",
  components: {
    // TableFooter,
    TableCheckBox,
    TableRadio,
    TableSort,
    Empty,
  },
  props: {
    header: {
      type: Array as PropType<HeaderListItem[]>,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
    /**
     * 最低列宽
     */
    colMinWidth: {
      type: Number,
      default: 80,
    },
    /**
     * 最大的高度 0 不限制
     */
    contentHeight: {
      type: Number,
      default: 0,
    },
    /**
     * key，唯一标识列
     */
    idkey: {
      type: String,
      required: true,
      default: "id",
    },
    selector: {
      type: String,
      default: "",
      validator: (e: string) => ["", "checkbox", "radio"].indexOf(e) !== -1,
    },
  },
  setup(props) {
    const data = reactive<TableData>({
      headerList: props.header,
      dataList: props.data,
      checkedList: [],
      radioValue: "",
      sort: {
        field: "",
        value: "",
      },
      w: 0,
    });

    watch(
      () => props.data,
      () => {
        console.log("重新修改table的data属性");

        data.dataList = props.data;
      }
    );

    const container = ref<HTMLElement>();
    const content = ref<HTMLElement>();
    const cols = ref<HTMLElement>();

    const ctx = getCurrentInstance();

    const updateColWidth = () => {
      let el = container.value;
      let setWidthCols = data.headerList.filter((a) => {
        if (a.width > 0 && !a.type) {
          return true;
        }
        return false;
      });
      let unSetWidthCols = data.headerList.filter((a) => {
        if (a.width || a.type) {
          return false;
        }
        return true;
      });
      let choiceW = 0;
      let index = data.headerList.findIndex((a) => a.type);
      if (index !== -1) {
        choiceW = 60;
      }
      let patchW = 0;
      if (test()) {
        patchW = 17;
      }
      let containerWdith = 0;
      if (el) {
        containerWdith = el.clientWidth - patchW - choiceW;
      }
      console.log("width:" + el?.clientWidth);
      let sumWidth = 0;
      for (let i in setWidthCols) {
        let item = setWidthCols[i];
        sumWidth += item.width + 0;
      }
      let w = containerWdith - sumWidth;
      let len = unSetWidthCols.length;

      console.log(
        `containerWdith:${containerWdith} sumWidth:${sumWidth} w:${w} len:${len} choiceW:${choiceW} patchW:${patchW}`
      );
      let unSetColW = w / len;
      for (let i in unSetWidthCols) {
        let item = unSetWidthCols[i];
        if (unSetColW <= 200) {
          item.setWidth = 200;
        } else {
          item.setWidth = unSetColW;
        }
      }

      if (container.value) {
        data.w = container.value.clientWidth;
      }
    };

    const test = () => {
      let el = content.value;
      if (el) {
        return el.scrollHeight > el.clientHeight;
      } else {
        return false;
      }
    };

    const getCheckAll = () => {
      return data.checkedList;
    };

    const clearCheckAll = () => {
      data.checkedList = [];
    };

    const getRadioValue = () => {
      return data.radioValue;
    };
    const clearRadio = () => {
      data.radioValue = "";
    };
    /**
     * 全选
     */
    const checkAll = (e) => {
      if (e.value == false) {
        data.checkedList = [];
      } else {
        data.checkedList = [];
        data.dataList.forEach((a) => {
          data.checkedList.push(a[props.idkey]);
        });
      }
    };

    /**
     * 选中
     */
    const itemChecked = (e, key) => {
      let index = data.checkedList.findIndex((a) => a == key);
      if (index == -1) {
        data.checkedList.push(key);
      } else {
        data.checkedList.splice(index, 1);
      }
      console.log(data.checkedList);
      console.log(key);
      console.log(data.checkedList.findIndex((a) => a == key));
    };
    const radioChange = (e, key) => {
      console.log(key);
      data.radioValue = key;
    };

    const contentScroll = (e) => {
      if (cols.value) {
        cols.value.scrollLeft = e.srcElement.scrollLeft;
      }
    };

    const getWidth = (header: HeaderListItem) => {
      if (!header.field) {
        return "80px";
      }
      let field = header.field;
      let item = data.headerList.filter((a) => a.field == field)[0];
      if (item.width) {
        return item.width + "px";
      }
      if (item.setWidth) {
        return item.setWidth + "px";
      }

      return "80px";
    };

    const sortChange = (e, field) => {
      console.log(e);
      console.log(field);
      data.sort.field = field;
      data.sort.value = e.value ? "asc" : "desc";
      ctx?.emit("sort", {
        field: field,
        sort: data.sort.value,
      });
    };

    cdk.windowOnResize(() => {
      updateColWidth();
    });

    onMounted(() => {
      updateColWidth();
    });

    return {
      data,
      container,
      content,
      cols,

      itemChecked,
      radioChange,
      getWidth,
      checkAll,
      sortChange,
      test,
      contentScroll,
    };
  },
};
</script>

<style>
</style>