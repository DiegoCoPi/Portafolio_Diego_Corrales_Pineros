<script setup lang="ts">
  // Aquí irá la lógica de tu barra de navegación más adelante
  //import routes from 'vue-router'
</script>

<template>
  <nav class="navbar">
    <ul>
      <li><router-link to="/">Inicio</router-link></li>
      <li><router-link to="/it-support">Soporte It</router-link></li>
      <li><router-link to="/fullstack">FullStack</router-link></li>
      <li><router-link to="/">Mecatrónico</router-link></li>
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
</style>
