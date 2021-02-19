<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted() {
    let data = {
      text: 'ok'
    }
    let blob = new Blob([JSON.stringify(data)])
    window.addEventListener('unload', () => {
      navigator.sendBeacon('http://localhost:3000/log', blob)
    })
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
  background-color: #eef1f6;
}
</style>
