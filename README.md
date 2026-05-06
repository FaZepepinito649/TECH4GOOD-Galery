# 🌟 Tech4Good — Galería Digital de Proyectos

**Campus San Luis Potosí · PrepaTec**

Galería digital de todos los proyectos presentados en Tech4Good SLP 2026.

---

## 🗂️ Estructura del proyecto

```
tech4good/
├── index.html          ← Página principal
├── netlify.toml        ← Configuración de Netlify
├── css/
│   └── style.css       ← Estilos
├── js/
│   ├── data.js         ← ✏️ EDITAR AQUÍ: datos de proyectos
│   └── main.js         ← Lógica de la galería
└── assets/
    └── (imágenes de proyectos)
```

---

## ✏️ Cómo agregar imágenes a un proyecto

1. Agrega las imágenes en la carpeta `assets/` (ej: `assets/ecocloset-1.jpg`)
2. Abre `js/data.js`
3. Encuentra el proyecto por su `id`
4. Agrega las rutas al arreglo `images`:

```js
{
  id: "ecocloset",
  name: "EcoCloset",
  ...
  images: [
    "assets/ecocloset-1.jpg",
    "assets/ecocloset-2.jpg"
  ],
}
```

---

## 🌐 Cómo agregar la URL de una página web

1. Abre `js/data.js`
2. Encuentra el proyecto
3. Cambia `type` a `"web"` y agrega la URL real:

```js
{
  id: "reciclaslp",
  name: "Recicla SLP",
  type: "web",
  webUrl: "https://tu-url-real.netlify.app",
  ...
}
```

---

## 🚀 Deploy en Netlify

### Opción 1 — Netlify Drop (sin GitHub)
1. Ve a [netlify.com/drop](https://app.netlify.com/drop)
2. Arrastra toda la carpeta `tech4good/`
3. ¡Listo!

### Opción 2 — GitHub + Netlify (recomendado)
1. Sube el repositorio a GitHub
2. Ve a [netlify.com](https://netlify.com) → **Add new site** → **Import from GitHub**
3. Selecciona el repo
4. Build command: *(vacío)*
5. Publish directory: `.`
6. Click **Deploy site**

Cada `git push` al repo actualizará el sitio automáticamente.

---

## 📦 Categorías y colores

| Categoría | Color accent |
|-----------|-------------|
| Comunidad | `#e07b6f` coral |
| Educación | `#6bbf95` verde menta |
| Medio Ambiente | `#8aad5c` sage |
| Salud | `#7ab8c4` azul agua |
| Inclusión | `#b896d4` lavanda |
| Bloopers | `#d4944a` ámbar |

---

## 🖼️ Proyectos tipo "Página Web" (iframe modal)

Los proyectos con `type: "web"` muestran un botón **"Ver sitio web"** que abre un modal con el sitio embebido en un iframe. Si el sitio bloquea iframes (X-Frame-Options), se muestra automáticamente un botón "Abrir en nueva pestaña".

Proyectos web actuales:
- **Recicla SLP** — actualiza `webUrl` con la URL real
- **Medi Alert** — actualiza `webUrl` con la URL real

---

*Tech4Good · PrepaTec Campus San Luis Potosí · 2026*
