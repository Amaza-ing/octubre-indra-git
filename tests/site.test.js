const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const test = require("node:test");

const rootPath = path.join(__dirname, "..");
const html = fs.readFileSync(path.join(rootPath, "index.html"), "utf8");
const script = fs.readFileSync(path.join(rootPath, "script.js"), "utf8");

function createPageContext() {
  const classes = new Set();
  const elements = {
    "#theme-toggle": {
      textContent: "Activar modo oscuro",
      addEventListener(eventName, callback) {
        this.clickHandler = callback;
      },
    },
    "#clock-hour": { style: {} },
    "#clock-minute": { style: {} },
    "#clock-second": { style: {} },
  };
  const body = {
    classList: {
      add(className) {
        classes.add(className);
      },
      remove(className) {
        classes.delete(className);
      },
      toggle(className) {
        if (classes.has(className)) {
          classes.delete(className);
          return false;
        }
        classes.add(className);
        return true;
      },
      contains(className) {
        return classes.has(className);
      },
    },
  };
  const context = {
    Date: class {
      getHours() {
        return 3;
      }

      getMinutes() {
        return 4;
      }

      getSeconds() {
        return 5;
      }
    },
    document: {
      body,
      querySelector(selector) {
        return elements[selector];
      },
    },
    requestAnimationFrame(callback) {
      callback();
    },
    setInterval() {},
  };

  vm.runInNewContext(script, context);
  return { body, elements };
}

test("La página declara el idioma español y muestra el saludo", () => {
  assert.match(html, /<html lang="es">/);
  assert.match(html, /<h1>Hola, mundo/);
});

test("Los recursos locales enlazados existen", () => {
  const assetPaths = [...html.matchAll(/(?:href|src)="([^"]+\.(?:css|js))"/g)]
    .map((match) => match[10]);

  assert.deepEqual(assetPaths.sort(), ["script.js", "style.css"]);
  for (const assetPath of assetPaths) {
    assert.equal(fs.existsSync(path.join(rootPath, assetPath)), true);
  }
});

test("El botón alterna el tema y actualiza su etiqueta", () => {
  const { body, elements } = createPageContext();
  const themeToggle = elements["#theme-toggle"];

  themeToggle.clickHandler();
  assert.equal(body.classList.contains("dark"), true);
  assert.equal(themeToggle.textContent, "Activar modo claro");
  assert.equal(body.classList.contains("page-vibrating"), true);

  themeToggle.clickHandler();
  assert.equal(body.classList.contains("dark"), false);
  assert.equal(themeToggle.textContent, "Activar modo oscuro");
});

test("El reloj actualiza las manecillas según la hora", () => {
  const { elements } = createPageContext();

  assert.equal(elements["#clock-hour"].style.transform, "translateX(-50%) rotate(92deg)");
  assert.equal(elements["#clock-minute"].style.transform, "translateX(-50%) rotate(24.5deg)");
  assert.equal(elements["#clock-second"].style.transform, "translateX(-50%) rotate(30deg)");
});
