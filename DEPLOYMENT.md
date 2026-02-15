
# Guía de Despliegue en GitHub Pages

Para que esta aplicación sea funcional en tu dominio, sigue estos pasos:

## 1. Configuración del Repositorio
1. Crea un repositorio en GitHub.
2. Sube todos los archivos de este proyecto.

## 2. Dominio Personalizado
1. Ve a **Settings > Pages** en tu repositorio de GitHub.
2. En **Custom Domain**, escribe tu dominio (ej: `trade.tudominio.com`).
3. El archivo `CNAME` incluido en este proyecto ya tiene el marcador de posición; asegúrate de que coincida.
4. En tu proveedor de dominio (GoDaddy, Namecheap, etc.), crea un registro **CNAME** que apunte a `tu-usuario.github.io`.

## 3. Seguridad de la API Key (IMPORTANTE)
Dado que esta es una aplicación cliente, tu `process.env.API_KEY` estará expuesta en el código fuente del navegador. Para protegerla:
1. Ve a [Google Cloud Console](https://console.cloud.google.com/).
2. En **API & Services > Credentials**, edita tu API Key de Gemini.
3. Bajo **Application restrictions**, selecciona **HTTP referrers (web sites)**.
4. Añade tu dominio: `*.tudominio.com/*`.
   *Esto evitará que otros usen tu clave en sitios no autorizados.*

## 4. GitHub Actions (Opcional para inyectar variables)
Si usas un proceso de build (como Vite o Webpack), puedes usar secretos de GitHub. En esta versión simple (ESM), la clave se lee directamente del entorno que configures en el hosting.
