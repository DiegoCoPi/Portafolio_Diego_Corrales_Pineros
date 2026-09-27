<script setup lang="ts">
import Navbar from '../components/NavBar.vue'
import Footer from '../components/Footer.vue'
import "../assets/main.css"
</script>

<template>
  <div class="portafolio-container">
    <div class="content-wrap">
      <header class="header">
        <h1>El espacio web del ingeniero mecatrónico</h1>
      </header>
      <Navbar />
      <main>
        <div class="main">  
          <div class="profile-image">
            <img src="../assets/Pictures-for-screen/Diego-Corrales-1-1.png" alt="Foto de perfil" />
          </div>
          <div class="text-container">
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

<style scoped>
/* Estilos base para pantallas de PC */
.portafolio-container {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
}

.header h1 {
  text-align: center;
  font-size: 3.5rem;
  margin: 20px 0;
  color: rgb(6, 235, 67);
}

.main {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 40px;
  padding: 40px;
}

.profile-image img {
  width: 300px;
  height: 300px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid rgb(6, 235, 67);
}

.text-container {
  max-width: 700px;
}

.paragraph {
  font-size: 1.8rem;
  color: #8C8C8C;
  text-align: justify;
  line-height: 1.6;
}

/* ==========================================
   RESPONSIVE DESIGN PARA CELULARES Y TABLETS
   ========================================== */
@media (max-width: 768px) {
  .header h1 {
    font-size: 2rem;
    padding: 0 15px;
    text-align: center;
  }

  .main {
    flex-direction: column; /* Apila la foto y el texto verticalmente */
    padding: 20px;
    gap: 20px;
    text-align: center;
  }

  .profile-image img {
    width: 200px;
    height: 200px; /* Reduce la foto de perfil para que no domine toda la pantalla móvil */
  }

  .paragraph {
    font-size: 1.3rem; /* Texto cómodo para lectura en celular */
    text-align: justify;
    padding: 0 10px;
  }
}
</style>