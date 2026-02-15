
# Global Trade Intelligence Hub 🌍

Esta es una aplicación avanzada de inteligencia comercial diseñada para localizar empresas, analizar sectores y entender la estructura empresarial de diferentes países utilizando la API de Google Gemini con búsqueda en tiempo real.

## 🚀 Cómo ponerla en marcha en tu dominio

### 1. Preparación en GitHub
1. Sube todos estos archivos a un nuevo repositorio en tu cuenta de GitHub.
2. Asegúrate de incluir el archivo `CNAME` y cambia `tu-dominio.com` por tu dominio real (ej: `herramienta.tuweb.com`).

### 2. Configuración del Dominio
1. En tu proveedor de dominios (donde compraste tu web), crea un registro **CNAME**.
2. Nombre: `herramienta` (o el subdominio que quieras).
3. Valor/Destino: `tu-usuario-github.github.io`.

### 3. Seguridad de la API (Paso Vital)
Como la aplicación se ejecuta en el navegador, debes proteger tu clave de Gemini:
1. Ve a [Google AI Studio](https://aistudio.google.com/app/apikey).
2. En la configuración de tu clave, busca **Restricciones de API**.
3. Selecciona **Restricciones de HTTP (sitios web)**.
4. Añade tu dominio: `https://tu-dominio.com/*`.
   *Esto garantiza que nadie pueda usar tu clave fuera de tu propia página web.*

## ✨ Funcionalidades
- **Análisis de Mercado**: Resumen del clima comercial del país seleccionado.
- **Distribución por Sectores**: Gráficos interactivos de la estructura empresarial.
- **Localizador de Empresas**: Listado de empresas reales con capacidad de exportación.
- **Insights Estratégicos**: Consejos de IA para mejorar tus operaciones de comercio exterior.

---
Desarrollado con ❤️ para profesionales del Comercio Internacional.
