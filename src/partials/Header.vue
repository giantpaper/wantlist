<script setup>
	import Github from '../assets/icons/Github.vue'
	import Logo from '../assets/icons/Logo.vue'
</script>
<template>
	<header>
		<Logo id="logo" fill="currentcolor" />
		<a href="https://github.com/giantpaper/wantlist" target="_blank" rel="noopener">
			<Github class="fa" /> View on Github
		</a>
	</header>
</template>
<style lang="scss" scoped>
	header {
		display: flex;
		padding-right: 0;
		justify-content: space-between;
		flex-wrap: wrap;
		padding-top: 3rem;
		&:after {
			background: var(--color-text);
			width: 100%;
			height: 5px;
			content: '';
			display: block;
			margin-top: 1rem;
			margin-bottom: 1rem;
		}
	}
	a {
		display: inline-flex;
		align-items: center;
		gap: 0.25rem;
	}
</style>