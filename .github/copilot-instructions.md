# Instrucciones del proyecto

Este proyecto es una página web estática y sencilla hecha con HTML, CSS y JavaScript. Mantén la solución simple y coherente con esta estructura; no añadas frameworks, dependencias ni herramientas de compilación salvo que la tarea lo requiera.

## Idioma y nombres

- Escribe en inglés los nombres de variables, funciones, clases CSS, identificadores HTML y comentarios del código.
- Documenta las funciones con jsdoc.
- Mantén en español todo el texto visible para las personas, incluidos títulos, etiquetas, botones y mensajes.
- Usa nombres claros y coherentes con los elementos existentes.

## Implementación

- Conserva la separación entre estructura (`index.html`), estilos (`style.css`) y comportamiento (`script.js`); evita JavaScript y CSS en línea.
- Usa HTML semántico y controles nativos. Mantén accesibles los controles interactivos, con etiquetas o nombres comprensibles, estados accesibles y foco visible.
- Haz que los cambios de estilo funcionen en pantallas pequeñas y respeten `prefers-reduced-motion`.
- Si modificas un selector, un identificador o un comportamiento interactivo, actualiza y comprueba también sus referencias relacionadas en los otros archivos.
- Preserva las funciones existentes —como el cambio de tema y el reloj— salvo que la tarea pida cambiarlas.

## Validación

- No hay comandos de build o pruebas automatizadas configurados. Para cambios de interfaz, abre `index.html` en un navegador y comprueba el comportamiento, la consola y la presentación en tamaños de pantalla pequeños y grandes.
- Revisa los cambios para evitar errores de HTML, CSS o JavaScript y no afirmes que se ejecutaron pruebas que no se hayan realizado.
