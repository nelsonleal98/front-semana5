<template>
  <div class="home">
    <home-seccion></home-seccion>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeSeccion from '../components/HomeSeccion.vue'

export default {
  name: 'Home',
  components: {
    HomeSeccion
  }
}
</script>
