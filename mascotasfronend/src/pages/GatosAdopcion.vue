<template>
  <div id="lista-cursos" class="container">
      <h1 id="encabezado" class="encabezado">Lista de gatos en adopcion</h1>
      <div v-if="!mascotas.length" class="alert alert-info" role="alert">
          No se han agregado Mascotas
      </div>
      
     <!-- Button trigger modal -->


<!-- Modal -->
  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog" >
          <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Descripción de la mascota </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <h2 class="card-subtitle mb-2 text-muted">Nombre de la mascota</h2>
              <p class="card-text">{{mascotaD.nombre}}</p>
              <h2 class="card-subtitle mb-2 text-muted">Descripcion de la mascota</h2>
              <p class="card-text">{{mascotaD.descripcion}}</p>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
          </div>
      </div>
  </div>

  <!-- Modal -->
  <div class="modal fade" id="staticBackdropA" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog" >
          <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="staticBackdropLabel">Formulario de adopción mascota </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
              <form @submit.prevent="formularioAdopcion">
                  

                  <div class="mb-3">
                      <label for="nombre" class="form-label">Nombre completo</label>
                      <input v-model="mascotaA.nombre" type="text"  class="form-control" id="nombre" aria-describedby="emailHelp">
                  </div>
                  <div class="mb-3">
                      <label for="correo" class="form-label">Correo electrónico</label>
                      <input v-model="mascotaA.correo" type="email" class="form-control" id="correo" aria-describedby="emailHelp">
                      <div id="emailHelp" class="form-text">Nunca compartiremos su correo electrónico con nadie más.</div>
                  </div>
                  <div class="mb-3">
                      <label for="telefono" class="form-label">Telefono</label>
                      <input v-model="mascotaA.telefono" type="number" class="form-control" style="text-decoration: none" id="telefono" aria-describedby="emailHelp">
                  </div>
                  
                  <button type="submit" class="btn btn-primary" @click="limpiar">Enviar</button>
              </form>
          </div>
          <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
          </div>
          </div>
      </div>
  </div>
  
      <!-- /img/p2.a94528cc.jpg
      <img src="../img/g1.jpg" alt=""> -->
      <div class="container"  v-for="mascota in mascotas" :key="mascota.id">
          <div class="row" v-if="mascota.idTipoAnimal == 2" >
              <div class="col align-self-center"  >
                  <div class="card "  >
                      <img :src="mascota.imagen" class="rounded mx-auto d-block">
                      <div class="info-card">
                          <h2 class="card-title">Nombre de la mascota</h2>
                          <h3>{{mascota.nombre}}</h3>
                          <p>Raza: {{mascota.raza}}</p>

                          
                      </div>
                      <div class="card-footer text-muted text-center">
                          <h2 class="precio">$200</h2>
                          <button type="button" class="btn btn-primary" @click="detalleMascota(mascota)" data-bs-toggle="modal" id="modalI" data-bs-target="#staticBackdrop">
                              Detalle
                          </button>
                          <button type="button" class="btn btn-primary" @click="detalleMascota(mascota)"  data-bs-toggle="modal" id="modalI" data-bs-target="#staticBackdropA">
                              Adoptar
                          </button>
                      </div>
                  </div> <!--.card-->
              </div>
          </div> <!--.row-->
      </div>

      
      
  </div>  
</template>

<script>

  export default {
    name: 'lista-mascotas',

      data() {
          return {
              mascotas: [],
              dMascota:[],
              mascotaD:{},
              mascotaA: {
                  id: '',
                  nombre: '',          
                  correo: '',          
                  telefono: '',          
              },
              mascotaCreada:[],
          };
      },
      methods: { 
          async getMascotas() {
          try {
              const respuesta = await fetch("http://localhost:5000/mascotass/1", {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
              },
              }
              
              );
              console.log(respuesta, 'jefer');                
              this.mascotas = await respuesta.json();
          } catch (error) {
              console.log(error);
          }
          },
          limpiar(){
                document.getElementById("nombre").value='';
                document.getElementById("correo").value='';
                document.getElementById("telefono").value='';
            },
          async detalleMascota(mascota) {
              this.mascotaD=mascota;
              let id = mascota.id;
          try {
              const respuesta = await fetch(`http://localhost:5000/mascota/${id}`, {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
              },
              }
              
              );
              console.log(respuesta, 'jeferrrrr');                
              this.dMascota = await respuesta.json();
          } catch (error) {
              console.log(error);
          }
          },
          async formularioAdopcion() {
              console.log(this.mascotaD.id, 'detalle')
              let idd = this.mascotaD.id;
              
              this.mascota ={
                  id: idd,
                  nombre: '',          
                  correo: '',          
                  telefono: '',  
              }
              console.log(this.mascotaA,'dd')
              try {
                  const respuesta = await fetch(`http://localhost:5000/Adopcion/${idd}`, {
                  method: "POST",
                  body: JSON.stringify(this.mascotaA),
                  headers: {
                      "Content-Type": "application/json",
                  },
                  });
                  console.log(respuesta,'InserJefer')
                  this.mascotaCreada = await respuesta.json();

              } catch (error) {
                  console.log(error);
              }
          },
      },
      mounted(){
          this.getMascotas();
      }
  }

</script>


