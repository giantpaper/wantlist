<template>
  <div v-editable="blok" class="page blok !p-0">
    <StoryblokComponent
      v-for="blok in blok.body"
      :blok="blok"
      :key="blok._uid"
    />
  </div>
</template>

<script setup>
defineProps({
  blok: {
    type: Object,
    required: true,
  }
});
</script>
