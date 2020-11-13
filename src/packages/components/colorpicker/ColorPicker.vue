<template>
  <div class="f-color-picker" ref="colorPicker">
    <div @click="showClick">
      <slot></slot>
    </div>
    <f-drop-anim>
      <div class="f-color-picker-panel f-shadow" v-show="data.expand">
        <div class="f-color-picker-hsv" ref="panelRef">
          <div class="f-color-picker-s"></div>
          <div class="f-color-picker-v" @click.self="panelClick"></div>
          <div class="f-color-picker-point" ref="pointRef"></div>
        </div>
        <div class="f-color-picker-colorbar" ref="colorBarRef">
          <div class="f-color-picker-color" @click.self="colorClick"></div>
          <div class="f-color-picker-sliderblock" ref="colorsliderRef"></div>
        </div>
        <div class="f-color-picker-alpha" ref="alphaRef" v-show="alpha">
          <div class="f-color-picker-alpha-bg">
            <div
              class="f-color-picker-alpha-color"
              :style="{ background: data.alphaBg }"
              @click.self="alphaClick"
            ></div>
          </div>
          <div class="f-color-picker-alpha-slider" ref="alphaSliderRef"></div>
        </div>
        <div class="f-color-picker-preset">
          <div class="f-color-preset-box" v-for="(item, i) in colors" :key="i">
            <div :style="{ background: item }" @click="presetClick(item)"></div>
          </div>
        </div>
        <div class="f-color-picker-footer">
          <div class="f-color-picker-footer-left">
            <input :value="data.showColor" />
            <div class="f-color-picker-colorbox">
              <div :style="{ backgroundColor: data.rgba }"></div>
            </div>
          </div>
          <div>
            <f-button
              text="确定"
              :mini="true"
              type="default"
              @click="okClick"
            ></f-button>
          </div>
        </div>
      </div>
    </f-drop-anim>
  </div>
</template>

<script lang="ts" src="./ColorPicker.ts">
</script>

<style>
</style>