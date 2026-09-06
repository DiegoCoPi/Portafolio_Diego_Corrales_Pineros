<script setup lang="ts">
  import { ref, computed } from 'vue'
  import NavBar from '../components/NavBar.vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import { LogosMecatronic } from '../components/Logos/Logos-Mechatronic'

  //Operación para aparecer las cards de 4 en pantalla
  // Cinstantes Iniciales
  const itemsLogos = 4
  const CurrentIndex= ref(0)

  //Visibilidad de imagenes

  const visibleLogos = computed(()=>{

    const total = LogosMecatronic.length
    const result = [] 

    // Recorrido de imagenes de 4 en 4
    for(let i=0; i<itemsLogos; i++){
        const index = (CurrentIndex.value +i)%total;
        result.push(LogosMecatronic[index])

    }
    return result
  })

  // Efecto de deslizamiento previo
  const prevLogo = () =>{
    CurrentIndex.value = (CurrentIndex.value -1 + LogosMecatronic.length)%LogosMecatronic.length
  }

  // Efecto de deslizamiento siguiente
  const nextLogo = () =>{
    CurrentIndex.value = (CurrentIndex.value +1)%LogosMecatronic.length
  }
 
</script>

<template>
    <div class="mecatronic-container">
        <Header/>
        <NavBar/>
        <main class="main">
            <div class="mecatronic-introduce">
                <div>
                    <h2 class="title-mecatronic">Ingeniero Mecatrónico</h2>
                    <p>
                        Participé en un proyecto en donde tuve la oportunidad de diseñar y esamblar 
                        piezas mecánicas para maquinaria de fabricación de cubrebocas quirurgícos con 
                        programas de dibujo tecnico 3D, planos 2D, circuitos eléctricos y calculos de 
                        motor con una eficiencia energética de 95%, producción del 100% propuesto y 
                        entrega del proyecyo en un 7% más temprano de lo esperado.
                    </p>
                </div>
                <div>
                    <!-- Enlace público recomendado para archivos estáticos de descargas -->
                    <a href="/documents/DiegoAlexanderCorralesPiñerosDesarrolladorJunior.pdf" 
                       download="Diego_Alexander_Corrales_Pineros_Desarrollador_Junior.pdf" 
                       class="btn-download">
                        <img src="../assets/Pictures-for-screen/Adobe_PDF.png" alt="PDF Icon"/>
                        Diego Alexander Corrales Piñeros Ingeniero Mecatrónico
                    </a>
                </div>
            </div>
        </main>
        <!-- Tarjetas de logos -->
        <div class="logos-container">
            <!-- Efecto e imagen de flecha a la izquierda -->
                     <div>
                        <button @click="prevLogo" class="btn-arrows">
                            <img src="../assets/various/Flecha-izquierda.png" alt="Flecha Izquierda" class="arrows"/>
                        </button>
                     </div>
                     <!-- Imagenes de los Logos -->
                     <div class="logos-grid">
                        <div v-for="Logo in visibleLogos" :key="Logo.id" class="Logo-card">
                            <img :src="Logo.img" :alt="Logo.alt"/>
                            <p>{{Logo.name}}</p>
                        </div>
                     </div>
                     <!-- Efecto e imagen de flecha a la derecha -->
                     <div>
                        <button @click="nextLogo" class="btn-arrows">
                            <img src="../assets/various/Flecha-derecha.png" alt="Flecha Derecha" class="arrows"/>
                        </button>
                     </div>
                </div>
        <Footer/>
    </div>
</template>

<style scoped>

.mecatronic-container {
    /* Para el degradado de color plano sobre la imagen */
    background-image: 
      linear-gradient(rgba(4, 21, 71, 0.6), rgba(4, 21, 71, 0.6)),
      url('../assets/Pictures-for-screen/Robotica-1.jpg');
    background-size: cover;          
    background-position: center;   
    background-repeat: no-repeat;    
    min-height: 100vh;               
    width: 100%;                     
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.mecatronic-introduce {
    display: flex;
    flex-direction: row;
    gap: 30px;
}

.mecatronic-introduce .title-mecatronic {
    text-align: left;
    color: rgb(6, 235, 67);
    font-size: 4rem;
}

.mecatronic-introduce p {
    color: #8C8C8C;
    font-size: 2.3rem;
}

.mecatronic-introduce a {
    color: rgb(6, 235, 67);
    text-decoration: none;
    margin: 1px;
}

.mecatronic-introduce a img {
    width: 100px;
    height: 100px;
}
.logos-container {
    color:silver;
    background-color: rgba(4, 142, 228, 0.577);
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    margin-left: 50px;
    margin-right: 50px;
    padding: 20px;
    text-align: center;
    justify-content: center;
}

.logos-grid{
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: flex-start;
}

.logos-grid img{
    height: 80px;
    width: 80px;
    flex-direction: row;
}

.btn-arrows {
    background-color: transparent;
    border: none;
    cursor: pointer;

}
.arrows{
    width: 60px;
    height: 60px;
    flex-direction: row;
    margin-top: 20px;;
}
    
</style>