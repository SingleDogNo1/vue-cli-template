import './design/tailwind.css';

import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import { router, setupRouter } from './router';
import { setupStore } from './store';

async function bootstrap() {
  const app = createApp(App);

  setupRouter(app);

  setupStore(app);

  await router.isReady();
  app.mount('#app');
}

bootstrap();
