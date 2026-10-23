# PROGRESS.md — TaskFlow

## 1. Estado actual

**Etapa:** Etapa 1 — Esqueleto ejecutable.

**Estado:** Incremento 1 (API) e Incremento 2 (Web) implementados y verificados. Las pruebas automatizadas, compilaciones y ejecución de ambos servicios fueron comprobadas. Los cuatro criterios técnicos de aceptación de la Etapa 1 se han verificado siguiendo el `README.md`, incluida una instalación limpia y la ejecución simultánea. Pendiente revisión formal y aprobación de ambos incrementos antes de crear sus commits. La etapa permanece abierta hasta completar dicha revisión y su cierre formal.

## 2. Documentación del proyecto

- [x] `AGENTS.md` — instrucciones de trabajo del agente.
- [x] `SPEC.md` — especificación y alcance del proyecto.
- [x] `PLAN.md` — etapas de implementación y criterios de aceptación.
- [x] `PROGRESS.md` — seguimiento del estado real del proyecto.
- [x] `README.md` — presentación inicial del proyecto.

## 3. Hitos completados

### Etapa 0 — Preparación del repositorio

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
- [x] Comprobar las reglas de exclusión de `.gitignore`.
- [x] Inicializar Git y crear el commit inicial `be2d127` — `chore: initialize TaskFlow`.
- [x] Verificar que el árbol de trabajo quedó limpio después de la instalación.

### Etapa 1 — Incremento 1: API mínima

- [x] Configurar Fastify y TypeScript en `apps/api`.
- [x] Implementar el endpoint `GET /health`.
- [x] Configurar el comando de desarrollo con `tsx watch`.
- [x] Configurar la compilación TypeScript hacia `dist/`.
- [x] Configurar el arranque de la versión compilada con Node.js nativo.
- [x] Incorporar Vitest y una prueba automatizada del endpoint de salud.
- [x] Excluir los archivos de prueba de la compilación de producción.
- [x] Ejecutar las pruebas automatizadas de la API.
- [x] Compilar la API sin errores de TypeScript.
- [x] Comprobar que `dist/` contiene `index.js` y no `index.test.js`.
- [x] Verificar que el servidor compilado arranca correctamente.
- [x] Verificar que `GET /health` responde HTTP 200 con `{"status":"ok"}`.

### Etapa 1 — Incremento 2: Frontend React + Vite

- [x] Configurar `package.json` del frontend con React, Vite y TypeScript.
- [x] Crear `index.html`, `vite.config.ts`, `tsconfig.json`.
- [x] Crear los archivos de la app (`src/main.tsx`, `src/App.tsx`, `src/index.css`, `src/vite-env.d.ts`).
- [x] Instalar dependencias con `npm install` (55 packages added).
- [x] Verificar `npm run build --workspace=@task-flow/web`: 29 modules, built in 530ms.
- [x] Verificar el arranque del dev server: Vite v6.4.5 ready on http://localhost:5173.
- [x] Verificar las pruebas del frontend y ejecutar `npm test` desde la raíz: las pruebas de API y frontend pasaron.

## 4. Verificaciones

### Entorno y repositorio

- Node.js disponible: `v24.16.0`.
- npm disponible: `11.16.0`.
- Git disponible: `2.54.0.windows.1`.
- Registro de npm configurado: `https://registry.npmjs.org/`.
- Estructura base: `apps/api` y `apps/web`.
- npm reconoce los workspaces `@task-flow/api` y `@task-flow/web`.
- `npm ci` terminó correctamente en la preparación inicial: 2 paquetes añadidos, 5 paquetes auditados y 0 vulnerabilidades detectadas.
- Las reglas de exclusión de `.gitignore` fueron comprobadas mediante `git check-ignore`.
- Commit inicial: `be2d127` — `chore: initialize TaskFlow`.
- La Etapa 0 fue cerrada mediante el commit `556261d` — `docs: close repository setup stage`.

### Actualización de dependencias y seguridad

