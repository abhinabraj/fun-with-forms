<template>
  <div>
    <nav-bar title="Dynamic Form" />
    <b-container>
      <div>
        <b-form-select
          v-model="selectedField"
          :options="categories"
          class="mb-3"
          value-field="subField"
          text-field="name"
          disabled-field="notEnabled"
        ></b-form-select>
      </div>

      <form-field :field="selectedField" />
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import FormField from "@/components/FormField.vue";
export default {
  components: { NavBar, FormField },
  data() {
    return {
      selectedField: null,
      categories: [
        {
          subField: {
            type: "select",
            label: "Size",
            options: ["l", "xl", "xxl"],
          },
          name: "Tshirt",
        },
        {
          subField: {
            type: "radio",
            label: "color",
            options: ["navy blue", "matte black", "pink"],
          },
          name: "Phone",
        },
      ],
    };
  },
};
</script>

<style></style>
