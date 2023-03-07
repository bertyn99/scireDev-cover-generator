<script lang="ts" setup>
const height = ref<number>(1080);
const width = ref<number>(1920);

const dimensionPresets = [
  { name: "article post", width: 1920, height: 1080 },
  { name: "facebook post", width: 1200, height: 630 },
  { name: "twitter post", width: 1012, height: 506 },
  { name: "Instagram post", width: 1080, height: 1080 },
  { name: "linkedin cover", width: 1584, height: 396 },
  { name: "Facebook cover", width: 820, height: 312 },
  { name: "4K", width: 3840, height: 2160 },
  { name: "2K", width: 2560, height: 1440 },
  { name: "HD", width: 1920, height: 1080 },
  { name: "full HD", width: 1920, height: 1080 },
];

const selectPreset = computed(() => dimensionPresets.map((o: any) => o.name));
const selected = ref(dimensionPresets[0]);

watch(
  () => selected.value,
  (val) => {
    height.value = val.height;
    width.value = val.width;
  }
);
</script>

<template>
  <div class="m-2">
    <h3 class="font-bold text-2xl text-gray-700">Dimensions</h3>
    <BasicInput
      label="height"
      placeholder="1000"
      type="number"
      v-model="height"
    />
    <BasicInput
      label="width"
      placeholder="1000"
      type="number"
      v-model="width"
    />
    <BasicSelect
      label="Presets"
      :list-options="dimensionPresets"
      v-model="selected"
    />
  </div>
</template>
