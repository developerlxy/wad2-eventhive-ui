<template>
  <!-- html -->
  <div class="navbar" id="navbar">
    <img
      src="../assets/images/logo.png"
      alt="logo"
      class="logo"
      id="navbar-logo"
    />

    <SearchBar id="search-bar"></SearchBar>
    
    <ProfileButton></ProfileButton>

    <img
        :src="imageURL"
      alt="User"
      class="user-profile-pic"
    />

    
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
import ProfileButton from "./ProfileButton.vue";
// javascript
export default {
  name: "NavBar",
  components: { SearchBar, ProfileButton }, 
  props: {
    imageURL: {
      type: String,
      default: "../src/assets/images/test.png",
    },
  },
  methods: {
    login() {
      //TOOD: implement login function onclick
      this.$router.push("/login");
    },
    getInitials() {

    }
  },
};
</script>

<style>
/* css */
#navbar {
  height: 120px;
  display: flex;
  flex-direction: row;
  align-items: center;
}

#navbar-logo {
  max-width: 100%;
  max-height: 100%;
}

#search-bar {
  margin-left: 20px;
}

#login-btn {
  position: absolute;
  right: 0;
  margin-right: 20px;
  color: rgb(119, 153, 119);
  font-weight: bold;
  cursor: pointer;
  visibility: visible;
}

.user-profile-pic {
  position: absolute;
  max-height: 60px;
  right: 0;
  margin-right: 20px;
  border-radius: 50%;
  visibility: hidden;
}
</style>
