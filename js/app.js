// ==================== APLICACIÓN PRINCIPAL ====================

// Variables globales
let actividadesFiltradas = [];
let tabsRendered = {
    edt: false,
    resumen: false,
    timeline: false,
    gantt: false,
    hitos: false,
    kpis: false,
    terminos: false
};

// ==================== INICIALIZACIÓN ====================

document.addEventListener('DOMContentLoaded', async () => {
    console.log('🚀 Iniciando aplicación...');
    
    // Cargar datos del JSON
    const cronogramaData = await window.CronogramaUtils.cargarDatosJSON();
    
    if (!cronogramaData || !cronogramaData.proyecto) {
        mostrarError('No se pudieron cargar los datos del proyecto');
        return;
    }
    
    // Inicializar navegación
    inicializarTabs();
    
    // Renderizar solo la primera pestaña activa (EDT)
    renderizarTabActiva('edt');
    
    console.log('✅ Aplicación iniciada correctamente');
});

// ==================== RENDERIZAR TAB BAJO DEMANDA ====================

function renderizarTabActiva(tabId) {
    // Si ya fue renderizada, no hacer nada
    if (tabsRendered[tabId]) return;
    
    // Renderizar según el tab
    switch(tabId) {
        case 'resumen':
            renderizarResumen();
            break;
        case 'timeline':
            renderizarTimeline();
            break;
        case 'gantt':
            renderizarGantt();
            break;
        case 'hitos':
            renderizarHitos();
            break;
        // KPIs se inicializa desde kpi.js
        case 'kpis':
            // La inicialización está en kpi.js, solo marcamos como renderizada
            break;
        // EDT y Términos ya están en HTML
        case 'edt':
        case 'terminos':
            break;
    }
    
    // Marcar como renderizada
    tabsRendered[tabId] = true;
}

// ==================== MANEJO DE ERRORES ====================

