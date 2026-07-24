document.addEventListener("DOMContentLoaded", () => {
    // Selecciona todas las tarjetas de la página de forma dinámica
    const cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", () => {
            // Genera un efecto de parpadeo suave al hacer clic
            card.style.backgroundColor = "#f0e6f2"; 
            
            setTimeout(() => {
                card.style.backgroundColor = "#ffffff";
            }, 300);
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    // --- LÓGICA ANTERIOR DE LAS TARJETAS (Mantenla aquí) ---
    const cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", () => {
            card.style.backgroundColor = "#f0e6f2"; 
            setTimeout(() => { card.style.backgroundColor = "#ffffff"; }, 300);
        });
    });

    // --- NUEVA LÓGICA DE INYECCIÓN DEL PIE DE PÁGINA ---
    // Selecciona la etiqueta footer de cualquier página
    const footer = document.querySelector("footer");
    
    if (footer) {
        // Obtiene el año actual de forma automática
        const currentYear = new Date().getFullYear();
        
        // Define el contenido único del pie de página
        footer.innerHTML = `<p>&copy; ${currentYear} - C# Developer Hub. Diseñado para desarrolladores .NET. Clickea las secciones para interactuar.</p>`;
    }
});
