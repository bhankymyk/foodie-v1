<template>
    <div class="container-fluid text-center">
        <div class="row">
            <div class="col">
                <h4>Upadate Restaurant</h4>
                <form action="">
                    <div class="updaterest">
                        <div class="updaterest"><input type="text" placeholder="Name" v-model="Restaurant.name"></div>
                       <div class="updaterest"><input type="text" placeholder="Location" v-model="Restaurant.location"></div> 
                        <div class="updaterest"><button   v-on:click="updateRestaurant"  type="button" class="btn">Update Restaurant</button></div> 
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
           async updateRestaurant() {
                    // console.log(this.Restaurant)

                    const result =await axios.put("https://foodieapi-u2rl.onrender.com/restaurant/"+this.$route.params.id,{
                         name:this.Restaurant.name,
                         location:this.Restaurant.location
                    });

                    if (result.status==200)
                    {
                        this.$router.push({name:'homePage'})
                    }
                    console.warn("result", result)
            }
        },



            async mounted () {
                // let user = localStorage.getItem('info');
                // if(user) {
                //     this.$router.push({name: 'signUp'})
                // }
                const result = await axios.get('https://foodieapi-u2rl.onrender.com/restaurant/'+this.$route.params.id)
                console.log(result.data)
                this.Restaurant=result.data
            }
                   }
        
    
</script>

<style scoped>
.updaterest{
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