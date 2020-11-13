import {
    computed,
    defineComponent,
    getCurrentInstance,
    onMounted,
    reactive,
    ref,
    watch,
} from "vue";
import HSVHelper from "./HSVHelper";
import ColorHelper from "./ColorHelper";
import AlphaHelper from "./AlphaHelper";
import cdk from "../../utils/cdk";
const tinycolor = require('tinycolor2')

interface Data {
    rgb: string;
    rgba: string;
    hex: string;
    alpha: number;
    alphaBg: string;
    showColor: string;
    colors: string[];
    expand: boolean;
}

export default defineComponent({
    name: "f-color-picker",
    props: {
        //格式
        format: {
            type: String,
            default: "hex",
            validator: (value: string) => {
                return ["hex", "rgb", "hsv", "hsl"].indexOf(value) > -1;
            },
        },
        alpha: {
            type: Boolean,
            default: false,
        },
        modelValue: {
            type: String,
            default: "#000",
        },
        //默认颜色
        colors: {
            type: Array,
            default: () => [],
        },
    },
    setup(props, context) {
        const ctx = getCurrentInstance();
        const panelRef = ref();
        const pointRef = ref();
        const colorBarRef = ref();
        const colorsliderRef = ref();
        const alphaRef = ref();
        const alphaSliderRef = ref();
        const colorPicker = ref<HTMLElement>();
        const hsv = reactive({
            h: 0,
            s: 100,
            v: 100,
        });
        const data = reactive<Data>({
            rgb: "",
            rgba: "",
            hex: "",
            alpha: 1,
            alphaBg: "",
            showColor: "#000",
            colors: [],
            expand: false,
        });
        cdk.outClick(colorPicker, () => {
            data.expand = false;
        });
        onMounted(() => {
            HSVHelper.pointDrag(
                pointRef.value,
                panelRef.value,
                (s: number, v: number) => {
                    hsv.s = s;
                    hsv.v = v;
                }
            );
            ColorHelper.sliderDrag(
                colorsliderRef.value,
                colorBarRef.value,
                (c: number) => {
                    hsv.h = c;
                }
            );
            AlphaHelper.sliderDrag(
                alphaSliderRef.value,
                alphaRef.value,
                (v: number) => {
                    data.alpha = v;
                }
            );

            //转换传递进来的颜色
            updatemodelValue();
        });

        const updatemodelValue = () => {
            setTimeout(() => {
                if (props.modelValue) {

                    let tiny = tinycolor(props.modelValue);
                    let res = tiny.toHsv()

                    hsv.h = Math.round(res.h);
                    hsv.s = Math.round(res.s * 100);
                    hsv.v = Math.round(res.v * 100);
                    updateUIStatus();
                }
            }, 100);
        };

        watch(() => props.modelValue, updatemodelValue)
        const rgb = computed(() => {
            let color = tinycolor({
                h: hsv.h, s: hsv.s, v: hsv.v
            })
            return color.toRgb();
        });

        const updateColor = () => {
            let tiny = tinycolor({
                h: hsv.h, s: 100, v: 100
            });
            let color = tiny.toRgb();
            (<HTMLElement>(
                panelRef.value
            )).style.backgroundColor = tiny.toHexString()
            data.rgb = `rgb(${rgb.value.r},${rgb.value.g},${rgb.value.b})`;
            data.rgba = `rgb(${rgb.value.r},${rgb.value.g},${rgb.value.b},${data.alpha})`;
            data.hex = tiny.toHexString()
            data.alphaBg = `linear-gradient(to right,rgba(${rgb.value.r},${rgb.value.g},${rgb.value.b},0),${data.rgb})`;


            color = tinycolor({ h: hsv.h, s: hsv.s, v: hsv.v });
            if (props.format == "rgb") {
                if (props.alpha) {
                    let rgba = color.toRgb()
                    data.showColor = `rgba(${rgba.r},${rgba.g},${rgba.b},${data.alpha})`;
                } else {
                    data.showColor = color.toRgbString();
                }
            } else if (props.format == "hex") {
                data.showColor = color.toHexString();
            } else if (props.format == "hsl") {
                data.showColor = color.toHslString();
            } else {
                data.showColor = color.toRgbString();
            }

        };

        watch(rgb, updateColor);
        watch(() => data.alpha, updateColor);

        const updateUIStatus = () => {

            HSVHelper.setPointPosBySv(pointRef.value, panelRef.value, hsv.s, hsv.v);

            ColorHelper.setSliderPosByH(
                colorsliderRef.value,
                colorBarRef.value,
                hsv.h
            );
            AlphaHelper.setSliderPosByValue(
                alphaSliderRef.value,
                alphaRef.value,
                data.alpha
            );
        };
        watch(
            () => props.modelValue,
            updatemodelValue
        );
        watch(() => data.expand, (v, old) => {
            if (v) {
                updatemodelValue()
            }
        })
        const panelClick = (e: MouseEvent) => {
            //点击面板，获取top和left，对应调整point的位置
            HSVHelper.setPointPos(
                pointRef.value,
                panelRef.value,
                e.offsetX,
                e.offsetY,
                (s: number, v: number) => {
                    hsv.s = s;
                    hsv.v = v;
                }
            );
        };

        const colorClick = (e: MouseEvent) => {
            ColorHelper.setSliderPos(
                colorsliderRef.value,
                colorBarRef.value,
                e.offsetX,
                (c: number) => {
                    hsv.h = c;
                }
            );
        };

        const alphaClick = (e: MouseEvent) => {
            AlphaHelper.setSliderPos(
                alphaSliderRef.value,
                alphaRef.value,
                e.offsetX,
                (v: number) => {
                    data.alpha = v;
                }
            );
        };

        const showClick = () => {
            data.expand = !data.expand;
            updateColor();
        };

        const presetClick = (v: string) => {
            let tiny = tinycolor(v);
            let color = tiny.toRgb();

            if (props.format == "rgb") {
                if (props.alpha) {
                    data.showColor = `rgba(${color.r},${color.g},${color.b},${data.alpha})`;
                } else {
                    data.showColor = tiny.toRgbString()
                }
            } else if (props.format == "hex") {
                data.showColor = tiny.toHexString()
            } else if (props.format == "hsl") {
                data.showColor = tiny.toHslString()
            } else {
                data.showColor = color;
            }
            context.emit("update:modelValue", data.showColor);
            data.expand = false;
        };

        const okClick = () => {
            context.emit("update:modelValue", data.showColor);
            data.expand = false;
        };

        return {
            panelRef,
            pointRef,
            colorsliderRef,
            colorBarRef,
            alphaRef,
            alphaSliderRef,
            rgb,
            data,
            panelClick,
            colorClick,
            alphaClick,
            showClick,
            colorPicker,
            presetClick,
            okClick,
        };
    },
});