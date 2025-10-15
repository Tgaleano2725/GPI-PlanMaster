# 📊 Documentación: KPIs y Control Económico

## 📋 Resumen General

Se ha implementado una sección completa de **KPIs y Control Económico** basada en la metodología de **Earned Value Management (EVM)** según estándares del PMBOK 7. Esta funcionalidad permite el seguimiento financiero y de desempeño del proyecto INFO-783 en tiempo real.

---

## 🎯 Funcionalidades Implementadas

### 1. **Indicadores de Valor Ganado (EVM)**

#### **PV - Planned Value (Valor Planificado)**
- **Definición**: Presupuesto autorizado asignado al trabajo programado
- **Cálculo**: Baseline del presupuesto distribuido por sprint según casos de uso
- **Distribución**:
  - Sprint 1: ₲13,002,000 (10%, 6 CU)
  - Sprint 2: ₲21,670,000 (16.67%, 10 CU)
  - Sprint 3: ₲26,004,000 (20%, 12 CU)
  - Sprint 4: ₲26,004,000 (20%, 12 CU)
  - Sprint 5: ₲21,670,000 (16.67%, 10 CU)
  - Sprint 6: ₲21,670,000 (16.67%, 10 CU)
- **Total**: ₲130,020,000

#### **EV - Earned Value (Valor Ganado)**
- **Definición**: Valor del trabajo realmente completado
- **Cálculo**: `EV = PV × (% Avance / 100)`
- **Input**: % de avance por sprint (0-100%)
- **Ejemplo**: Si Sprint 1 tiene 75% avance → EV = ₲13,002,000 × 0.75 = ₲9,751,500

#### **AC - Actual Cost (Costo Real)**
- **Definición**: Costo real incurrido por el trabajo ejecutado
- **Cálculo**: `AC = Σ (Horas Reales × Tarifa por Rol)`
- **Roles y Tarifas**:
  1. **Project Manager**: ₲120,000/hora
  2. **Business Analyst**: ₲100,000/hora
  3. **Backend Developer**: ₲110,000/hora
  4. **Frontend Developer**: ₲105,000/hora
  5. **QA Engineer**: ₲95,000/hora
  6. **UX/UI Designer**: ₲90,000/hora
  7. **DevOps Engineer**: ₲115,000/hora

#### **CPI - Cost Performance Index (Índice de Desempeño de Costos)**
- **Definición**: Eficiencia del costo del proyecto
- **Cálculo**: `CPI = EV / AC`
- **Interpretación**:
  - **CPI ≥ 1.0** 🟢 - Dentro o bajo presupuesto (Eficiente)
  - **CPI 0.9-0.99** 🟡 - Ligero sobrecosto (Advertencia)
  - **CPI < 0.9** 🔴 - Sobrecosto significativo (Crítico)

#### **SPI - Schedule Performance Index (Índice de Desempeño del Cronograma)**
- **Definición**: Eficiencia del cronograma del proyecto
- **Cálculo**: `SPI = EV / PV`
- **Interpretación**:
  - **SPI ≥ 1.0** 🟢 - Adelantado o a tiempo
  - **SPI 0.9-0.99** 🟡 - Ligero retraso
  - **SPI < 0.9** 🔴 - Retraso significativo

---

## 🏗️ Arquitectura Técnica

### **Archivos Creados/Modificados**

#### 1. **js/kpi-data.js** (75 líneas)
```javascript
// Constantes de presupuesto
- BUDGET_TOTAL: ₲130,020,000
- SPRINTS[6]: Baseline por sprint con PV, casos de uso, % distribución
- ROLES_PLAN[7]: Presupuesto y tarifa horaria por rol
- ROLES_PLAN_WITH_HOURS: Horas planificadas calculadas
- horasReales: Estructura inicializada en 0 para input de datos
```

**Responsabilidad**: Almacena todos los datos base del proyecto (presupuestos, tarifas, distribución)

