<script setup lang="ts">
  // Aquí irá la lógica de tu página de soporte IT más adelante
  import NavBar from '../components/NavBar.vue'
  import Header from '../components/Header.vue'
  import Footer from '../components/Footer.vue'
</script>

<template>
    <div class="it-support-container">
        <Header/>
        <NavBar/>
        <main class="main">
            <p>
                Tengo experiencia en mesa de ayuda para configurar redes IP, modem satelitales, equipos
                complementarios de WAN, LAN, VLAN e IP, orientación al cliente para solventar el problema
                de configuración e instalación en más de 130 instalaciones en 8 proyectos ubicados en 5 
                paises de LATAM con una eficiencia del 98% de exito en las tareas y satisfacción en cada uno
                de los clientes beneficiados en un 98% y reducción de tiempo de entrega en 25%.
            </p>
        </main>
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
</style>