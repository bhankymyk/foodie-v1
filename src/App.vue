<template>
  
        <div class="container-fluid">
    <!-- NavBar -->
    <div class="row">
      <div class="col">
          <nav class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">
      <div class="nav-item">
        <!-- <img src="../assets/logo.png" alt="">  -->
        <router-link to="/">Foodie</router-link> 
      </div>
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link to="/homePage">Home</router-link> |</a>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/signUp">SignUp</router-link> |</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/login">Login</router-link> |</a>
        </li> -->
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/addRestaurant">Add Restaurant</router-link> |</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"><router-link to="/about">About</router-link> |</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            More
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <div class="d-flex" role="search">
        <button v-on:click="logout" class="btn btn-lg btn-success">Logout</button>
        <!-- <img src="../assets/Google Play Badge.png" class="img-fluid me-3" alt=""> -->
        <!-- <img src="../assets/App Store BadgeApple.png"  class="img-fluid" alt=""> -->
      </div>
    </div>
  </div>
</nav>
<router-view/>
        </div>
    </div>
    <!-- <div class="row">
      <div class="col-md-12">
        <HomeView/>
      </div>
    </div> -->

    

  </div>
</template>

<script>

import HomeView from './views/HomeView.vue';

export default {
  components: {
    HomeView
  },

  methods: {

      logout() {
        localStorage.clear()
        this.$router.push({name:'login'})
      }
  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* background-image:url(https://images.unsplash.com/photo-1532635211-8ec15f2ce05c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D); */
}
/* body{
   background-size: cover;
   background-position: center;
} */

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.nav-item a {
  text-decoration: none;
}
.navbar {
  background-color: #fff;
}
/* .bg-body-tertiary{
  --bs-bg-opacity: 1;
  background-color: white !important;
} */
/* .bg-body-tertiary {
    --bs-bg-opacity: 1;
    background-color: rgba(var(--bs-tertiary-bg-rgb), var(--bs-bg-opacity));
} */
</style>
