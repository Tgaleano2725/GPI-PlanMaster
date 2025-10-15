# 📁 Estructura del Proyecto GPI-PlanMaster

```
GPI-PlanMaster/
│
├── 📄 index.html                    # Página principal del cronograma
│
├── 📂 css/
│   └── styles.css                   # Estilos completos (variables, responsive, print)
│
├── 📂 js/
│   ├── data.js                      # Carga y procesa cronograma-data.json
│   ├── app.js                       # Lógica de renderizado y eventos
│   └── cronograma-data.json         # Base de datos del proyecto (184 actividades)
│
├── 📂 assets/
│   ├── favicon.svg                  # Icono del sitio
│   └── images/                      # Carpeta para screenshots y recursos
│       └── (vacía - lista para usar)
│
├── 📂 docs/
│   └── cronograma.json              # Respaldo de datos para documentación
│
├── 📂 .github/
│   └── workflows/
│       └── deploy.yml               # GitHub Actions para auto-deploy
│
├── 📋 README.md                     # Documentación principal del proyecto
├── 🚀 DEPLOYMENT.md                 # Guía completa de deployment
├── 🤝 CONTRIBUTING.md               # Guía para contribuidores
├── 📜 LICENSE                       # Licencia MIT
├── 🔧 package.json                  # Metadata del proyecto
├── 🌐 netlify.toml                  # Configuración para Netlify
└── 🚫 .gitignore                    # Archivos ignorados por Git

```

## 📊 Desglose de Archivos

### 🎨 Frontend (3 archivos principales)
- `index.html` - Estructura HTML con 5 pestañas (EDT, Resumen, Timeline, Gantt, Hitos)
- `css/styles.css` - 1000+ líneas de CSS profesional (includes EDT accordion styles)
- `js/app.js` - Lógica de visualización + funciones EDT (toggleEdtPhase, toggleEdtSprint)
- `js/data.js` - Gestión de datos y utilidades

### 📦 Datos
- `js/cronograma-data.json` - 184 actividades en 5 fases + 6 sprints
- `docs/cronograma.json` - Copia de respaldo

### 🛠️ Configuración
- `package.json` - Scripts y metadata
- `netlify.toml` - Headers, redirects, build settings
- `.github/workflows/deploy.yml` - CI/CD automático
- `.gitignore` - Archivos excluidos de Git

### 📚 Documentación
- `README.md` - 300+ líneas con badges, features, guía de uso
- `DEPLOYMENT.md` - Instrucciones para GitHub Pages, Netlify, Vercel
- `CONTRIBUTING.md` - Guía para colaboradores
- `LICENSE` - Licencia MIT

### 🎨 Assets
- `assets/favicon.svg` - Logo vectorial del proyecto
- `assets/images/` - Preparada para screenshots y recursos

## 🎯 Características de la Estructura

✅ **Lista para Production**
- Meta tags completos para SEO
- Open Graph para redes sociales
- Favicon SVG moderno
- Headers de seguridad (Netlify)
- CI/CD con GitHub Actions

✅ **Documentación Completa**
- README profesional con badges
- Guías de deployment para 3 plataformas
- Guía de contribución
- Licencia MIT

✅ **Organización Profesional**
- Separación clara: HTML, CSS, JS
- Assets en carpeta dedicada
- Docs separados del código
- Configuraciones en raíz

✅ **Deployment Ready**
- Compatible con GitHub Pages
- Compatible con Netlify
- Compatible con Vercel
- Sin build process necesario

✅ **Mantenibilidad**
- Código modular y comentado
- Variables CSS centralizadas
- JSON para fácil actualización
- .gitignore configurado

## 📈 Estadísticas del Proyecto

| Categoría | Cantidad |
|-----------|----------|
| **Archivos HTML** | 1 |
| **Archivos CSS** | 1 (1000+ líneas) |
| **Archivos JavaScript** | 2 (750+ líneas) |
| **Archivos JSON** | 2 (datos) |
| **Documentación** | 5 archivos |
| **Configuración** | 4 archivos |
| **Total Líneas de Código** | ~2,000 |

## 🧱 Sección EDT - Nueva en v1.2.0

### Estructura Jerárquica
```
📊 1.0 Sistema de Gestión de Proyectos
├── 🎯 1. Fase de Iniciación (6 actividades)
├── 📋 2. Fase de Planificación (12 actividades)
├── ⚙️ 3. Fase de Ejecución (60 CU | 6 sprints)
│   ├── 🚀 Sprint 1: Autenticación (6 CU)
│   ├── 🚀 Sprint 2: Proyectos (10 CU)
│   ├── 🚀 Sprint 3: Tareas (12 CU)
│   ├── 🚀 Sprint 4: Recursos y Costos (10 CU)
│   ├── 🚀 Sprint 5: Riesgos y Calidad (10 CU)
│   └── 🚀 Sprint 6: Reportes y Dashboards (12 CU)
├── 🔍 4. Fase de Control (10 actividades continuas)
└── ✅ 5. Fase de Cierre (14 actividades)
```

### Funcionalidades
- ✅ Acordeón multinivel (fases → sprints → actividades)
- ✅ 10 hitos destacados con ⭐
- ✅ 5 cards resumen (fases, sprints, actividades, hitos, duración)
- ✅ Animaciones suaves de expand/collapse
- ✅ Colores distintivos por fase y sprint
- ✅ Responsive design

## 🚀 Próximos Pasos

1. **Inicializar Git**
```bash
git init
git add .
git commit -m "Initial commit: Estructura profesional completa"
```

2. **Crear Repositorio en GitHub**
- Ir a GitHub.com
- New Repository: `GPI-PlanMaster`
- Copiar URL

3. **Conectar y Subir**
```bash
git remote add origin https://github.com/tu-usuario/GPI-PlanMaster.git
git branch -M main
git push -u origin main
```

4. **Activar GitHub Pages**
- Settings > Pages
- Source: Deploy from branch `main` / `(root)`
- Save

5. **Verificar Deployment**
- Esperar 1-2 minutos
- Visitar: `https://tu-usuario.github.io/GPI-PlanMaster/`

## ✨ Características Destacadas

🎨 **Diseño Responsive**
- Mobile First
- Breakpoints: 480px, 768px, 1024px
- Touch-friendly en móviles

📊 **4 Vistas Interactivas**
- Resumen ejecutivo
- Línea de tiempo con filtros
- Diagrama de Gantt con zoom
- Hitos del proyecto

🔧 **Tecnología Moderna**
- Vanilla JavaScript (sin frameworks)
- CSS Variables
- ES6+ (async/await, arrow functions)
- Fetch API

🌐 **SEO Optimizado**
- Meta tags completos
- Open Graph
- Twitter Cards
- Favicon SVG

---

**Estado**: ✅ Listo para Deploy  
**Versión**: 1.0.0  
**Última actualización**: Octubre 2025
