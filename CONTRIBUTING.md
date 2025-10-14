# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a GPI-PlanMaster! Esta guía te ayudará a empezar.

## 📋 Código de Conducta

Este proyecto sigue un código de conducta. Al participar, se espera que mantengas un ambiente respetuoso y profesional.

## 🚀 Cómo Contribuir

### Reportar Bugs

Si encuentras un error:

1. Verifica que no exista un issue similar
2. Abre un nuevo issue con:
   - Descripción clara del problema
   - Pasos para reproducirlo
   - Comportamiento esperado vs actual
   - Screenshots si es relevante
   - Navegador y versión

### Sugerir Mejoras

Para nuevas características:

1. Abre un issue describiendo:
   - La funcionalidad propuesta
   - Por qué sería útil
   - Ejemplos de uso
   - Alternativas consideradas

### Pull Requests

1. **Fork el repositorio**
```bash
git clone https://github.com/tu-usuario/GPI-PlanMaster.git
cd GPI-PlanMaster
```

2. **Crea una rama**
```bash
git checkout -b feature/nueva-caracteristica
# o
git checkout -b fix/correccion-bug
```

3. **Realiza tus cambios**
   - Sigue las convenciones de código existentes
   - Comenta código complejo
   - Actualiza documentación si es necesario

4. **Prueba tus cambios**
```bash
python3 -m http.server 8000
# Abre http://localhost:8000 y verifica
```

5. **Commit con mensaje descriptivo**
```bash
git add .
git commit -m "feat: Añade filtro avanzado en timeline"
# o
git commit -m "fix: Corrige cálculo de fechas en Gantt"
```

6. **Push a tu fork**
```bash
git push origin feature/nueva-caracteristica
```

7. **Abre un Pull Request**
   - Describe los cambios realizados
   - Referencia issues relacionados
   - Incluye screenshots si hay cambios visuales

## 📝 Convenciones de Código

### JavaScript

```javascript
// ✅ Bueno
function calcularDuracion(fechaInicio, fechaFin) {
    const dias = calcularDias(fechaInicio, fechaFin);
    return dias;
}

// ❌ Evitar
function calc(fi, ff) {
    return (new Date(ff) - new Date(fi)) / 86400000;
}
```

### CSS

```css
/* ✅ Bueno - Usar variables CSS */
.card {
    background-color: var(--color-primary);
    padding: var(--spacing-md);
}

/* ❌ Evitar - Valores hardcodeados */
.card {
    background-color: #667eea;
    padding: 1rem;
}
```

### HTML

```html
<!-- ✅ Bueno - Semántico y accesible -->
<button class="btn-primary" aria-label="Exportar cronograma">
    Exportar
</button>

<!-- ❌ Evitar - Poco semántico -->
<div onclick="export()">Exportar</div>
```

## 🔍 Mensajes de Commit

Usa [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` Nueva característica
- `fix:` Corrección de bug
- `docs:` Cambios en documentación
- `style:` Formato, punto y coma faltantes, etc
- `refactor:` Refactorización de código
- `test:` Añadir tests
- `chore:` Actualizar dependencias, etc

Ejemplos:
```
feat: Añade vista de estadísticas mensuales
fix: Corrige cálculo de días hábiles
docs: Actualiza README con nuevas capturas
style: Formatea código con Prettier
refactor: Simplifica función de renderizado
```

## 🎨 Diseño y UX

- Mantén la paleta de colores existente
- Asegura compatibilidad responsive
- Prueba en múltiples navegadores:
  - Chrome
  - Firefox
  - Safari
  - Edge

## 📚 Estructura de Archivos

```
GPI-PlanMaster/
├── index.html          # No cambiar estructura básica
├── css/
│   └── styles.css     # Añadir al final, no modificar variables
├── js/
│   ├── data.js        # Solo tocar si cambias carga de datos
│   └── app.js         # Funciones de renderizado
├── assets/
│   └── images/        # Optimizar imágenes antes de añadir
└── docs/              # Documentación adicional
```

## 🧪 Testing

Antes de enviar PR:

- [ ] Código funciona sin errores en consola
- [ ] Responsive en móvil (< 768px)
- [ ] Responsive en tablet (768px - 1024px)
- [ ] Responsive en desktop (> 1024px)
- [ ] Compatible con Chrome, Firefox, Safari
- [ ] Sin warnings en la consola
- [ ] Documentación actualizada

## 📄 Licencia

Al contribuir, aceptas que tus contribuciones estarán bajo la misma licencia MIT del proyecto.

## 💡 ¿Necesitas Ayuda?

- Abre un issue con la etiqueta `question`
- Contacta al mantenedor: tu.email@uaa.edu.py
- Revisa issues existentes con `good first issue`

## 🌟 Reconocimientos

Todos los contribuidores serán reconocidos en el README.

---

**¡Gracias por contribuir a GPI-PlanMaster!** 🎉
