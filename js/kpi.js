// ==================== KPIs Y CONTROL ECONÓMICO ====================

// Variables globales para gráficos
let chartPVACLine = null;
let chartPVACBars = null;

// ==================== FUNCIONES DE CÁLCULO ====================

// Calcular AC (Actual Cost) para un sprint
function calcularAC(sprintId) {
  const { horasReales } = window.KPIData;
  const { ROLES_PLAN } = window.KPIData;
  
  let ac = 0;
  ROLES_PLAN.forEach(rol => {
    const horas = horasReales[sprintId][rol.rol] || 0;
    ac += horas * rol.rate;
  });
  
  return ac;
}

// Calcular EV (Earned Value) para un sprint
function calcularEV(sprint) {
  const avancePorcentaje = sprint.avance / 100;
  return sprint.pv * avancePorcentaje;
}

// Calcular CPI (Cost Performance Index)
function calcularCPI(ev, ac) {
  if (ac === 0) return null;
  return ev / ac;
}

// Calcular SPI (Schedule Performance Index)
function calcularSPI(ev, pv) {
  if (pv === 0) return null;
  return ev / pv;
}

// Calcular totales acumulados
function calcularTotalesAcumulados() {
  const { SPRINTS } = window.KPIData;
  
  let pvTotal = 0;
  let evTotal = 0;
  let acTotal = 0;
  
  SPRINTS.forEach(sprint => {
    pvTotal += sprint.pv;
    evTotal += calcularEV(sprint);
    acTotal += calcularAC(sprint.id);
  });
  
  return {
    pv: pvTotal,
    ev: evTotal,
    ac: acTotal,
    cpi: calcularCPI(evTotal, acTotal),
    spi: calcularSPI(evTotal, pvTotal)
  };
}

// ==================== FORMATEO ====================

function formatearMoneda(valor) {
  return '₲ ' + Math.round(valor).toLocaleString('es-PY');
}

function formatearKPI(valor) {
  if (valor === null || valor === undefined) return '—';
  return valor.toFixed(2);
}

function obtenerClaseKPI(valor, tipo = 'cpi') {
  if (valor === null || valor === undefined) return '';
  if (valor >= 1) return 'kpi-good';
  if (valor >= 0.9) return 'kpi-warning';
  return 'kpi-bad';
}

// ==================== RENDERIZADO ====================

function renderizarTarjetasResumen() {
  const totales = calcularTotalesAcumulados();
  
  document.getElementById('kpi-pv-total').textContent = formatearMoneda(totales.pv);
  document.getElementById('kpi-ev-total').textContent = formatearMoneda(totales.ev);
  document.getElementById('kpi-ac-total').textContent = formatearMoneda(totales.ac);
  
  const cpiElement = document.getElementById('kpi-cpi-total');
  cpiElement.textContent = formatearKPI(totales.cpi);
  cpiElement.className = 'kpi-value ' + obtenerClaseKPI(totales.cpi);
  
  const spiElement = document.getElementById('kpi-spi-total');
  spiElement.textContent = formatearKPI(totales.spi);
  spiElement.className = 'kpi-value ' + obtenerClaseKPI(totales.spi);
}

function renderizarTablaSprints() {
  const { SPRINTS } = window.KPIData;
  const tbody = document.getElementById('kpi-table-body');
  
  tbody.innerHTML = '';
  
  SPRINTS.forEach(sprint => {
    const ev = calcularEV(sprint);
    const ac = calcularAC(sprint.id);
    const cpi = calcularCPI(ev, ac);
    const spi = calcularSPI(ev, sprint.pv);
    
    // Determinar estado del sprint
    let estadoIcon = '⏳';
    let estadoText = 'En Progreso';
    if (sprint.avance === 100) {
        estadoIcon = '✅';
        estadoText = 'Completado';
    } else if (sprint.avance >= 70) {
        estadoIcon = '🔄';
        estadoText = 'Avanzado';
    } else if (sprint.avance >= 40) {
        estadoIcon = '⏳';
        estadoText = 'En Progreso';
    } else {
        estadoIcon = '📅';
        estadoText = 'Planificado';
    }
    
    const row = document.createElement('tr');
    row.innerHTML = `
      <td><strong>${sprint.nombre}</strong></td>
      <td>${formatearMoneda(sprint.pv)}</td>
      <td>
        <span class="kpi-ev">${formatearMoneda(ev)}</span>
        <span class="kpi-avance">(${sprint.avance}%)</span>
      </td>
      <td>${formatearMoneda(ac)}</td>
      <td class="${obtenerClaseKPI(cpi)}">${formatearKPI(cpi)}</td>
      <td class="${obtenerClaseKPI(spi)}">${formatearKPI(spi)}</td>
      <td>
        <span class="sprint-status">${estadoIcon} ${estadoText}</span>
      </td>
    `;
    
    tbody.appendChild(row);
  });
}

