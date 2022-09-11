import { createApp } from 'vue';

import App from './App.vue';
import baseCard from './components/ui/BaseCard.vue';
import TheButton from './components/ui/TheButton.vue';
import BaseDialog from './components/ui/BaseDialog.vue';
const app = createApp(App);
app.component('base-card', baseCard);
app.component('the-button', TheButton);
app.component('base-dialog', BaseDialog);
app.mount('#app');
