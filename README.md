# Mi página sencilla

Un cambio

Proyecto de página web estática creado con HTML, CSS y JavaScript. Presenta una pantalla de bienvenida con un diseño adaptable, un control para cambiar el tema y un reloj analógico que muestra la hora local.

## Características

- Interfaz en español con una tarjeta de bienvenida.
- Diseño adaptable a distintos tamaños de pantalla.
- Alternancia entre tema claro y oscuro mediante un botón accesible.
- Reloj analógico que actualiza sus manecillas cada segundo.
- Estilos que reducen las transiciones cuando el sistema tiene activada la preferencia de movimiento reducido.
- Sin frameworks, dependencias ni proceso de compilación.

## Tecnologías

- HTML5 para la estructura y el contenido.
- CSS3 para el diseño, los temas y la adaptación visual.
- JavaScript estándar para el cambio de tema y la actualización del reloj.

## Estructura del proyecto

```text
mi-web/
├── index.html
├── script.js
├── style.css
├── tests/
│   └── site.test.js
└── README.md
```

- `index.html`: estructura de la página y enlaces a los archivos de estilos y comportamiento.
- `style.css`: presentación, diseño adaptable y variantes de tema.
- `script.js`: interacción del botón de tema y actualización del reloj.

## Uso

Abre `index.html` directamente en un navegador web. No es necesario instalar dependencias ni compilar el proyecto.

Para personalizar la página, modifica el contenido en `index.html`, los estilos en `style.css` y el comportamiento en `script.js`.

## Pruebas

Ejecuta la suite localmente con Node.js 20 o superior:

```sh
node --test
```

GitHub Actions ejecuta estas pruebas al hacer `push`, abrir o actualizar un pull request, y también permite iniciarlas manualmente.
