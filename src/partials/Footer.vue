<script setup>
	import Github from '../assets/icons/Github.vue'
	const date = new Date()
	const year = date.getFullYear()
</script>

<template>
	<footer>
		<Github class="fa" />
			{{ year }}
	</footer>
</template>

<style lang="scss" scoped>
	.fa {
		width: 1.25em;
		display: inline-block;
		fill: currentcolor;
	}
</style>