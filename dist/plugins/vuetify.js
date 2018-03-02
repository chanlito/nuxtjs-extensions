import Vue from 'vue';
import Vuetify from 'vuetify';

Vue.use(Vuetify, <%= JSON.stringify(options.options, null, 2) %>);
