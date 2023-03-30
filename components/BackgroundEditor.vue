<script lang="ts" setup>
import { colorChoice } from "~~/types/color";
import { useCanvasStore } from "~~/store";

const canvaStore = useCanvasStore();
const background = computed(() => canvaStore.background);
const colors: colorChoice[] = [
  {
    name: "reset",
    color: ["#FFFFFF", "#FFFFFF"],
  },
  {
    name: "fire",
    color: ["#F12711", "#F9BC2C"],
  },
  {
    name: "wave",
    color: ["#3A47D5", "#00D2FF"],
  },
  {
    name: "duck",
    color: ["#FBD07C", "#FDFD57"],
  },
];
const selectedColor = ref<any>(background);

const selectBgColor = (color: string) => {
  const newColor = colors.find((c) => c.name === color);
  if (newColor) {
    canvaStore.setBackground(newColor);
  }
};
</script>

<template>
  <dl class="m-2">
    <h3 class="font-bold text-2xl text-gray-700">Background</h3>
    <label
      for="email"
      class="block text-sm font-medium text-gray-700 capitalize"
      >colors</label
    >
    <div class="flex flex-wrap gap-2">
      <BasicColorCircle
        v-for="color in colors"
        :key="color.name"
        :color="color.color"
        :selected="background.name === color.name"
        :name="color.name"
        @click="() => selectBgColor(color.name)"
      />
    </div>
  </dl>
</template>
