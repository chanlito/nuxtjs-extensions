# NuxtJS Extensions

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
        tsconfig: false,
        tslint: false
      }
    ],
    [
      'nuxtjs-extensions/vuetify',
      {
        css: false,
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
    ['nuxtjs-extensions/vee-validate']
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
