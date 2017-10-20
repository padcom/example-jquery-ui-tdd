<template>
  <div id="example-app">
    <h1>{{ header }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: 'Hello, world!'
    }
  }
}
</script>

<style>
h1 {
  background-color: green;
}
</style>
