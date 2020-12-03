<template>
  <div ref="container">
    <div class="f-table" ref="table">
      <div class="f-table-header" ref="cols">
        <table>
          <thead>
            <tr>
              <td v-for="(item, index) in headerList" :key="index">
                <div
                  class="f-table-td"
                  :class="{ 'f-table-td-center': item.center }"
                  :style="{ width: getWidth(item), textAlign: item.align }"
                  v-if="!item.type"
                >
                  <div class="f-table-header-item">
                    <span>{{ item.title }}-{{ item.width }}</span>
                    <TableSort
                      v-if="item.sort"
                      :status="item.field == sort.field ? sort.value : ''"
                      @change="sortChange($event, item.field)"
                    ></TableSort>
                  </div>
                </div>
                <div v-else :style="{ width: '60px' }" class="f-table-type">
                  <TableCheckBox
                    v-if="item.type == 'checkbox'"
                    :status="checkedList.length == dataList.length"
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
        ref="content"
      >
        <table border="0">
          <tbody>
            <tr v-for="(item, index) in dataList" :key="index">
              <td v-for="(header, i) in headerList" :key="i">
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
                      checkedList.findIndex((a) => a == item[idkey]) > -1
                    "
                    @change="itemChecked($event, item[idkey])"
                  ></TableCheckBox>
                  <TableRadio
                    v-if="header.type == 'radio'"
                    :status="radioValue == item[idkey]"
                    @change="radioChange($event, item[idkey])"
                  >
                  </TableRadio>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- <TableFooter></TableFooter> -->
    </div>
  </div>
</template>

<script>
// import TableFooter from "./TableFooter";
import TableCheckBox from "./TableCheckBox.vue";
import TableRadio from "./TableRadio.vue";
import TableSort from "./TableSort.vue";
export default {
  name: "f-table",
  components: {
    // TableFooter,
    TableCheckBox,
    TableRadio,
    TableSort,
  },
  props: {
    header: {
      type: Array,
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
    },
    selector: {
      type: String,
      default: "",
      validator: (e) => ["", "checkbox", "radio"].indexOf(e) !== -1,
    },
  },
  computed: {},
  data() {
    return {
      headerList: this.header,
      dataList: this.data,
      checkedList: [],
      radioValue: "",
      sort: {
        field: "",
        value: "",
      },
      w: 0,
    };
  },
  mounted() {
    this.updateColWidth();
    this.w = this.$refs.container.clientWidth;
    window.addEventListener("resize", this.onScreenResize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.onScreenResize);
  },
  methods: {
    // 公共api

    getCheckAll() {
      return this.checkedList;
    },
    clearCheckAll() {
      this.checkedList = [];
    },
    getRadioValue() {
      return this.radioValue;
    },
    clearRadio() {
      this.radioValue = "";
    },
    /**
     * 全选
     */
    checkAll(e) {
      console.log(e);
      if (e.value == false) {
        this.checkedList = [];
      } else {
        this.checkedList = [];
        this.dataList.forEach((a) => {
          this.checkedList.push(a[this.idkey]);
        });
      }
    },
    /**
     * 选中
     */
    itemChecked(e, key) {
      let index = this.checkedList.findIndex((a) => a == key);
      if (index == -1) {
        this.checkedList.push(key);
      } else {
        this.checkedList.splice(index, 1);
      }
      console.log(this.checkedList);
      console.log(key);
      console.log(this.checkedList.findIndex((a) => a == key));
    },
    radioChange(e, key) {
      this.radioValue = key;
    },
    test() {
      let el = this.$refs.content;
      if (el) {
        return el.scrollHeight > el.clientHeight;
      } else {
        return false;
      }
    },
    contentScroll(e) {
      this.$refs.cols.scrollLeft = e.srcElement.scrollLeft;
    },
    getWidth(header) {
      if (!header.field) {
        return "80px";
      }
      let field = header.field;
      let item = this.headerList.filter((a) => a.field == field)[0];
      if (item.width) {
        return item.width + "px";
      }
      if (item.setWidth) {
        return item.setWidth + "px";
      }

      return "80px";
    },
    onScreenResize() {
      // console.log("修改屏幕大小");
      this.updateColWidth();
      this.w = this.$refs.container.clientWidth;
    },
    updateColWidth() {
      let setWidthCols = this.headerList.filter((a) => {
        if (a.width > 0 && !a.type) {
          return true;
        }
        return false;
      });
      let unSetWidthCols = this.headerList.filter((a) => {
        if (a.width || a.type) {
          return false;
        }
        return true;
      });
      let choiceW = 0;
      let index = this.headerList.findIndex((a) => a.type);
      if (index !== -1) {
        choiceW = 60;
      }
      let patchW = 0;
      if (this.test()) {
        patchW = 17;
      }
      let containerWdith = this.$refs.container.clientWidth - patchW - choiceW;
      let sumWidth = 0;
      for (let i in setWidthCols) {
        let item = setWidthCols[i];
        sumWidth += item.width + 1;
      }
      let w = containerWdith - sumWidth;
      let len = unSetWidthCols.length;

      console.log(
        `containerWdith:${containerWdith} sumWidth:${sumWidth} w:${w} len:${len} choiceW:${choiceW} patchW:${patchW}`
      );
      let unSetColW = (w - 3) / len;
      for (let i in unSetWidthCols) {
        let item = unSetWidthCols[i];
        if (unSetColW <= 300) {
          item.setWidth = 300;
        } else {
          item.setWidth = unSetColW;
        }
      }
    },
    sortChange(e, field) {
      console.log(e);
      console.log(field);
      this.sort.field = field;
      this.sort.value = e.value ? "asc" : "desc";
      this.$emit("sort", {
        field: field,
        sort: this.sort.value,
      });
    },
  },
};
</script>

<style>
</style>