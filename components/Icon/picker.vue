<script lang="ts" setup>
import brandIcon from "@/assets/data/simple-icons.json";
import heroIcon from "@/assets/data/heroicons.json";
import { useOffsetPagination } from "@vueuse/core";
const searchIcon = ref("");
const page = ref(0);

const brand = brandIcon.map((icon: any) => icon.name.toLowerCase());
const hero = heroIcon.map((icon: any) => icon.name.toLowerCase());
const icons = computed(() => {
  return searchIcon.value == ""
    ? [...brand, ...hero]
    : [...brand, ...hero].filter((icon) => icon.includes(searchIcon.value));
});
const {
  currentPage,
  currentPageSize,
  pageCount,
  isFirstPage,
  isLastPage,
  prev,
  next,
} = useOffsetPagination({
  total: icons.value.length,
  page: 1,
  pageSize: 55,
  onPageChange: navPaginate,
  onPageSizeChange: navPaginate,
});
const visibleIcons = computed(() => {
  return icons.value.slice(
    (currentPage.value - 1) * 55,
    55 * currentPage.value
  );
});

watch(
  () => icons.value,
  (value) => {}
);
function navPaginate({ currentPage }: { currentPage: number }) {}
</script>

<template>
  <div class="">
    <BasicInput
      label="Icons"
      v-model="searchIcon"
      type="text"
      placeholder="Icon name"
    />
    <div class="h-80 w-5/6 shadow-md mx-auto">
      <div class="flex flex-wrap h-[90%] justify-center">
        <div
          v-for="icon in visibleIcons"
          :key="icon"
          class="flex items-center justify-between p-2 cursor-pointer group hover:bg-white"
        >
          <Icon
            :name="icon"
            class="w-6 h-6 text-gray-500 group-hover:text-gray-800"
          />
        </div>
      </div>
      <nav
        class="flex items-center justify-between border-t border-gray-200 px-4 sm:px-0 h-[10%] max-h-7"
      >
        <div class="flex w-0 flex-1">
          <button
            @click="prev"
            class="inline-flex items-center border-t-2 border-transparent pr-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            <Icon
              class="ml-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
              name=""
            />
            Previous
          </button>
        </div>
        <div class="hidden md:-mt-px md:flex">
          <!--  <div
          v-for="page in pageCount"
          class="inline-flex items-center border-t-2 border-transparent px-4 pt-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
        >
          {{ page }}
        </div> -->
          <!-- Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" -->
        </div>
        <div class="flex w-0 flex-1 justify-end">
          <button
            @click="next"
            class="inline-flex items-center border-t-2 border-transparent pl-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700"
          >
            Next
            <Icon
              class="ml-3 h-5 w-5 text-gray-400"
              aria-hidden="true"
              name=""
            />
          </button>
        </div>
      </nav>
    </div>
    current {{ currentPage }} page size {{ currentPageSize }} page count
    {{ pageCount }}
  </div>
</template>
