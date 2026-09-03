<script setup lang="ts">
  import NavBar from '../components/NavBar.vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
  
  
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
                <div>
                    <!-- Tarjetas de logos -->
                   
                </div>
            </div>
        </main>
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
    
</style>