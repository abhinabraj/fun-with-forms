<template>
  <div>
    <nav-bar title="Form Demonstration" />
    <div class="demo-form">
      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <!-- Name -->
        <div class="flex space-between">
          <b-form-group
            id="input-group-2"
            label="First Name:"
            label-for="input-2"
            class="form-group-md"
          >
            <b-form-input
              id="input-2"
              v-model="form.firstName"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Middle Name"
            label-for="input-2"
            class="form-group-md"
          >
            <b-form-input
              id="input-2"
              v-model="form.middleName"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Last Name"
            label-for="input-2"
            class="form-group-md"
          >
            <b-form-input
              id="input-2"
              v-model="form.lastName"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <!-- Name -->

        <!-- Address -->
        <div class="flex space-between">
          <b-form-group
            id="input-group-2"
            label="Zone"
            label-for="input-2"
            class="form-group-md"
          >
            <div>
              <b-form-select
                v-model="form.selectedZone"
                :options="zoneOptions"
              ></b-form-select>
            </div>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="District"
            label-for="input-2"
            class="form-group-md"
          >
            <b-form-select
              v-model="form.selectedDistrict"
              :options="districtsOptions"
            ></b-form-select>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Village"
            label-for="input-2"
            class="form-group-md"
          >
            <b-form-input
              id="input-2"
              v-model="form.selectedVillage"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <!-- Address -->

        <!-- Biometrics -->
        <div class="flex space-between">
          <b-form-group
            id="input-group-2"
            label="Age"
            label-for="input-2"
            class="form-group-md"
          >
            <div>
              <b-form-select
                v-model="form.selectedAge"
                :options="age"
              ></b-form-select>
            </div>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Blood Group"
            label-for="input-2"
            class="form-group-md"
          >
            <b-form-select
              v-model="form.selectedBloodGroup"
              :options="bloodGroupOptions"
            ></b-form-select>
          </b-form-group>
          <b-form-group
            id="input-group-2"
            label="Eye color"
            label-for="input-2"
            class="form-group-md"
          >
            <b-form-input
              id="input-2"
              v-model="form.eyeColor"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <!-- Biometrics -->

        <!-- Basic info -->
        <div class="flex space-between">
          <b-form-group
            id="input-group-2"
            label="Timezone"
            label-for="input-2"
            class="form-group-md"
          >
            <div>
              <b-form-select
                v-model="form.selectedTimezone"
                :options="timezoneOptions"
                value-field="tz"
                text-field="tz"
              ></b-form-select>
            </div>
          </b-form-group>
          <b-form-group
            id="input-group-3"
            label="Food:"
            label-for="input-3"
            class="form-group-md"
          >
            <b-form-select
              id="input-3"
              v-model="form.food"
              :options="foods"
              required
            ></b-form-select>
          </b-form-group>

          <b-form-group
            id="input-group-2"
            label="Phone Number"
            label-for="input-2"
            class="form-group-md"
          >
            <b-form-input
              id="input-2"
              v-model="form.phoneNumber"
              required
            ></b-form-input>
          </b-form-group>
        </div>
        <!-- Biometrics -->

        <b-form-group
          id="input-group-1"
          label="Email address:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
import {
  ageList,
  districts,
  zones,
  bloodGroup,
  timezones,
} from "../utils/MockData";
export default {
  components: { NavBar },
  data() {
    return {
      form: {
        email: "",
        firstName: "",
        lastName: "",
        middleName: "",
        selectedDistrict: "",
        food: null,
        checked: [],
        selectedZone: "",
        selectedAge: "",
        selectedBloodGroup: "",
        eyeColor: "",
        phoneNumber: "",
        selectedTimezone: "",
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      zoneOptions: zones,
      districtsOptions: districts,
      bloodGroupOptions: bloodGroup,
      age: ageList(),
      timezoneOptions: timezones,
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.food = null;
      this.form.checked = [];
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
<style>
.demo-form {
  padding: 40px;
}

.form-group-md {
  width: 32% !important;
}
</style>
