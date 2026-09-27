<script setup lang="ts">
    import { ref, onMounted, onUnmounted } from 'vue'

    const time = ref(5)
    let timer: number | null = null

    onMounted(() => {
        timer = window.setInterval(() => {
            if (time.value > 0) {
                time.value--
            } else {
                if (timer) clearInterval(timer)
                window.location.href = '/'
            }
        }, 1000)
    })

    onUnmounted(() => {
        if (timer) clearInterval(timer)
    })
</script>

<template>
    <div class="screen">
        <!-- Imágenes y mensaje del error 404 -->
        <img src="../assets/various/Robot-Huge.jpg" class="img" alt="Robot 1"/>
        <div class="content">
            <div class="text-content">
                <h1>¡ERROR 404!</h1>
                <h2>Lo siento, no hay ingeniería aquí</h2>
                <h2>Será redirigido a la página de inicio en {{ time }} segundos</h2>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .screen {
        background-color: rgb(3, 3, 246);
        width: 100%;
        min-height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        gap: 40px;
        box-sizing: border-box;
    }

    .content {
        display: flex;
        align-items: center;
        gap: 40px;
        max-width: 900px;
    }

    .img {
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 20px;
    }

    .text-content {
        color: greenyellow;
    }

    .text-content h1 {
        font-size: 3.5rem;
        margin-bottom: 15px;
    }

    .text-content h2 {
        font-size: 1.8rem;
        margin-bottom: 10px;
        font-weight: normal;
    }

    /* ==========================================
       RESPONSIVE DESIGN PARA CELULARES Y TABLETS
       ========================================== */
    @media (max-width: 768px) {
        .screen {
            flex-direction: column; /* Apila la imagen del robot y el texto verticalmente */
            text-align: center;
            gap: 20px;
            padding: 15px;
        }

        .content {
            flex-direction: column;
            gap: 15px;
        }

        .img {
            width: 160px;
            height: 160px; /* Tamaño adaptado para pantallas pequeñas */
        }

        .text-content h1 {
            font-size: 2.5rem; /* Título 404 más compacto */
        }

        .text-content h2 {
            font-size: 1.2rem; /* Textos legibles y sin desbordes en móviles */
        }
    }
</style>