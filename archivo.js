async function cargarCatalogo() {
    try {
        const response = await fetch('data.json');
        const catalogo = await response.json();
        mostrarCatalogo(catalogo);
    } catch (error) {
        console.error('Error al cargar datos:', error);
    }
}

function mostrarCatalogo(catalogo) {
    const catalogoList = document.getElementById('catalog');
    catalogo.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.type}: ${item.title} (${item.year})`;
        catalogoList.appendChild(listItem);
    });
}

const emailForm = document.getElementById('email-form');
emailForm.addEventListener('submit', async function(event) {
    event.preventDefault();
    const emailInput = document.getElementById('email');
    const email = emailInput.value;

    try {
        const response = await fetch('https://api.example.com/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        });

        if (response.ok) {
            console.log('Correo electrónico enviado correctamente.');
        } else {
            console.error('Error al enviar correo electrónico.');
        }
    } catch (error) {
        console.error('Error al enviar correo electrónico:', error);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    cargarCatalogo();
});