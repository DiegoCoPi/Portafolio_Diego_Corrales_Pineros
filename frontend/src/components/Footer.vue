<template>
    <footer>
        <div class="footer">
            <div class="social-media">
                <!-- Redes Sociales -->
                <div>
                    <a href="https://www.linkedin.com/in/diego-alexander-corrales-pineros" target="Diego_Corrales_Pineros">
                        <img src="../assets/social-media/Linkedin.png"  alt="Linkedin"/>
                        Diego Alexander Corrales Piñeros
                    </a>
                </div>
                <div>
                    <a href="https://bit.ly/diego_alexander_corrales_pineros" target="Diego Corrales Pineros">
                        <img src="../assets/social-media/Whatsapp.png" alt="Whatsapp"/>
                        +57 3505971435
                    </a>
                </div>
                <div>
                    <a href="https://github.com/DiegoCoPi" target="GitHub Diego Corrales Pineros">
                        <img src="../assets/social-media/github.png" alt="GitHub"/>
                        DiegoCoPi
                    </a>
                </div>
            </div>
            <!--CopyRight-->
            <div class="copyright">
                <p>&copy; 2026 Diego Alexander Corrales Piñeros. Todos los derechos reservados.</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
    .footer {
        background-color: #03AD12;
        color: white;
        padding: 1.5rem 2rem;
        margin-top: 2rem;
        display: flex;
        justify-content: space-between; 
        align-items: center;            
        flex-wrap: wrap;                 
        gap: 1.5rem;
    }

    .footer .social-media {
        display: flex;
        align-items: center;
        gap: 2rem; 
        flex-wrap: wrap;
    }

    .footer .copyright {
        font-size: 0.9rem;
    }


    .footer .social-media img {
        width: 35px; 
        height: 35px;
        object-fit: contain;
        transition: transform 0.2s ease;
    }

    .footer .social-media a {
        display: flex;
        align-items: center;
        gap: 0.5rem; 
        color: white;
        text-decoration: none;
    }

    .footer .social-media img:hover {
        transform: scale(1.1);
    }
</style>