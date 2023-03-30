<script lang="ts" setup></script>

<template>
  <aside class="w-full md:w-2/5 md:max-w-xl p-8 bg-blue-50 flex-1">
    <h2 class="font-bold text-3xl text-gray-800">Parameters</h2>
    <dl>
      <Dimension />
      <BackgroundEditor />
      <TextEditor />
      <AssetsEditor />
    </dl>
  </aside>
</template>
