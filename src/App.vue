<template>
  <div>
    <header class="page-header">
      <h1>Vue Lazy Component Demos</h1>
      <router-link class="link" to="/view1">route1: 5个组件</router-link>
      <router-link class="link" to="/view2">route2: 2个组件</router-link>
      <router-link class="link" to="/view3">route3: 2个组件</router-link>
    </header>
    <router-view class="page-container"></router-view>
  </div>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator';
@Component
export default class App extends Vue {
  
}
</script>

<style>
  .page-header {
    position: fixed;
    top: 0;
    z-index: 199;
    width: 100%;
    background: rgba(255, 255, 255, .95);
    padding: 18px;
    text-align: center;
  }

  .page-container {
    margin-top: 120px;
  }

  h1 {
    font-size: 24px;
    line-height: 2em;
  }

  h1,
  h2 {
    color: #42b983;
  }

  .link {
    padding:0 24px 0 0;
  }

  .link:hover {
    color: #42b983;
  }

  code.hljs {
    font-family: 'Roboto Mono', Monaco, courier, monospace;
    font-size: 0.8em;
    background-color: rgba(255, 255, 255, .5);
    -webkit-font-smoothing: initial;
    padding: 1.2em 1.4em;
    line-height: 1.5em;
    margin: 0;
  }

  .router-link-active {
    color: #42b983;
  }

  summary {
    font-size: 14px;
    cursor: pointer;
    line-height: 3;
    background:rgba(255,255,255,.9);
    padding: 10px 16px;
    margin: 8px 0;
  }

  summary:focus {
    outline: none;
  }
</style>

