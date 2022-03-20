<template>
  <div>
    <b-form-group v-slot="{ ariaDescribedby }">
      <b-form-radio
        v-model="selected"
        :aria-describedby="ariaDescribedby"
        name="some-radios"
        value="A"
        v-for="(data, index) in options"
        :key="index"
      >
        {{ data }}
      </b-form-radio>
    </b-form-group>
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
