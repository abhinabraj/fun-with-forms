<template>
  <div class="form-field">
    <div class="label">{{ field.label }}</div>
    <component :is="generateDynamicField(field)" :options="field.options" />
  </div>
</template>

<script>
const FormFieldRadio = () => import("./FormFieldRadio.vue");
const FormFieldSelect = () => import("./FormFieldSelect.vue");
export default {
  props: ["field"],
  watch: {
    field(newValue) {
      this.generateDynamicField(newValue);
    },
  },
  methods: {
    generateDynamicField(field) {
      console.log(field, "@field");
      switch (field.type) {
        case "radio":
          return FormFieldRadio;

        case "select":
          return FormFieldSelect;

        default:
          break;
      }
    },
  },
};
</script>

<style></style>
