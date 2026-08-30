<script setup lang="ts">
import Navbar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import "../assets/main.css"
</script>

<template>
  <div class="portafolio-container">
    <div>
      <header class="header">
        <h1>El espacio web del ingeniero mecatrónico</h1>
      </header>
      <Navbar />
      <main>
        <div class="main">  
          <div class="profile-image">
            <img src="../assets/Pictures-for-screen/Diego-Corrales-1-1.png" alt="Foto de perfil" />
          </div>
          <div>
            <p class="paragraph">
              Bienvenido a mi sitio web, me presento: soy Diego Alexander Corrales Piñeros, ingeniero 
              mecatrónico apasionado por la tecnología, la innovación y la creación de soluciones 
              integrales. Cuento con experiencia en el diseño e implementación de páginas web, administración 
              de redes WAN, LAN, VLAN e IP, gestión de bases de datos, así como en el desarrollo y análisis 
              de circuitos eléctricos y electrónicos. Te invito a explorar este portal, donde encontrarás 
              proyectos, conocimientos y soluciones que integran la ingeniería, la creatividad y la tecnología 
              para transformar ideas en experiencias funcionales e innovadoras. 
            </p>
          </div>
        </div>
      </main>
    </div>
    <div>
      <Footer />
    </div>
  </div>
</template>