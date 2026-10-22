# PROGRESS.md — TaskFlow

## 1. Estado actual

**Etapa:** Etapa 1 — Esqueleto ejecutable.

**Estado:** Incremento 1 completado: API mínima ejecutable con Fastify y TypeScript. Las pruebas automatizadas, la compilación y el arranque de la versión compilada fueron verificados. Pendiente implementar y verificar la aplicación web React + Vite y completar los criterios de aceptación de la etapa.

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

## 5. Bloqueos y pendientes

- [ ] Implementar la aplicación web con React y Vite.
- [ ] Verificar el arranque de la aplicación web.
- [ ] Revisar los comandos de ejecución de ambos componentes desde la raíz.
- [ ] Completar los criterios de aceptación de la Etapa 1.
- [ ] Revisar y aceptar formalmente el conjunto de cambios del Incremento 1.
- [ ] Crear el commit del Incremento 1 después de la revisión y aprobación.

## 6. Siguiente paso

Continuar con el Incremento 2 de la Etapa 1: implementar la aplicación web mínima con React y Vite.

Mantener el alcance limitado al esqueleto ejecutable. No incorporar todavía PostgreSQL, autenticación ni gestión de tareas.

## 7. Registro de decisiones y verificaciones

- La API utiliza `tsx watch` durante el desarrollo y Node.js nativo para ejecutar el JavaScript compilado.
- Los archivos de prueba no deben incluirse en la salida de compilación de producción.
- Las verificaciones de la API se realizaron antes de cerrar el incremento; el commit todavía está pendiente de revisión y aprobación.
- El archivo `package-lock.json` se actualizó al incorporar las dependencias de la API.
- La aprobación del script de instalación de `esbuild@0.28.2` quedó registrada en la configuración raíz de npm.

Registrar aquí únicamente decisiones relevantes, verificaciones realizadas, resultados observados y cambios que afecten al avance del proyecto.

No registrar como completada una tarea sin evidencia suficiente de su ejecución y resultado.
