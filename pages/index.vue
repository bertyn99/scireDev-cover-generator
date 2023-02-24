<script lang="ts" setup></script>

<template>
  <SectionSidebar />
  <main class="flex-1 p-8 flex flex-col items-center gap-8">
    <h1 class="font-bold text-3xl text-gray-800">Cover Generator</h1>

    <canvas class="bg-white w-4/5 h-[400px] rounded-md"></canvas>

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