function renderizarFormularioSprint(sprintId) {
  const { SPRINTS, ROLES_PLAN, horasReales } = window.KPIData;
  const sprint = SPRINTS.find(s => s.id === sprintId);
  
  document.getElementById('modal-sprint-titulo').textContent = sprint.nombre;
  document.getElementById('input-avance-sprint').value = sprint.avance;
  
  const rolesContainer = document.getElementById('roles-horas-inputs');
  rolesContainer.innerHTML = '';
  
  ROLES_PLAN.forEach(rol => {
    const horasActuales = horasReales[sprintId][rol.rol] || 0;
    
    const rolDiv = document.createElement('div');
    rolDiv.className = 'rol-input-group';
    rolDiv.innerHTML = `
      <label>
        <span class="rol-nombre">${rol.rol}</span>
        <span class="rol-rate">(₲ ${rol.rate.toLocaleString('es-PY')}/hora)</span>
      </label>
      <input 
        type="number" 
        min="0" 
        step="0.5"
        class="input-horas"
        data-rol="${rol.rol}"
        value="${horasActuales}"
        placeholder="Horas reales"
      >
    `;
    
    rolesContainer.appendChild(rolDiv);
  });
  
  // Mostrar modal
  document.getElementById('modal-sprint').style.display = 'flex';
  
  // Guardar sprintId actual
  document.getElementById('modal-sprint').dataset.sprintId = sprintId;
}

function guardarDatosSprint() {
  const { SPRINTS, horasReales } = window.KPIData;
  const sprintId = parseInt(document.getElementById('modal-sprint').dataset.sprintId);
  const sprint = SPRINTS.find(s => s.id === sprintId);
  
  // Guardar % avance
  const avance = parseFloat(document.getElementById('input-avance-sprint').value) || 0;
  sprint.avance = Math.max(0, Math.min(100, avance));
  
  // Guardar horas por rol
  const inputs = document.querySelectorAll('.input-horas');
  inputs.forEach(input => {
    const rol = input.dataset.rol;
    const horas = parseFloat(input.value) || 0;
    horasReales[sprintId][rol] = Math.max(0, horas);
  });
  
  // Cerrar modal
  cerrarModal();
  
  // Actualizar vista
  actualizarVista();
}

function cerrarModal() {
  document.getElementById('modal-sprint').style.display = 'none';
}

function actualizarVista() {
  renderizarTarjetasResumen();
  renderizarTablaSprints();
  actualizarGraficos();
}

// ==================== GRÁFICOS ====================

function crearGraficoLinea() {
  const { SPRINTS } = window.KPIData;
  
  // Calcular acumulados
  let pvAcum = 0;
  let evAcum = 0;
  let acAcum = 0;
  
  const labels = [];
  const pvData = [];
  const evData = [];
  const acData = [];
  
  SPRINTS.forEach(sprint => {
    pvAcum += sprint.pv;
    evAcum += calcularEV(sprint);
    acAcum += calcularAC(sprint.id);
    
    labels.push(`S${sprint.id}`);
    pvData.push(pvAcum);
    evData.push(evAcum);
    acData.push(acAcum);
  });
  
  const ctx = document.getElementById('chart-pv-ac-line').getContext('2d');
  
  if (chartPVACLine) {
    chartPVACLine.destroy();
  }
  
  chartPVACLine = new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'PV Acumulado (Planificado)',
          data: pvData,
          borderColor: '#667eea',
          backgroundColor: 'rgba(102, 126, 234, 0.1)',
          borderWidth: 3,
          tension: 0.4,
          fill: true
        },
        {
          label: 'EV Acumulado (Valor Ganado)',
          data: evData,
          borderColor: '#43e97b',
          backgroundColor: 'rgba(67, 233, 123, 0.1)',
          borderWidth: 3,
          tension: 0.4,
          fill: true
        },
        {
          label: 'AC Acumulado (Costo Real)',
          data: acData,
          borderColor: '#fa709a',
          backgroundColor: 'rgba(250, 112, 154, 0.1)',
          borderWidth: 3,
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            font: { size: 12, weight: '600' },
            padding: 15
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + formatearMoneda(context.parsed.y);
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '₲ ' + (value / 1000000).toFixed(1) + 'M';
            }
          }
        }
      }
    }
  });
}

function crearGraficoBarras() {
  const { SPRINTS } = window.KPIData;
  
  const labels = SPRINTS.map(s => `Sprint ${s.id}`);
  const pvData = SPRINTS.map(s => s.pv);
  const acData = SPRINTS.map(s => calcularAC(s.id));
  
  const ctx = document.getElementById('chart-pv-ac-bars').getContext('2d');
  
  if (chartPVACBars) {
    chartPVACBars.destroy();
  }
  
  chartPVACBars = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'PV (Planificado)',
          data: pvData,
          backgroundColor: 'rgba(102, 126, 234, 0.7)',
          borderColor: '#667eea',
          borderWidth: 2
        },
        {
          label: 'AC (Real)',
          data: acData,
          backgroundColor: 'rgba(250, 112, 154, 0.7)',
          borderColor: '#fa709a',
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            font: { size: 12, weight: '600' },
            padding: 15
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return context.dataset.label + ': ' + formatearMoneda(context.parsed.y);
            }
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return '₲ ' + (value / 1000000).toFixed(1) + 'M';
            }
          }
        }
      }
    }
  });
}

function actualizarGraficos() {
  crearGraficoLinea();
  crearGraficoBarras();
}

// ==================== FUNCIONES GLOBALES ====================

window.abrirModalSprint = renderizarFormularioSprint;
window.guardarDatosSprint = guardarDatosSprint;
window.cerrarModal = cerrarModal;

// ==================== INICIALIZACIÓN ====================

function inicializarKPIs() {
  renderizarTarjetasResumen();
  renderizarTablaSprints();
  actualizarGraficos();
  
  // Cerrar modal al hacer clic fuera
  document.getElementById('modal-sprint').addEventListener('click', (e) => {
    if (e.target.id === 'modal-sprint') {
      cerrarModal();
    }
  });
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', inicializarKPIs);
} else {
  inicializarKPIs();
}
