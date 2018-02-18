import titleize from 'titleize';
import Vue from 'vue';

Vue.filter('titleize', val => titleize(val));
