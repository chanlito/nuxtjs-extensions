# NuxtJS Extensions

A bunch of additional Nuxt modules. 💚

## Setup

```bash
npm install nuxtjs-extensions
```

## Usage

* Inside nuxt.config.js add the following:

```js
{
  modules: [
    [
      'nuxtjs-extensions/typescript',
      {
        tsconfig: path.resolve(/* tsconfig.json */),
        tslint: path.resolve(/* tslint.json */)
      }
    ],
    [
      'nuxtjs-extensions/vuetify',
      {
        css: false, // disable this and use CDN
        theme: {
          primary: '#3f51b5',
          secondary: '#757de8',
          accent: '#ff4081',
          error: '#F44336',
          warning: '#ff9800',
          info: '#2196F3',
          success: '#4CAF50'
        }
      }
    ],
    ['nuxtjs-extensions/vee-validate', { // specify vee-validate options }]
  ]
}
```

From 😖

```ts
import { Component, Emit, Inject, Model, Prop, Provide, Watch, Vue } from 'vue-property-decorator';
import { State, Getter, Action, Mutation, namespace } from 'vuex-class';
```

To 😎

```ts
import {
  Component,
  Emit,
  Inject,
  Model,
  Prop,
  Provide,
  Watch,
  Vue,
  State,
  Getter,
  Action,
  Mutation,
  namespace
} from 'nuxtjs-extensions';
```
