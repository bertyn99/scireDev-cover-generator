<script lang="ts" setup>
import { colorChoice } from "~~/types/color";

const colors: colorChoice[] = [
  {
    name: "pearl",
    color: ["#F5F5F5", "#E8E8E8"],
  },
  {
    name: "candy",
    color: ["red", "pink"],
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