#### 2. **js/kpi.js** (380 líneas)
```javascript
// Funciones principales
- calcularAC(sprintId): Calcula costo real basado en horas × tarifas
- calcularEV(sprint): Calcula valor ganado basado en % avance
- calcularCPI(ev, ac): Índice de desempeño de costos
- calcularSPI(ev, pv): Índice de desempeño del cronograma
- calcularTotalesAcumulados(): Suma acumulada de todos los sprints

// Renderizado
- renderizarTarjetasResumen(): Actualiza las 5 tarjetas de resumen
- renderizarTablaSprints(): Genera tabla con métricas por sprint
- renderizarFormularioSprint(sprintId): Crea formulario de edición

// Chart.js
- crearGraficoLinea(): Gráfico de líneas PV/EV/AC acumulado
- crearGraficoBarras(): Gráfico de barras PV vs AC por sprint

// Interacción
- abrirModalSprint(sprintId): Abre modal de edición
- guardarDatosSprint(): Guarda horas reales y % avance
- cerrarModal(): Cierra modal y actualiza todo
```

**Responsabilidad**: Lógica de negocio, cálculos EVM, renderizado UI, gestión de Chart.js

#### 3. **index.html** (Modificado)
```html
<!-- Navegación -->
- Nuevo tab: 📊 KPIs y Control Económico

<!-- Sección KPIs (líneas 510-667) -->
- 5 tarjetas de resumen (PV, EV, AC, CPI, SPI)
- Tabla de sprints con columnas: Sprint, PV, EV, AC, CPI, SPI, Acciones
- 2 gráficos con canvas (línea acumulada + barras por sprint)
- Modal de edición con inputs para % avance y horas por rol
- Info box con interpretación de indicadores

<!-- Scripts -->
- Chart.js CDN v4.4.1
- kpi-data.js, kpi.js (nuevos)
```

**Responsabilidad**: Estructura HTML del dashboard de KPIs

#### 4. **css/styles.css** (Modificado, +550 líneas)
```css
/* Componentes principales */
.kpis-summary-cards - Grid de 5 tarjetas con glassmorphism
.kpi-card - Tarjetas individuales con gradientes por tipo
.kpi-table - Tabla responsive con gradientes en header
.kpi-charts-container - Grid de 2 gráficos responsivos
.kpi-info-box - Caja de ayuda con interpretación
.modal-kpi - Modal overlay con blur y animaciones

/* Estados y colores */
.kpi-good - Verde (#43e97b) para valores ≥ 1.0
.kpi-warning - Naranja (#ffa726) para valores 0.9-0.99
.kpi-bad - Rosa (#fa709a) para valores < 0.9

/* Responsividad */
- Mobile: Cards en columna única, tabla scroll horizontal
- Tablet: Grid de 2 columnas para gráficos
- Desktop: Grid completo y tabla sin scroll
```

**Responsabilidad**: Estilos visuales con diseño glassmorphism coherente con EDT

#### 5. **js/app.js** (Modificado)
```javascript
// Lazy Loading actualizado
tabsRendered: {
    edt: false,
    resumen: false,
    timeline: false,
    gantt: false,
    hitos: false,
    kpis: false,  // ← NUEVO
    terminos: false
}

// Switch case ampliado
case 'kpis':
    // La inicialización está en kpi.js
    break;
```

**Responsabilidad**: Integración con sistema de lazy loading existente

---

## 📊 Visualizaciones con Chart.js

