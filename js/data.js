// ==================== CARGAR DATOS DESDE cronograma.json ====================
// Este archivo carga los datos del cronograma desde el archivo JSON externo

let cronogramaData = null;

// Función para cargar el JSON
async function cargarDatosJSON() {
    try {
        const response = await fetch('./js/cronograma-data.json');
        if (!response.ok) {
            throw new Error('No se pudo cargar cronograma-data.json');
        }
        cronogramaData = await response.json();
        console.log('✅ Datos cargados correctamente:', cronogramaData);
        return cronogramaData;
    } catch (error) {
        console.error('❌ Error al cargar datos:', error);
        console.error('Intentando cargar desde ruta alternativa...');
        
        try {
            const response2 = await fetch('../cronograma.json');
            if (!response2.ok) {
                throw new Error('No se pudo cargar cronograma.json');
            }
            cronogramaData = await response2.json();
            console.log('✅ Datos cargados desde ruta alternativa:', cronogramaData);
            return cronogramaData;
        } catch (error2) {
            console.error('❌ Error en ruta alternativa:', error2);
            // Datos de respaldo mínimos en caso de error
            cronogramaData = {
                proyecto: {
                    nombre: "Error al cargar datos",
                    mensaje: "No se pudo cargar el archivo JSON. Intenta abrir con un servidor local."
                }
            };
            return cronogramaData;
        }
    }
}

// ==================== FUNCIONES AUXILIARES ====================

// Formatear fecha a formato legible
function formatearFecha(fecha) {
    if (!fecha) return 'N/A';
    const [año, mes, dia] = fecha.split('-');
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    return `${dia} ${meses[parseInt(mes) - 1]} ${año}`;
}

// Calcular días entre fechas
function calcularDias(fechaInicio, fechaFin) {
    const inicio = new Date(fechaInicio);
    const fin = new Date(fechaFin);
    const diferencia = fin - inicio;
    return Math.ceil(diferencia / (1000 * 60 * 60 * 24));
}

// Obtener color de fase
function obtenerColorFase(faseId) {
    const colores = {
        '1.0': '#5B21B6',  // Iniciación - Púrpura oscuro
        '2.0': '#7C3AED',  // Planificación - Violeta
        '3.0': '#5B21B6',  // Ejecución - Púrpura oscuro
        '3.1': '#DB2777',  // Sprint 1 - Rosa fuerte
        '3.2': '#2563EB',  // Sprint 2 - Azul fuerte
        '3.3': '#059669',  // Sprint 3 - Verde esmeralda
        '3.4': '#DC2626',  // Sprint 4 - Rojo fuerte
        '3.5': '#D97706',  // Sprint 5 - Naranja fuerte
        '3.6': '#0891B2',  // Sprint 6 - Cyan fuerte
        '4.0': '#0D9488',  // Control - Teal
        '5.0': '#EA580C'   // Cierre - Naranja oscuro
    };
    return colores[faseId] || '#5B21B6';
}

// Obtener todas las actividades de todas las fases
function obtenerTodasActividades() {
    if (!cronogramaData || !cronogramaData.fases) return [];
    
    let todasActividades = [];
    
    cronogramaData.fases.forEach(fase => {
        // Actividades de fases normales
        if (fase.actividades) {
            fase.actividades.forEach(act => {
                todasActividades.push({
                    ...act,
                    fase: fase.nombre,
                    faseId: fase.id,
                    color: obtenerColorFase(fase.id)
                });
            });
        }
        
        // Actividades de sprints
        if (fase.sprints) {
            fase.sprints.forEach(sprint => {
                if (sprint.actividades) {
                    sprint.actividades.forEach(act => {
                        todasActividades.push({
                            ...act,
                            fase: sprint.nombre,
                            faseId: sprint.id,
                            sprint: sprint.nombre,
                            color: obtenerColorFase(sprint.id)
                        });
                    });
                }
            });
        }
    });
    
    return todasActividades;
}

// Obtener solo los hitos
function obtenerHitos() {
    if (!cronogramaData) return [];
    
    const actividades = obtenerTodasActividades();
    return actividades.filter(act => act.hito === true);
}

// Filtrar actividades por fase
function filtrarPorFase(faseId) {
    const actividades = obtenerTodasActividades();
    return actividades.filter(act => act.faseId && act.faseId.startsWith(faseId));
}

// Exportar funciones para uso global
window.CronogramaUtils = {
    cargarDatosJSON,
    formatearFecha,
    calcularDias,
    obtenerColorFase,
    obtenerTodasActividades,
    obtenerHitos,
    filtrarPorFase,
    getData: () => cronogramaData
};
