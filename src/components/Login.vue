<template>
    <div class="vue-template">
        <form v-on:submit.prevent="login()">
            <h3>Sign In</h3>
 
            <div class="form-group">
                <label>Email address</label>
                <input type="email" class="form-control form-control-lg" v-model="form.email"/>
            </div>
 
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control form-control-lg" v-model="form.password"/>
            </div>
 
            <button type="submit" class="btn btn-dark btn-lg btn-block">Sign In</button>
 
            <p class="forgot-password text-right mt-2 mb-4">
                <router-link to="/forgot-password">Forgot password ?</router-link>
            </p>
 
            <div class="social-icons">
                <ul>
                    <li><a href="#"><i class="fa fa-google"></i></a></li>
                </ul>
            </div>
 
        </form>
        <h6>{{message}}</h6>
    </div>
</template>
 
<script>
    import axios from 'axios';
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    email: "",
                    password: "",
                },
                message: "asd "
            }
        },
        methods: {
            login () {
                axios.post('https://us-central1-wad2-eventhive-backend-d0f2c.cloudfunctions.net/app/api/users/signin', 
                    {
                        userEmail: this.form.email,
                        userPassword: this.form.password,
                    }
                )
                .then(function(response) {

                    if (response.data == "Register") {
                        this.message = "User not found, please register!"
                    } 
                    else if (response.data == "Incorrect password") {
                        this.message = "Incorrect password, please check again!"
                    } else {
                        this.message = "Login successful"
                    }

                })

            }
        }
    }
</script>