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
    <button class="login-btn" id="login-btn" @click="login">Log In</button>

    <img
        :src="imageURL"
      alt="User"
      class="user-profile-pic"
    />

    <!-- <button class="logged-in-user" id="logged-in-user" @click="logout">
      <font-awesome-icon icon="user-circle" />
      {{ user }}
    </button> -->
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
// javascript
export default {
  name: "NavBar",
  components: { SearchBar },
  props: {
    imageURL: {
      type: String,
      default: "../src/assets/images/bee.png",
    },
  },
  methods: {
    login() {
      //TOOD: implement login function onclick
      this.$router.push("/login");
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
