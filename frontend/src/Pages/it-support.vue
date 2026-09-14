<script setup lang="ts">
  // Aquí irá la lógica de tu página de soporte IT más adelante
  import { ref, computed } from 'vue'
  import NavBar from '../components/NavBar.vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  import {LogosITSupport} from '../components/Logos/ITSupport'
  //Implementación de efecto deslizamiento de Logos

  const itemsLogos = 4
  const CurrentIndex = ref(0)

    //Mostrar 4 logos
    const visibleLogos = computed(() => {
    const total = LogosITSupport.length 
    const result = [] 

    for (let i = 0; i < itemsLogos; i++) {
        const calIndex = (CurrentIndex.value + i) % total
        result.push(LogosITSupport[calIndex])
    }

    return result
})


    const prevLogo = ()=>{
        CurrentIndex.value = (CurrentIndex.value -1 + LogosITSupport.length ) % LogosITSupport.length
    }

    const nextLogo = ()=>{
        CurrentIndex.value = (CurrentIndex.value + 1) % LogosITSupport.length
    }


</script>

<template>
    <div class="it-support-container">
        <Header/>
        <NavBar/>
        <main class="main">
            <div class="ItSupport-introduce">
                <div>
                    <h2 class="title-it">Especilaista de soporte IT</h2>
                    <p>
                        Tengo experiencia en mesa de ayuda para configurar redes IP, modem satelitales, equipos
                        complementarios de WAN, LAN, VLAN e IP, orientación al cliente para solventar el problema
                        de configuración e instalación en más de 130 instalaciones en 8 proyectos ubicados en 5 
                        paises de LATAM con una eficiencia del 98% de exito en las tareas y satisfacción en cada uno
                        de los clientes beneficiados en un 98% y reducción de tiempo de entrega en 25%.
                    </p>
                </div>
                <div>
                    <!--Insertar archivo descargable -->
                    <a href="../../public/documents/DiegoAlexanderCorralesPiñerosDesarrolladorJunior.pdf" 
                    download="Diego_Alexander_Corrales_Pineros_Desarrollador_Junior.pdf" class="btn-download">
                        <img src="../assets/Pictures-for-screen/Adobe_PDF.png" alt="PDF Icon"/>
                        Diego Alexander Corrales Piñeros Desarrollador FullStack
                    </a>
                </div>
            </div>
        </main>
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

    .it-support-container {
        background-image: 
        linear-gradient(#04154799),
        url('../assets/Pictures-for-screen/Circuitos-3.jpg');
        background-size: cover;          
        background-position: center;   
        background-repeat: no-repeat;    
        min-height: 100vh;               
        width: 100%;                     
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .ItSupport-introduce{
        display: flex;
        gap:30px;
    }

    .ItSupport-introduce .title-it{
        text-align: left;
        color:rgb(6, 235, 67);
        font-size: 4rem;
    }

    .ItSupport-introduce p{
        color: #8C8C8C;
        font-size: 2.3rem;
    }

    .ItSupport-introduce a{
        color: rgb(6, 235, 67);
        text-decoration: none;
        margin: 1px
    }

    .ItSupport-introduce a img{
        width: 100px;
        height: 100px;
        display: flex;
        gap:5px;
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

    .btn-arrows {
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    .arrows {
        width: 60px;
        height: 60px;
        flex-direction: row;
        margin-top: 20px;
    }

    .logos-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: flex-start;
    }
    
    .logos-grid img {
        display: flex;
        flex-direction: column;
        width: 95px;
        height: 80px;
    }

</style>