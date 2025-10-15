// ==================== DATOS KPI Y CONTROL ECONÓMICO ====================

// Presupuesto total de ejecución
const BUDGET_TOTAL = 130020000;

// Baseline por sprint (PV plan) según casos de uso: 6,10,12,10,10,12
// Estado inicial de avance de cada sprint (0-100%) con datos realistas
const SPRINTS = [
    { id: 1, nombre: 'Sprint 1', cu: 6, porcentaje: 10, pv: 13002000, avance: 100 },
    { id: 2, nombre: 'Sprint 2', cu: 10, porcentaje: 16.67, pv: 21670000, avance: 100 },
    { id: 3, nombre: 'Sprint 3', cu: 12, porcentaje: 20, pv: 26004000, avance: 95 },
    { id: 4, nombre: 'Sprint 4', cu: 12, porcentaje: 20, pv: 26004000, avance: 85 },
    { id: 5, nombre: 'Sprint 5', cu: 10, porcentaje: 16.67, pv: 21670000, avance: 70 },
    { id: 6, nombre: 'Sprint 6', cu: 10, porcentaje: 16.67, pv: 21670000, avance: 40 }
];

// Presupuesto por rol (plan) – coherente con el documento oficial
// Tarifas calculadas: presupuesto_total / horas_estimadas_proyecto
const ROLES_PLAN = [
  { rol: "Project Manager",         plan_budget: 24000000,  rate: 120000 },  // 18% - 200h
  { rol: "Analista Funcional",      plan_budget: 20000000,  rate: 100000 },  // 15% - 200h
  { rol: "Desarrollador Backend",   plan_budget: 26000000,  rate: 130000 },  // 20% - 200h
  { rol: "Desarrollador Frontend",  plan_budget: 18000000,  rate:  90000 },  // 14% - 200h
  { rol: "QA / Tester",             plan_budget: 12000000,  rate:  80000 },  // 9%  - 150h
  { rol: "Diseñador UX/UI",         plan_budget: 10000000,  rate:  80000 },  // 8%  - 125h
  { rol: "DevOps / Infraestructura",plan_budget: 20020000,  rate: 114400 },  // 16% - 175h
];

// Horas planificadas por rol (se calculan automáticamente)
const ROLES_PLAN_WITH_HOURS = ROLES_PLAN.map(r => ({
  ...r,
  plan_hours: Math.round(r.plan_budget / r.rate)
}));

// Horas reales trabajadas por rol en cada sprint - nombres actualizados
const horasReales = {
    1: { 'Project Manager': 18, 'Analista Funcional': 25, 'Desarrollador Backend': 35, 'Desarrollador Frontend': 30, 'QA / Tester': 20, 'Diseñador UX/UI': 22, 'DevOps / Infraestructura': 12 },
    2: { 'Project Manager': 25, 'Analista Funcional': 40, 'Desarrollador Backend': 55, 'Desarrollador Frontend': 50, 'QA / Tester': 35, 'Diseñador UX/UI': 30, 'DevOps / Infraestructura': 18 },
    3: { 'Project Manager': 28, 'Analista Funcional': 45, 'Desarrollador Backend': 68, 'Desarrollador Frontend': 62, 'QA / Tester': 42, 'Diseñador UX/UI': 35, 'DevOps / Infraestructura': 22 },
    4: { 'Project Manager': 30, 'Analista Funcional': 48, 'Desarrollador Backend': 75, 'Desarrollador Frontend': 70, 'QA / Tester': 50, 'Diseñador UX/UI': 38, 'DevOps / Infraestructura': 28 },
    5: { 'Project Manager': 26, 'Analista Funcional': 42, 'Desarrollador Backend': 58, 'Desarrollador Frontend': 55, 'QA / Tester': 38, 'Diseñador UX/UI': 32, 'DevOps / Infraestructura': 20 },
    6: { 'Project Manager': 22, 'Analista Funcional': 35, 'Desarrollador Backend': 48, 'Desarrollador Frontend': 45, 'QA / Tester': 30, 'Diseñador UX/UI': 28, 'DevOps / Infraestructura': 16 }
};

// Exportar datos
window.KPIData = {
  BUDGET_TOTAL,
  SPRINTS,
  ROLES_PLAN,
  ROLES_PLAN_WITH_HOURS,
  horasReales
};
