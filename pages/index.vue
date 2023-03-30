<script lang="ts" setup>
import { useCanvasStore } from "~~/store";

const canvaStore = useCanvasStore();
const height = computed(() => canvaStore.height * 0.45);
const width = computed(() => canvaStore.width * 0.45);
const coverRef = ref<HTMLCanvasElement | null>(null);
const parentRef = ref<HTMLDivElement | null>(null);
const aspectRatio = computed(() => {
  return canvaStore.width / canvaStore.height;
});

watch(
  () => canvaStore.height,
  (val) => {
    if (val * 0.45 < 340) {
      coverRef.value!.height = 340;
      return;
    }
    coverRef.value!.height = val * 0.45;
  }
);
watch(
  () => canvaStore.width,
  (val) => {
    coverRef.value!.width = Math.ceil(width.value);
  }
);
onMounted(() => {
  //setup canva
  coverRef.value!.width = width.value || 432;
  coverRef.value!.height = height.value || 768;

  useCanvaEditor(coverRef, canvaStore.background.color);
});
</script>

<template>
  <SectionSidebar />
  <main
    class="flex-1 p-8 flex flex-col items-center gap-8 sm:sticky md:top-10 md:w-3/5"
    ref="parentRef"
  >
    <h1 class="font-bold text-3xl text-gray-800">Cover Generator</h1>

    <canvas
      class="bg-white rounded-md"
      ref="coverRef"
      height=""
      width=""
    ></canvas>

    <div class="flex gap-4">
      <button
        class="bg-blue-500 font-semibold text-gray-100 rounded-md px-4 py-2 outline hover:text-gray-800 hover:bg-blue-50 hover:outline-none"
      >
        Download
      </button>
      <button
        class="bg-blue-500 font-semibold text-gray-100 rounded-md px-4 py-2"
      >
        Reset
        <Icon name="heroicons:arrow-path" class="h-4 w-4 text-gray-50" />
      </button>
    </div>
  </main>
</template>
