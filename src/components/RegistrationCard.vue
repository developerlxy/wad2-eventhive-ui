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
        label="Email"
        :rules="emailRules"
        append-icon="mdi-map-marker"
        v-model="email"
      ></v-text-field>

      <v-text-field
        dense
        outlined
        label="Username"
        append-icon="mdi-map-marker"
        :rules="usernameRules"
        v-model="userName"
      ></v-text-field>

      <v-text-field
        dense
        outlined
        v-model="password"
        append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="passwordRules"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Password"
        hint="At least 8 characters"
        @click:append="show1 = !show1"
      ></v-text-field>

      <v-text-field
        dense
        outlined
        :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        :rules="confirmPasswordRules"
        :type="show1 ? 'text' : 'password'"
        name="input-10-1"
        label="Confirm Password"
        hint="Must match password above"
        @click:append="show1 = !show1"
      ></v-text-field>
    </v-form>
      <v-btn
        class="text-none"
        :color="isDisabled ? 'grey' : 'greenDark'"
        dark
        block
        @click.native="signup"
      >
      Sign Up
      </v-btn>
      <br>
      <a href>Already have an account? Log in here!</a>
      <p class="pt-1 pb-0 m-0 red--text" v-show="userExists">This email already exists. Please login!</p>
      <p class="pt-1 pb-0 m-0 red--text" v-show="userCreated">User registered. Redirecting you to login page...</p>
    </v-card>
  </template>
   
  <script>
  import {firebaseAuth} from '../utils/firebaseInit'
  import {createUserWithEmailAndPassword} from 'firebase/auth'

  export default {
    name: "RegistrationCard",
      data () {
        return {
          isDisabled: false,
          show1: false,
          email: '',
          userName: '',
          password: '',
          userExists: false,
          userCreated: false,
          passwordRules: [
            v => !!v || 'Password is required',
            value => (value && value.length >= 6) || 'Minimum 8 characters',
            v => v && /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(v) || 'At least one number and one character',
          ],
          confirmPasswordRules: [
            v => !!v || 'Please confirm password',
            v =>v === this.password || 'The passwords do not match',
            ],
          emailRules: [
            v => !!v || 'Email is required',
            v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
          ],
          usernameRules: [
          v => !!v || 'Username is required',
        ]
        }
      },
      methods: {
        signup: function(event) {
            if (this.$refs.form.validate()) {
                this.isDisabled = true
                this.axios.post("https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/users/register",
                    {
                        userName: this.userName,
                        userPassword: this.password,
                        userEmail: this.email,
                    }
                ).then(response => {
                    if (typeof response.data == "string" && response.data == "User Exists") {
                        this.userExists = true
                    } else if (typeof response.data == "object") {
                        this.userCreated = true

                        createUserWithEmailAndPassword(firebaseAuth, email, password)
                        .then((userCredential) => {
                          const user = userCredential.user
                        })
                        .catch((error) => {
                          const errorCode = error.code 
                          const errorMessage = error.message
                        })
                        
                        setTimeout(() => {
                            this.$router.push({name: "login", params: {email: this.email}})
                        }, 2000);
                    }
                    this.isDisabled = false
                })
                
            }
        }
      }
    }
  </script>
  <style scoped>
  .v-text-field--outlined >>> fieldset {
    border-color: #A9C4BB;
  }
  </style>