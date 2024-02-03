<template>
    <div class="container d-flex justify-content-center">
        <div class="row ">
            <div class="col">
                <div class="mt-4 text-center">
                    <img src="../assets/Signup.png" class="img-fluid" alt="">
                </div>

                <h2 class="text-center">Sign Up Here</h2>
                <div class="">
                    <!-- <form action=""> -->
                        <div class="signup">
                            <label for="name" class="">Name</label> <br>
                            <input type="text" placeholder=" Enter your Name" v-model="name">
                        </div>

                        <div class="signup">
                            <label for="email">Email</label> <br>
                            <input type="text" placeholder="Enter your Email" v-model="email">
                        </div>

                        <div class="signup">
                            <label for="password">Password</label> <br>
                            <input type="password" placeholder="" v-model="password">
                        </div>

                        <div class="signup mt-3"> 
                            <button  v-on:click="btn" class="btn btn-lg">Sign Up</button>
                        </div>

                        <div class="div">
                            <h5>Already have an account ? <router-link to="/login">Login</router-link></h5>
                        </div>

                    <!-- </form> -->
                </div>
            </div>
        </div>
    </div>
    
    
</template>

<script>

import axios from 'axios';

    export default {
        data () {
            return {
                name: '',
                email: '',
                password: ''
            }
        },

        // Sign up API using Json and axios 
        methods: {
           async btn() 
           {
                let result = await axios.post("https://foodieapi-u2rl.onrender.com/user", {
                    name:this.name,
                    email:this.email,
                    password:this.password
                });

                console.warn(result);

                if(result.status===201)
                {
                    
                    // local staorage redirect to homepage after signup
                    localStorage.setItem("info", JSON.stringify(result.data))
                    this.$router.push({name:'home'})

                }
            }
        }, 
        // mounted () {
        //     // Should redirect to homepage if user is not signed up
        //     let user = localStorage.getItem('info');
        //     if(user)
        //     {
        //         this.$router.push({name:'home'})
        //     }
        // }
        
    }
</script>

<style scoped>

.signup{
    display: block;
    margin: 15px 15px;
}
.signup label{
    /* text-align: left; */
    /* color: #42b983; */
    color: #000;
    margin-left: 10px;
}
.signup input{
    border: 1px solid #42b983;
    border-radius: 15px;
    /* background: #A3A3A3; */
    color: white;
    width: 300px;
    height: 40px;
    padding: 10px;
    font-size: 15px;
}
button{
    /* color: #42b983; */
    background-color: #42b983;
    padding: 10px 20px;
    font-size: 16px;
    font-weight: 600;
    width: 100%;
    color: #fff;
    margin-left: 10px;
}
button:hover{
  background: #3cb8a1;
}
a {
  text-decoration: none;
  color: #42b983;
}
input::placeholder {
  text-align: center;
}

</style>