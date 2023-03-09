import "vuetify/styles";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import dataStore from "./store";
import vuetify from "./plugins/vuetify";
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import {createPinia} from 'pinia';


const app = createApp(App)
  .use(router)
  .use(store)
  .use(dataStore)
  .use( createPinia() )
  .use(vuetify)

app.mount("#app")
