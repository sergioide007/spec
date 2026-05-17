/* ────────────────────────────────────────────────────────────
   DATA LAYER — única fuente de verdad.
   Cambiar aquí actualiza TODO el UI automáticamente.
──────────────────────────────────────────────────────────── */
const DATA = {

  heroStats: [
    { num: "45%", label: "del código IA sin SPEC contiene vulnerabilidades", src: "Rick-Brick, 2026" },
    { num: "×100", label: "multiplicador de costo por iteración sin especificación", src: "estimación tokens" },
    { num: "1 pasada", label: "SPEC precisa → código limpio y testeable en una pasada", src: "L. Campbell, DEV 2026" },
  ],

  introPillars: [
    {
      icon: "📐",
      title: "SPEC antes de código",
      body: "Un documento de especificación preciso define el problema, los flujos, los contratos y los criterios de aceptación antes de que la IA genere una sola línea.",
      tag: "Principio",
      tagType: "green"
    },
    {
      icon: "🔗",
      title: "Decisiones versionadas",
      body: "Architecture Decision Records (ADR) registran el *por qué* de cada decisión. La IA tiene contexto, no improvisa. El equipo tiene historia.",
      tag: "ADR",
      tagType: "blue"
    },
    {
      icon: "🤖",
      title: "Agentes coordinados",
      body: "Diferentes modelos IA toman roles específicos: validación de dominio, seguridad, UX, generación de código. El orquestador distribuye y consolida.",
      tag: "Multi-agente",
      tagType: ""
    },
    {
      icon: "📊",
      title: "Métricas verificables",
      body: "Tokens consumidos, costo por cambio, número de iteraciones y cobertura de tests son trazables desde el primer sprint.",
      tag: "Evidencia",
      tagType: "warn"
    },
    {
      icon: "🚫",
      title: "Sin Vibe Coding",
      body: "El Vibe Coding (\"dile a la IA que haga algo y reza\") produce deuda técnica masiva, architecture drift y código ininteligible en semanas.",
      tag: "Antipatrón",
      tagType: "red"
    },
    {
      icon: "⚖️",
      title: "Supervisión senior",
      body: "La IA amplifica la capacidad del arquitecto, no lo reemplaza. El senior valida la SPEC, revisa los ADR y aprueba las decisiones críticas.",
      tag: "Gobierno",
      tagType: "green"
    },
  ],

  goldenRules: [
    { icon: "📝", title: "SPEC primero", body: "Antes de quemar créditos, definimos el problema completo." },
    { icon: "🔍", title: "IA para analizar", body: "La IA valida y propone; el arquitecto decide." },
    { icon: "📁", title: "Documentar en ADR", body: "Cada decisión arquitectónica queda registrada con contexto." },
    { icon: "👁", title: "Supervisión senior", body: "El senior revisa implementación y valida criterios de salida." },
  ],

  flowSteps: [
    {
      num: "01",
      title: "Problema y contexto",
      role: "Arquitecto Senior",
      body: "Define el problema con precisión quirúrgica: qué debe hacer el sistema, qué NO debe hacer, stakeholders, restricciones de negocio.",
      detail: "→ Artefacto: Problem Statement Document (PSD)\n→ Criterio de salida: todos los stakeholders firman el problema",
    },
    {
      num: "02",
      title: "Mapeo de flujos (User Stories + Flows)",
      role: "Arquitecto + Product",
      body: "Diseñar los flujos principales como diagramas de secuencia o swimlanes. Ningún flujo implícito. Todo explícito y revisado.",
      detail: "→ Artefacto: Diagrama de secuencia (Mermaid/PlantUML)\n→ Criterio: edge cases documentados, happy path + error paths",
    },
    {
      num: "03",
      title: "SPEC técnica detallada",
      role: "Arquitecto Senior",
      body: "Contratos de API, schemas de datos, reglas de negocio, criterios de aceptación, consideraciones de seguridad y performance.",
      detail: "→ Artefacto: SPEC.md versionado en Git\n→ Criterio: SPEC revisada por peer + QA antes de pasar a IA",
    },
    {
      num: "04",
      title: "Validación con agentes IA",
      role: "Orquestador IA",
      body: "Agentes especializados analizan la SPEC: seguridad, dominio, UX/UI, compliance. Cada agente entrega un informe estructurado.",
      detail: "→ Artefacto: Informe de validación multi-agente\n→ Criterio: 0 bloqueantes de seguridad, dominio aprobado",
    },
    {
      num: "05",
      title: "Generación de código desde SPEC",
      role: "IA + Dev",
      body: "La IA genera código usando la SPEC como contexto completo. Una sola pasada, código limpio, testeable. Sin iteraciones especulativas.",
      detail: "→ Artefacto: PR con código + tests generados\n→ Criterio: cobertura >80%, build verde, lint limpio",
    },
    {
      num: "06",
      title: "Review + ADR",
      role: "Arquitecto Senior",
      body: "El arquitecto revisa el output de la IA, valida contra la SPEC, registra decisiones tomadas en ADR y aprueba o itera.",
      detail: "→ Artefacto: ADR actualizado, PR aprobado\n→ Criterio: SPEC cumplida, deuda técnica documentada",
    },
    {
      num: "07",
      title: "Deploy + observabilidad",
      role: "DevOps + Arquitecto",
      body: "Deploy con feature flags, métricas de tokens/costo registradas, logs de decisiones IA trazables en la plataforma de observabilidad.",
      detail: "→ Artefacto: Dashboard de métricas, logs en Datadog/GCP\n→ Criterio: SLOs definidos en SPEC cumplidos",
    },
  ],

  specSections: [
    {
      head: "Qué INCLUYE una buena SPEC",
      items: [
        "Descripción del problema y contexto de negocio",
        "Flujos de usuario (happy path + error paths)",
        "Contratos de API (endpoints, schemas, códigos de respuesta)",
        "Reglas de negocio y validaciones explícitas",
        "Criterios de aceptación medibles",
        "Consideraciones de seguridad y compliance",
        "Restricciones de performance (latencia, throughput)",
        "Decisiones arquitectónicas (patrón, tecnología, razón)",
      ]
    },
    {
      head: "Qué EVITA una buena SPEC",
      items: [
        "Lenguaje ambiguo ('el sistema debería ser rápido')",
        "Flujos implícitos no documentados",
        "Suposiciones sobre el estado actual del sistema",
        "Decisiones de implementación sin justificación",
        "Criterios de aceptación subjetivos",
        "Omitir edge cases y estados de error",
        "No versionar la SPEC junto al código",
        "SPEC desactualizada respecto a la implementación",
      ]
    }
  ],

  specExample: {
    title: "SPEC: Implementar Login Seguro con MFA",
    sections: [
      {
        head: "CONTEXTO",
        body: "El sistema de autenticación actual usa solo password. Se requiere MFA para cumplir SOC2. Afecta a 50k usuarios activos. Plazo: Sprint 14."
      },
      {
        head: "FLUJO PRINCIPAL",
        body: "Usuario ingresa email → Sistema valida existencia → Sistema envía TOTP por email/app → Usuario ingresa código → Sistema valida (ventana ±30s) → Genera JWT con claim mfa:true → Redirige a dashboard."
      },
      {
        head: "CONTRATOS API",
        body: "POST /auth/mfa/init → { userId } → { challengeId, expiresAt }\nPOST /auth/mfa/verify → { challengeId, code } → { accessToken, refreshToken } | 401 { error: 'invalid_code' | 'expired' }"
      },
      {
        head: "REGLAS DE NEGOCIO",
        body: "Código TOTP válido por 5 minutos. Máximo 3 intentos fallidos → bloqueo 15 min. Audit log obligatorio de cada intento (exitoso y fallido). Notificación por email en login desde nuevo dispositivo."
      },
      {
        head: "CRITERIOS DE ACEPTACIÓN",
        body: "✅ Tests unitarios cobertura >90% en lógica de validación. ✅ Pentesting sin bypass de MFA. ✅ Latencia p99 < 300ms. ✅ Sin regresión en tests existentes de auth."
      }
    ]
  },

  models: {
    headers: ["Modelo", "Proveedor", "Costo / 1M tokens", "Contexto", "Mejor uso en SDD", "Rol recomendado"],
    rows: [
      { model: "Claude Sonnet 4.6", provider: "Anthropic", cost: "$3.00 / $15.00", ctx: "200k", use: "Análisis SPEC, ADR, revisión", role: "Arquitecto IA", badge: "blue" },
      { model: "Claude Opus 4.6", provider: "Anthropic", cost: "$15.00 / $75.00", ctx: "200k", use: "Validación profunda, seguridad", role: "Auditor senior", badge: "blue" },
      { model: "GPT-4o", provider: "OpenAI", cost: "$2.50 / $10.00", ctx: "128k", use: "Generación rápida de código", role: "Dev IA", badge: "green" },
      { model: "Gemini 2.5 Pro", provider: "Google", cost: "$1.25 / $10.00", ctx: "1M", use: "Análisis de contexto largo", role: "Analizador", badge: "green" },
      { model: "o3", provider: "OpenAI", cost: "$10.00 / $40.00", ctx: "200k", use: "Razonamiento complejo, debug", role: "Razonador", badge: "red" },
      { model: "Claude Haiku 4.5", provider: "Anthropic", cost: "$0.80 / $4.00", ctx: "200k", use: "Tasks rápidos, clasificación", role: "Worker rápido", badge: "green" },
    ]
  },

  agents: [
    { icon: "🔒", title: "Agente Seguridad", body: "Analiza SPEC para detectar vulnerabilidades, surface attack, OWASP top 10, autenticación y autorización." },
    { icon: "📋", title: "Agente Dominio", body: "Valida reglas de negocio, contratos de datos e integridad lógica contra la especificación funcional." },
    { icon: "🎨", title: "Agente UX/UI", body: "Evalúa flujos de usuario, accesibilidad (WCAG), consistencia de diseño y casos de error desde el usuario." },
    { icon: "⚙️", title: "Agente Generador", body: "Genera código limpio a partir de la SPEC validada. Produce tests unitarios y documentación inline automáticamente." },
    { icon: "📊", title: "Agente Métricas", body: "Registra tokens consumidos, costo por tarea, latencia de respuestas y cobertura de tests en cada sprint." },
    { icon: "🎛", title: "Orquestador", body: "Coordina agentes, distribuye tareas en paralelo, consolida resultados y genera el informe final en ADR." },
  ],

  simulatorModels: [
    { label: "Claude Haiku 4.5", inputPer1M: 0.80, outputPer1M: 4.00 },
    { label: "GPT-4o mini", inputPer1M: 0.15, outputPer1M: 0.60 },
    { label: "Claude Sonnet 4.6", inputPer1M: 3.00, outputPer1M: 15.00 },
    { label: "GPT-4o", inputPer1M: 2.50, outputPer1M: 10.00 },
    { label: "Gemini 2.5 Pro", inputPer1M: 1.25, outputPer1M: 10.00 },
    { label: "Claude Opus 4.6", inputPer1M: 15.00, outputPer1M: 75.00 },
    { label: "o3", inputPer1M: 10.00, outputPer1M: 40.00 },
  ],

  adrs: [
    {
      id: "ADR-001",
      title: "Adoptar Spec-Driven Development como metodología estándar",
      status: "Aceptado",
      statusType: "green",
      context: "El equipo experimenta architecture drift y costos de tokens incontrolados tras adoptar Vibe Coding en el sprint 8. El 45% del código generado requirió reescritura completa.",
      decision: "Toda feature nueva requiere una SPEC revisada por arquitecto senior antes de iniciar generación con IA. La SPEC se versiona junto al código en el mismo PR.",
      consequences: "Positivo: reducción estimada del 80% en iteraciones de corrección. Positivo: trazabilidad completa de decisiones. Negativo: overhead inicial de 1-2 días por feature para redactar la SPEC.",
      alternatives: "Vibe Coding puro (descartado por evidencia), TDD como driver (insuficiente para contexto IA), documentación post-hoc (no previene el problema)."
    },
    {
      id: "ADR-002",
      title: "Multi-agente con modelos especializados por rol",
      status: "Aceptado",
      statusType: "green",
      context: "Un solo modelo general presenta sesgos según el dominio de validación. Seguridad requiere razonamiento diferente a generación de código o validación de UX.",
      decision: "Se adopta arquitectura multi-agente: Haiku para tareas rápidas de clasificación, Sonnet para análisis y ADR, Opus para auditorías de seguridad profundas, GPT-4o para generación rápida de código.",
      consequences: "Positivo: calidad superior por especialización. Positivo: costo optimizado (Haiku donde es suficiente). Negativo: complejidad de orquestación. Negativo: latencia adicional por coordinación.",
      alternatives: "Modelo único (descartado por costo y calidad), selección manual por dev (descartado por inconsistencia)."
    },
    {
      id: "ADR-003",
      title: "Versionar SPECs en Git junto al código fuente",
      status: "Aceptado",
      statusType: "green",
      context: "Las SPECs desactualizadas son peores que no tener SPEC. El equipo necesita que la especificación evolucione junto a la implementación con trazabilidad clara.",
      decision: "Cada SPEC vive en /docs/specs/{feature-name}.md en el mismo repositorio. El PR que implementa la feature incluye obligatoriamente la SPEC aprobada. Los ADR viven en /docs/adr/.",
      consequences: "Positivo: SPEC siempre en sync con código. Positivo: history de git muestra evolución de decisiones. Negativo: disciplina de equipo requerida para mantener SPECs al día.",
      alternatives: "Confluence/Notion (descartado por desincronización), sin documentación (descartado), Google Docs (descartado por sin versioning automático)."
    },
    {
      id: "ADR-004",
      title: "Definir umbral de tokens y alertas de costo por sprint",
      status: "En revisión",
      statusType: "warn",
      context: "Sin límites explícitos, el costo de tokens puede escalar x100 en un sprint sin SPEC. Se necesita un sistema de alertas que detenga el consumo irresponsable.",
      decision: "PENDIENTE: se evalúan tres opciones: (a) presupuesto fijo por feature, (b) alerta cuando iteraciones > 5 sobre la misma tarea, (c) umbral por sprint del equipo.",
      consequences: "La decisión afecta la autonomía de los devs y la velocidad. Demasiado restrictivo puede bloquear experimentación válida.",
      alternatives: "Sin límites (descartado), límite por dev (difícil de auditar), límite por feature (opción preferida pero requiere tooling)."
    },
  ],

  risks: [
    {
      level: "high",
      levelLabel: "RIESGO ALTO",
      title: "Architecture Drift",
      body: "La IA genera código que funciona pero diverge silenciosamente de la arquitectura definida. Sin SPEC, nadie lo detecta hasta que el sistema es inmantenible.",
      mitigation: "Mitigación: SPEC versionada + review de arquitecto en cada PR. ADR obligatorio para decisiones de patrón."
    },
    {
      level: "high",
      levelLabel: "RIESGO ALTO",
      title: "Callejón sin salida (Dead End)",
      body: "La IA genera miles de líneas de código incomprensibles para el equipo. Sin entendimiento, no se puede mantener, extender ni debuggear.",
      mitigation: "Mitigación: SPEC limita el scope de cada generación. Code review obligatorio. Documentación inline generada junto al código."
    },
    {
      level: "high",
      levelLabel: "RIESGO ALTO",
      title: "Vulnerabilidades de seguridad",
      body: "El 45% del código generado por IA sin especificación contiene vulnerabilidades. Inyección SQL, XSS, autenticación débil son frecuentes.",
      mitigation: "Mitigación: Agente de seguridad valida SPEC y código. Pentesting obligatorio antes de cada release."
    },
    {
      level: "med",
      levelLabel: "RIESGO MEDIO",
      title: "Consumo ineficiente de tokens",
      body: "Sin SPEC, cada corrección requiere volver a enviar todo el contexto. Las iteraciones se multiplican. Un cambio de USD 0.20 puede costar USD 20 sin control.",
      mitigation: "Mitigación: Simulador de costos + alertas por sprint. SPEC reduce iteraciones al mínimo necesario."
    },
    {
      level: "med",
      levelLabel: "RIESGO MEDIO",
      title: "SPEC desactualizada",
      body: "Una SPEC que no evoluciona con el código es peor que no tener SPEC. Genera falsa confianza y decisiones basadas en información incorrecta.",
      mitigation: "Mitigación: PR requiere actualización de SPEC como criterio de merge. Revisión de SPECs en cada sprint review."
    },
    {
      level: "low",
      levelLabel: "RIESGO BAJO",
      title: "Overhead inicial de documentación",
      body: "La redacción de la SPEC toma 1-2 días por feature. Equipos presionados pueden intentar saltarse el proceso.",
      mitigation: "Mitigación: Templates de SPEC predefinidos. El tiempo de SPEC se recupera en la primera iteración ahorrada."
    },
  ],

  quotes: [
    {
      text: "La única forma de ir rápido es ir bien.",
      author: "Robert C. Martin",
      source: "Clean Architecture, 2017"
    },
    {
      text: "Un agente de IA que recibe una especificación precisa genera código limpio y testeable en una sola pasada. Sin especificación, necesita diez pasadas para llegar al mismo resultado.",
      author: "Lewis Campbell",
      source: "DEV Community, 2026"
    },
    {
      text: "Tras el auge del Vibe Coding, el 45% del código generado por IA sin especificación contenía vulnerabilidades de seguridad críticas.",
      author: "Rick-Brick",
      source: "Security Analysis Report, 2026"
    },
    {
      text: "El Vibe Coding puede producir un prototipo en horas. Mantenerlo durante seis meses cuesta diez veces más que haberlo especificado correctamente desde el inicio.",
      author: "Kelsey Hightower",
      source: "Platform Engineering Conf, 2025"
    },
  ],

  repos: [
    {
      name: "github/spec-kit",
      url: "https://github.com/github/spec-kit",
      desc: "Toolkit oficial de GitHub para SDD. Templates de PRD, SPEC y tareas. Integra con Copilot, Claude Code y Gemini CLI.",
      tag: "■ MIT · GitHub oficial"
    },
    {
      name: "Fission-AI/OpenSpec",
      url: "https://github.com/Fission-AI/OpenSpec",
      desc: "CLI ligero: propose → apply → archive. Soporta Claude Code, Cursor, Copilot y 20+ agentes. Ideal para proyectos brownfield.",
      tag: "■ MIT · 28k■"
    },
    {
      name: "npryce/adr-tools",
      url: "https://github.com/npryce/adr-tools",
      desc: "CLI estándar para Architecture Decision Records como Markdown junto al código. brew install adr-tools.",
      tag: "■ MIT · 5.4k■ · CLI"
    },
    {
      name: "adr.github.io",
      url: "https://adr.github.io/",
      desc: "Hub central de ADR: templates MADR, herramientas y guías. Referencia canónica de la comunidad ADR.",
      tag: "■ Comunidad · Referencia"
    },
  ],

};