function mostrarError(mensaje) {
    const container = document.querySelector('.main-content .container');
    if (container) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem; background: #fff3cd; border-radius: 0.5rem; border: 2px solid #ffc107;">
                <h2 style="color: #856404;">⚠️ ${mensaje}</h2>
                <p style="color: #856404; margin-top: 1rem;">Por favor, verifica que el archivo cronograma.json esté en la ubicación correcta.</p>
            </div>
        `;
    }
}

// ==================== NAVEGACIÓN POR TABS ====================

function inicializarTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetTab = btn.dataset.tab;
            
            // Remover clase active de todos los botones y contenidos
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // Agregar clase active al botón y contenido seleccionado
            btn.classList.add('active');
            document.getElementById(targetTab).classList.add('active');
            
            // Renderizar el tab si no ha sido cargado
            renderizarTabActiva(targetTab);
        });
    });
}

// ==================== RENDERIZAR RESUMEN ====================

function renderizarResumen() {
    const cronogramaData = window.CronogramaUtils.getData();
    if (!cronogramaData || !cronogramaData.fases) return;
    
    // Renderizar cada fase
    cronogramaData.fases.forEach(fase => {
        if (fase.id === '3.0' && fase.sprints) {
            // Renderizar sprints de ejecución
            fase.sprints.forEach(sprint => {
                renderizarSprint(sprint);
            });
        } else {
            // Renderizar fases normales
            renderizarFase(fase);
        }
    });
}

function renderizarFase(fase) {
    const containerId = `fase-${fase.id.replace('.', '-').toLowerCase()}`;
    let container = document.getElementById(containerId);
    
    // Mapeo de IDs
    const mapeoIds = {
        'fase-1-0': 'fase-iniciacion',
        'fase-2-0': 'fase-planificacion',
        'fase-4-0': 'fase-control',
        'fase-5-0': 'fase-cierre'
    };
    
    container = document.getElementById(mapeoIds[containerId] || containerId);
    
    if (!container || !fase.actividades) return;
    
    fase.actividades.forEach(actividad => {
        const actividadHTML = crearActividadHTML(actividad, fase);
        container.innerHTML += actividadHTML;
    });
}

function renderizarSprint(sprint) {
    const containerId = `sprint-${sprint.id.split('.')[1]}`;
    const container = document.getElementById(containerId);
    
    if (!container) return;
    
    // Todos los sprints ahora tienen actividades detalladas
    if (sprint.actividades && sprint.actividades.length > 0) {
        sprint.actividades.forEach(actividad => {
            const actividadHTML = crearActividadHTML(actividad, sprint);
            container.innerHTML += actividadHTML;
        });
    } else {
        // Fallback por si algún sprint no tiene actividades
        container.innerHTML = `
            <div class="activity-item">
                <div class="activity-code">${sprint.id}</div>
                <div class="activity-name">${sprint.nombre}</div>
                <div class="activity-duration">${sprint.duracion}</div>
                <div class="activity-dates">${window.CronogramaUtils.formatearFecha(sprint.fecha_inicio)} - ${window.CronogramaUtils.formatearFecha(sprint.fecha_fin)}</div>
                <div class="activity-responsible">Equipo Scrum</div>
                <div class="activity-dependencies">${sprint.casos_uso} casos de uso</div>
            </div>
        `;
    }
}

function crearActividadHTML(actividad, fase) {
    const dependencias = Array.isArray(actividad.dependencias) 
        ? actividad.dependencias.join(', ') 
        : (actividad.dependencias || '-');
    
    const claseHito = actividad.hito ? 'milestone' : '';
    const duracion = actividad.duracion || actividad.tipo || '-';
    
    return `
        <div class="activity-item ${claseHito}">
            <div class="activity-code">${actividad.id}</div>
            <div class="activity-name">${actividad.nombre}</div>
            <div class="activity-duration">${duracion}</div>
            <div class="activity-dates">${window.CronogramaUtils.formatearFecha(actividad.fecha_inicio)} - ${window.CronogramaUtils.formatearFecha(actividad.fecha_fin)}</div>
            <div class="activity-responsible">${actividad.responsable}</div>
            <div class="activity-dependencies">${dependencias}</div>
        </div>
    `;
}

// ==================== RENDERIZAR TIMELINE ====================

function renderizarTimeline() {
    const container = document.getElementById('timeline-container');
    if (!container) return;
    
    const actividades = window.CronogramaUtils.obtenerTodasActividades();
    
    container.innerHTML = '';
    
    actividades.forEach(actividad => {
        const esHito = actividad.hito === true;
        const markerClass = esHito ? 'milestone' : '';
        
        const timelineHTML = `
            <div class="timeline-item" data-fase="${actividad.faseId}">
                <div class="timeline-marker ${markerClass}"></div>
                <div class="timeline-content">
                    <div class="timeline-date">${window.CronogramaUtils.formatearFecha(actividad.fecha_inicio)} - ${window.CronogramaUtils.formatearFecha(actividad.fecha_fin)}</div>
                    <div class="timeline-title">${actividad.id} - ${actividad.nombre}</div>
                    <div class="timeline-desc">
                        <strong>Responsable:</strong> ${actividad.responsable} | 
                        <strong>Duración:</strong> ${actividad.duracion || actividad.tipo}
                        ${esHito ? ' | 🎯 <strong>HITO</strong>' : ''}
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML += timelineHTML;
    });
    
    // Configurar filtros
    configurarFiltrosTimeline();
}

function configurarFiltrosTimeline() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;
            
            // Actualizar botones activos
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            // Filtrar items
            timelineItems.forEach(item => {
                if (filter === 'all') {
                    item.style.display = 'flex';
                } else if (filter === 'hitos') {
                    const esHito = item.querySelector('.milestone');
                    item.style.display = esHito ? 'flex' : 'none';
                } else {
                    const faseId = item.dataset.fase;
                    const mostrar = faseId && faseId.startsWith(filter === 'ejecucion' ? '3' : filter === 'iniciacion' ? '1' : filter === 'planificacion' ? '2' : filter === 'control' ? '4' : '5');
                    item.style.display = mostrar ? 'flex' : 'none';
                }
            });
        });
    });
}

// ==================== RENDERIZAR GANTT ====================

