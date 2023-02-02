import { createApp } from 'vue'
import App from './App.vue'

// importo bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

// importo font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMagnifyingGlass, faGaugeSimple, faCloud, faMobileScreenButton, faStopwatch, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faPinterest } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faMagnifyingGlass, faGaugeSimple, faCloud, faMobileScreenButton, faStopwatch, faQuoteLeft, faFacebookF, faTwitter, faPinterest);

const app = createApp(App)

// importo componente
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app')
