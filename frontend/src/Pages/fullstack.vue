<script setup lang="ts">
  // Aquí irá la lógica de tu página de soporte IT más adelante
  import NavBar from '../components/NavBar.vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
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
                    <!--Insertar archivo descargable -->
                    <a href="../../public/documents/DiegoAlexanderCorralesPiñerosDesarrolladorJunior.pdf" 
                    download="Diego_Alexander_Corrales_Pineros_Desarrollador_Junior.pdf" class="btn-download">
                        <img src="../assets/Pictures-for-screen/Adobe_PDF.png" alt="PDF Icon"/>
                        Diego Alexander Corrales Piñeros Desarrollador FullStack
                    </a>
                </div>
                <div>
                    <!-- Logos de los progrmas que uso -->
                </div>
            </div>
        </main>
        <Footer/>
    </div>
    
</template>

<style scoped>

    .fullstack-container {
        background-image: 
        linear-gradient(#04154799),
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

    .fullstack-introduce{
        display: flex;
        gap:30px;
    }

    .fullstack-introduce .title-fullstack{
        text-align: left;
        color:rgb(6, 235, 67);
        font-size: 4rem;
    }

    .fullstack-introduce p{
        color: #8C8C8C;
        font-size: 2.3rem;
    }

    .fullstack-introduce a{
        color: rgb(6, 235, 67);
        text-decoration: none;
        margin: 1px
    }

    .fullstack-introduce a img{
        width: 100px;
        height: 100px;
        display: flex;
        gap:5px;
    }

</style>