function renderizarGantt() {
    const cronogramaData = window.CronogramaUtils.getData();
    const container = document.getElementById('gantt-chart');
    if (!container || !cronogramaData) return;
    
    const fechaInicio = new Date(cronogramaData.proyecto.fecha_inicio);
    const fechaFin = new Date(cronogramaData.proyecto.fecha_fin);
    const diasTotales = window.CronogramaUtils.calcularDias(cronogramaData.proyecto.fecha_inicio, cronogramaData.proyecto.fecha_fin);
    
    let ganttHTML = '<div style="min-width: 1800px;">';
    
    // Header con meses
    ganttHTML += '<div class="gantt-header">';
    ganttHTML += '<div style="min-width: 350px; font-weight: 600;">Actividad</div>';
    ganttHTML += '<div style="flex: 1; display: flex; justify-content: space-between; padding: 0 1rem; font-size: 0.75rem; color: #718096;">';
    ganttHTML += '<span>Mar 2025</span><span>Abr</span><span>May</span><span>Jun</span><span>Jul</span><span>Ago</span><span>Sep</span><span>Oct</span>';
    ganttHTML += '</div>';
    ganttHTML += '</div>';
    
    // Renderizar todas las actividades detalladas por fase
    cronogramaData.fases.forEach(fase => {
        // Título de fase
        ganttHTML += crearBarraGantt(fase, fechaInicio, diasTotales, true);
        
        if (fase.id === '3.0' && fase.sprints) {
            // Fase de ejecución con sprints
            fase.sprints.forEach(sprint => {
                // Título de sprint
                ganttHTML += crearBarraGantt(sprint, fechaInicio, diasTotales, true);
                
                // Actividades del sprint
                if (sprint.actividades) {
                    sprint.actividades.forEach(actividad => {
                        ganttHTML += crearBarraGantt({
                            ...actividad,
                            id: '  ' + actividad.id,
                            faseColor: window.CronogramaUtils.obtenerColorFase(sprint.id)
                        }, fechaInicio, diasTotales, false);
                    });
                }
            });
        } else {
            // Fases normales con actividades
            if (fase.actividades) {
                fase.actividades.forEach(actividad => {
                    ganttHTML += crearBarraGantt({
                        ...actividad,
                        id: '  ' + actividad.id,
                        faseColor: window.CronogramaUtils.obtenerColorFase(fase.id)
                    }, fechaInicio, diasTotales, false);
                });
            }
        }
    });
    
    ganttHTML += '</div>';
    container.innerHTML = ganttHTML;
}

function crearBarraGantt(item, fechaProyectoInicio, diasTotalesProyecto, esCabecera = false) {
    const fechaInicio = new Date(item.fecha_inicio);
    const diasDesdeInicio = window.CronogramaUtils.calcularDias(fechaProyectoInicio.toISOString().split('T')[0], item.fecha_inicio);
    const duracionDias = window.CronogramaUtils.calcularDias(item.fecha_inicio, item.fecha_fin);
    
    const left = (diasDesdeInicio / diasTotalesProyecto) * 100;
    const width = (duracionDias / diasTotalesProyecto) * 100;
    
    // Ancho mínimo para barras pequeñas
    const minWidthPercent = esCabecera ? 1.5 : 1.0; // mínimo 1.5% para cabeceras, 1% para actividades
    const adjustedWidth = Math.max(width, minWidthPercent);
    
    const color = item.faseColor || window.CronogramaUtils.obtenerColorFase(item.id);
    const esHito = item.hito === true;
    
    // Estilos diferentes para cabeceras (fases/sprints) y actividades
    const nombreStyle = esCabecera 
        ? 'font-weight: 600; background: #f7fafc; padding: 0.5rem;' 
        : 'font-size: 0.875rem; padding-left: 1rem;';
    
    const barStyle = esCabecera
        ? `left: ${left}%; width: ${adjustedWidth}%; min-width: 40px; background-color: ${color}; opacity: 0.75; height: 30px; font-weight: 700;`
        : `left: ${left}%; width: ${adjustedWidth}%; min-width: 30px; background-color: ${color}; height: 24px;`;
    
    // Solo mostrar duración si es >= 1 día y la barra es lo suficientemente ancha (más de 2% del total)
    // Para barras pequeñas, mostrar en el tooltip en lugar del texto
    const mostrarDuracion = duracionDias >= 1 && adjustedWidth > 2;
    const duracionTexto = mostrarDuracion ? `${duracionDias}d` : '';
    const hitoIcono = esHito ? '🎯 ' : '';
    
    // Tooltip para mostrar información completa
    const tooltip = `${item.nombre} (${duracionDias}d) - Inicio: ${item.fecha_inicio} | Fin: ${item.fecha_fin}`;
    
    return `
        <div class="gantt-row" ${esCabecera ? 'style="background: #f7fafc;"' : ''}>
            <div class="gantt-task-name" style="${nombreStyle}">${hitoIcono}${item.id} - ${item.nombre}</div>
            <div class="gantt-timeline">
                <div class="gantt-bar" style="${barStyle}" title="${tooltip}">
                    ${duracionTexto}
                </div>
            </div>
        </div>
    `;
}

