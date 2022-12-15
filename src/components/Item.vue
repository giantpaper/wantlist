<template>
	<div v-editable="blok" class="item">
		<img v-if="blok.Image" :src="blok.Image.filename" :alt="blok.Image.alt" />
		<div v-for="p in blok.Description.content">
			<h2 class="text-lg">{{ blok.Name }} <i v-if="blok.PriceTag"> / ${{ blok.PriceTag }}</i></h2>
			<p v-for="q in p.content">{{ q.text }}</p>
			<p class="" v-if="blok.URL"><a :href="blok.URL.url" class="button" target="_blank" rel="noopener noreferer">View It on {{ blok.Store }}</a></p>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.item {
		display: grid;
		gap: 1rem;
		align-items: center;
		padding: 1rem 0;
		@media (min-width: 768px) {
			grid-template-columns: 200px auto;
		}
		h2 {
			margin-bottom: 1rem;
		}
		img {
			display: block;
			max-width: 100%;
			height: auto;
			@media (max-width: 400px) {
				max-width: 230px;
			}
		}
		.button {
			background: mix(blue, green, 35%);
			color: white;
			padding: 0.5rem 0.75rem;
			display: inline-block;
			text-transform: uppercase;
			font-weight: bold;
			font-size: 0.8em;
			margin: 1rem 0;
			border-radius: 0.25rem;
		}
	}
	i {
		font-style: normal;
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