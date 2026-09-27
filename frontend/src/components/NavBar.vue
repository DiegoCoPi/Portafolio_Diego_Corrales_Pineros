<script setup lang="ts">
  // Lógica de la barra de navegación
</script>

<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/home">Inicio</router-link></li>
      <li><router-link to="/it-support">Soporte It</router-link></li>
      <li><router-link to="/fullstack">FullStack</router-link></li>
      <li><router-link to="/mecatronic">Mecatrónico</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  background-color: #03AD12;
  padding: 1.5rem;
  margin: 45px;
  border-radius: 8px;
}

.navbar ul {
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 18rem; 
  padding: 0;
  margin: 0;
}

.navbar ul li a {
  color: rgb(43, 42, 42);
  font-size: 1.2rem;
  background-color: #BBDDFF;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 8px;
  border: 3px solid #130469;
  display: inline-block;
  transition: all 0.2s ease;
}

.navbar ul li a:hover {
  color: #03AD12;
  background-color: #130469;
  border: 3px solid #04d1c4;
  cursor: pointer;
}

/* ==========================================
   RESPONSIVE DESIGN PARA CELULARES Y TABLETS
   ========================================== */
@media (max-width: 1024px) {
  .navbar ul {
    gap: 4rem; /* Reduce el espacio en pantallas medianas o tablets */
  }
}

@media (max-width: 768px) {
  .navbar {
    margin: 15px;
    padding: 1rem;
  }

  .navbar ul {
    flex-direction: column; /* Apila los enlaces uno debajo de otro en móviles */
    gap: 12px; /* Espacio cómodo entre cada botón */
  }

  .navbar ul li {
    width: 100%;
    text-align: center;
  }

  .navbar ul li a {
    display: block;
    width: 100%;
    box-sizing: border-box;
    font-size: 1.1rem;
    padding: 12px;
  }
}
</style>