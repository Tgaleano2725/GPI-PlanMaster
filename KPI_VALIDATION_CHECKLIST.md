# ✅ Checklist de Validación - KPIs y Control Económico

## 🎯 Funcionalidad Básica

### Navegación
- [ ] El tab "📊 KPIs y Control Económico" aparece en el menú
- [ ] El tab está posicionado entre "Hitos" y "Términos y Condiciones"
- [ ] Al hacer clic, se muestra la sección completa de KPIs
- [ ] No se carga al inicio (lazy loading activo)

### Visualización Inicial
- [ ] Se muestran 5 tarjetas de resumen (PV, EV, AC, CPI, SPI)
- [ ] Todas las tarjetas muestran valores iniciales (PV con baseline, resto en 0)
- [ ] Se muestra la tabla con 6 filas (Sprint 1 a Sprint 6)
- [ ] Columnas visibles: Sprint, PV, EV, AC, CPI, SPI, Acciones
- [ ] Se muestran 2 gráficos (línea y barras)
- [ ] Se muestra el info box con interpretación de indicadores

---

## 💾 Edición de Datos

### Modal de Edición
- [ ] Botón "✏️ Editar" presente en cada fila de sprint
- [ ] Al hacer clic, se abre el modal correctamente
- [ ] Modal muestra título del sprint (ej: "Editar Sprint 1")
- [ ] Input de "% Avance del Sprint" visible (0-100%)
- [ ] Se muestran 7 inputs de horas (uno por cada rol)
- [ ] Cada input muestra la tarifa horaria del rol
- [ ] Botones "Cancelar" y "💾 Guardar Datos" funcionan

### Flujo de Guardado
- [ ] Ingresar % avance (ej: 75%)
- [ ] Ingresar horas en varios roles (ej: PM=20, Backend=50)
- [ ] Clic en "Guardar Datos" cierra el modal
- [ ] Valores se reflejan inmediatamente en la tabla
- [ ] Tarjetas de resumen se actualizan
- [ ] Gráficos se re-renderizan con nuevos datos

---

## 🧮 Validación de Cálculos

### Test Case 1: Sprint 1 - 100% Completado
```
Input:
- % Avance: 100
- Project Manager: 20 horas
- Backend Developer: 50 horas

Expected Output:
- PV: ₲13,002,000 (baseline)
- EV: ₲13,002,000 (100% × PV)
- AC: ₲7,900,000 (20×120K + 50×110K)
- CPI: 1.65 🟢 (EV / AC)
- SPI: 1.0 🟢 (EV / PV)
```
- [ ] EV calculado correctamente
- [ ] AC calculado correctamente
- [ ] CPI muestra color verde (≥1.0)
- [ ] SPI muestra color verde (=1.0)

### Test Case 2: Sprint 2 - 50% Avance
```
Input:
- % Avance: 50
- Business Analyst: 40 horas
- QA Engineer: 30 horas

Expected Output:
- PV: ₲21,670,000
- EV: ₲10,835,000 (50% × PV)
- AC: ₲6,850,000 (40×100K + 30×95K)
- CPI: 1.58 🟢
- SPI: 0.5 🔴 (retraso significativo)
```
- [ ] EV = 50% del PV
- [ ] AC suma correcta de horas × tarifas
- [ ] CPI verde (bajo costo)
- [ ] SPI rojo (retraso >50%)

### Test Case 3: Múltiples Sprints Acumulados
```
Scenario: Editar Sprint 1, 2 y 3

Expected:
- PV Total: Suma de PV 1+2+3
- EV Total: Suma de EV 1+2+3
- AC Total: Suma de AC 1+2+3
- CPI Total: EV Total / AC Total
- SPI Total: EV Total / PV Total
```
- [ ] Tarjetas de resumen acumulan correctamente
- [ ] CPI total calculado sobre acumulados (no promedio)
- [ ] SPI total calculado sobre acumulados (no promedio)

---

## 📊 Validación de Gráficos

### Gráfico de Líneas (Acumulado)
- [ ] Se muestra un canvas con gráfico de líneas
- [ ] 3 líneas visibles: PV (azul), EV (verde), AC (rosa)
- [ ] Eje X muestra Sprint 1 a Sprint 6
- [ ] Eje Y muestra valores en Guaraníes (₲)
- [ ] Valores acumulados (no por sprint individual)
- [ ] Tooltip muestra valores al hacer hover
- [ ] Leyenda muestra los 3 datasets

### Gráfico de Barras (Por Sprint)
- [ ] Se muestra un canvas con gráfico de barras
- [ ] 2 barras por sprint: PV y AC
- [ ] PV en azul, AC en rosa
- [ ] Eje X muestra Sprint 1 a Sprint 6
- [ ] Eje Y muestra valores en Guaraníes (₲)
- [ ] Valores individuales por sprint (no acumulados)
- [ ] Tooltip funciona correctamente
- [ ] Leyenda muestra PV y AC

