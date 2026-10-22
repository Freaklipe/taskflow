# PROGRESS.md — TaskFlow

## 1. Estado actual

**Etapa:** Etapa 1 — Esqueleto ejecutable.

**Estado:** Etapa 0 cerrada. La preparación documental y técnica del monorepo está completada y la instalación limpia fue verificada. Comienza la implementación de la API Fastify y la aplicación web React + Vite.

## 2. Documentación del proyecto

- [x] `AGENTS.md` — instrucciones de trabajo del agente.
- [x] `SPEC.md` — especificación y alcance del proyecto.
- [x] `PLAN.md` — etapas de implementación y criterios de aceptación.
- [x] `PROGRESS.md` — seguimiento del estado real del proyecto.
- [x] `README.md` — presentación inicial del proyecto.

## 3. Hitos completados

- [x] Definir el enfoque incremental y verificable de desarrollo.
- [x] Acordar el stack tecnológico y las decisiones principales.
- [x] Consolidar y aprobar los documentos iniciales del proyecto.
- [x] Crear la estructura `apps/api` y `apps/web`.
- [x] Crear el `package.json` raíz con npm Workspaces.
- [x] Crear los `package.json` de la API y del frontend.
- [x] Crear `.gitignore`.
- [x] Generar `package-lock.json` inicial.
- [x] Verificar que npm reconoce los dos workspaces.
- [x] Comprobar que `package-lock.json` registra ambos workspaces.
- [x] Verificar la instalación limpia con `npm ci`.
- [x] Comprobar que `.gitignore` excluye `node_modules` y los archivos `.env`, conservando la excepción para `.env.example`.
- [x] Inicializar Git y crear el commit inicial `be2d127` — `chore: initialize TaskFlow`.
- [x] Confirmar que el árbol de trabajo quedó limpio después de la instalación.

## 4. Verificaciones

- Node.js disponible: `v24.16.0`.
- npm disponible: `11.16.0`.
- Git disponible: `2.54.0.windows.1`.
- Registro de npm configurado: `https://registry.npmjs.org/`.
- Estructura base creada con `apps/api` y `apps/web`.
- npm reconoce los workspaces `@task-flow/api` y `@task-flow/web`.
- `package-lock.json` registra ambos workspaces.
- `npm install --package-lock-only` generó el archivo de bloqueo.
- `npm ci` terminó correctamente: 2 paquetes añadidos, 5 paquetes auditados y 0 vulnerabilidades detectadas.
- Las reglas de exclusión de `.gitignore` fueron comprobadas mediante `git check-ignore`.
- Git inicializado en la rama `master`.
- Commit inicial creado: `be2d127` — `chore: initialize TaskFlow`.
- Después de `npm ci`, `git status --short --branch` mostró `## master`, sin cambios pendientes.

La base del monorepo y su instalación reproducible están verificadas. La API, el frontend y las pruebas funcionales aún no se han implementado.

La Etapa 0 se considera cerrada. Los comandos para ejecutar las aplicaciones se verificarán como parte de la Etapa 1, una vez que existan los componentes ejecutables.

## 5. Bloqueos y pendientes

- [ ] Implementar la aplicación API con Fastify.
- [ ] Verificar el arranque de la API y su endpoint de salud.
- [ ] Implementar la aplicación web con React y Vite.
- [ ] Verificar el arranque de la aplicación web.
- [ ] Documentar y comprobar los comandos de ejecución de ambos componentes.

## 6. Siguiente paso

Comenzar la Etapa 1 — Esqueleto ejecutable.

Primera tarea: revisar los `package.json` existentes y preparar la configuración mínima necesaria para implementar la API Fastify, sin incorporar todavía PostgreSQL, autenticación ni gestión de tareas.

## 7. Registro de decisiones y verificaciones

Registrar aquí únicamente decisiones relevantes, verificaciones realizadas, resultados observados y cambios que afecten al avance del proyecto.

No registrar como completada una tarea sin evidencia suficiente de su ejecución y resultado.