/* ────────────────────────────────────────────────────────────
   RENDER ENGINE
──────────────────────────────────────────────────────────── */

// HERO STATS
function renderHeroStats() {
  const el = document.getElementById('hero-stats');
  el.innerHTML = DATA.heroStats.map(s => `
    <div class="hero-stat">
      <span class="num">${s.num}</span>
      <span class="label">${s.label}</span>
      <span class="src">${s.src}</span>
    </div>
  `).join('');
}

// HERO PILLARS (intro content inside hero)
function renderHeroPillars() {
  const el = document.getElementById('hero-pillars');
  el.innerHTML = DATA.introPillars.map(p => `
    <div class="hero-pillar">
      <div class="p-icon">${p.icon}</div>
      <span class="tag ${p.tagType}">${p.tag}</span>
      <h4>${p.title}</h4>
      <p>${p.body}</p>
    </div>
  `).join('');
  el.classList.add('visible');
}

// GOLDEN
function renderGolden() {
  const el = document.getElementById('golden-rule-section');
  el.innerHTML = `
    <h2>La Regla de Oro del Arquitecto Senior</h2>
    <p>Cuatro principios que no son negociables cuando se trabaja con IA.</p>
    <div class="golden-rules">
      ${DATA.goldenRules.map(r => `
        <div class="golden-rule-item">
          <div class="icon">${r.icon}</div>
          <h4>${r.title}</h4>
          <p>${r.body}</p>
        </div>
      `).join('')}
    </div>
  `;
}

