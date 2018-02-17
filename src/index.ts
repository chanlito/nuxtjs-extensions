import { createDecorator, mixins, VueDecorator } from 'vue-class-component';
import { Component, Emit, Inject, Model, Prop, Provide, Watch, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';

Component.registerHooks([
  'beforeRouteEnter',
  'beforeRouteLeave',
  'asyncData',
  'fetch',
  'head',
  'middleware',
  'layout',
  'transition',
  'scrollToTop',
  'validate'
]);

export {
  Component,
  createDecorator,
  State,
  Getter,
  Action,
  Mutation,
  mixins,
  namespace,
  VueDecorator,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
  Vue
};
