# PLAN.md — TaskFlow

## 1. Propósito

Definir el orden de implementación de TaskFlow mediante etapas pequeñas, incrementales y verificables.

El plan orienta el trabajo de desarrollo sin anticipar detalles de implementación que todavía no sean necesarios.

## 2. Reglas de planificación

- Trabajar en una sola tarea concreta a la vez.
- Completar y verificar cada tarea antes de avanzar.
- Mantener el alcance definido en `SPEC.md`.
- Seguir las instrucciones de trabajo de `AGENTS.md`.
- Evitar dependencias, funcionalidades y complejidad innecesarias.
- Solicitar aprobación antes de modificar decisiones previamente acordadas o ampliar el alcance.
- Ejecutar las pruebas y comprobaciones pertinentes antes de considerar terminada una etapa.
- Registrar el estado real, las verificaciones, los bloqueos y el siguiente paso en `PROGRESS.md`.
- Dividir las etapas en tareas más pequeñas cuando sea necesario, sin diseñar anticipadamente toda la implementación.
- Actualizar este plan cuando un cambio justificado afecte al orden o al alcance del trabajo aprobado.

## 3. Etapas de implementación

### Etapa 0 — Preparación del repositorio

**Objetivo:** disponer de una base documental y una estructura inicial coherentes.

Trabajo previsto:

- Consolidar los documentos del proyecto.
- Preparar la estructura del monorepo.
- Configurar los archivos de configuración y las dependencias estrictamente necesarios.
- Definir los comandos básicos de desarrollo y verificación.

Criterios de aceptación:

- La estructura inicial coincide con las decisiones documentadas.
- Las dependencias pueden instalarse de forma reproducible.
- Los comandos básicos documentados funcionan.
- No existen archivos de configuración innecesarios ni decisiones importantes sin justificar.

### Etapa 1 — Esqueleto ejecutable

**Objetivo:** ejecutar y verificar los componentes principales del proyecto.

Trabajo previsto:

- Crear la aplicación API con Fastify.
- Crear la aplicación web con React y Vite.
- Establecer una estructura de monorepo sencilla.
- Incorporar comprobaciones básicas de ejecución.

Criterios de aceptación:

- La API arranca correctamente.
- La API expone un endpoint de comprobación de salud.
- La aplicación web arranca correctamente.
- Los componentes pueden ejecutarse siguiendo las instrucciones documentadas.

### Etapa 2 — PostgreSQL y migraciones

**Objetivo:** establecer una conexión verificable y reproducible con la base de datos.

Trabajo previsto:

- Configurar PostgreSQL mediante Docker Compose.
- Configurar la conexión desde el backend utilizando `pg`.
- Incorporar `node-pg-migrate`.
- Gestionar la configuración y las credenciales mediante variables de entorno.
- Verificar la ejecución y el seguimiento de las migraciones.

Criterios de aceptación:

- La base de datos arranca con la configuración documentada.
- La API puede conectarse a PostgreSQL.
- Las migraciones pueden aplicarse y su estado puede verificarse.
- La aplicación no depende de cambios manuales no documentados en la base de datos.

### Etapa 3 — Modelo de datos y persistencia

**Objetivo:** implementar la persistencia mínima requerida por el MVP.

Trabajo previsto:

- Definir las tablas y restricciones necesarias según `SPEC.md`.
- Implementar las migraciones correspondientes.
- Preparar las operaciones de acceso a datos necesarias para las funcionalidades iniciales.
- Incorporar pruebas de persistencia.

Criterios de aceptación:

- El esquema se crea mediante migraciones reproducibles.
- Se respetan las restricciones de integridad definidas.
- Las operaciones de persistencia tienen pruebas verificables.
- Las consultas parametrizan los valores externos y respetan las restricciones de acceso a los datos.

### Etapa 4 — Autenticación y aislamiento de datos

**Objetivo:** establecer una identidad de usuario y proteger los recursos personales.

Trabajo previsto:

- Implementar los mecanismos de registro e inicio de sesión previstos en `SPEC.md`.
- Gestionar sesiones mediante cookies `HttpOnly`.
- Implementar la consulta de la sesión actual y el cierre de sesión.
- Proteger las rutas que requieran autenticación.
- Aplicar el aislamiento de datos por usuario en las operaciones correspondientes.

