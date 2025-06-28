# API de Imágenes para Netlify

Este proyecto proporciona una forma sencilla de servir imágenes estáticas a través de Netlify, permitiéndote acceder a ellas mediante URLs como `example.netlify.app/img/sena.png` o `example.netlify.app/img/logo.svg`.

## Estructura del Proyecto

```
api-images/
├── netlify.toml        # Configuración de Netlify
├── public/             # Carpeta que se desplegará
│   ├── index.html      # Página principal con instrucciones
│   └── img/            # Carpeta donde se almacenan las imágenes
│       ├── sena.svg    # Ejemplo de imagen SVG del SENA
│       └── logo.svg    # Ejemplo de imagen SVG de logo
└── README.md           # Este archivo
```

## Cómo Usar

1. **Añade tus imágenes**:
   - Coloca todas las imágenes que deseas servir en la carpeta `public/img/`
   - Puedes usar formatos como PNG, JPG, SVG, GIF, etc.

2. **Despliega en Netlify**:
   - Crea una cuenta en [Netlify](https://www.netlify.com/) si aún no tienes una
   - Conecta tu repositorio de GitHub, GitLab o Bitbucket que contenga este proyecto
   - O simplemente arrastra y suelta la carpeta `api-images` en la interfaz de Netlify

3. **Accede a tus imágenes**:
   - Una vez desplegado, podrás acceder a tus imágenes usando la URL:
   - `https://[tu-sitio].netlify.app/img/sena.svg`
   - `https://[tu-sitio].netlify.app/img/logo.svg`
   - O cualquier otra imagen que hayas añadido a la carpeta `img/`

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