<template>
  <div id="app">
    <!-- <nav><router-link to="/">Home</router-link> |</nav> -->
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  width: 100vw;
}
.flex {
  display: flex;
}
.space-between {
  justify-content: space-between;
}
</style>
