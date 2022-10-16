<template>
    <header id="header" class="header">
      <div class="container nav justify-content-center">
        <div class="row">
          <div class="four columns">
            <img src="img/logo.jpg" id="logo">
          </div>
          
          <div class="nav nav-pills nav-fill  ">
            <router-link class="nav-link" to="/sobre-nosotros">Sobre Nosotros</router-link>
          </div>
          <div class="one columns nav-item">
            <router-link class="nav-link" to="/gatos-adopcion">Gatos</router-link>
          </div>
          
          <div class="one columns nav-item">
            <router-link class="nav-link" to="/perros-adopcion" >Perros</router-link>
          </div>
          <div class="one columns nav-item">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </div>
                
        </div>
        
      </div>
    </header> 
    <presentacion-inicial/>
    <router-view ></router-view> 
</template>

<script>
  import PresentacionInicial from './components/PresentacionInicial.vue'

  export default {
    name: 'app',
    components: {
      PresentacionInicial,
    },
  }
</script>

<style>
  button {
    background: #009435;
    border: 1px solid #009435;
  }
</style>