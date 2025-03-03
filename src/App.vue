<template>
  <div id="app">
    <LoginView />
  </div>
</template>

<script>
import LoginView from './components/LoginView.vue'

export default {
  name: 'App',
  components: {
    LoginView
  }
}
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  background-color: #f5f5f5;
}
</style>