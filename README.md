# 🐝 Red Apicultura Natural Regenerativa

Sitio estático desarrollado en React para dar a conocer la Red de Apicultura Natural Regenerativa (ANR), una organización que promueve prácticas apícolas agroecológicas y regenerativas.

## 🌐 Descripción

Este sitio web presenta información clave sobre la Red ANR, su propósito, actividades y principios. Está diseñado para ser visualmente atractivo, accesible y funcional en todos los dispositivos.

## 🚀 Tecnologías utilizadas

- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)

## 🛠️ Instalación y ejecución local

1. Clona este repositorio:

   ```bash
   git clone https://github.com/pjuarezm-dev/red-anr.git
   cd red-anr
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

El sitio estará disponible en `http://localhost:5173`

## 📦 Despliegue

El proyecto está pensado para ser desplegado en **GitHub Pages**. Para desplegarlo:

1. Asegúrate de tener el paquete `gh-pages`:

   ```bash
   npm install gh-pages --save-dev
   ```

2. Agrega al `package.json`:

   ```json
   "homepage": "https://pjuarezm-dev.github.io/red-anr",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Ejecuta el despliegue:

   ```bash
   npm run deploy
   ```

## 🤝 Contribución

Si deseas colaborar, eres bienvenido/a. Puedes abrir un issue para sugerencias, mejoras o reportes de errores, o enviar un pull request directamente. Por favor sigue las buenas prácticas de desarrollo y asegúrate de probar los cambios antes de enviar.

## 📬 Contacto

Para más información o consultas, escribe a:  
📧 contacto@redanr.org

## 📄 Licencia

MIT License

## 👩‍💻 Autores

- Coordinación de Comunicación Red ANR
- Diseño y desarrollo web por [Paola Juarez](https://github.com/pjuarezm-dev)

---

🫶 Gracias por apoyar la apicultura natural y regenerativa.
