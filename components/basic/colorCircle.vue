<script lang="ts" setup>
const props = defineProps<{
  color: string[];
  name: string;
  selected: boolean;
}>();
</script>

<template>
  <div
    class="h-9 w-9 rounded-full cursor-pointer shadow-md"
    :class="{
      'border-2 border-blue-500': selected,
    }"
    :style="`background-image: linear-gradient(to right, ${color[0]} 0%, ${color[1]} 100%);`"
  ></div>
</template>
