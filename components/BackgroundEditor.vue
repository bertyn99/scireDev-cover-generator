<script lang="ts" setup>
import { colorChoice } from "~~/types/color";

const colors: colorChoice[] = [
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

const bgSelected = ref<colorChoice>(colors[0]);
const selectBgColor = (color: string) => {
  return colors.find((c) => c.name === color);
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
        :selected="bgSelected.name === color.name"
        :name="color.name"
        @clik="() => selectBgColor(color.name)"
      />
    </div>
  </dl>
</template>
