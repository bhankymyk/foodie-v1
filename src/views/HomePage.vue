<template>
    <div>
        <h1>Hello {{ name }} welcome to homepage</h1>
    </div>
</template>

<script>
    export default {
        data () {
    return {
      name:''
    }
  },

    mounted()
   {
      let user = localStorage.getItem('info');
      if(user) {
        this.name = JSON.parse(user).name;

      }
      else
      {
        this.$router.push({name:'signUp'});
      }
  }

        
    }
</script>

<style scoped>

</style>