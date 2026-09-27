<script setup lang="ts">
    import { ref, computed } from 'vue'
    import NavBar from '../components/NavBar.vue'
    import Header from '../components/Header.vue'
    import Footer from '../components/Footer.vue'
    import { LogosITSupport } from '../components/Logos/ITSupport'

    // Constantes iniciales con nombres sincronizados
    const itemsPerPage = 4
    const current_index = ref(0)

    // Visibilidad de imagenes de 4 en 4 de forma segura
    const visibleLogos = computed(() => {
        const total = LogosITSupport.length
        const result = []

        for (let i = 0; i < itemsPerPage; i++) {
            const index = (current_index.value + i) % total
            const item = LogosITSupport[index]
            if (item) {
                result.push(item)
            }
        }

        return result
    })

    const prevLogo = () => {
        current_index.value = (current_index.value - 1 + LogosITSupport.length) % LogosITSupport.length
    }

    const nextLogo = () => {
        current_index.value = (current_index.value + 1) % LogosITSupport.length
    }
</script>

<template>
    <div class="it-support-container">
        <Header/>
        <NavBar/>
        <main class="main">
            <div class="ItSupport-introduce">
                <div>
                    <h2 class="title-it">Especialista de soporte IT</h2>
                    <p>
                        Tengo experiencia en mesa de ayuda para configurar redes IP, modem satelitales, equipos
                        complementarios de WAN, LAN, VLAN e IP, orientación al cliente para solventar el problema
                        de configuración e instalación en más de 130 instalaciones en 8 proyectos ubicados en 5 
                        paises de LATAM con una eficiencia del 98% de exito en las tareas y satisfacción en cada uno
                        de los clientes beneficiados en un 98% y reducción de tiempo de entrega en 25%.
                    </p>
                </div>
                <div>
                    <!-- Enlace público correcto para descarga -->
                    <a href="/documents/DiegoAlexanderCorralesPiñerosDesarrolladorJunior.pdf" 
                       download="Diego_Alexander_Corrales_Pineros_Desarrollador_Junior.pdf" 
                       class="btn-download">
                        <img src="../assets/Pictures-for-screen/Adobe_PDF.png" alt="PDF Icon"/>
                        Diego Alexander Corrales Piñeros Especialista IT
                    </a>
                </div>
            </div>
        </main>
        <div class="logos-container">
         <!-- Efecto e imagen de flecha a la izquierda -->
            <div>
                <button @click="prevLogo" class="btn-arrows">
                    <img src="../assets/various/Flecha-izquierda.png" alt="Flecha Izquierda" class="arrows"/>
                </button>
            </div>
            <!-- Imagenes de los Logos -->
            <div class="logos-grid">
                <div v-for="Logo in visibleLogos" :key="Logo.id" class="Logo-card">
                    <img :src="Logo.img" :alt="Logo.alt"/>
                    <p>{{Logo.name}}</p>
                </div>
            </div>
            <!-- Efecto e imagen de flecha a la derecha -->
            <div>
                <button @click="nextLogo" class="btn-arrows">
                    <img src="../assets/various/Flecha-derecha.png" alt="Flecha Derecha" class="arrows"/>
                </button>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<style scoped>
.it-support-container {
    background-image: 
    linear-gradient(rgba(4, 21, 71, 0.6), rgba(4, 21, 71, 0.6)),
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

.ItSupport-introduce {
    display: flex;
    flex-direction: row;
    gap: 30px;
    padding: 20px;
}

.ItSupport-introduce .title-it {
    text-align: left;
    color: rgb(6, 235, 67);
    font-size: 4rem;
}

.ItSupport-introduce p {
    color: #8C8C8C;
    font-size: 2.3rem;
}

.ItSupport-introduce a {
    color: rgb(6, 235, 67);
    text-decoration: none;
    margin: 1px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.ItSupport-introduce a img {
    width: 100px;
    height: 100px;
}

.logos-container {
    color: silver;
    background-color: rgba(4, 142, 228, 0.577);
    display: flex;
    flex-direction: row;
    margin-top: 5px;
    margin-left: 50px;
    margin-right: 50px;
    padding: 20px;
    text-align: center;
    justify-content: center;
    align-items: center;
}

.btn-arrows {
    background-color: transparent;
    border: none;
    cursor: pointer;
}

.arrows {
    width: 60px;
    height: 60px;
    margin-top: 20px;
}

.logos-grid {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
}

.logos-grid img {
    width: 95px;
    height: 80px;
}

/* ==========================================
   RESPONSIVE DESIGN PARA CELULARES Y TABLETS
   ========================================== */
@media (max-width: 768px) {
    .ItSupport-introduce {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 20px;
        padding: 10px;
    }

    .ItSupport-introduce .title-it {
        font-size: 2.2rem;
        text-align: center;
    }

    .ItSupport-introduce p {
        font-size: 1.4rem;
        text-align: justify;
    }

    .ItSupport-introduce a {
        flex-direction: column;
        text-align: center;
    }

    .logos-container {
        margin-left: 10px;
        margin-right: 10px;
        padding: 10px;
        gap: 5px;
    }

    .logos-grid {
        gap: 10px;
    }

    .logos-grid img {
        width: 50px;
        height: 45px;
    }

    .arrows {
        width: 35px;
        height: 35px;
    }
}
</style>