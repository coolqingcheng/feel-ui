<template>
  <span class="f-icon" v-html="svg" :style="{
      width: width + 'px',
      height: width + 'px',
      textAlign: 'center',
      lineHeight: width + 'px',
    }" ref="iconRef"></span>
</template>

<script lang="ts">
import { HttpClient } from "../../utils/HttpClient";
import { nextTick, onMounted, ref, watch } from "vue";
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
      getSvg();
    });

    const iconRef = ref<HTMLElement>();
    watch(
      () => [props.color, props.width],
      () => updateIcon
    );

    const updateIcon = () => {
      let ele = iconRef.value?.querySelector("svg") as SVGElement;
      // ele.style.fill = props.color;
      ele.setAttribute("width", props.width.toString());
      ele.setAttribute("height", props.width.toString());
    };

    const getSvg = () => {
      let url = `${iconUrls[props.type]}${props.icon}.svg`;
      let http = new HttpClient();
      http
        .GetStringAsync(url)
        .then((res) => {
          let el = document.createElement("div");
          el.innerHTML = res;
          let svgEl = el.querySelector("svg") as SVGElement;
          svg.value = svgEl.outerHTML;
          nextTick(() => {
            updateIcon();
          });
        })
        .catch((err) => {
          console.error(err);
        });
    };

    watch(
      () => props.icon,
      () => getSvg()
    );

    return {
      svg,
      iconRef,
    };
  },
};
</script>

<style>
</style>