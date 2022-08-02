import './bootstrap';
import {createApp} from 'vue/dist/vue.esm-bundler.js';
import CartComponent from './components/CartComponent.vue';

const app = createApp();

app
    .component('CartComponent', CartComponent);

app
    .mount('#app');

