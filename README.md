# 📊 GPI-PlanMaster - Sistema de Gestión de Proyectos Informáticos

[![Licencia: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Estado: Activo](https://img.shields.io/badge/Status-Active-success.svg)]()
[![Versión](https://img.shields.io/badge/Version-1.0.0-blue.svg)]()

> Cronograma visual interactivo para el proyecto académico de Gestión de Proyectos Informáticos

## 🎓 Información Académica

- **Universidad**: Universidad Autónoma de Asunción (UAA)
- **Asignatura**: INFO-783 - Gestión de Proyectos Informáticos
- **Autor**: Tobias González
- **Metodología**: Híbrida (PMBOK 7ª Ed. + Scrum)
- **Período**: Marzo - Octubre 2025

## 🚀 Demo en Vivo

🔗 **[Ver Cronograma Visual](https://tu-usuario.github.io/GPI-PlanMaster/)**

## � Descripción

Sistema informático de gestión de proyectos que implementa una metodología híbrida combinando PMBOK 7ª Edición y Scrum. El cronograma visual presenta 184 actividades distribuidas en 5 fases y 6 sprints de desarrollo.

### 📊 Estadísticas del Proyecto

- **Duración**: 9 meses (Mar - Oct 2025)
- **Actividades**: 184 tareas detalladas
- **Casos de Uso**: 60 funcionalidades
- **Presupuesto**: ₲ 130.020.000
- **Sprints**: 6 × 4 semanas
- **Hitos**: 10 entregas principales

## ✨ Características Principales

- ✅ **Cronograma Visual Completo** - 184 actividades distribuidas en 9 meses
- 📅 **Línea de Tiempo Interactiva** - Visualización cronológica con filtros por fase
- 📈 **Diagrama de Gantt Dinámico** - Control de zoom y seguimiento de progreso
- 🎯 **Gestión de Hitos** - 10 entregas principales del proyecto
- 🔄 **Metodología Híbrida** - PMBOK 7ª Edición + Scrum (6 sprints × 4 semanas)
- 📦 **60 Casos de Uso Distribuidos** - Autenticación, Proyectos, Tareas, Recursos, Riesgos y Reportes
- 💰 **Gestión de Presupuesto** - ₲ 130.020.000
- 🧱 **EDT Ultra Moderna** - Estructura de Desglose del Trabajo con diseño glassmorphism
- ⚖️ **Términos y Condiciones** - Documentación legal completa (MIT License)
- 📱 **100% Responsive** - Diseño adaptado a móvil, tablet y desktop
- 🎨 **Diseño Profesional** - UI/UX moderna con paleta de colores pastel
- 💾 **Datos JSON Estructurados** - Base de datos estática con información completa
- ⚡ **Alto Rendimiento** - Lazy loading, GPU acceleration, GZIP compression

## 📁 Estructura del Proyecto

```
GPI-PlanMaster/
├── index.html                 # Página principal
├── css/
│   └── styles.css            # Estilos optimizados (1800+ líneas)
├── js/
│   ├── data.js               # Carga y procesa datos
│   ├── app.js                # Lógica con lazy loading
│   └── cronograma-data.json  # Base de datos del proyecto
├── assets/
│   └── images/               # Imágenes y recursos
├── docs/
│   ├── CRONOGRAMA_DETALLADO.md
│   ├── cronograma.csv
│   └── cronograma.json
├── .htaccess                 # Optimización de servidor
├── .gitignore
├── README.md
├── PERFORMANCE.md            # Documentación de optimizaciones
├── LICENSE                   # MIT License
└── netlify.toml              # Configuración para Netlify
```

## 🛠️ Stack Tecnológico

- **HTML5** - Semántica moderna
- **CSS3** - Glassmorphism, Grid, Flexbox, Animations
- **JavaScript ES6+** - Vanilla JS (sin frameworks)
- **JSON** - Base de datos estática
- **Git** - Control de versiones

### ¿Por qué Vanilla JavaScript?

✅ **Cero dependencias** - Sin jQuery, React, Vue, etc.  
✅ **Máximo rendimiento** - Sin overhead de frameworks  
✅ **Tamaño mínimo** - < 100KB total  
✅ **Aprendizaje real** - Código nativo del navegador  
✅ **Compatible** - Funciona en todos los navegadores modernos

## 🛠️ Instalación y Uso

### Opción 1: Uso Directo (GitHub Pages/Netlify)

Simplemente accede al enlace de la demo en vivo.

### Opción 2: Clonar Repositorio

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/GPI-PlanMaster.git

# Navegar al directorio
cd GPI-PlanMaster

# Iniciar servidor local
python3 -m http.server 8000

# Abrir en el navegador
open http://localhost:8000
```

### Opción 3: VS Code Live Server

1. Instalar la extensión "Live Server"
2. Clic derecho en `index.html`
3. Seleccionar "Open with Live Server"

## 🎯 Características Principales

### 🧱 EDT - Estructura de Desglose del Trabajo
- **Jerarquía Completa**: 5 fases → 6 sprints → 184 actividades
- **Acordeón Interactivo**: Expandir/colapsar fases y sprints
- **Destacado de Hitos**: 10 hitos clave marcados con ⭐
- **Resumen Visual**: Cards con métricas principales

### 📊 Resumen Ejecutivo
- **Vista General**: Información clave del proyecto
- **Sprints Detallados**: 6 sprints de 4 semanas cada uno
- **Fases del PMBOK**: 5 fases principales con todas sus actividades

### 📅 Línea de Tiempo
- **Vista Cronológica**: Todas las 184 actividades ordenadas temporalmente
- **Filtros por Fase**: Iniciación, Planificación, Ejecución, Control, Cierre
- **Código de Colores**: Identificación visual por fase

### 📈 Diagrama de Gantt Detallado
- **Visualización Jerárquica**: Fases → Sprints → Actividades
- **Controles Interactivos**:
  - Toggle mostrar todo / solo fases
  - Zoom in/out (incrementos del 30%)
  - Botón reset para vista original
- **Barras Visuales**: Min-width para actividades cortas, colores saturados
- **Header Sticky**: Encabezados de fecha siempre visibles

### 🎯 Gestión de Hitos
- **10 Hitos Críticos**: Puntos de control del proyecto
- **Vista de Lista**: Fecha, nombre y descripción
- **Indicadores Visuales**: Iconos y colores distintivos

## 📦 Deployment

### GitHub Pages

```bash
# Configurar GitHub Pages en Settings > Pages
# Branch: main
# Folder: / (root)
```

### Netlify

1. **Arrastrar y Soltar**: Arrastra la carpeta del proyecto a Netlify
2. **Git Integration**: Conecta tu repositorio de GitHub
3. **Auto Deploy**: Los cambios se despliegan automáticamente

```toml
# netlify.toml ya incluido en el proyecto
[build]
  publish = "."
  command = "echo 'No build required'"
```

### Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🎨 Personalización

### Actualizar Datos

Edita el archivo `js/cronograma-data.json` con tus propios datos:

```json
{
  "proyecto": {
    "nombre": "Tu Proyecto",
    "autor": "Tu Nombre",
    ...
  },
  "fases": [...]
}
```

### Cambiar Colores

Modifica las variables CSS en `css/styles.css`:

```css
:root {
  --color-iniciacion: #667eea;
  --color-planificacion: #764ba2;
  ...
}
```

## 📖 Documentación

- [Cronograma Detallado (Markdown)](docs/CRONOGRAMA_DETALLADO.md)
- [Datos en CSV](docs/cronograma.csv)
- [Datos en JSON](docs/cronograma.json)

## 🤝 Contribuciones

Las contribuciones son bienvenidas! Por favor:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -m 'Añade nueva característica'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## 👤 Autor

**Tobias González**

- GitHub: [@tu-usuario](https://github.com/tu-usuario)
- Universidad: Universidad Autónoma de Asunción (UAA)
- Email: tu.email@uaa.edu.py

## 🙏 Agradecimientos

- Universidad Autónoma de Asunción (UAA)
- Profesores de INFO-783
- Comunidad de desarrollo open source

## 📞 Contacto

¿Preguntas o sugerencias? Abre un [Issue](https://github.com/tu-usuario/GPI-PlanMaster/issues) o contacta directamente.

---

⭐️ Si este proyecto te fue útil, ¡considera darle una estrella en GitHub!

**Hecho con ❤️ para INFO-783 - UAA**
