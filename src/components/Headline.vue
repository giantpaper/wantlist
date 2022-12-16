<template>
	<h1 v-if="blok.type==='h1'">{{ blok.text }}</h1>
	<h2 v-if="blok.type==='h2'">{{ blok.text }}</h2>
	<h3 v-if="blok.type==='h3'">{{ blok.text }}</h3>
	<h4 v-if="blok.type==='h4'">{{ blok.text }}</h4>
	<h5 v-if="blok.type==='h5'">{{ blok.text }}</h5>
	<h6 v-if="blok.type==='h6'">{{ blok.text }}</h6>
</template>

<style lang="scss" scoped>
	h1,h2,h3,h4,h5,h6 {
		font-family: brevia, sans-serif;
		text-align: center;
		margin-top: 1rem;
	}
	h1 {
		font-size: 2rem;
	}
	h2 {
		font-size: 2rem;
		font-style: italic;
	}
	h3 {
		font-size: 1.5rem;
	}
</style>

<script setup>
defineProps({
	blok: {
		type: String,
		required: true,
	},
})
</script>