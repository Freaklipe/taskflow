# TaskFlow

Aplicación web personal para gestionar tareas, desarrollada como proyecto de portafolio mediante un proceso incremental y verificable.

## Objetivo

Construir una aplicación que permita a cada usuario registrarse, iniciar sesión y administrar sus propias tareas, con persistencia en PostgreSQL.

## Stack tecnológico

- TypeScript
- Node.js
- Fastify
- React + Vite
- PostgreSQL
- `pg` y `node-pg-migrate`
- Vitest
- Docker Compose

## Estructura del proyecto

```text
apps/
├── api/    # API REST
└── web/    # Aplicación web
```

La API y la aplicación web se desarrollarán por separado dentro del mismo repositorio, utilizando npm Workspaces.

## Estado del proyecto

Los incrementos iniciales de la Etapa 1 están implementados: API mínima con Fastify (`GET /health`) y frontend React + Vite. La aceptación formal de la Etapa 1 sigue pendiente (criterios no completados). Los componentes siguientes (persistencia, autenticación, gestión de tareas) se desarrollarán en etapas posteriores.

Consulta [PROGRESS.md](PROGRESS.md) para conocer el estado actual y [PLAN.md](PLAN.md) para revisar las etapas de desarrollo.

## Alcance

El MVP contempla autenticación, gestión personal de tareas, persistencia, validación, controles de seguridad y pruebas automatizadas.

La especificación completa se encuentra en [SPEC.md](SPEC.md).

## Desarrollo

### Instalación

Desde la raíz del repositorio:

```bash
npm ci
```

### Ejecución

#### API

Levanta el servidor de desarrollo:

```bash
npm run dev --workspace=@task-flow/api
```

Compilar y ejecutar en producción:

```bash
npm run build --workspace=@task-flow/api
npm start --workspace=@task-flow/api
```

El servidor responde en `http://localhost:3000` por defecto. El endpoint `GET /health` devuelve `{"status":"ok"}`.

#### Frontend

Levanta el entorno de desarrollo:

```bash
npm run dev --workspace=@task-flow/web
```

Compilar para producción:

```bash
npm run build --workspace=@task-flow/web
```

El servidor de desarrollo está disponible en `http://localhost:5173`.

#### Pruebas

Ejecuta las pruebas de todos los workspaces desde la raíz:

```bash
npm test
```

### Notas

La API y el frontend se ejecutan en terminales separadas. La API utiliza el puerto 3000 y el frontend el 5173 por defecto; ambos pueden ejecutarse simultáneamente si sus respectivos puertos están disponibles.
## Licencia

Pendiente de definir.
