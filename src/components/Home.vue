<template>
  <div class="container">
    <div class="row small-screen mb-5 text-center">
      <img src="" alt="">
      <img src="../assets/Illustartion.png" class="img-fluid" alt="">
      <div class="col">

      </div>
    </div>

    <div class="row">
      <div class="col-md-6">
        <!-- <h2>Hello {{ name}}, welcome to homepage</h2> -->
      </div>
    </div>
    <div class="row">
      <div class="col-md-12 text-center">
        <h3>Find Your Comfort <br> Food Here</h3>
        <p>Here you can find a dish for every <br> taste or color you want. !Enjoy</p>
        <button class="btn btn-lg" type="button">
          <router-link to="/signUp">Next</router-link></button>
      </div>
    </div>
  </div>
  
    
</template>

<script>
export default {

  name: 'Home',

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
button{
  background-color: #2FDBBC;
  padding: 10px 20px;
  font-size: 20px;
  width: 200px;
}
button:hover{
  background: #8decdb;
}
a {
  text-decoration: none;
}


@media only screen and (max-width: 767px) {
  .small-screen {
    background-image: url("../assets/Pattern.png");
  }
}
</style>
