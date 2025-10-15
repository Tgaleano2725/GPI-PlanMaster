# 🚀 Guía de Configuración GitHub Pages

## ✅ Estado Actual

Tu proyecto **GPI-PlanMaster** ya está configurado y listo para GitHub Pages.

### 📦 Archivos de Deployment

- ✅ `.github/workflows/deploy.yml` - GitHub Actions configurado
- ✅ `.nojekyll` - Evita procesamiento Jekyll
- ✅ `README.md` - Actualizado con URL correcta
- ✅ `netlify.toml` - Alternativa de deployment

## 🔧 Configuración en GitHub (Pasos Finales)

### 1. Habilitar GitHub Pages

1. Ve a tu repositorio: https://github.com/Tgaleano2725/GPI-PlanMaster
2. Click en **Settings** (⚙️)
3. En el menú lateral, click en **Pages**
4. En **Source**, selecciona:
   - **Source**: `GitHub Actions`
   - (No seleccionar "Deploy from a branch")

### 2. Verificar el Deployment

Después de hacer push a `main`, GitHub Actions automáticamente:

1. ✅ Ejecuta el workflow `.github/workflows/deploy.yml`
2. ✅ Construye el sitio
3. ✅ Despliega a GitHub Pages
4. ✅ Tu sitio estará disponible en: **https://tgaleano2725.github.io/GPI-PlanMaster/**

### 3. Monitorear el Deployment

1. Ve a la pestaña **Actions** en tu repositorio
2. Verás el workflow "Deploy to GitHub Pages" ejecutándose
3. Espera a que termine (tarda ~1-2 minutos)
4. ✅ Cuando veas el ✔️ verde, tu sitio está en vivo

## 🌐 URLs del Proyecto

- **Repositorio**: https://github.com/Tgaleano2725/GPI-PlanMaster
- **GitHub Pages**: https://tgaleano2725.github.io/GPI-PlanMaster/
- **Actions**: https://github.com/Tgaleano2725/GPI-PlanMaster/actions

## 🔄 Workflow Automático

Cada vez que hagas `git push` a la rama `main`:

```bash
git add .
git commit -m "tu mensaje"
git push origin main
```

GitHub Pages se actualizará automáticamente en 1-2 minutos.

## 📊 Características Desplegadas

Tu sitio incluye:

- ✅ **Cronograma Visual** - 184 actividades en 9 meses
- ✅ **EDT Interactiva** - Estructura de desglose del trabajo
- ✅ **Línea de Tiempo** - Filtros por fase
- ✅ **Diagrama de Gantt** - Con zoom y controles
- ✅ **Gestión de Hitos** - 10 hitos principales
- ✅ **KPIs y EVM** - Métricas de rendimiento con Chart.js
- ✅ **Gráficos Interactivos** - PV, EV, AC
- ✅ **100% Responsive** - Mobile, tablet, desktop
- ✅ **Rendimiento Optimizado** - Lazy loading, GPU acceleration

## 🎨 Personalización Post-Deployment

### Actualizar Contenido

1. Edita los archivos localmente
2. Commit y push:

```bash
git add .
git commit -m "Update: descripción del cambio"
git push origin main
```

3. Espera 1-2 minutos
4. Refresca https://tgaleano2725.github.io/GPI-PlanMaster/

### Archivos Clave para Editar

- **index.html** - Estructura HTML principal
- **css/styles.css** - Estilos (2374 líneas)
- **js/kpi-data.js** - Datos de KPIs y presupuesto
- **js/cronograma-data.json** - Datos del cronograma
- **README.md** - Documentación del proyecto

## 🛠️ Troubleshooting

### El sitio no carga

1. Verifica que **GitHub Actions** esté habilitado en Settings > Actions
2. Revisa la pestaña **Actions** para ver errores
3. Asegúrate de que **Pages** esté configurado en "GitHub Actions"

### Cambios no aparecen

1. Limpia la caché del navegador (Ctrl+Shift+R / Cmd+Shift+R)
2. Espera 2-3 minutos después del push
3. Verifica que el workflow haya terminado en la pestaña Actions

### Error 404

1. Verifica que `index.html` esté en la raíz del proyecto
2. Revisa que el archivo `.nojekyll` exista
3. Confirma que el deployment terminó exitosamente en Actions

## 📱 Testing

### Desktop
```
https://tgaleano2725.github.io/GPI-PlanMaster/
```

### Mobile
Abre en Chrome DevTools (F12) > Toggle device toolbar > Simula dispositivos

### Performance
- Lighthouse (Chrome DevTools > Lighthouse > Generar reporte)
- PageSpeed Insights: https://pagespeed.web.dev/

## 🎓 Presentación Académica

Tu proyecto está listo para presentar:

- ✅ URL profesional de GitHub Pages
- ✅ Repositorio público para demostración
- ✅ Documentación completa (README, KPI_DOCUMENTATION)
- ✅ Licencia MIT incluida
- ✅ Código bien estructurado y comentado
- ✅ Responsive design para diferentes dispositivos
- ✅ Performance optimizado

## 📞 Recursos Adicionales

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)

---

**✨ Todo está listo! Solo falta habilitar GitHub Pages en Settings > Pages**

Versión: 1.2.0 | Última actualización: 14 de octubre de 2025
