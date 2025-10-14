# 🚀 Guía de Deployment

## GitHub Pages

### Configuración Inicial

1. **Crear repositorio en GitHub**
```bash
git init
git add .
git commit -m "Initial commit: Cronograma Visual GPI-PlanMaster"
git branch -M main
git remote add origin https://github.com/tu-usuario/GPI-PlanMaster.git
git push -u origin main
```

2. **Activar GitHub Pages**
   - Ve a Settings > Pages
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/ (root)`
   - Guardar

3. **Acceder al sitio**
   - URL: `https://tu-usuario.github.io/GPI-PlanMaster/`
   - Espera 1-2 minutos para el primer deploy

### Actualizaciones

```bash
git add .
git commit -m "Descripción de cambios"
git push
```

---

## Netlify

### Opción 1: Drag & Drop

1. Ve a [Netlify](https://www.netlify.com/)
2. Arrastra la carpeta `GPI-PlanMaster` al área de drop
3. ¡Listo! Tu sitio estará en `https://nombre-random.netlify.app`

### Opción 2: Git Integration

1. Conecta tu repositorio de GitHub
2. Build settings:
   - Build command: `(vacío)`
   - Publish directory: `.`
3. Deploy

### Opción 3: Netlify CLI

```bash
# Instalar Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Deploy
netlify deploy --prod
```

### Custom Domain (Opcional)

```bash
# En Netlify Dashboard
# Domain settings > Add custom domain
# Sigue las instrucciones para configurar DNS
```

---

## Vercel

### Deployment

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Configuración

Crear `vercel.json` (opcional):
```json
{
  "version": 2,
  "builds": [
    {
      "src": "index.html",
      "use": "@vercel/static"
    }
  ]
}
```

---

## Servidor Local (Desarrollo)

### Python

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### Node.js

```bash
# Instalar http-server
npm install -g http-server

# Ejecutar
http-server -p 8000
```

### PHP

```bash
php -S localhost:8000
```

---

## Checklist Pre-Deploy

- [ ] Todos los enlaces funcionan correctamente
- [ ] Datos cargados desde `cronograma-data.json`
- [ ] Responsive en móvil, tablet y desktop
- [ ] Sin errores en la consola del navegador
- [ ] README.md actualizado con URLs correctas
- [ ] package.json con información correcta
- [ ] .gitignore configurado
- [ ] LICENSE incluida
- [ ] Imágenes optimizadas (si existen)

---

## Troubleshooting

### GitHub Pages no muestra el sitio

- Verifica que el repositorio sea público
- Revisa Settings > Pages > Source
- Espera unos minutos y limpia caché del navegador

### Netlify muestra error 404

- Verifica que `netlify.toml` esté configurado correctamente
- Revisa los logs de build en Netlify Dashboard

### Datos no se cargan

- Verifica la ruta del JSON en `data.js`
- Abre la consola del navegador para ver errores
- Confirma que el servidor CORS esté habilitado

---

## URLs Importantes

- **Repositorio**: `https://github.com/tu-usuario/GPI-PlanMaster`
- **GitHub Pages**: `https://tu-usuario.github.io/GPI-PlanMaster/`
- **Netlify**: `https://tu-sitio.netlify.app`
- **Vercel**: `https://tu-sitio.vercel.app`

---

## Actualizaciones Automáticas

Ambos servicios detectan cambios automáticamente:

```bash
# Hacer cambios
git add .
git commit -m "Actualización del cronograma"
git push

# GitHub Pages y Netlify se actualizan automáticamente
# Espera 1-3 minutos
```

---

## Performance Tips

1. **Minificar archivos** (opcional):
```bash
# CSS
npm install -g csso-cli
csso css/styles.css -o css/styles.min.css

# JS
npm install -g terser
terser js/app.js -o js/app.min.js
```

2. **Optimizar imágenes**:
- Usar formatos modernos (WebP)
- Comprimir con TinyPNG o similar
- Lazy loading para imágenes

3. **CDN**:
- GitHub Pages y Netlify ya usan CDN
- Los archivos se sirven desde múltiples ubicaciones

---

**¿Preguntas?** Abre un issue en el repositorio.
