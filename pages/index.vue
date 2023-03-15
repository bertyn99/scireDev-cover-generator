<script lang="ts" setup>
import { useCanvasStore } from "~~/store";

const canvaStore = useCanvasStore();
const height = computed(() => canvaStore.height);
const width = computed(() => canvaStore.width);
const coverRef = ref<HTMLCanvasElement | null>(null);
const parentRef = ref<HTMLDivElement | null>(null);
const aspectRatio = computed(() => {
  return canvaStore.width / canvaStore.height;
});
const ctx = computed(() => coverRef.value?.getContext("2d"));

watch(
  () => canvaStore.height,
  (val) => {
    if (
      parentRef.value!.offsetWidth - 32 / aspectRatio.value <
      parentRef.value!.offsetHeight - 32
    ) {
      coverRef.value!.height =
        parentRef.value!.offsetWidth - 32 / aspectRatio.value;
    } else {
      coverRef.value!.height = parentRef.value!.offsetHeight - 32;
    }
  }
);
watch(
  () => canvaStore.width,
  (val) => {
    if (
      parentRef.value!.offsetWidth - 32 / aspectRatio.value <
      parentRef.value!.offsetHeight - 32
    ) {
      coverRef.value!.width = parentRef.value!.offsetWidth - 32;
    } else {
      coverRef.value!.width =
        (parentRef.value!.offsetHeight - 32) * aspectRatio.value;
    }
  }
);

onMounted(() => {
  console.log(parentRef.value!.clientWidth);
  console.log(parentRef.value!.offsetWidth);
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
      class="bg-white min-h-[340px] rounded-md"
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
