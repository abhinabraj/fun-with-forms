<template>
  <div>
    <b-form-select
      v-model="selected"
      :options="options"
      class="mb-3"
      value-field="item"
      text-field="name"
      label="test"
    ></b-form-select>
  </div>
</template>

<script>
export default {
  props: ["options"],
  data() {
    return {
      selected: "",
    };
  },
};
</script>

<style></style>
