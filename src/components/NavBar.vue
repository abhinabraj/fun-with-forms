<template>
  <div>
    <b-navbar toggleable="sm" class="nav-bar">
      <b-navbar-toggle target="nav-text-collapse"></b-navbar-toggle>
      <b-navbar-brand class="nav-title">{{ title }}</b-navbar-brand>
    </b-navbar>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.nav-bar {
  background-color: #9c78c5;
}
.nav-title {
  color: white !important;
}
</style>
