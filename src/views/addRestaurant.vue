<template>
    <div class="container-fluid text-center">
        <div class="row">
            <div class="col">
                <h4>Add Restaurant</h4>
                <form action="">
                    <div class="addrest">
                        <div class="addrest"><input type="text" placeholder="Name" v-model="Restaurant.name"></div>
                       <div class="addrest"><input type="text" placeholder="Location" v-model="Restaurant.location"></div> 
                        <div class="addrest"><button   v-on:click="addRestaurant"  type="button" class="btn">Add Restaurant</button></div> 
                    </div>
                
                </form>

            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'
    export default {
        data () {
            return {
                Restaurant: {
                    name: '',
                    location: ''

                }
            }
        },
        methods: {
           async addRestaurant() {
                    console.log(this.Restaurant)
                    const result =await axios.post("https://foodieapi-u2rl.onrender.com/restaurant", {
                         name:this.Restaurant.name,
                         location:this.Restaurant.location
                    });

                    if (result.status==201)
                    {
                        this.$router.push({name:'homePage'})
                    }
                    console.warn("result", result)
            }
        }
        
    }
</script>

<style scoped>
.addrest{
    display: block;
    margin: 15px 15px;
}
input{
    border: 1px solid #42b983;
    border-radius: 25px;
    background: #A3A3A3;
    color: white;
    width: 200px;
    height: 40px;
    padding: 10px;
}
button{
    /* color: #42b983; */
    background-color: #42b983;
    padding: 10px 20px;
    font-size: 20px;
    width: 200px;
    color: white;
}
button:hover{
  background: #3cb8a1;
}
a {
  text-decoration: none;
  color:#42b983 ;
}
</style>