import Vue from 'vue';
import VeeValidate from 'vee-validate';

Vue.use(VeeValidate, <%= JSON.stringify(options.moduleOptions, null, 2) %>);