---

## 🎨 Validación de Estilos

### Diseño General
- [ ] Fondos con efecto glassmorphism visible
- [ ] Bordes redondeados (16px)
- [ ] Sombras suaves en cards y tabla
- [ ] Colores consistentes con resto del sitio (EDT, Términos)
- [ ] Gradientes en headers y botones

### Tarjetas de Resumen
- [ ] 5 tarjetas alineadas en grid
- [ ] Iconos grandes visibles (📊 💰 💸 📈 ⏱️)
- [ ] Borde superior con gradiente de color
- [ ] Hover eleva la tarjeta con sombra
- [ ] Valores con formato monetario (₲)

### Tabla
- [ ] Header con gradiente morado (#667eea → #764ba2)
- [ ] Filas con hover cambian color de fondo
- [ ] Bordes sutiles entre filas
- [ ] Botones "Editar" con gradiente y hover
- [ ] Scroll horizontal en móvil

### Modal
- [ ] Backdrop con blur effect
- [ ] Modal centrado en pantalla
- [ ] Header con gradiente morado
- [ ] Botón cerrar (✕) en esquina superior derecha
- [ ] Footer con botones alineados a la derecha
- [ ] Animación de entrada (fadeIn + slideUp)

### Color Coding
- [ ] CPI/SPI ≥ 1.0: Verde (#43e97b)
- [ ] CPI/SPI 0.9-0.99: Naranja (#ffa726)
- [ ] CPI/SPI < 0.9: Rosa (#fa709a)
- [ ] "—" cuando valor es null (AC=0)

---

## 📱 Validación Responsive

### Desktop (>768px)
- [ ] 5 tarjetas en fila (auto-fit grid)
- [ ] 2 gráficos lado a lado
- [ ] Tabla completa sin scroll horizontal
- [ ] Modal 600px de ancho
- [ ] Todos los elementos visibles sin scroll

### Tablet (480-768px)
- [ ] Tarjetas en 2-3 columnas
- [ ] Gráficos apilados verticalmente
- [ ] Tabla con scroll horizontal
- [ ] Modal 90% del ancho
- [ ] Navegación se adapta correctamente

### Mobile (<480px)
- [ ] Tarjetas en columna única
- [ ] Gráficos en columna (altura 250px)
- [ ] Tabla compacta con scroll
- [ ] Modal 95% del ancho
- [ ] Botones del modal full width
- [ ] Inputs de roles en columna única
- [ ] Font sizes reducidos pero legibles

---

## ⚡ Validación de Rendimiento

### Lazy Loading
- [ ] Abrir DevTools → Network
- [ ] Cargar página inicial
- [ ] Verificar que kpi.js NO se ejecuta al inicio
- [ ] Hacer clic en tab KPIs
- [ ] Verificar que kpi.js se ejecuta ahora
- [ ] Tiempo de carga del tab < 500ms

### Chart.js
- [ ] Chart.js se carga desde CDN
- [ ] Versión 4.4.1 confirmada
- [ ] Gráficos se renderizan en < 500ms
- [ ] Re-render al guardar modal < 300ms
- [ ] No hay console errors relacionados con Chart

### Interacciones
- [ ] Clic en tab: < 300ms
- [ ] Abrir modal: < 100ms
- [ ] Guardar y recalcular: < 200ms
- [ ] Re-render gráficos: < 500ms
- [ ] Cerrar modal: instantáneo

---

## 🔍 Validación de Datos

### Baseline Correcto
```javascript
Sprint 1: ₲13,002,000 (10%, 6 CU)
Sprint 2: ₲21,670,000 (16.67%, 10 CU)
Sprint 3: ₲26,004,000 (20%, 12 CU)
Sprint 4: ₲26,004,000 (20%, 12 CU)
Sprint 5: ₲21,670,000 (16.67%, 10 CU)
Sprint 6: ₲21,670,000 (16.67%, 10 CU)
TOTAL: ₲130,020,000
```
- [ ] Todos los PV mostrados en tabla coinciden
- [ ] Suma total de PV = ₲130,020,000

### Tarifas Correctas
```javascript
Project Manager: ₲120,000/h
Business Analyst: ₲100,000/h
Backend Developer: ₲110,000/h
Frontend Developer: ₲105,000/h
QA Engineer: ₲95,000/h
UX/UI Designer: ₲90,000/h
DevOps Engineer: ₲115,000/h
```
- [ ] Modal muestra todas las tarifas correctas
- [ ] Cálculo de AC usa estas tarifas

---

## 🐛 Edge Cases

### Valores en Cero
- [ ] AC = 0 → CPI muestra "—" (no error división por cero)
- [ ] PV = 0 → SPI muestra "—" (no debería pasar con baseline)
- [ ] Horas = 0 en todos los roles → AC = 0

### Valores Extremos
- [ ] % Avance = 0 → EV = 0, SPI = 0 🔴
- [ ] % Avance = 100 → EV = PV, SPI = 1.0 🟢
- [ ] Horas muy altas → AC > PV, CPI < 1.0 🔴
- [ ] Input invalido (letras) → input type="number" previene

### Navegación
- [ ] Cambiar entre tabs no pierde datos ingresados
- [ ] Volver a tab KPIs mantiene estado
- [ ] Refresh de página resetea a valores iniciales (no localStorage)

---

## 📋 Validación de Contenido

### Textos
- [ ] Título: "📊 KPIs y Control Económico"
- [ ] Descripción: "Análisis de Valor Ganado (EVM)..."
- [ ] Tarjetas tienen títulos correctos (PV Total, EV Total, etc.)
- [ ] Info box tiene 5 secciones de ayuda
- [ ] Interpretación de CPI/SPI correcta

### Info Box
- [ ] Sección CPI con explicación y umbrales
- [ ] Sección SPI con explicación y umbrales
- [ ] Sección PV con definición
- [ ] Sección EV con fórmula
- [ ] Sección AC con fórmula
- [ ] Colores de ejemplo correctos

---

## 🛠️ Validación Técnica

### Console
- [ ] Abrir DevTools → Console
- [ ] No hay errores JavaScript
- [ ] No hay warnings críticos
- [ ] Logs de inicialización si existen son informativos

### Network
- [ ] Chart.js se carga correctamente (200 OK)
- [ ] kpi-data.js carga (200 OK)
- [ ] kpi.js carga (200 OK)
- [ ] No hay 404 errors
- [ ] No hay recursos bloqueados por CORS

### HTML Validation
- [ ] Estructura HTML válida (no tags sin cerrar)
- [ ] IDs únicos (no duplicados)
- [ ] Canvas con IDs correctos: chart-pv-ac-line, chart-pv-ac-bars

### CSS Validation
- [ ] Clases CSS aplicadas correctamente
- [ ] No hay estilos inline no intencionados
- [ ] Responsive breakpoints funcionan
- [ ] Animaciones fluidas (60fps)

### JavaScript
- [ ] window.KPIData definido y accesible
- [ ] Funciones globales: abrirModalSprint, guardarDatosSprint, cerrarModal
- [ ] Chart.js disponible en window.Chart
- [ ] No hay memory leaks (re-render destruye charts antiguos)

---

## ✅ Criterios de Aceptación Final

### Funcionalidad Completa
- [ ] Usuario puede editar cualquier sprint
- [ ] Cálculos EVM son correctos matemáticamente
- [ ] Gráficos reflejan datos actualizados
- [ ] Color coding ayuda a interpretación rápida
- [ ] Modal guarda y cierra correctamente

### UX/UI
- [ ] Diseño coherente con el resto del sitio
- [ ] Glassmorphism aplicado consistentemente
- [ ] Responsive en móvil, tablet y desktop
- [ ] Animaciones suaves y profesionales
- [ ] Ayuda contextual disponible

### Performance
- [ ] Lazy loading reduce carga inicial
- [ ] Interacciones son fluidas (<300ms)
- [ ] No hay lag al editar/guardar
- [ ] Gráficos se renderizan rápidamente

### Documentación
- [ ] KPI_DOCUMENTATION.md completo
- [ ] Comentarios en código claros
- [ ] README actualizado (si aplica)
- [ ] Commit message descriptivo

---

## 🎓 Validación Académica

### Alineación con PMBOK 7
- [ ] Fórmulas EVM correctas según estándar
- [ ] Terminología apropiada (PV, EV, AC, CPI, SPI)
- [ ] Interpretación de índices correcta

### Contexto del Proyecto
- [ ] Presupuesto ₲130M alineado con proyecto INFO-783
- [ ] 6 sprints coherentes con cronograma existente
- [ ] 7 roles alineados con equipo definido en EDT

### Propósito Educativo
- [ ] Dashboard es comprensible para presentación
- [ ] Permite demostrar control económico
- [ ] Facilita análisis de desviaciones
- [ ] Soporta toma de decisiones basada en datos

---

## 📊 Resultado Final

**Total Items**: ~150 puntos de validación

**Mínimo para Aprobar**: 90% (135/150) ✅

**Estado**: 
- [ ] ❌ Reprobado (< 90%)
- [ ] ✅ Aprobado (90-95%)
- [ ] 🌟 Excelente (95-98%)
- [ ] 🏆 Perfecto (98-100%)

---

**Validador**: _______________  
**Fecha**: _______________  
**Puntaje**: _____/150  
**Observaciones**:

---

