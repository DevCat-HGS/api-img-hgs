# API de Imágenes y Videos para Netlify

Este proyecto proporciona una forma sencilla de servir imágenes estáticas y videos a través de Netlify, permitiéndote acceder a ellos mediante URLs como `example.netlify.app/img/senacloud-logo.svg` para imágenes o `example.netlify.app/videos/ejemplo.html` para videos.

## Estructura del Proyecto

```
api-images/
├── netlify.toml        # Configuración de Netlify
├── public/             # Carpeta que se desplegará
│   ├── index.html      # Página principal con instrucciones
│   ├── img/            # Carpeta donde se almacenan las imágenes
│   │   ├── senacloud-logo.png  # Ejemplo de imagen PNG
│   │   └── senacloud-logo.svg  # Ejemplo de imagen SVG
│   └── videos/         # Carpeta donde se almacenan los videos
│       └── ejemplo.html  # Ejemplo de video animado
└── README.md           # Este archivo
```

## Cómo Usar

1. **Añade tus archivos**:
   - Coloca todas las imágenes que deseas servir en la carpeta `public/img/`
     - Puedes usar formatos como PNG, JPG, SVG, GIF, etc.
   - Coloca todos los videos que deseas servir en la carpeta `public/videos/`
     - Puedes usar formatos como MP4, WebM, OGG, etc.

2. **Despliega en Netlify**:
   - Crea una cuenta en [Netlify](https://www.netlify.com/) si aún no tienes una
   - Conecta tu repositorio de GitHub, GitLab o Bitbucket que contenga este proyecto
   - O simplemente arrastra y suelta la carpeta `api-images` en la interfaz de Netlify

3. **Accede a tus archivos**:
   - Una vez desplegado, podrás acceder a tus imágenes usando la URL:
     - `https://[tu-sitio].netlify.app/img/senacloud-logo.png`
     - `https://[tu-sitio].netlify.app/img/senacloud-logo.svg`
   - Y a tus videos usando la URL:
     - `https://[tu-sitio].netlify.app/videos/ejemplo.html`
     - `https://[tu-sitio].netlify.app/videos/tu-video.mp4`

## Personalización

Puedes personalizar este proyecto de varias maneras:

- **Dominio personalizado**: Configura un dominio personalizado en la configuración de Netlify
- **Estructura de carpetas**: Modifica la estructura de carpetas según tus necesidades
- **Página principal**: Personaliza el archivo `index.html` para mostrar tus propias instrucciones o ejemplos

## Ventajas de usar Netlify

- **CDN Global**: Tus imágenes se sirven a través de la CDN global de Netlify
- **HTTPS gratuito**: Todas las URLs son seguras por defecto
- **Despliegue continuo**: Actualiza tus imágenes simplemente actualizando tu repositorio
- **Alta disponibilidad**: Servicio confiable con alto tiempo de actividad

## Limitaciones

- Este enfoque es ideal para imágenes estáticas que no cambian con frecuencia
- Para necesidades más complejas, considera usar servicios especializados en imágenes como Cloudinary o imgix

## Licencia

Este proyecto está disponible bajo la licencia MIT. Siéntete libre de modificarlo y usarlo como desees.