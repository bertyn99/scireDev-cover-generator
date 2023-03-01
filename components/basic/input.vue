<script lang="ts" setup>
const emit = defineEmits(["update:modelValue"]);
const props = withDefaults(
  defineProps<{
    label: string;
    modelValue: string | number | boolean;
    placeholder: string;
  }>(),
  {
    label: "Label",
    modelValue: "",
    placeholder: "Placeholder",
  }
);
const attrs = useAttrs();
</script>
<template>
  <div class="flex items-center m-2 justify-around border-0 bg-transparent">
    <label
      for="email"
      class="block text-sm font-medium text-gray-700 capitalize"
      >{{ props.label }}</label
    >

    <div class="">
      <input
        :name="attrs.type ? String(attrs.type) : 'text'"
        class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        :placeholder="String(props.placeholder)"
        v-bind="$attrs"
        :value="props.modelValue"
        @input="(e:any) => emit('update:modelValue', e.target.value)"
      />
    </div>
  </div>
</template>
