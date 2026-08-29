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
  padding: 1.5rem;
  margin: 45px;
  border-radius: 8px;
  
}

.navbar ul{
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
  gap: 20rem;
  
}

.navbar ul li a {
  color: rgb(43, 42, 42);
  font-size: 1.2rem;
  background-color: #BBDDFF;
  text-decoration: none;
  padding: 10px;
  border-radius: 8px;
  border: 3px solid #130469;
}

.navbar ul li a:hover{
  color: #03AD12;
  background-color: #130469;
  border: 3px solid #04d1c4;
}

</style >
