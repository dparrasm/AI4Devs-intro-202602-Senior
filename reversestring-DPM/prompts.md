# Prompts

Chatbot usado: ChatGPT

## Prompt 1

Objetivo

Crear una página web con lógica en JavaScript que invierta el orden de una cadena de texto.

Ejemplo: si el usuario introduce AI4Devs debe devolver sveD4IA.

Restricciones y entrega

UI/UX (index.html)

Interfaz clara, minimalista y “entretenida” aunque sea simple:

Un título y una breve descripción.

Un input para introducir texto.

Un botón para invertir (y soporte de Enter).

Una zona de resultado visualmente agradable (tarjeta o panel).

Microcopy simpático (sin exagerar) y estados: vacío / con resultado / error suave.

CSS dentro de index.html (en un <style>), sin frameworks externos.

Accesibilidad básica:

label asociado al input.

aria-live para el resultado.

Buen contraste y focus visible.

Lógica (script.js)

Toda la lógica en script.js, sin librerías.

Separa en funciones pequeñas (mínimo estas):

reverseString(text) → devuelve el texto invertido.

readInput() → obtiene valor del input.

renderResult(reversedText) → pinta el resultado.

renderEmptyState() / renderError(message) → estados.

bindEvents() → registra listeners (click y Enter).

init() → arranque.

Validación:

Si el input está vacío o es solo espacios, no inviertas: muestra estado “vacío” amigable.

Bonus (si cabe sin complicar):

Contador de caracteres.

Botón “copiar resultado” (opcional, pero solo si queda simple y pulido).

Criterios de aceptación

Con AI4Devs devuelve sveD4IA.

No rompe con espacios, mayúsculas, números o símbolos.

La UI se ve bien en desktop y móvil (responsive simple).

Código legible, funciones claras, sin lógica inline innecesaria.
