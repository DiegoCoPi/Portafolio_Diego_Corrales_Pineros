<script setup lang="ts">
// Aquí irá la lógica de tu barra de navegación más adelante
</script>

<template>
  <nav class="navbar">
    <ul>
      <li><a href="#">Inicio</a></li>
      <li><a href="#">Soporte It</a></li>
      <li><a href="#">FullStack</a></li>
      <li><a href="#">Mecatrónico</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.navbar {
  /* Estilos básicos de prueba */
  background-color: #03AD12;
  padding: 1rem;
}
.navbar ul {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
  
}
.navbar a {
  color: white;
  text-decoration: none;

}
</style>