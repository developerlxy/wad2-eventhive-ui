<template>
  <div id="profile-btn">
    <button v-if="this.$store.state.user == null" class="login-btn" id="login-btn" @click="login">Log In</button>
    <button v-else >
    <v-avatar class="white--text" id="logged-in-user" color="rgb(119, 153, 119)" size="36">
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
 
  
  #profile-btn {
    position: absolute;
    right: 0;
    margin-right: 20px;
  }
  
  
  </style>
  