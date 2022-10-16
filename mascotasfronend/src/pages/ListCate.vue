<template>
    <div>
        <lista-mascotas/>
    </div>
</template>

<script>
  import ListaMascotas from '../components/ListaMascotas.vue'

  export default {
    name: 'app',
    components: {
      ListaMascotas,
    },
  }
</script>