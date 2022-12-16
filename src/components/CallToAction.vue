<template>
	<section class="blok !pb-16">
		<h1>{{ blok.headline }}</h1>
		<div class="text prose mx-auto" v-html="text"></div>
	</section>
</template>
<style lang="scss" scoped>
	h1 {
		font-family: brevia, sans-serif;
		text-align: center;
		font-size: 2rem;
	}
</style>
<script setup>
	const props = defineProps({
		blok: {
			type: Object,
			required: true,
		}
	});
	
	import { computed } from "vue";
	import { renderRichText } from "@storyblok/vue";
	
	const text = computed(() => renderRichText(props.blok.text));
</script>