### **Gráfico 1: Curva de Valor Ganado (Líneas)**
- **Tipo**: Line Chart (Acumulado)
- **Datasets**: 
  - PV (Azul #667eea) - Línea base del presupuesto
  - EV (Verde #43e97b) - Valor ganado real
  - AC (Rosa #fa709a) - Costo real incurrido
- **Eje X**: Sprints 1-6
- **Eje Y**: Presupuesto en Guaraníes (₲)
- **Propósito**: Visualizar divergencias entre lo planificado, ganado y gastado

### **Gráfico 2: PV vs AC por Sprint (Barras)**
- **Tipo**: Bar Chart (Por Sprint)
- **Datasets**:
  - PV (Azul #667eea) - Presupuesto planificado
  - AC (Rosa #fa709a) - Costo real
- **Eje X**: Sprints individuales
- **Eje Y**: Presupuesto en Guaraníes (₲)
- **Propósito**: Comparar sprint por sprint el presupuesto vs costo real

**Configuración Chart.js**:
```javascript
responsive: true
maintainAspectRatio: false
interaction: { mode: 'index', intersect: false }
scales: { y: { beginAtZero: true, ticks: { callback: formatearMoneda } } }
```

---

## 🔧 Flujo de Trabajo del Usuario

### **1. Visualización Inicial**
1. Usuario hace clic en tab "📊 KPIs y Control Económico"
2. Se cargan las tarjetas de resumen con valores iniciales (todos en 0)
3. Se muestra tabla con 6 sprints y sus PV baselines
4. Se renderizan 2 gráficos vacíos (solo PV visible)

### **2. Edición de Datos por Sprint**
1. Usuario hace clic en "✏️ Editar" en cualquier fila de sprint
2. Se abre modal con:
   - Input de % Avance (0-100%)
   - 7 inputs de horas reales (uno por cada rol)
   - Muestra tarifa horaria de cada rol
3. Usuario ingresa datos y hace clic en "💾 Guardar Datos"

### **3. Recálculo Automático**
1. Se actualiza `sprint.avance` con el % ingresado
2. Se actualiza `horasReales[sprintId][rol]` con las horas ingresadas
3. Se recalculan automáticamente:
   - **EV** = PV × (avance / 100)
   - **AC** = Σ(horasReales × tarifa)
   - **CPI** = EV / AC
   - **SPI** = EV / PV
4. Se actualizan totales acumulados
5. Se re-renderizan:
   - Tarjetas de resumen
   - Tabla de sprints
   - Ambos gráficos de Chart.js

### **4. Interpretación Visual**
- **Tarjetas**: Valores con formato monetario (₲)
- **Tabla**: CPI y SPI con colores según umbrales
- **Gráficos**: Líneas/barras actualizadas con nuevos datos
- **Info Box**: Guía de interpretación siempre visible

---

## 💡 Casos de Uso Ejemplo

### **Escenario 1: Sprint 1 Completado**
```
Input Usuario:
- % Avance: 100%
- Horas Project Manager: 20h
- Horas Business Analyst: 30h
- Horas Backend Dev: 50h
- Horas Frontend Dev: 40h
- Horas QA Engineer: 25h
- Horas UX Designer: 15h
- Horas DevOps: 10h

Cálculos Automáticos:
PV = ₲13,002,000 (baseline)
EV = ₲13,002,000 × 1.0 = ₲13,002,000
AC = (20×120K) + (30×100K) + (50×110K) + (40×105K) + (25×95K) + (15×90K) + (10×115K)
AC = 2,400K + 3,000K + 5,500K + 4,200K + 2,375K + 1,350K + 1,150K
AC = ₲19,975,000

CPI = 13,002,000 / 19,975,000 = 0.65 🔴 (Sobrecosto crítico)
SPI = 13,002,000 / 13,002,000 = 1.0 🟢 (A tiempo)

Interpretación:
- El sprint se completó a tiempo (SPI = 1.0)
- Pero se gastó 53% más de lo planificado (CPI = 0.65)
- Acción requerida: Revisar asignación de horas para próximos sprints
```

### **Escenario 2: Sprint 3 con Retraso**
```
Input Usuario:
- % Avance: 60%
- Horas totales: 150h distribuidas

Cálculos Automáticos:
PV = ₲26,004,000
EV = ₲26,004,000 × 0.60 = ₲15,602,400
AC = ₲18,000,000 (calculado según horas)

CPI = 15,602,400 / 18,000,000 = 0.87 🔴
SPI = 15,602,400 / 26,004,000 = 0.60 🔴

Interpretación:
- Sprint con retraso significativo (SPI = 0.60, 40% atraso)
- Sobrecosto del 15% (CPI = 0.87)
- Acción requerida: Plan de recuperación urgente
```

---

## 🎨 Diseño y UX

### **Principios de Diseño**
1. **Consistencia**: Mismo estilo glassmorphism que EDT y Términos
2. **Jerarquía Visual**: Tarjetas → Tabla → Gráficos → Ayuda
3. **Color Coding**: Verde/Amarillo/Rojo para interpretación rápida
4. **Responsive**: Adaptación fluida a móvil/tablet/desktop
5. **Accesibilidad**: Labels claros, ayuda contextual, contraste adecuado

### **Paleta de Colores**
```css
Gradientes principales:
- PV: #667eea → #43a6f5 (Azul)
- EV: #43e97b → #38f9d7 (Verde)
- AC: #fa709a → #fee140 (Rosa/Amarillo)
- CPI: #764ba2 → #f093fb (Púrpura)
- SPI: #f093fb → #f5576c (Rosa)

Estados:
- Good: #43e97b (Verde)
- Warning: #ffa726 (Naranja)
- Bad: #fa709a (Rosa)

Fondos:
- Cards: rgba(255,255,255,0.95) con blur(10px)
- Modal: rgba(255,255,255,0.98) con blur(20px)
```

### **Animaciones**
- Cards: hover con translateY(-5px) y shadow
- Modal: fadeIn 0.3s + slideUp 0.3s
- Botones: scale(1.05) en hover
- Tabs: translate3d para GPU acceleration

---

## 📱 Responsividad

### **Breakpoints**
```css
Desktop (>768px):
- 5 cards en grid auto-fit
- 2 gráficos lado a lado
- Tabla completa sin scroll
- Modal 600px width

Tablet (480-768px):
- 2-3 cards por fila
- 1 gráfico por fila
- Tabla con scroll horizontal
- Modal 90% width

Mobile (<480px):
- 1 card por fila
- 1 gráfico por fila (250px height)
- Tabla compacta (font-size 0.75rem)
- Modal 95% width
- Botones full width en modal footer
```

---

## 🚀 Rendimiento

### **Optimizaciones Implementadas**
1. **Lazy Loading**: Tab KPIs solo se inicializa al hacer clic
2. **Chart.js**: Carga desde CDN con async
3. **Cálculos On-Demand**: Solo se recalcula al guardar modal
4. **DOM Eficiente**: innerHTML para render batch, no loops individuales
5. **CSS Transforms**: GPU acceleration con translate3d
6. **Backdrop Filter**: Hardware-accelerated blur effects

### **Métricas Esperadas**
- **Initial Load**: Sin impacto (lazy loading)
- **Tab Switch to KPIs**: <300ms
- **Modal Open**: <100ms
- **Chart Render**: <500ms
- **Save & Recalculate**: <200ms

---

## 🔐 Validaciones

### **Frontend**
```javascript
// Input % Avance
- Tipo: number
- Min: 0, Max: 100
- Step: 1
- Required

// Input Horas Reales
- Tipo: number
- Min: 0
- Step: 0.5
- Placeholder: "0"
```

### **Lógica de Negocio**
```javascript
// CPI y SPI
if (ac === 0) return null; // No dividir por cero
if (pv === 0) return null; // No dividir por cero

// Formateo Moneda
toLocaleString('es-PY') con símbolo ₲

// Formateo KPI
toFixed(2) o "—" si es null
```

---

## 📖 Guía de Uso

### **Para el Usuario Final (Gerente de Proyecto)**

1. **Acceder a KPIs**: Clic en tab "📊 KPIs y Control Económico"

2. **Ingresar Datos de Sprint**:
   - Clic en "✏️ Editar" en la fila del sprint
   - Ingresar % de avance del sprint (ej: 85%)
   - Ingresar horas trabajadas por cada rol
   - Clic en "💾 Guardar Datos"

3. **Interpretar Resultados**:
   - **Tarjetas superiores**: Vista general acumulada
   - **Tabla**: Detalle por sprint con colores
   - **Gráfico 1**: Curva de tendencia acumulada
   - **Gráfico 2**: Comparativa por sprint
   - **Info Box**: Guía de interpretación

4. **Tomar Decisiones**:
   - CPI < 0.9 🔴: Reducir horas o renegociar presupuesto
   - SPI < 0.9 🔴: Acelerar desarrollo o ajustar alcance
   - Ambos < 0.9: Situación crítica, revisión urgente

### **Para el Desarrollador**

1. **Modificar Baseline**: Editar `js/kpi-data.js`
   ```javascript
   BUDGET_TOTAL: 130020000, // Cambiar total
   SPRINTS: [...], // Ajustar distribución PV
   ROLES_PLAN: [...] // Modificar tarifas
   ```

2. **Cambiar Cálculos**: Editar `js/kpi.js`
   ```javascript
   function calcularEV(sprint) {
       // Modificar fórmula si se requiere
       return sprint.pv * (sprint.avance / 100);
   }
   ```

3. **Personalizar Gráficos**: Editar `crearGraficoLinea()` y `crearGraficoBarras()`
   ```javascript
   options: {
       // Configurar Chart.js según necesidad
   }
   ```

4. **Estilos**: Modificar `.kpi-*` en `css/styles.css`

---

## 🧪 Testing Sugerido

### **Casos de Prueba**

1. **Test de Navegación**:
   - ✅ Tab KPIs aparece entre Hitos y Términos
   - ✅ Clic en tab carga la sección correctamente
   - ✅ Lazy loading funciona (no carga al inicio)

2. **Test de Modal**:
   - ✅ Modal se abre al hacer clic en "Editar"
   - ✅ Muestra título correcto del sprint
   - ✅ Muestra 7 inputs de roles con tarifas
   - ✅ Cierra con ✕ y con "Cancelar"
   - ✅ Guarda datos correctamente

3. **Test de Cálculos**:
   - ✅ EV se calcula correctamente (PV × %)
   - ✅ AC suma todas las horas × tarifas
   - ✅ CPI = EV / AC (null si AC=0)
   - ✅ SPI = EV / PV (null si PV=0)
   - ✅ Totales acumulados suman todos los sprints

4. **Test de Visualización**:
   - ✅ Tarjetas muestran formato monetario ₲
   - ✅ Tabla muestra colores según umbrales
   - ✅ Gráfico de líneas tiene 3 datasets
   - ✅ Gráfico de barras tiene 2 datasets
   - ✅ Tooltips muestran valores correctos

5. **Test Responsive**:
   - ✅ Cards en columna en móvil
   - ✅ Tabla con scroll horizontal en móvil
   - ✅ Gráficos apilados verticalmente en móvil
   - ✅ Modal 95% width en móvil

---

## 🐛 Troubleshooting

### **Gráficos no se muestran**
```
Causa: Chart.js no cargó desde CDN
Solución: Verificar conexión a internet o usar Chart.js local
```

### **Cálculos incorrectos**
```
Causa: Tipo de dato incorrecto en inputs
Solución: Verificar parseFloat() en guardarDatosSprint()
```

### **Modal no cierra**
```
Causa: Funciones globales no definidas
Solución: Verificar que abrirModalSprint, cerrarModal estén en window
```

### **Colores no aplicados**
```
Causa: Clases CSS no definidas
Solución: Verificar que obtenerClaseKPI() retorna 'kpi-good', 'kpi-warning', 'kpi-bad'
```

---

## 🔮 Futuras Mejoras

### **Fase 2 (Opcionales)**
1. **Persistencia**: Guardar en localStorage o backend
2. **Exportar**: Generar PDF/Excel con reportes
3. **Forecasting**: Predicción de EAC (Estimate at Completion)
4. **Alertas**: Notificaciones cuando CPI/SPI < 0.9
5. **Comparativas**: Vista de múltiples proyectos
6. **Histórico**: Gráfico de evolución temporal de KPIs
7. **Drill-Down**: Click en sprint para ver desglose por actividad

### **Fase 3 (Avanzado)**
1. **Machine Learning**: Predicción de costos futuros
2. **Dashboard Ejecutivo**: Vista resumida para stakeholders
3. **Integración JIRA**: Importar horas reales automáticamente
4. **Multi-moneda**: Soporte para USD, EUR, etc.
5. **Benchmarking**: Comparar con estándares de la industria

---

## 📚 Referencias

### **Estándares y Metodologías**
- **PMBOK 7th Edition**: Project Management Body of Knowledge
- **EVM (Earned Value Management)**: Standard for measuring project performance
- **ANSI/EIA-748**: Earned Value Management Systems Standard

### **Herramientas Utilizadas**
- **Chart.js v4.4.1**: https://www.chartjs.org/
- **JavaScript ES6+**: Modern JavaScript features
- **CSS Grid & Flexbox**: Responsive layout
- **Backdrop Filter**: Glassmorphism effect

### **Fórmulas EVM**
```
EV = PV × (% Complete)
SV (Schedule Variance) = EV - PV
CV (Cost Variance) = EV - AC
SPI = EV / PV
CPI = EV / AC
EAC (Estimate at Completion) = BAC / CPI
ETC (Estimate to Complete) = EAC - AC
VAC (Variance at Completion) = BAC - EAC
TCPI (To-Complete Performance Index) = (BAC - EV) / (BAC - AC)
```

---

## 📞 Soporte

Para dudas o mejoras sobre esta funcionalidad:

**Proyecto**: GPI-PlanMaster v1.2.0  
**Curso**: INFO-783 - Gestión de Proyectos Informáticos  
**Institución**: Universidad Autónoma de Asunción (UAA)  
**Estudiante**: Tobias González  
**Año**: 2025  

**Branch**: `kpi_feature`  
**Commit**: `feat: Add complete KPIs and Economic Control section with Chart.js`

---

## 📄 Licencia

Este módulo está incluido bajo la **Licencia MIT** del proyecto GPI-PlanMaster.

---

**Versión de Documentación**: 1.0.0  
**Fecha**: 2025  
**Última Actualización**: Implementación inicial completa
