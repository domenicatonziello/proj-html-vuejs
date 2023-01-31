import { createApp } from 'vue'
import App from './App.vue'

// importo bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// importo font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faSearch, faFacebookF);

const app = createApp(App)

// importo componente
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
