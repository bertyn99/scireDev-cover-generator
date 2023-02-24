<script lang="ts" setup>
const props = defineProps<{
  label: String;
  type: {
    type: String;
    default: "text";
  };
  placeholder: String;
}>();
</script>
<template>
  <div class="flex items-center m-2 justify-around">
    <label
      for="email"
      class="block text-sm font-medium text-gray-700 capitalize"
      >{{ props.label }}</label
    >

    <div class="">
      <input
        :type="String(props.type)"
        name="text"
        id="text"
        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        :placeholder="String(props.placeholder)"
        :label="props.label"
      />
    </div>
  </div>
</template>
