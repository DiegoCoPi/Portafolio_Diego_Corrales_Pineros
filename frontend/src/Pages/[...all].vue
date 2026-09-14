<script lang="ts">

    //Código para temporizador

    //Declaración de variables
    const router = useRoute()
    const time = seg(5)
    let timer = null | undefined

    //Función para ejecutar cuanta regresiva
    const stopTimer()=>({
        if (timer) {
            clearInterval(timer)
            timer = null
        }
    })

    const starTimer () => ({
        if(timer) return
        timer = window.setInterval(() => {
            if(time.value > 0){
                time.value--
            }
            else{
                stopTmer()
                router.push('/')
            }
        }, 1000);
    })

    //Arrancar el temporizador


    //Limpiar y reiniciar el temporizador
    onUnmounted(()=>{
        stopTimer()
    })
</script>

<template>
    <div class="general">
        <h1>¡ERROR 404 CONTENIDO NO ENCONTRADO!</h1>
        <h2>Se redireccionara al inciio en {{time}} segundos</h2>
    </div>
</template>

<style scoped>
    .general{
        background-color: darkblue;
        color:chartreuse
    }
</style>