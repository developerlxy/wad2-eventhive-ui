<template>
    
  <v-card
    class="mx-auto pa-6"
    width="25%"
    outlined
  >
    <img
        class="img pa-3"
        src="../assets/images/logo-cropped.png"
        alt="loading..."
        width="200"
      />
    <v-text-field
      dense
      outlined
      label="E-mail"
      append-icon="mdi-map-marker"
    ></v-text-field>
    <v-text-field
      dense
      outlined
      v-model="password"
      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
      :rules="[rules.required, rules.min]"
      :type="show1 ? 'text' : 'password'"
      name="input-10-1"
      label="Password"
      hint="At least 8 characters"
      counter
      @click:append="show1 = !show1"
    ></v-text-field>
    <v-btn
      class="text-none"
      color=greenDark
      dark
      large
    >
    Log in
    </v-btn></br>
      or</br>
           <v-btn
            class="text-none"
              color=brownDark
              dark
              large
            >
              Continue with Google
            </v-btn></br></br>

    <a href>Don't have an account? Sign up here!</a>
  </v-card>
</template>
 
<script>
export default {
  name: "LoginCard",
    data () {
      return {
        show1: false,
        password: 'Password',
        rules: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters',
          emailMatch: () => (`The email and password you entered don't match`),
        },
      }
    },
  }
</script>
<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #A9C4BB;
}
</style>