<template>
    <v-card
      class="mx-auto px-10 pt-11 pb-9"
      width="450px"
      outlined
    >
      <img
          class="img pa-3"
          src="../assets/images/logo-cropped.png"
          alt="loading..."
          width="100%"
        />
      <v-form ref="form">
      <v-text-field
        dense
        outlined
        label="E-mail"
        v-model="email"
        :rules="emailRules"
        append-icon="mdi-map-marker"
      ></v-text-field>

      <v-text-field
        dense
        outlined
        v-model="password"
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="passwordRules"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        @click:append="show1 = !show1"
      ></v-text-field>
      </v-form>
      <v-btn
        class="text-none my-1"
        :color="isDisabled ? 'grey' : 'greenDark'"
        dark
        block
        @click.native="login"
      >
        Log in
      </v-btn>
      or
      <v-btn
      class="text-none my-1 mb-4"
        color=brownDark
        dark
        block
      >
        Continue with Google
      </v-btn>
      <v-btn
        text
        @click.native="pushToSignUp"
      >
        Don't have an account? Sign up here!
      </v-btn>
      <a onclick="pushToSignUp"></a>
      <p class="pt-1 pb-0 m-0 red--text" v-show="wrongPassword">Incorrect password entered :(</p>
      <p class="pt-1 pb-0 m-0 red--text" v-show="loginSuccessful">Login successful. Redirecting you...</p>
      <p class="pt-1 pb-0 m-0 red--text" v-show="mustRegister">Email does not exist. Please register!</p>
  </v-card>
  
</template>
 
<script>
export default {
  name: "LoginCard",
    data () {
      return {
        wrongPassword: false,
        mustRegister: false,
        isDisabled: false,
        loginSuccessful: false,
        show1: false,
        email: this.$route.params.email || '',
        password: '',
        emailRules: [
          v => !!v || 'Email is required',
          v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
        ],
        passwordRules: [
          v => !!v || 'Password is required',
        ]
      }
    },
    methods: {
      login: function (event) {
        if(this.$refs.form.validate()) {
          this.isDisabled = true
          this.axios.post("https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/users/signin",
            {
              userEmail: this.email,
              userPassword: this.password
            }
          ).then(response => {
            if (typeof response.data == "string") {
              if (response.data == "Register") {
                this.mustRegister = true
                this.wrongPassword = false
              } else {
                this.password = ""
                this.wrongPassword = true
                this.mustRegister = false
              }
            }
            else if ('userName' in response.data) {
              this.loginSuccessful = true
              this.wrongPassword = false
              this.mustRegister = false
              const user = JSON.stringify(response.data)
              localStorage.setItem('user', user)
              this.$router.push("/");
            }
            this.isDisabled = false
          })
        }
      },
      pushToSignUp: function(event) {
        this.$router.push({name: 'register', params: {email: this.email}})
      }
    }
  }
</script>
<style scoped>
.v-text-field--outlined >>> fieldset {
  border-color: #A9C4BB;
}
</style>