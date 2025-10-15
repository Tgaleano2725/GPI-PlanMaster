// ==================== DATOS KPI Y CONTROL ECONÓMICO ====================

// Presupuesto total de ejecución
const BUDGET_TOTAL = 130020000;

// Baseline por sprint (PV plan) según casos de uso: 6,10,12,10,10,12
const SPRINTS = [
  { 
    id: 1, 
    nombre: "Sprint 1 – Autenticación y Perfiles", 
    cu: 6,  
    porcentaje: 0.10,   
    pv: 13002000,
    avance: 0 // % avance del sprint (0-100)
  },
  { 
    id: 2, 
    nombre: "Sprint 2 – Gestión de Proyectos", 
    cu: 10, 
    porcentaje: 1/6,   
    pv: 21670000,
    avance: 0
  },
  { 
    id: 3, 
    nombre: "Sprint 3 – Gestión de Tareas", 
    cu: 12, 
    porcentaje: 0.20,  
    pv: 26004000,
    avance: 0
  },
  { 
    id: 4, 
    nombre: "Sprint 4 – Recursos y Costos", 
    cu: 10, 
    porcentaje: 1/6,   
    pv: 21670000,
    avance: 0
  },
  { 
    id: 5, 
    nombre: "Sprint 5 – Riesgos y Calidad", 
    cu: 10, 
    porcentaje: 1/6,   
    pv: 21670000,
    avance: 0
  },
  { 
    id: 6, 
    nombre: "Sprint 6 – Reportes y Dashboards", 
    cu: 12, 
    porcentaje: 0.20,  
    pv: 26004000,
    avance: 0
  },
];

// Presupuesto por rol (plan) – coherente con el documento
const ROLES_PLAN = [
  { rol: "Project Manager",         plan_budget: 24000000,  rate: 120000 },
  { rol: "Analista Funcional",      plan_budget: 20000000,  rate: 100000 },
  { rol: "Desarrollador Backend",   plan_budget: 26000000,  rate: 110000 },
  { rol: "Desarrollador Frontend",  plan_budget: 18000000,  rate:  95000 },
  { rol: "QA / Tester",             plan_budget: 12000000,  rate:  85000 },
  { rol: "Diseñador UX/UI",         plan_budget: 10000000,  rate:  80000 },
  { rol: "DevOps / Infraestructura",plan_budget: 20020000,  rate: 110000 },
];

// Horas planificadas por rol (se calculan automáticamente)
const ROLES_PLAN_WITH_HOURS = ROLES_PLAN.map(r => ({
  ...r,
  plan_hours: Math.round(r.plan_budget / r.rate)
}));

// Horas reales por sprint y rol (inicializadas en 0)
// Estructura: { sprintId: { rol: horas_reales } }
const horasReales = {};
SPRINTS.forEach(sprint => {
  horasReales[sprint.id] = {};
  ROLES_PLAN.forEach(rol => {
    horasReales[sprint.id][rol.rol] = 0;
  });
});

// Exportar datos
window.KPIData = {
  BUDGET_TOTAL,
  SPRINTS,
  ROLES_PLAN,
  ROLES_PLAN_WITH_HOURS,
  horasReales
};
