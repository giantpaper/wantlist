<template>
	<section v-editable="blok" class="blok item">
		<figure v-if="blok.Image.filename!==''">
			<img :src="blok.Image.filename + '/m/230x0/'" :alt="blok.Image.alt" class="mx-auto"
				:srcset="blok.Image.filename + '/m/460x0/ 2x'"
				width="230"
				height="130"
			/>
			<figcaption class="text-xs" v-if="blok.Image.copyright">{{ blok.Image.copyright }}</figcaption>
		</figure>
		<div v-if="blok.Image.filename===''" class="img_blank" />
		<div v-for="p in blok.Description.content" class="flex flex-col justify-stretch">
			<h3 class="text-lg">{{ blok.Name }}</h3>
			<p v-for="q in p.content">{{ q.text }}</p>
			<p class="text-sm flex items-center flex-wrap justify-center lg:justify-start gap-2">
				<a v-if="blok.URL.url" :href="blok.URL.url" class="button" target="_blank" rel="noopener noreferer">View Item</a> <span><strong v-if="blok.PriceTag">${{ blok.PriceTag }}</strong> On <span v-if="blok.Store">{{ blok.Store }}</span></span>
			</p>
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
		.img_blank,
		img {
			display: block;
			max-width: 100%;
			height: auto;
			border-radius: 0.25rem;
			@media (max-width: 600px) {
				max-width: 230px;
			}
		}
		.img_blank {
			background: currentcolor;
			aspect-ratio: 230/130;
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
	figure {
		position: relative;
		figcaption {
			background: transparentize(white, 0.5);
			position: absolute;
			bottom: 0;
			right: 0;
			padding: 0.25rem;
			border-radius: 0.25rem 0 0 0;
			color: var(--vt-c-black);
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