// FLOW
function renderFlow() {
  const el = document.getElementById('flow-render');
  el.innerHTML = DATA.flowSteps.map((step, i) => `
    <div class="flow-step">
      <div class="step-col">
        <div class="step-num">${step.num}</div>
        ${i < DATA.flowSteps.length - 1 ? '<div class="step-line"></div>' : ''}
      </div>
      <div class="step-body">
        <span class="tag mono">${step.role}</span>
        <h4>${step.title}</h4>
        <p>${step.body}</p>
        <div class="detail">${step.detail.split('\n').map(l=>`<div>${l}</div>`).join('')}</div>
      </div>
    </div>
  `).join('');
}

// SPEC ANATOMY
function renderSpecAnatomy() {
  const el = document.getElementById('spec-anatomy');
  el.innerHTML = DATA.specSections.map(s => `
    <div class="spec-block">
      <div class="spec-block-head">${s.head}</div>
      <div class="spec-block-body">
        <ul>
          ${s.items.map(i => `<li>${i}</li>`).join('')}
        </ul>
      </div>
    </div>
  `).join('');
}

// SPEC EXAMPLE
function renderSpecExample() {
  const ex = DATA.specExample;
  document.getElementById('spec-example').innerHTML = `
    <h3 style="margin-bottom:20px;font-size:16px;">${ex.title}</h3>
    ${ex.sections.map(s => `
      <div style="margin-bottom:16px;">
        <div style="font-family:var(--mono);font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:0.08em;margin-bottom:6px;">${s.head}</div>
        <div style="font-size:13.5px;line-height:1.7;background:var(--paper);padding:12px 16px;border-radius:6px;white-space:pre-line;">${s.body}</div>
      </div>
    `).join('')}
  `;
}

