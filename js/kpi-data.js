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

// Horas reales trabajadas por rol en cada sprint con datos realistas del proyecto
const horasReales = {
    1: { 'Project Manager': 18, 'Business Analyst': 25, 'Backend Developer': 35, 'Frontend Developer': 30, 'QA Engineer': 20, 'UX/UI Designer': 22, 'DevOps Engineer': 12 },
    2: { 'Project Manager': 25, 'Business Analyst': 40, 'Backend Developer': 55, 'Frontend Developer': 50, 'QA Engineer': 35, 'UX/UI Designer': 30, 'DevOps Engineer': 18 },
    3: { 'Project Manager': 28, 'Business Analyst': 45, 'Backend Developer': 68, 'Frontend Developer': 62, 'QA Engineer': 42, 'UX/UI Designer': 35, 'DevOps Engineer': 22 },
    4: { 'Project Manager': 30, 'Business Analyst': 48, 'Backend Developer': 75, 'Frontend Developer': 70, 'QA Engineer': 50, 'UX/UI Designer': 38, 'DevOps Engineer': 28 },
    5: { 'Project Manager': 26, 'Business Analyst': 42, 'Backend Developer': 58, 'Frontend Developer': 55, 'QA Engineer': 38, 'UX/UI Designer': 32, 'DevOps Engineer': 20 },
    6: { 'Project Manager': 22, 'Business Analyst': 35, 'Backend Developer': 48, 'Frontend Developer': 45, 'QA Engineer': 30, 'UX/UI Designer': 28, 'DevOps Engineer': 16 }
};

// Exportar datos
window.KPIData = {
  BUDGET_TOTAL,
  SPRINTS,
  ROLES_PLAN,
  ROLES_PLAN_WITH_HOURS,
  horasReales
};
