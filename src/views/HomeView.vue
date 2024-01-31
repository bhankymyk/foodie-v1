<template>
  <div class="container">
    <div class="row">
      <div class="col-md">
        <Home/>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Home from '@/components/Home.vue'

export default {
  name: 'HomeView',
  components: {
    Home
  }
}
</script>