// MODELS TABLE
function renderModels() {
  const m = DATA.models;
  document.getElementById('models-thead').innerHTML = `
    <tr>${m.headers.map(h => `<th>${h}</th>`).join('')}</tr>
  `;
  document.getElementById('models-tbody').innerHTML = m.rows.map(r => `
    <tr>
      <td>${r.model}</td>
      <td>${r.provider}</td>
      <td style="font-family:var(--mono);font-size:12px;">${r.cost}</td>
      <td style="font-family:var(--mono);font-size:12px;">${r.ctx}</td>
      <td>${r.use}</td>
      <td><span class="badge ${r.badge}">${r.role}</span></td>
    </tr>
  `).join('');
}

// AGENTS
function renderAgents() {
  document.getElementById('agents-grid').innerHTML = DATA.agents.map(a => `
    <div class="card">
      <div style="font-size:24px;margin-bottom:10px">${a.icon}</div>
      <h3>${a.title}</h3>
      <p>${a.body}</p>
    </div>
  `).join('');
}

// SIMULATOR
let simState = {
  modelIdx: 2, // Sonnet by default
  inputTokens: 50000,
  outputTokens: 10000,
  iterations: 10,
};

function renderSimulator() {
  const card = document.getElementById('sim-form-card');
  card.innerHTML = `
    <h3 style="margin-bottom:20px">Parámetros de simulación</h3>

    <label>Modelo IA</label>
    <select id="sim-model" onchange="simUpdate()">
      ${DATA.simulatorModels.map((m,i) => `
        <option value="${i}" ${i===simState.modelIdx?'selected':''}>${m.label}</option>
      `).join('')}
    </select>

    <label>Tokens de entrada: <strong id="lbl-input">${simState.inputTokens.toLocaleString()}</strong></label>
    <input type="range" min="1000" max="200000" step="1000"
      value="${simState.inputTokens}" id="sim-input"
      oninput="simState.inputTokens=+this.value;document.getElementById('lbl-input').textContent=Number(this.value).toLocaleString();simUpdate()">

    <label>Tokens de salida: <strong id="lbl-output">${simState.outputTokens.toLocaleString()}</strong></label>
    <input type="range" min="500" max="50000" step="500"
      value="${simState.outputTokens}" id="sim-output"
      oninput="simState.outputTokens=+this.value;document.getElementById('lbl-output').textContent=Number(this.value).toLocaleString();simUpdate()">

    <label>Iteraciones (sin SPEC: ×10): <strong id="lbl-iter">${simState.iterations}</strong></label>
    <input type="range" min="1" max="50" step="1"
      value="${simState.iterations}" id="sim-iter"
      oninput="simState.iterations=+this.value;document.getElementById('lbl-iter').textContent=this.value;simUpdate()">

    <div style="margin-top:8px;padding:12px;background:var(--paper);border-radius:8px;font-size:13px;color:var(--muted);">
      💡 Con SPEC → 1 iteración limpia.<br>
      Sin SPEC → multiplica iteraciones ×5 a ×10.
    </div>
  `;
  simUpdate();
}

