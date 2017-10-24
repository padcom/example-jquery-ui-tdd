<template>
  <div>
    <h1 @click="clicked">{{ header }}!!</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      header: 'Hello, world!'
    }
  },
  methods: {
    clicked (e) {
      this.header = 'clicked!'
    }
  }
}
</script>

<style>
h1 {
  background-color: green;
}
</style>
