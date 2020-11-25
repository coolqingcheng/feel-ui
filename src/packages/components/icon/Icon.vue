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
  ></span>
</template>

<script lang="ts">
import { HttpClient } from "@/packages/utils/HttpClient";
import { getCurrentInstance, onMounted, ref, watch } from "vue";
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
      default: 16,
    },
    height: {
      type: Number,
      default: 16,
    },
    type: {
      type: String,
      default: "md",
    },
  },
  setup(props) {
    let icon = "book";

    const svg = ref();

    const iconUrls = {
      ant: "/icons/ant/",
      feather: "/icons/feather/",
      md: "/icons/md/",
      eva: "/icon/eva/",
    };
    onMounted(async () => {
      let url = `${iconUrls[props.type]}${props.icon}.svg`;
      if (process.env.VUE_APP_ICON_BASE) {
        url = `${process.env.VUE_APP_ICON_BASE}${url}`;
      }
      let http = new HttpClient();
      let res = await http.GetStringAsync(url);
      let el = document.createElement("div");
      el.innerHTML = res;
      let svgEl = el.querySelector("svg") as SVGElement;
      svgEl.setAttribute("width", props.width.toString());
      svgEl.setAttribute("height", props.height.toString());
      svg.value = svgEl.outerHTML;
    });

    return {
      svg,
    };
  },
};
</script>

<style>
</style>