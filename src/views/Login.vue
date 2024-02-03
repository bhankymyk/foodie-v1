<template>
    <div class="container text-center">
        <div class="row">
            <div class="col">
                <div class="mt-4">
                    <img src="../assets/Signup.png" class="img-fluid" alt="">
                </div>

                <h2>Login To Your Account</h2>
                <div class="">
                    <form action=""> 
                        <div class="login">
                            <label for="email">Email</label> <br>
                            <input type="text" v-model="email">
                        </div>

                        <div class="login">
                            <label for="password">Password</label> <br>
                            <input type="password" v-model="password">
                        </div> 
                        <div class="login"> 
                            <button  v-on:click="login" class="btn btn-lg">Login</button>
                        </div>

                        <div class="div">
                            <h5>Don't have an account ? <router-link to="/signUp">Sign Up</router-link></h5>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import axios from 'axios';
    import {useToast} from 'vue-toastification'

    export default {
        data () {
            return {
                email: '',
                password: ''
            }
        } ,
        methods: {
            async login () {


                const toast = useToast();

                let result = await axios.get(
                    `https://foodieapi-u2rl.onrender.com/user?email=${this.email}&password=${this.password}`
                )
                console.log(result)

                if(result.status===200  && result.data.length>0)
                {
                    
                    // local staorage redirect to homepage after logged in
                    localStorage.setItem("info", JSON.stringify(result.data.length > 0 ? result.data[0] : null))
                    this.$router.push({name:'homePage'})

                }
                else {
          // Display incorrect password message or handle other errors
        toast.error('Incorrect password or email');
        }
            }
        },
        mounted () {
            // Should redirect to homepage if user is not logged in
            let user = localStorage.getItem('info');
            if(user)
            {
                this.$router.push({name:'homePage'})
            }
        }

    }
</script>


<style scoped>
.login{
    display: block;
    margin: 15px 15px;
}
.login label{
    /* text-align: left; */
    color: #42b983;
}
.login input{
    border: 1px solid #42b983;
    border-radius: 25px;
    background: #A3A3A3;
    color: white;
    width: 300px;
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