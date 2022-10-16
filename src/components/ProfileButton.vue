<template>
  <div id="login-profile-btn">
    <button v-if="this.$store.state.user == null" class="login-btn mx-4" id="login-btn" @click="login">Log In</button>
    <button v-else >
    <v-avatar class="white--text" id="profile-btn" color="rgb(119, 153, 119)" size="36" @click="logout">
        {{ initials }}
    </v-avatar>
    </button>
  </div>
    
  </template>
  
  <script>
  // javascript
  export default {
    name: "ProfileButton",
    data() {
        return {
            initials: null
        }
    },
    mounted() {
        this.getInitials();
        console.log(this.initials)
    },
    methods: {
      login() {
        //TOOD: implement login function onclick
        this.$router.push("/login");
      },
      logout() {
        this.$store.commit("logout")
      },
      getInitials() {
        if(this.$store.state.user != null) {
            var userName = this.$store.state.user.userName
            var userNameArr = userName.split(" ")
            if (userNameArr.length > 1){
                this.initials = userNameArr[0][0].toUpperCase() + userNameArr[1][0].toUpperCase()
            } else {
                this.initials = userNameArr[0][0].toUpperCase()
            }
        }
      }
    },
  };
  </script>
  
  <style>
  /* css */

  #login-btn{
    color: rgb(119, 153, 119);
    font-weight: bold;
  }
  
  
  </style>
  