function simUpdate() {
  const idx = parseInt(document.getElementById('sim-model')?.value ?? simState.modelIdx);
  simState.modelIdx = idx;
  const m = DATA.simulatorModels[idx];

  const costInput = (simState.inputTokens / 1_000_000) * m.inputPer1M * simState.iterations;
  const costOutput = (simState.outputTokens / 1_000_000) * m.outputPer1M * simState.iterations;
  const total = costInput + costOutput;

  const conSpec = (simState.inputTokens / 1_000_000) * m.inputPer1M * 1
                   + (simState.outputTokens / 1_000_000) * m.outputPer1M * 1;

  document.getElementById('sim-cost').textContent = `USD ${total.toFixed(4)}`;

  document.getElementById('sim-breakdown').innerHTML = `
    <div class="row"><span>Modelo</span><span>${m.label}</span></div>
    <div class="row"><span>Tokens entrada</span><span>${simState.inputTokens.toLocaleString()}</span></div>
    <div class="row"><span>Tokens salida</span><span>${simState.outputTokens.toLocaleString()}</span></div>
    <div class="row"><span>Iteraciones</span><span>${simState.iterations}</span></div>
    <div class="row"><span>Costo entrada</span><span>USD ${costInput.toFixed(4)}</span></div>
    <div class="row"><span>Costo salida</span><span>USD ${costOutput.toFixed(4)}</span></div>
    <div class="row" style="border:none;padding-top:8px;"><span style="color:var(--signal);">Con SPEC (1 iter)</span><span style="color:var(--signal);">USD ${conSpec.toFixed(4)}</span></div>
    <div class="row" style="border:none;"><span style="color:var(--accent);">Ahorro con SPEC</span><span style="color:var(--accent);">USD ${(total - conSpec).toFixed(4)}</span></div>
  `;

  // Mini bar chart
  const maxH = 72;
  const withoutH = Math.max(8, maxH);
  const withH = Math.max(8, Math.round((conSpec / total) * maxH));
  document.getElementById('mini-chart').innerHTML = `
    <div class="mini-bar" style="background:var(--accent);height:${withoutH}px;color:rgba(255,255,255,0.8);align-items:flex-start;padding-top:4px;font-size:9px;flex-direction:column;gap:2px;">
      <span>Sin SPEC</span>
      <span>USD ${total.toFixed(3)}</span>
    </div>
    <div class="mini-bar" style="background:var(--signal);height:${withH}px;color:var(--ink);align-items:flex-start;padding-top:4px;font-size:9px;flex-direction:column;gap:2px;">
      <span>Con SPEC</span>
      <span>USD ${conSpec.toFixed(3)}</span>
    </div>
  `;
}

