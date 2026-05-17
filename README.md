# SDD Teoría & Arquitectura

Framework teórico completo de **Spec-Driven Development** para arquitectos senior.

## Secciones

| Ruta | Contenido |
|------|-----------|
| `/` | Intro — pilares SDD y reglas de oro |
| `/flujo/` | Flujo de 7 pasos: del problema al deploy observable |
| `/spec/` | Anatomía de una SPEC — estructura y ejemplo real |
| `/modelos/` | Catálogo comparativo de modelos IA y agentes por rol |
| `/sim/` | Simulador de costos IA con y sin especificación |
| `/adr/` | Architecture Decision Records — contexto, decisión, alternativas |
| `/riesgos/` | Matriz de riesgos: architecture drift, dead ends, vulnerabilidades |
| `/fuentes/` | Citas, referencias y repositorios |

## Formato SPEC.md compatible con Alpaquitay AI

El scrum board exporta sprints como `SPEC-Sprint-N.md` en formato épica-checkbox:

```markdown
# SPEC: Sprint 2 — Objetivo del sprint

**Período:** 2026-04-28 → 2026-05-11  
**Capacidad:** 42 pts

---

## Epic: Auth & Security
- [x] Login con email y password
- [ ] Implementar MFA con TOTP
- [ ] Notificación login nuevo dispositivo

## Epic: Dashboard UX
- [ ] Widget de métricas del sprint
- [ ] Dark mode persistente

## Sin épica
- [x] Configurar pipeline CI/CD
```

Alpaquitay AI reconoce este formato al abrir el archivo en VS Code y lo usa como contexto del sprint activo.

## Tecnologías

- HTML + CSS + JS vanilla (sin framework)
- GitHub Pages — sin servidor (rutas limpias via `folder/index.html`)
- Shared `style.css` y `data.js` referenciados con `../` desde subpáginas

## Parte del ecosistema SpecSolid

- [Scrum Board SDD](https://sergioide007.github.io/scrum/) — tablero Kanban con exportación SPEC.md
- [Alpaquitay AI](https://sergioide007.github.io/alpaquitay-ai/) — extensión VS Code que consume el SPEC.md
- [SpecSolid](https://sergioide007.github.io/specsolid/) — sitio principal
