<template>
  <div>
    <nav-bar title="Practise Form" />
    <b-container>
      <form action="" @submit.prevent="submitForm">
        <div class="my-3">
          <b-form-input
            v-model="formValues.fullName"
            placeholder="Enter your name"
            name="fullName"
            @keypress="handleKeyPress"
          ></b-form-input>
          <div class="error" v-if="formErrors.fullName">
            Field should not be empty
          </div>
        </div>
        <div class="my-3">
          <b-form-input
            v-model="formValues.address"
            placeholder="Enter your address"
            name="address"
            @keypress="handleKeyPress"
          ></b-form-input>
          <div class="error" v-if="formErrors.address">
            Field should not be empty
          </div>
        </div>
        <div class="my-3">
          <b-form-input
            v-model="formValues.occupation"
            placeholder="Enter your occupation"
            name="occupation"
            @keypress="handleKeyPress"
          ></b-form-input>
          <div class="error" v-if="formErrors.occupation">
            Field should not be empty
          </div>
        </div>
        <div class="my-3">
          <b-form-group label="Maritial Status" v-slot="{ ariaDescribedby }">
            <b-form-radio
              v-model="formValues.maritalStatus"
              :aria-describedby="ariaDescribedby"
              name="married"
              value="married"
            >
              Married
            </b-form-radio>
            <b-form-radio
              v-model="formValues.maritalStatus"
              :aria-describedby="ariaDescribedby"
              name="single"
              value="single"
            >
              Single
            </b-form-radio>
          </b-form-group>
          <div class="error" v-if="formErrors.maritalStatus">
            Field should not be empty
          </div>
        </div>
        <div class="my-3">
          <b-form-input
            v-model="formValues.phoneNumber"
            placeholder="enter phone number"
            name="phoneNumber"
            @keypress="handleKeyPress"
          >
          </b-form-input>
          <div class="error" v-if="formErrors.phoneNumber">
            Field should not be empty
          </div>
        </div>
        <div class="my-3">
          <div>
            <b-form-select
              v-model="formValues.musicGenre"
              :options="options"
            ></b-form-select>
          </div>
          <div class="error" v-if="formErrors.musicGenre">
            Field should not be empty
          </div>
        </div>
        <div class="my-3">
          <b-form-input
            v-model="formValues.hobby"
            placeholder="Enter your favourite Hobby"
            name="hobby"
            @keypress="handleKeyPress"
          >
          </b-form-input>
          <div class="error" v-if="formErrors.hobby">
            Field should not be empty
          </div>
        </div>
        <div class="my-3">
          <b-button size="lg" type="submit">Submit</b-button>
        </div>
      </form>
    </b-container>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  components: {
    NavBar,
  },
  data() {
    return {
      formValues: {
        fullName: "",
        address: "",
        occupation: "",
        maritalStatus: "",
        phoneNumber: "",
        musicGenre: null,
        hobby: "",
      },
      formErrors: {
        fullName: false,
        address: false,
        occupation: false,
        maritalStatus: false,
        phoneNumber: false,
        musicGenre: false,
        hobby: false,
      },
      options: [
        { value: null, text: "Please select your favourite music genre" },
        { value: "hardRock", text: "Hard Rock" },
        { value: "pop", text: "Pop" },
        { value: "rb", text: "R and B" },
        { value: "grunge", text: "Grunge" },
      ],
    };
  },
  watch: {
    "formValues.musicGenre"() {
      this.formErrors.musicGenre = false;
    },
    "formValues.maritalStatus"() {
      this.formErrors.maritalStatus = false;
    },
  },
  methods: {
    submitForm() {
      console.log(this.isFormValid(), "@isFormValid");
      if (!this.isFormValid()) return;
      Object.keys(this.formValues).forEach((val) => {
        console.log(this.formValues[val], `@@=>${val}`);
      });
      console.log(this.formValues, "@formValues");
      console.log(this.formErrors, "@formErrors");
    },
    isFormValid() {
      Object.keys(this.formErrors).forEach((formField) => {
        this.formErrors[formField] =
          this.formValues[formField] === "" || !this.formValues[formField]
            ? true
            : false;
      });
      const isFormError = Object.values(this.formErrors).includes(true);
      return !isFormError;
    },
    handleKeyPress(e) {
      this.formErrors[e.target.name] = false;
    },
  },
};
</script>

<style>
.error {
  margin-top: 5px;
  color: rgb(206, 89, 89);
}
</style>
