<template>
	<section v-editable="blok" class="blok item">
		<img v-if="blok.Image" :src="blok.Image.filename" :alt="blok.Image.alt" class="mx-auto" />
		<div v-for="p in blok.Description.content">
			<h3 class="text-lg">{{ blok.Name }} <i v-if="blok.PriceTag"> / ${{ blok.PriceTag }}</i></h3>
			<p v-for="q in p.content">{{ q.text }}</p>
			<p class="" v-if="blok.URL.url"><a :href="blok.URL.url" class="button" target="_blank" rel="noopener noreferer">View It on {{ blok.Store }}</a></p>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.item {
		display: grid;
		gap: 1rem;
		position: relative;
		text-align: center;
		@media (min-width: 1025px) {
			grid-template-columns: 200px auto;
			align-items: center;
			text-align: left;
		}
		h3 {
			font: 700 1.5rem brevia,sans-serif;
			margin-bottom: 0.125rem;
		}
		img {
			display: block;
			max-width: 100%;
			height: auto;
			border-radius: 0.25rem;
			@media (max-width: 600px) {
				max-width: 230px;
			}
		}
		.button {
			font-family: brevia, sans-serif;
			background: mix(blue, green, 35%);
			color: white;
			padding: 0.5rem 0.75rem;
			display: inline-block;
			text-transform: uppercase;
			font-weight: bold;
			font-size: 0.8em;
			margin: 1rem 0 0.5rem;
			border-radius: 0.25rem;
		}
		&:before {
			border-radius: 0.25rem;
			background: currentcolor;
			opacity: 0.125;
			content: '';
			display: block;
			position: absolute;
				top: 0;
				left: 0;
				right: 0;
				bottom: 0;
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