// ==================== RENDERIZAR HITOS ====================

function renderizarHitos() {
    const cronogramaData = window.CronogramaUtils.getData();
    const container = document.getElementById('milestones-container');
    if (!container || !cronogramaData || !cronogramaData.hitos) return;
    
    container.innerHTML = '';
    
    cronogramaData.hitos.forEach((hito, index) => {
        const faseColor = index < 2 ? '#667eea' : index < 8 ? '#764ba2' : '#ff6a00';
        
        const hitoHTML = `
            <div class="milestone-card">
                <div class="milestone-header">
                    <div class="milestone-title">🎯 ${hito.descripcion}</div>
                    <div class="milestone-date">${window.CronogramaUtils.formatearFecha(hito.fecha)}</div>
                </div>
                <div class="milestone-phase" style="background-color: ${faseColor};">
                    Hito ${index + 1} de ${cronogramaData.hitos.length}
                </div>
                <div class="milestone-description">
                    Fecha límite: ${hito.fecha} | Estado: ${new Date(hito.fecha) < new Date() ? '✅ Completado' : '⏳ Pendiente'}
                </div>
            </div>
        `;
        
        container.innerHTML += hitoHTML;
    });
}

// ==================== CONTROLES GANTT ====================

document.getElementById('show-all-activities')?.addEventListener('change', (e) => {
    const rows = document.querySelectorAll('.gantt-row');
    const soloFases = document.getElementById('show-only-phases');
    
    if (!e.target.checked) {
        soloFases.checked = true;
    }
    
    rows.forEach(row => {
        const taskName = row.querySelector('.gantt-task-name');
        const esActividad = taskName && taskName.textContent.trim().startsWith('  ');
        
        if (e.target.checked) {
            row.style.display = 'flex';
        } else {
            row.style.display = esActividad ? 'none' : 'flex';
        }
    });
});

document.getElementById('show-only-phases')?.addEventListener('change', (e) => {
    const todoCheckbox = document.getElementById('show-all-activities');
    
    if (e.target.checked) {
        todoCheckbox.checked = false;
        todoCheckbox.dispatchEvent(new Event('change'));
    } else {
        todoCheckbox.checked = true;
        todoCheckbox.dispatchEvent(new Event('change'));
    }
});

document.getElementById('zoom-in')?.addEventListener('click', () => {
    const ganttChart = document.getElementById('gantt-chart');
    const currentWidth = ganttChart.querySelector('div').style.minWidth || '1800px';
    const newWidth = parseInt(currentWidth) * 1.3;
    ganttChart.querySelector('div').style.minWidth = `${newWidth}px`;
});

document.getElementById('zoom-out')?.addEventListener('click', () => {
    const ganttChart = document.getElementById('gantt-chart');
    const currentWidth = ganttChart.querySelector('div').style.minWidth || '1800px';
    const newWidth = Math.max(1200, parseInt(currentWidth) * 0.7);
    ganttChart.querySelector('div').style.minWidth = `${newWidth}px`;
});

document.getElementById('reset-gantt')?.addEventListener('click', () => {
    const ganttChart = document.getElementById('gantt-chart');
    ganttChart.querySelector('div').style.minWidth = '1800px';
    document.getElementById('show-all-activities').checked = true;
    document.getElementById('show-only-phases').checked = false;
    
    const rows = document.querySelectorAll('.gantt-row');
    rows.forEach(row => row.style.display = 'flex');
});

// ==================== UTILIDADES ====================

// Función para exportar datos
window.exportarCronograma = function() {
    const cronogramaData = window.CronogramaUtils.getData();
    const dataStr = JSON.stringify(cronogramaData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'cronograma-export.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
};

// Función para imprimir
window.imprimirCronograma = function() {
    window.print();
};

console.log('📊 Módulo app.js cargado correctamente');
