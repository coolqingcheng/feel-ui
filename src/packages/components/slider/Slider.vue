<template>
  <div class="f-slider-wrapper">
    <div class="f-slider" @click="sliderClick($event)" ref="container">
      <div class="f-slider-bg"></div>
      <div class="f-slider-bar" :style="{width:data.width,left:data.left}"></div>
      <SliderSelector v-model="data.v1" :parentWidth="data.parentWidth" :stepdata="stepData"></SliderSelector>
      <SliderSelector v-model="data.v2" v-if="range" :parentWidth="data.parentWidth" color="red"></SliderSelector>
      <div class="f-slider-step" v-if="showstep&&step>0">
        <div class="f-slider-stepcontainer">
          <div class="f-slider-stepitem" v-for="item in stepData" :key="item" :style="{'left':item+'%'}">
            <i class="f-slider-steppoint"></i>
            <div class="f-slider-steplabel">
              <!-- <span>20G</span> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="f-slider-label">
      <slot>
        <span v-if="true">range:{{rangeValue}} <br /> v1:{{data.v1}} <br /> w:{{data.parentWidth}}</span>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, onMounted, reactive, ref, watch } from "vue";
import SliderSelector from "./SliderSelector.vue";
import cdk from "@/packages/utils/cdk";
export default {
  name: "f-slider",
  components: {
    SliderSelector,
  },
  props: {
    modelValue: {
      type: Number,
    },
    max: {
      type: Number,
      default: 100,
    },
    min: {
      type: Number,
      default: 0,
    },
    range: {
      type: Boolean,
      default: false,
    },
    //步长 0为自由步长，大于0为 需要计算步长
    step: {
      type: Number,
      default: 0,
    },
    color: {
      type: String,
    },
    showstep: {
      type: Boolean,
      default: true,
    },
  },
  setup(props) {
    const data = reactive({
      v1: 20,
      v2: 0,
      width: "0",
      left: "0",
      //1 值 2 范围
      type: 1,
      parentWidth: 0,
      stepData: [0],
    });
    const container = ref<HTMLElement>();
    onMounted(() => {
      if (container.value) {
        data.parentWidth = container.value.clientWidth;
      }
      cdk.windowOnResize(() => {
        if (container.value) {
          data.parentWidth = container.value.clientWidth;
        }
      });
    });

    const stepData = computed(() => {
      if (props.step == 0) return [];
      let arr: number[] = [];
      let scale = (props.max - props.min) / props.step;
      for (let i = 0; i <= scale; i++) {
        arr.push(props.step * i);
      }
      console.log(arr);

      return arr;
    });

    const rangeValue = computed(() => {
      // console.log(`${data.v1} ${data.v2} w:${container.value?.clientWidth}`);
      let v1 = 0,
        v2 = 0;
      if (container.value) {
        let w = container.value.clientWidth;
        v1 = Math.round(((data.v1 + 10) / w) * 100);
        v2 = Math.round(((data.v2 + 10) / w) * 100);
      }
      return [v1, v2];
    });

    const sliderClick = (e: MouseEvent) => {
      let browerX = e.clientX;
      console.log(`点击:${e.clientX}`);
      let containerX = 0;
      if (container.value) {
        containerX = container.value.getBoundingClientRect().left;
        let scale =
          ((browerX - containerX - 10) /
            container.value?.getBoundingClientRect().width) *
          100;
        // console.log(`${scale}/100`);
        if (props.range) {
          //判断调整的tag
          console.log(`v1:${data.v1} v2:${data.v2}`);
          let x = browerX - containerX - 10;
          console.log("x:" + x);
          let tag1 = Math.abs(x - data.v1);
          let tag2 = Math.abs(x - data.v2);
          console.log(`v1:${data.v1} v2:${data.v2}`);

          console.log(`${tag1} - ${tag2}`);
          if (tag1 < tag2) {
            //修改tag2的位置
            data.v1 = browerX - containerX - 10;
            console.log("修改tag1");
          } else {
            //修改tag1
            data.v2 = browerX - containerX - 10;
            console.log("修改tag2");
          }
        } else {
          data.v1 = browerX - containerX - 10;
          console.log("v1:" + data.v1);
        }
      }
    };

    /**
     *更新进度条状态
     */
    watch(
      () => [data.v1, data.v2],
      () => {
        let min = 0,
          max = 0;
        if (data.v1 > data.v2) {
          min = data.v2;
          max = data.v1;
        }
        if (data.v2 > data.v1) {
          min = data.v1;
          max = data.v2;
        }
        let w = max - min;
        if (props.range) {
          //计算进度条的left和width
          data.width = `${(w / data.parentWidth) * 100}%`;
          data.left = `${((min + 10) / data.parentWidth) * 100}%`;
        } else {
          data.width = `${(w / data.parentWidth) * 100}%`;
        }
      }
    );

    return {
      data,
      sliderClick,
      container,
      rangeValue,
      stepData,
    };
  },
};
</script>

<style>
</style>