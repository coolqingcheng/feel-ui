<template>
  <div class="f-slider-wrapper">
    <div class="f-slider-header">
      <slot name="header"></slot>
    </div>
    <div class="f-slider" @click="sliderClick($event)" ref="container">
      <div class="f-slider-bar" :style="{width:`${progreeBarLength}%`,left:`${progreeBarOffset}%`,background:color}"></div>
      <SliderSelector v-model="data.v1" :tips="tips1" :parentWidth="data.parentWidth" :stepdata="stepData" @press="press" :color="color" :showtip="showtip"></SliderSelector>
      <SliderSelector v-model="data.v2" v-if="range" :tips="tips2" :parentWidth="data.parentWidth" :stepdata="stepData" color="red" @press="press" :showtip="showtip"></SliderSelector>
      <div class="f-slider-step" v-if="showstep&&step>0">
        <div class="f-slider-stepcontainer">
          <div class="f-slider-stepitem" v-for="item in stepData" :key="item" :style="{'left':item+'%'}">
            <i class="f-slider-steppoint"></i>
            <div class="f-slider-steplabel">

            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="f-slider-footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed,
  getCurrentInstance,
  onMounted,
  PropType,
  reactive,
  ref,
  watch,
} from "vue";
import SliderSelector from "./SliderSelector.vue";
import cdk from "@/packages/utils/cdk";
export default {
  name: "f-slider",
  components: {
    SliderSelector,
  },
  props: {
    modelValue: {
      type: [Number, Array],
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
    tipchange: {
      type: Function,
    },
    showtip: {
      type: Boolean,
      default: false,
    },
    /**
     * 结果过滤器
     */
    filter: {
      type: Function,
    },
  },
  emits: ["update:modelValue"],
  setup(props) {
    const data = reactive({
      //百分比
      v1: 0,
      v2: 0,
      width: 0,
      left: 0,
      //1 值 2 范围
      type: 1,
      parentWidth: 0,
      stepData: [0],
      press: false,
    });
    const container = ref<HTMLElement>();
    onMounted(() => {
      resizeWindow();
      if (props.range) {
        if (props.modelValue) {
          data.v1 = props.modelValue[0];
          data.v2 = props.modelValue[1];
        }
      } else {
        if (props.modelValue) {
          console.log("v1变化: " + props.modelValue);
          data.v1 = calculaScale(Number(props.modelValue));
        }
      }
    });
    cdk.windowOnResize(() => {
      resizeWindow();
    });
    const resizeWindow = () => {
      if (container.value) {
        data.parentWidth = container.value.clientWidth;
      }
    };

    const tips1 = computed(() => {
      let v1 = calculaModelValue(data.v1);
      if (props.tipchange) {
        let v = props.tipchange({ type: "1", value: v1 });
        return v;
      } else {
        return String(v1);
      }
    });
    const tips2 = computed(() => {
      let v2 = calculaModelValue(data.v2);
      if (props.tipchange) {
        let v = props.tipchange({ type: "2", value: v2 });
        return v;
      } else {
        return String(v2);
      }
    });

    const stepData = computed(() => {
      if (props.step == 0) return [];
      let arr: number[] = [];
      let scale = (props.max - props.min) / props.step;
      for (let i = 0; i <= scale; i++) {
        arr.push(props.step * i);
      }
      return arr;
    });

    const rangeValue = computed(() => {
      let v1 = 0,
        v2 = 0;
      return [v1, v2];
    });

    const sliderClick = (e: MouseEvent) => {
      if (data.press) return;
      if (props.step > 0) return;
      let browerX = e.clientX;
      console.log(`点击:${e.clientX} range:${props.range}`);
      let containerX = 0;
      if (container.value) {
        containerX = container.value.getBoundingClientRect().left;
        if (props.range) {
          //判断调整的tag
          console.log(`v1:${data.v1} v2:${data.v2}`);
          //获取点的比例
          let point = ((browerX - containerX) / data.parentWidth) * 100;

          if (Math.abs(point - data.v1) < Math.abs(point - data.v2)) {
            //修改tag2的位置
            data.v1 = ((browerX - containerX) / data.parentWidth) * 100;
          } else {
            //修改tag1
            data.v2 = ((browerX - containerX) / data.parentWidth) * 100;
          }
        } else {
          data.v1 = ((browerX - containerX) / data.parentWidth) * 100;
          console.log("v1:" + data.v1);
        }
      }
    };
    const ctx = getCurrentInstance();
    /**
     *更新进度条状态
     */
    watch(
      () => [data.v1, data.v2],
      () => {
        if (props.range) {
          let { min, max } = calculationBeginAndAfter();
          ctx?.emit("update:modelValue", [min,max]);
        } else {
          //计算单个值
          let v = calculaModelValue(data.v1);
          ctx?.emit("update:modelValue", v);
        }
      }
    );

    const calculaModelValue = (percent: number) => {
      // console.log(`-- ${props.min} ${percent} ${props.max} ${props.min}`);

      let v = props.min + percent * ((props.max - props.min) / 100);
      if (props.filter) {
        return props.filter({ value: v });
      }
      return v;
    };

    /**
     * 用具体值计算百分比
     */
    const calculaScale = (value: number) => {
      let v = ((value - props.min) / (props.max - props.min)) * 100;
      return v;
    };

    const progreeBarLength = computed(() => {
      let { w } = calculationBeginAndAfter();
      if (props.range) {
        return w;
      } else {
        data.width = data.v1;
        return data.v1;
      }
    });

    const progreeBarOffset = computed(() => {
      if (props.range) {
        let { min } = calculationBeginAndAfter();
        return min;
      }
    });

    const calculationBeginAndAfter = () => {
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
      if(props.filter){
        min = props.filter({value:min})
        max = props.filter({value:max})
      }
      return {
        min,
        max,
        w,
      };
    };

    const press = (v: { status: boolean }) => {
      data.press = v.status;
    };

    return {
      data,
      sliderClick,
      container,
      rangeValue,
      stepData,
      press,
      progreeBarLength,
      progreeBarOffset,
      tips1,
      tips2,
    };
  },
};
</script>

<style>
</style>