Criterios de aceptación:

- Los flujos de autenticación funcionan según la especificación.
- Las rutas protegidas rechazan solicitudes no autenticadas.
- Las sesiones se gestionan y finalizan correctamente.
- Las pruebas verifican que un usuario no puede consultar, modificar ni eliminar recursos pertenecientes a otro usuario.
- Se comprueban las protecciones de seguridad aplicables a las sesiones y solicitudes.

### Etapa 5 — API REST de tareas

**Objetivo:** completar las operaciones de gestión de tareas requeridas por el MVP.

Trabajo previsto:

- Implementar los endpoints definidos en `SPEC.md`.
- Validar las entradas y los parámetros de las solicitudes.
- Gestionar los errores y los códigos de respuesta HTTP.
- Conectar los endpoints con la persistencia.
- Incorporar pruebas automatizadas de los casos principales y de error.

Criterios de aceptación:

- Las operaciones de tareas cumplen los contratos definidos.
- Las entradas inválidas reciben respuestas apropiadas.
- Los errores no exponen información sensible.
- Las pruebas verifican los casos de éxito, los errores y el aislamiento entre usuarios.
- La API puede verificarse sin depender de la interfaz web.

### Etapa 6 — Interfaz web funcional

**Objetivo:** permitir el uso de las funcionalidades del MVP desde la aplicación web.

Trabajo previsto:

- Preparar la estructura básica de la interfaz.
- Implementar las pantallas y los formularios de autenticación.
- Integrar la interfaz con la API.
- Implementar las vistas y operaciones de tareas definidas en `SPEC.md`.
- Gestionar los estados de carga, los errores y las sesiones.

Criterios de aceptación:

- Un usuario puede autenticarse desde la interfaz.
- Puede utilizar las operaciones de tareas implementadas.
- Los errores de la API se gestionan de forma comprensible.
- La interfaz respeta las restricciones de acceso del backend.
- Los flujos principales pueden comprobarse de extremo a extremo.

### Etapa 7 — Verificación integral y cierre del MVP

**Objetivo:** comprobar que el conjunto cumple el alcance acordado.

Trabajo previsto:

- Ejecutar las pruebas automatizadas pertinentes.
- Verificar los flujos principales de extremo a extremo.
- Revisar el aislamiento de datos y los controles de seguridad.
- Comprobar el arranque del entorno desde una configuración limpia.
- Completar la documentación necesaria para instalar, configurar, ejecutar y probar el proyecto.
- Resolver los defectos que impidan cumplir los criterios de aceptación.

Criterios de aceptación:

- Los criterios de aceptación de `SPEC.md` están verificados.
- Las pruebas y comprobaciones pertinentes pasan.
- El entorno puede prepararse siguiendo la documentación.
- No quedan defectos conocidos que impidan considerar funcional el MVP.
- `PROGRESS.md` refleja el estado final y las verificaciones realizadas.

## 4. Gestión de cambios

El orden y el alcance de las etapas se mantienen mientras sigan siendo adecuados para cumplir `SPEC.md`.

Si durante la implementación se descubre una dependencia, un problema técnico o una necesidad no prevista:

1. Documentar el problema y su impacto.
2. Determinar si puede resolverse dentro del alcance aprobado.
3. Proponer el ajuste mínimo necesario.
4. Solicitar aprobación cuando el cambio afecte al alcance o a decisiones previamente acordadas.
5. Actualizar los documentos pertinentes una vez aprobado el cambio.

## 5. Relación con PROGRESS.md

`PLAN.md` describe el trabajo previsto; no representa el estado real de la implementación.

`PROGRESS.md` registra:

- La etapa actual.
- El último hito completado y verificado.
- Las tareas en curso y pendientes.
- Las pruebas ejecutadas y sus resultados.
- Los bloqueos conocidos.
- El siguiente paso concreto.

Una etapa no se considera terminada únicamente porque su código esté escrito. Deben cumplirse sus criterios de aceptación y existir evidencia de verificación.
