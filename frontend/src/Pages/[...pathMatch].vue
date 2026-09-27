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
        <!--Imagenes y mensaje del error 404-->
        <img src="../assets/various/Robot-Huge.jpg" class="img" alt="Robot 1"/>
        <div class="content">
            <div class="text-content">
                <h1>¡ERROR 404!</h1>
                <br/>
                <h2>Lo siento, no hay ingenieria aqui</h2>
                <h2>Será redirigido a la pagina de inicio en {{time}} segundos</h2>
            </div>
        </div>

    </div>
</template>

<style scoped>

    .screen{
        background-color: rgb(3, 3, 246);
        width: 100vw;
        min-height: 47.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        padding:20px;
        gap:40px
    }

    .content{
        display: flex;
        align-items: center;
        gap:40px;
        max-width: 900px;
    }

    .img{
        width: 200px;
        height: 200px;
        border-radius: 20px;
    }

    .text-content{
        color:greenyellow;
    }

</style>