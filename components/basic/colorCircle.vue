<script lang="ts" setup>
const props = defineProps<{
  color: string[];
  name: string;
  selected: boolean;
}>();
</script>

<template>
  <button
    class="h-9 w-9 rounded-full cursor-pointer shadow-md hover:border-2 border-blue-400 focus:outline-none focus:ring focus:border-blue-500"
    :class="{
      'border-[3px] border-blue-600': selected,
    }"
    :style="`background-image: linear-gradient(90deg, ${color[0]} 0%, ${color[1]} 100%);`"
  ></button>
</template>
