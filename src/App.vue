<template>
  <p>
    <strong>Current route path:</strong> {{ $route.fullPath }}
  </p>
  <main>
    <RouterView />
  </main>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>
html, body {
  height: 100%;
  margin: 0;
  background-color: #f5f5f5;
}
</style>