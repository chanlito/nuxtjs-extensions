"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_class_component_1 = require("vue-class-component");
exports.createDecorator = vue_class_component_1.createDecorator;
exports.mixins = vue_class_component_1.mixins;
var vue_property_decorator_1 = require("vue-property-decorator");
exports.Component = vue_property_decorator_1.Component;
exports.Emit = vue_property_decorator_1.Emit;
exports.Inject = vue_property_decorator_1.Inject;
exports.Model = vue_property_decorator_1.Model;
exports.Prop = vue_property_decorator_1.Prop;
exports.Provide = vue_property_decorator_1.Provide;
exports.Watch = vue_property_decorator_1.Watch;
exports.Vue = vue_property_decorator_1.Vue;
var vuex_class_1 = require("vuex-class");
exports.State = vuex_class_1.State;
exports.Getter = vuex_class_1.Getter;
exports.Action = vuex_class_1.Action;
exports.Mutation = vuex_class_1.Mutation;
exports.namespace = vuex_class_1.namespace;
vue_property_decorator_1.Component.registerHooks([
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
//# sourceMappingURL=index.js.map