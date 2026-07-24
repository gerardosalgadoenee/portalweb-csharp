class MenuSuperior extends HTMLElement {
    connectedCallback() {
        // Enlace para cargar los iconos de Font Awesome de forma automática
        if (!document.getElementById('font-awesome-cdn')) {
            const fontAwesome = document.createElement('link');
            fontAwesome.id = 'font-awesome-cdn';
            fontAwesome.rel = 'stylesheet';
            fontAwesome.href = 'https://cloudflare.com';
            document.head.appendChild(fontAwesome);
        }

        // Obtener el nombre del archivo actual para marcar la pestaña activa
        const paginaActual = window.location.pathname.split("/").pop() || "index.html";

        this.innerHTML = `
            <nav class="navbar">
                <div class="logo">
                    <img src="img/logo.png" alt="Logo C#" class="logo-csharp" height="64px" widht="64px">
                    <span>Lenguajes de Programación</span>
                </div>
                <ul class="nav-links">
                    <li><a href="index.html" class="${paginaActual === 'index.html' ? 'active' : ''}">Inicio</a></li>
                    <li><a href="introduccion.html" class="${paginaActual === 'introduccion.html' ? 'active' : ''}">Introducción</a></li>
                    <li><a href="instalacion.html" class="${paginaActual === 'instalacion.html' ? 'active' : ''}">Instalación</a></li>
                    <li><a href="ides.html" class="${paginaActual === 'ides.html' ? 'active' : ''}">IDEs</a></li>
                    <li><a href="pruebas.html" class="${paginaActual === 'pruebas.html' ? 'active' : ''}">Pruebas</a></li>
                    <li><a href="benchmark.html" class="${paginaActual === 'benchmark.html' ? 'active' : ''}">Benchmark</a></li>
                    <li><a href="calculadora.html" class="${paginaActual === 'calculadora.html' ? 'active' : ''}">Calculadora</a></li>
                </ul>
            </nav>
            <style>
                @import url('https://googleapis.com');

                .navbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background-color: #222233; /* Color oscuro profundo estilo editor de código */
                    padding: 0px 40px;
                    height: 65px;
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
                    border-bottom: 2px solid #5c2d91; /* El color púrpura clásico de C# */
                }
                .logo {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    color: #ffffff;
                    font-weight: 600;
                    font-size: 1.25rem;
                    letter-spacing: 0.5px;
                }
                .icon-csharp {
                    color: #5c2d91; /* Púrpura corporativo de C# */
                    font-size: 1.5rem;
                    background: #ffffff;
                    padding: 6px 8px;
                    border-radius: 6px;
                }
                .nav-links {
                    list-style: none;
                    display: flex;
                    gap: 8px;
                    margin: 0;
                    padding: 0;
                    height: 100%;
                    align-items: center;
                }
                .nav-links a {
                    color: #a0aec0;
                    text-decoration: none;
                    font-size: 0.95rem;
                    font-weight: 400;
                    padding: 8px 16px;
                    border-radius: 4px;
                    transition: all 0.25s ease;
                }
                /* Efecto al pasar el cursor */
                .nav-links a:hover {
                    color: #ffffff;
                    background-color: rgba(92, 45, 145, 0.15);
                }
                /* Estilo dinámico para identificar la página abierta actualmente */
                .nav-links a.active {
                    color: #ffffff;
                    background-color: #5c2d91;
                    font-weight: 600;
                }
            </style>
        `;
    }
}

customElements.define('menu-superior', MenuSuperior);