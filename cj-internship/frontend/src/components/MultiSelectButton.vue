<script setup lang="ts">
import { ref } from 'vue';


const props = defineProps<{
  options: string[]
}>()

const allSelected = ref(false);

const selectedIndices = defineModel<number[]>()

const toggleSelection = (index: number) => {
  if (allSelected.value) {
    allSelected.value = false;
    return;
  }

  const i = selectedIndices.value?.indexOf(index);
  if (i !== undefined && i > -1) {
    selectedIndices.value?.splice(i, 1);
  } else {
    selectedIndices.value?.push(index);
  }
};

const isSelected = (index: number) => {
  if (allSelected.value) return true;
  return selectedIndices.value?.includes(index);
};

const toggleAll = () => {
  allSelected.value = !allSelected.value;
  selectedIndices.value = allSelected.value ? [...props.options.keys()] : [];
};
</script>

<template>
  <div class="flex flex-wrap gap-2">
    <!-- '전체' 버튼 -->
    <button
      @click="toggleAll"
      :class="[
        'px-4 py-2 rounded',
        allSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700',
        'hover:bg-blue-400 hover:text-white'
      ]"
    >
      전체
    </button>
    <!-- 나머지 버튼들 -->
    <button
      v-for="(option, index) in options"
      :key="index"
      @click="toggleSelection(index)"
      :class="[
        'px-4 py-2 rounded',
        isSelected(index) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700',
        'hover:bg-blue-400 hover:text-white'
      ]"
    >
      {{ option }}
    </button>
  </div>
</template>