// ADR
function renderADRs() {
  document.getElementById('adr-list').innerHTML = DATA.adrs.map((a,i) => `
    <div class="adr-card">
      <div class="adr-head" onclick="toggleADR(${i})">
        <span class="adr-id">${a.id}</span>
        <span class="adr-title">${a.title}</span>
        <span class="badge ${a.statusType} adr-status">${a.status}</span>
        <span class="adr-chevron" id="adr-chev-${i}">▼</span>
      </div>
      <div class="adr-body" id="adr-body-${i}">
        <h5>Contexto</h5>
        <p>${a.context}</p>
        <h5>Decisión</h5>
        <p>${a.decision}</p>
        <h5>Consecuencias</h5>
        <p>${a.consequences}</p>
        <h5>Alternativas consideradas</h5>
        <p>${a.alternatives}</p>
      </div>
    </div>
  `).join('');
}

function toggleADR(i) {
  const body = document.getElementById(`adr-body-${i}`);
  const chev = document.getElementById(`adr-chev-${i}`);
  body.classList.toggle('open');
  chev.textContent = body.classList.contains('open') ? '▲' : '▼';
}

// RISKS
function renderRisks() {
  document.getElementById('risk-grid').innerHTML = DATA.risks.map(r => `
    <div class="risk-item ${r.level}">
      <div class="risk-label">${r.levelLabel}</div>
      <h4>${r.title}</h4>
      <p>${r.body}</p>
      <div class="mit">${r.mitigation}</div>
    </div>
  `).join('');
}

// QUOTES
function renderQuotes() {
  document.getElementById('quotes-list').innerHTML = DATA.quotes.map(q => `
    <div class="quote-card">
      <blockquote>"${q.text}"</blockquote>
      <cite>— ${q.author} · ${q.source}</cite>
    </div>
  `).join('');
}

// REPOS
function renderRepos() {
    document.getElementById('repos-grid').innerHTML = DATA.repos.map(r => `
        <a href="${r.url}" target="_blank" class="card">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
            <h3 style="margin:0;font-family:var(--mono);font-size:14px;">${r.name}</h3>
            <span class="tag">${r.tag}</span>
        </div>
        <p>${r.desc}</p>
        </a>
    `).join('');
}
