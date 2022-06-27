import './design/tailwind.css';

import { createApp } from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import { router, setupRouter } from './router';

async function bootstrap() {
  const app = createApp(App);

  await setupRouter(app);

  await router.isReady();
  app.mount('#app');
}

bootstrap();
