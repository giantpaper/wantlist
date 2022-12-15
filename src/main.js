import { createApp } from 'vue'
import { StoryblokVue, apiPlugin } from '@storyblok/vue'
import App from './App.vue'
// Components
import Item from './components/Item.vue'
import Heading from './components/Heading.vue'
import Grid from './components/Grid.vue';
import Page from './components/Page.vue';
import Teaser from './components/Teaser.vue';
import Feature from './components/Feature.vue';

import './assets/main.scss'

const app = createApp(App)

app.use(StoryblokVue, {
	accessToken: import.meta.env.VITE_PREVIEW_TOKEN,
	use: [apiPlugin],
})
app.component('Item', Item)
app.component('Heading', Heading)
app.component('Grid', Grid);
app.component('Page', Page);
app.component('Teaser', Teaser);
app.component('Feature', Feature);

app.mount('#app')
