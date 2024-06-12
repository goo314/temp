<script setup lang="ts">
import MultiSelectButton from '@/components/MultiSelectButton.vue';
import { ref, watch } from 'vue';

const buttonOptions = ref(['Option 1', 'Option 2', 'Option 3', 'Option 4']);
const selectedIndices = ref([]);

watch(selectedIndices, () => {
  console.log(selectedIndices.value)
}, {deep: true})

</script>

<template>
  <div class="p-6">
    <h1 class="text-2xl mb-4">Multi-Select Buttons</h1>
    <MultiSelectButton :options="buttonOptions" v-model="selectedIndices" />
  </div>
</template>
