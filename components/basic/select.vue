<script lang="ts" setup>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
const props = withDefaults(
  defineProps<{
    label: string;
    listOptions: Array<any>;
    modelValue: any;
  }>(),
  {
    label: "Label",
    listOptions: <any>[],
    modelValue: {},
  }
);

const emit = defineEmits(["update:modelValue"]);
</script>
<template>
  <Listbox
    as="div"
    :modelValue="props.modelValue"
    @update:modelValue="(value:string) => emit('update:modelValue', value)"
    by="name"
    class="flex justify-around m-2 px-3 items-center"
  >
    <ListboxLabel class="block text-sm font-medium text-gray-700"
      >{{ props.label }}
    </ListboxLabel>
    <div class="relative">
      <ListboxButton
        class="relative w-full mx-auto min-w-[12rem] cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
      >
        <span class="block truncate capitalize">{{ modelValue?.name }}</span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
        >
          <Icon
            name="heroicons:chevron-up-down"
            class="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </span>
      </ListboxButton>

      <transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="option in listOptions"
            :key="option.name"
            :value="option"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'text-white bg-indigo-600' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-8 pr-4',
              ]"
            >
              <span
                :class="[
                  selected ? 'font-semibold' : 'font-normal',
                  'block truncate capitalize',
                ]"
                >{{ option.name }}</span
              >

              <span
                v-if="selected"
                :class="[
                  active ? 'text-white' : 'text-indigo-600',
                  'absolute inset-y-0 left-0 flex items-center pl-1.5',
                ]"
              >
                <Icon
                  name="heroicons:check"
                  class="h-5 w-5"
                  aria-hidden="true"
                />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </transition>
    </div>
  </Listbox>
</template>