- Se actualizaron las dependencias de desarrollo de Vitest a `4.1.12` en ambos workspaces.
- `npm ls vitest @vitest/mocker tinypool` confirmó Vitest `4.1.12` compartido por ambos workspaces.
- `npm audit` informó cero vulnerabilidades después de la actualización.
- `npm test` ejecutado desde la raíz: 2 pruebas aprobadas (1 de API y 1 de frontend).
- Compilaciones de API y frontend verificadas correctamente tras la actualización.

### API

- Framework: Fastify.
- Lenguaje: TypeScript con módulos ESM.
- Desarrollo: `npm run dev --workspace=@task-flow/api`.
- Pruebas: `npm test --workspace=@task-flow/api`.
- Compilación: `npm run build --workspace=@task-flow/api`.
- Arranque compilado: `npm run start --workspace=@task-flow/api`.
- Las pruebas automatizadas se ejecutaron correctamente.
- La compilación terminó sin errores.
- La carpeta `dist/` contiene el JavaScript de la API, sin el archivo de prueba.
- El servidor compilado arrancó con Node.js nativo, sin cargar `tsx`.
- `GET /health` respondió HTTP 200 con `{"status":"ok"}`.
- El modo desarrollo y el servidor compilado usan el puerto 3000 por defecto; no deben ejecutarse simultáneamente en ese puerto.

### Incrementos implementados y verificados frente a pendientes de aceptación

**Implementados y verificados:**
1. Incremento 1 (API): pruebas, build, dev server y servidor compilado verificados sin errores. Queda pendiente revisión formal y commit del incremento.
2. Incremento 2 (Web): pruebas automatizadas, build y servidor de desarrollo verificados. Las pruebas de API y frontend también se ejecutaron desde la raíz con `npm test` y ambas pasaron.

**Pendientes de aceptación:**

- [ ] Revisar formalmente y aprobar el Incremento 1 antes de crear su commit.
- [ ] Revisar formalmente y aprobar el Incremento 2 antes de crear su commit.
- [ ] Registrar el resultado de la revisión y cerrar formalmente la Etapa 1 una vez aprobados los incrementos.

### Frontend web

- Biblioteca: React 19 + ReactDOM.
- Herramienta de compilación: Vite 6.
- Lenguaje: TypeScript con destino ES2020 y JSX (`react-jsx`).
- Desarrollo: `npm run dev --workspace=@task-flow/web`.
- Compilación: `npm run build --workspace=@task-flow/web`.
- Pruebas: `npm test --workspace=@task-flow/web`.
- Resultado de `vite build`: `index.html` (0.39 kB), CSS (0.32 kB), JS (224.16 kB, gzip 69.61 kB).

## 5. Bloqueos y pendientes

- [ ] Revisar formalmente y aprobar el Incremento 1 antes de crear su commit.
- [ ] Revisar formalmente y aprobar el Incremento 2 antes de crear su commit.
- [ ] Cerrar formalmente la Etapa 1 después de la aprobación de los incrementos.

## 6. Siguiente paso

Revisar formalmente los incrementos 1 (API) y 2 (Web), comprobar los criterios de aceptación pendientes de la Etapa 1 y obtener aprobación antes de crear los commits correspondientes. Mantener el alcance limitado al esqueleto ejecutable; no incorporar todavía PostgreSQL, autenticación ni gestión de tareas.

## 7. Registro de decisiones y verificaciones

- La API utiliza `tsx watch` durante el desarrollo y Node.js nativo para ejecutar el JavaScript compilado.
- Los archivos de prueba no deben incluirse en la salida de compilación de producción.
- Las verificaciones de la API se realizaron antes de cerrar el incremento; el commit todavía está pendiente de revisión y aprobación.
- El archivo `package-lock.json` se actualizó al incorporar las dependencias de la API.
- La aprobación del script de instalación de `esbuild@0.28.2` quedó registrada en la configuración raíz de npm.

Registrar aquí únicamente decisiones relevantes, verificaciones realizadas, resultados observados y cambios que afecten al avance del proyecto.

No registrar como completada una tarea sin evidencia suficiente de su ejecución y resultado.
