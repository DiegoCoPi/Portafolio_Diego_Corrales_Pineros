<script setup lang="ts">
  import NavBar from '../components/NavBar.vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  
  // 1. Quitar la extensión .ts al importar
  //import { logosFullStack } from '../components/Logos-Full-Stack'
</script>

<template>
    <div class="fullstack-container">
        <Header/>
        <NavBar/>
        <main class="main">
            <div class="fullstack-introduce">
                <div>
                    <h2 class="title-fullstack">Desarrollador Fullstack</h2>
                    <p>
                        He realizado mas de 10 asesorias internas a personas naturales y micro empresas 
                        acerca de diseño visual, componenetes, decoradores, paletas de colores, base de 
                        datos relacional y no relacionales (SQL y no SQL), enrutadores, servidores, 
                        controladores y moduladores con lenguajes, framework y librerias mas usadas en la 
                        industria web.
                    </p>
                </div>
                <div>
                    <!-- Enlace público recomendado para archivos estáticos de descargas -->
                    <a href="/documents/DiegoAlexanderCorralesPiñerosDesarrolladorJunior.pdf" 
                       download="Diego_Alexander_Corrales_Pineros_Desarrollador_Junior.pdf" 
                       class="btn-download">
                        <img src="../assets/Pictures-for-screen/Adobe_PDF.png" alt="PDF Icon"/>
                        Diego Alexander Corrales Piñeros Desarrollador FullStack
                    </a>
                </div>
                <div>
                    <!-- Tarjetas de logos -->
                   
                </div>
            </div>
        </main>
        <Footer/>
    </div>
</template>

<style scoped>
    .fullstack-container {
        /* Para el degradado de color plano sobre la imagen */
        background-image: 
          linear-gradient(rgba(4, 21, 71, 0.6), rgba(4, 21, 71, 0.6)),
          url('../assets/Pictures-for-screen/Desarrollador-Web-1.jpg');
        background-size: cover;          
        background-position: center;   
        background-repeat: no-repeat;    
        min-height: 100vh;               
        width: 100%;                     
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .fullstack-introduce {
        display: flex;
        flex-direction: row;
        gap: 30px;
    }

    .fullstack-introduce .title-fullstack {
        text-align: left;
        color: rgb(6, 235, 67);
        font-size: 4rem;
    }

    .fullstack-introduce p {
        color: #8C8C8C;
        font-size: 2.3rem;
    }

    .fullstack-introduce a {
        color: rgb(6, 235, 67);
        text-decoration: none;
        margin: 1px;
    }

    .fullstack-introduce a img {
        width: 100px;
        height: 100px;
    }

    /* Estilos para las tarjetas de logos */
    .logos-grid {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    .card-logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: rgba(255, 255, 255, 0.1);
        padding: 15px;
        border-radius: 8px;
    }

    .card-logo img {
        width: 60px;
        height: 60px;
        object-fit: contain;
    }
</style>