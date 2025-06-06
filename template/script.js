// --- SECCIÓN DE JAVASCRIPT ---

// 1. OBTENER REFERENCIAS A LOS ELEMENTOS DEL DOM
// Obtenemos el campo de entrada, el párrafo de resultado y el botón.
const textInput = document.getElementById('text-input');
const resultOutput = document.getElementById('result');
const submitButton = document.getElementById('submitButton');

// 2. AÑADIR EVENT LISTENER PARA LA ENTRADA EN TIEMPO REAL
// Escuchamos el evento 'input', que se dispara cada vez que el usuario escribe o borra algo.
textInput.addEventListener('input', () => {
    // Obtenemos el valor actual del campo de entrada.
    const originalString = textInput.value;

    // 3. LÓGICA PARA INVERTIR LA CADENA
    // - .split('') convierte la cadena en un array de caracteres.
    // - .reverse() invierte el orden de los elementos en el array.
    // - .join('') une los caracteres de nuevo en una cadena.
    const reversedString = originalString.split('').reverse().join('');

    // 4. MOSTRAR EL RESULTADO
    // Actualizamos el contenido del párrafo de resultado.
    // Si la cadena invertida está vacía, mostramos los puntos suspensivos.
    resultOutput.textContent = reversedString || '...';
    
    // Si no hay texto, ajustamos el color para que se vea como un placeholder.
    if (!reversedString) {
        resultOutput.classList.add('text-gray-500', 'dark:text-gray-400');
    } else {
        resultOutput.classList.remove('text-gray-500', 'dark:text-gray-400');
    }

    // 5. LÓGICA PARA MOSTRAR/OCULTAR EL BOTÓN
    // Verificamos si la longitud del texto original es mayor que 3.
    if (originalString.length > 3) {
        // Si es mayor, mostramos el botón y aplicamos estilos para la animación.
        submitButton.style.display = 'block';
        // Usamos un pequeño retraso para que la transición CSS se aplique correctamente.
        setTimeout(() => {
            submitButton.style.opacity = '1';
            submitButton.style.transform = 'scale(1)';
        }, 10);
    } else {
        // Si es menor o igual a 3, ocultamos el botón con una animación.
        submitButton.style.opacity = '0';
        submitButton.style.transform = 'scale(0.95)';
        // Esperamos a que termine la transición antes de ocultarlo con display: none.
        setTimeout(() => {
            submitButton.style.display = 'none';
        }, 300); // 300ms, igual que la duración de la transición en el CSS.
    }
});