<template>
  <v-dialog max-width="600">
    <template v-slot:activator="{ on, attrs }">
      <v-btn small fab v-bind="attrs" v-on="on" depressed retain-focus-on-click>
        <v-icon>mdi-account-circle-outline</v-icon>
      </v-btn>
    </template>
    <template v-slot:default="dialog">
      <v-form ref="form" lazy-validation>
        <v-card>
          <v-toolbar color="primary" dark>{{ $t("m.logIn") }}</v-toolbar>
          <v-card-text>
            <v-text-field
              v-model="username"
              :counter="10"
              :rules="nameRules"
              :label="$t('m.userAccount')"
              required
              outlined
            ></v-text-field>
            <v-text-field
              v-model="password"
              :label="$t('m.password')"
              required
              outlined
              type="password"
            ></v-text-field>
          </v-card-text>
          <v-divider></v-divider>
          <v-card-actions class="justify-end">
            <v-btn
              :disabled="!valid"
              color="primary"
              class="mr-4"
              small
              min-width="100"
              @click="validate"
            >
              {{ $t("m.logIn") }}
            </v-btn>
            <v-btn small min-width="100" @click="dialog.value = false">{{
              $t("m.close")
            }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </template>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    valid: true,
    username: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    password: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
      if (this.$refs.form.validate()) {
        this.$store
          .dispatch("login", {
            password: this.password,
            username: this.username
          })
          .then(() => {
            this.$store.dispatch("getInfo");
          });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>
