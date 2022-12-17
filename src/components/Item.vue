<template>
	<section v-editable="blok" :class="imgOrientation + ' blok item'">
		<figure v-if="blok.Image.filename!==''">
			<img :src="blok.Image.filename + '/m/440x0/'" :alt="blok.Image.alt" :class="imgOrientation + ' mx-auto'"
				:srcset="blok.Image.filename + '/m/880x0/ 2x'"
				width="440"
				height="440"
			/>
			<figcaption class="text-xs" v-if="blok.Image.copyright">{{ blok.Image.copyright }}</figcaption>
		</figure>
		<div v-if="blok.Image.filename===''" class="img_blank" />
		<div v-for="p in blok.Description.content" class="flex flex-col justify-stretch">
			<h3 class="text-lg">{{ blok.Name }}</h3>
			<p v-for="q in p.content">{{ q.text }}</p>
			<p v-if="!blok.Options" class="pricetag_store flex items-center justify-center gap-2">
				<a v-if="blok.URL.url" :href="blok.URL.url" class="button" target="_blank" rel="noopener noreferer">View Item</a>
				<span>
					<strong v-if="blok.PriceTag">${{ blok.PriceTag }}</strong>
					<span v-if="blok.Store" class="store pl-2">On {{ blok.Store }}</span>
				</span>
			</p>
			<ul v-if="blok.Options" class="options no-list flex flex-wrap gap-1 justify-center">
				<li v-for="option in blok.Options"><a v-if="option.URL.url" :href="option.URL.url" class="button" target="_blank" rel="noopener noreferer">${{ option.PriceTag }} on {{ option.Store }}</a></li>
			</ul>
		</div>
	</section>
</template>

<style lang="scss" scoped>
	.item {
		display: grid;
		gap: 1rem;
		position: relative;
		text-align: center;
		@media (min-width: 1024px) {
			&.portrait {
				grid-template-columns: 200px auto;
				align-items: center;
				text-align: left;
			}
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
			&.portrait {
				@media (max-width: 1024px) {
					max-width: 230px;
				}
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
		ul.options {
			li:not(:last-child) {
				&:after {
					content: ' / ';
				}
			}
		}
		&.portrait {
			.pricetag_store {
				@apply flex-col lg:items-start;
			}
		}
	}
	figure {
		position: relative;
		height: 100%;
		display: flex;
		align-items: center;
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
const props = defineProps({
	blok: {
		type: String,
		required: true,
	},
})

// https://a.storyblok.com/f/161701/655x369/7bfbfa63ea/screenshot-2022-12-14-at-23-26-25-grim-fandango-remastered-for-nintendo-switch-nintendo-official-site.png

// Get image orientation
let imgD = props.blok.Image.filename.match(/([0-9]+)x([0-9]+)/);
let imgOrientation;
let w = parseInt(imgD[1])
let h = parseInt(imgD[2])

if ( w === h ) {
	imgOrientation = 'square'
}
else if (w > h) {
	imgOrientation = 'landscape'
}
else if (w < h) {
	imgOrientation = 'portrait'
}
</script>