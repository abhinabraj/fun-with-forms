<template>
  <div class="home-wrapper">
    <h1 class="large-text">Fun With Forms</h1>
    <b-button size="lg" variant="outline-primary" @click="$router.push('/demo')"
      >Let's Start</b-button
    >
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>

<style>
.home-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 4.5rem;
}
.large-text {
  font-size: 5rem;
}
</style>
