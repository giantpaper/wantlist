import { createApp } from 'vue'
import { StoryblokVue, apiPlugin } from '@storyblok/vue'
import App from './App.vue'
// Components
import CallToAction from './components/CallToAction.vue'
import Item from './components/Item.vue'
import Headline from './components/Headline.vue'
import Page from './components/Page.vue';

import './favicon.svg'
import './favicon.ico'
import './assets/main.scss'

const app = createApp(App)

app.use(StoryblokVue, {
	accessToken: import.meta.env.VITE_PREVIEW_TOKEN,
	use: [apiPlugin],
})
app.component('CallToAction', CallToAction)
app.component('Item', Item)
app.component('Headline', Headline)
app.component('Page', Page)

app.mount('#app')
