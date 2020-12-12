<template>
  <span
    class="f-icon"
    v-html="svg"
    :style="{
      width: width + 'px',
      height: height + 'px',
      textAlign: 'center',
      lineHeight: height + 'px',
    }"
    ref="iconRef"
  ></span>
</template>

<script lang="ts">
import { HttpClient } from "../../utils/HttpClient";
import { getCurrentInstance, nextTick, onMounted, ref, watch } from "vue";
import IconOption from "./IconOption";
export default {
  name: "f-icon",
  props: {
    icon: {
      type: String,
      default: "",
      required: true,
    },
    width: {
      type: Number,
      default: 18,
    },
    height: {
      type: Number,
      default: 18,
    },
    type: {
      type: String,
      default: "feather",
    },
    color: {
      type: String,
      default: "white",
    },
  },
  setup(props) {
    let icon = "book";

    const svg = ref();

    const iconUrls = {
      ant: "icons/ant/",
      feather: "icons/feather/",
      md: "icons/md_icons/",
      eva: "icon/eva/",
    };
    onMounted(async () => {
      let url = `${iconUrls[props.type]}${props.icon}.svg`;
      // console.log('icon-url:'+url);
      
      // if (process.env.VUE_APP_ICON_BASE) {
      //   url = `${process.env.VUE_APP_ICON_BASE}${url}`;
      // }
      let http = new HttpClient();
      let res = await http.GetStringAsync(url);
      // console.log('加载的icon:'+res);
      
      let el = document.createElement("div");
      el.innerHTML = res;
      let svgEl = el.querySelector("svg") as SVGElement;
      svg.value = svgEl.outerHTML;
      nextTick(() => {
        updateIcon();
      });
    });

    const iconRef = ref<HTMLElement>();
    watch(
      () => [props.color, props.width, props.height],
      () => updateIcon
    );

    const updateIcon = () => {
      let ele = iconRef.value?.querySelector("svg") as SVGElement;
      // ele.style.fill = props.color;
      ele.setAttribute("width", props.width.toString());
      ele.setAttribute("height", props.height.toString());
    };

    return {
      svg,
      iconRef,
    };
  },
};
</script>

<style>
</style>