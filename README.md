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

El proyecto se encuentra en la etapa de preparación del repositorio. La implementación funcional está pendiente.

Consulta [PROGRESS.md](PROGRESS.md) para conocer el estado actual y [PLAN.md](PLAN.md) para revisar las etapas de desarrollo.

## Alcance

El MVP contempla autenticación, gestión personal de tareas, persistencia, validación, controles de seguridad y pruebas automatizadas.

La especificación completa se encuentra en [SPEC.md](SPEC.md).

## Desarrollo

Las instrucciones de instalación, configuración y ejecución se incorporarán a medida que se implementen y verifiquen los componentes del proyecto.

## Licencia

Pendiente de definir.
