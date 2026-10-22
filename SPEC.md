# SPEC.md — TaskFlow

## 1. Objetivo

TaskFlow es una aplicación web para gestionar tareas personales, desarrollada como proyecto piloto para practicar y demostrar el desarrollo de software asistido por modelos de lenguaje locales mediante OpenCode.

El proyecto debe ser pequeño, funcional, verificable y adecuado para publicarse en un repositorio público de GitHub.

El desarrollo se realizará de forma incremental, priorizando la simplicidad, la seguridad y la verificación objetiva de los resultados.

## 2. Alcance del MVP

El MVP incluirá:

- Una API REST para gestionar usuarios y tareas.
- Una interfaz web independiente que consuma la API REST.
- Registro, inicio y cierre de sesión.
- Gestión de tareas personales.
- Persistencia mediante PostgreSQL.
- Validación de entradas y gestión de errores.
- Protección de recursos privados.
- Pruebas automatizadas.
- Documentación para instalar, ejecutar y probar el proyecto.

La aplicación tendrá una arquitectura monolítica modular, con frontend y backend independientes dentro de un mismo repositorio.

## 3. Stack tecnológico

Las tecnologías seleccionadas para el MVP son:

| Componente | Tecnología |
|---|---|
| Lenguaje | TypeScript |
| Runtime | Node.js LTS |
| API REST | Fastify |
| Interfaz web | React + Vite |
| Base de datos | PostgreSQL 18 |
| Acceso a datos | `pg` |
| Migraciones | `node-pg-migrate` |
| Pruebas automatizadas | Vitest |
| Autenticación | Sesiones mediante cookies `HttpOnly` |
| Entorno local | Docker Compose |
| Organización | Monorepo sencillo |

### 3.1. Acceso a datos

Se utilizarán consultas SQL explícitas mediante `pg`, sin incorporar un ORM en el MVP.

Las modificaciones del esquema de base de datos se gestionarán mediante migraciones versionadas con `node-pg-migrate`.

### 3.2. Organización

La estructura definitiva de carpetas se establecerá durante la planificación técnica.

Se mantendrán separados el frontend y el backend. No se crearán paquetes compartidos ni capas adicionales sin una necesidad concreta.

Las versiones y dependencias deberán comprobarse antes de iniciar la implementación.

## 4. Usuarios y autenticación

### 4.1. Funcionalidades

- Registrar una cuenta personal.
- Iniciar sesión con las credenciales definidas para el sistema.
- Cerrar sesión e invalidar la sesión correspondiente.
- Acceder a las funcionalidades protegidas únicamente mediante una sesión válida.
- Mantener los datos privados asociados al usuario autenticado.

### 4.2. Requisitos de seguridad

- Las contraseñas se almacenarán mediante un algoritmo de hash seguro para contraseñas, nunca en texto plano.
- Las sesiones se gestionarán mediante cookies `HttpOnly`.
- Las cookies y los mecanismos de sesión deberán configurarse de forma segura para el entorno de ejecución.
- Se implementarán las protecciones necesarias frente a solicitudes no autorizadas entre sitios (CSRF), según el diseño de autenticación.
- Las operaciones protegidas deberán validar la identidad del usuario en el backend.
- Los errores de autenticación no deberán exponer información sensible.
- Las credenciales, secretos y contraseñas reales no se incluirán en el repositorio.

El mecanismo concreto de almacenamiento de sesiones, la configuración de cookies y las dependencias de autenticación se definirán durante el diseño técnico, respetando estos requisitos.

## 5. Gestión de tareas

Cada usuario podrá gestionar exclusivamente sus propias tareas.

### 5.1. Operaciones

- Crear una tarea.
- Consultar la lista de tareas propias.
- Consultar el detalle de una tarea propia.
- Modificar una tarea propia.
- Eliminar una tarea propia.
- Cambiar el estado de una tarea.

### 5.2. Datos de una tarea

Cada tarea tendrá los siguientes campos:

| Campo | Descripción |
|---|---|
| `id` | Identificador único de la tarea. |
| `title` | Título obligatorio. |
| `description` | Descripción opcional. |
| `status` | Estado actual de la tarea. |
| `priority` | Prioridad asignada. |
| `dueDate` | Fecha límite opcional. |
| `createdAt` | Fecha de creación. |
| `updatedAt` | Fecha de última modificación. |
| `userId` | Identificador del usuario propietario. |

Los nombres anteriores representan el modelo funcional. Su correspondencia exacta con las columnas SQL se definirá durante el diseño del esquema.

### 5.3. Estados permitidos

- `pending`: pendiente.
- `in_progress`: en progreso.
- `completed`: completada.

### 5.4. Prioridades permitidas

- `low`: baja.
- `medium`: media.
- `high`: alta.

### 5.5. Reglas de negocio

- El título no podrá estar vacío.
- Los estados y las prioridades deberán pertenecer a los valores permitidos.
- Las fechas deberán validarse y utilizar un formato definido.
- Cada tarea deberá asociarse al usuario autenticado.
- El cliente no podrá establecer libremente la propiedad de una tarea.
- Las operaciones sobre tareas inexistentes o no accesibles deberán gestionarse de forma controlada.
- La autorización deberá aplicarse en el backend, independientemente de las restricciones de la interfaz.

## 6. Interfaz web

La interfaz será independiente de la API REST y se comunicará con ella mediante HTTP.

Incluirá:

- Pantalla de registro.
- Pantalla de inicio de sesión.
- Vista de las tareas propias.
- Formulario para crear tareas.
- Formulario para editar tareas.
- Visualización del estado, la prioridad y la fecha límite.
- Opción para eliminar tareas.
- Opción para cerrar sesión.
- Indicadores de carga y mensajes de error o confirmación.

La interfaz deberá gestionar adecuadamente las respuestas de la API, incluidos los errores de validación y las sesiones expiradas.

La interfaz no será considerada un mecanismo de seguridad: el backend deberá aplicar todas las restricciones de acceso.

## 7. API REST

La API proporcionará las operaciones necesarias para la autenticación y la gestión de tareas.

Deberá cumplir los siguientes requisitos:

- Utilizar métodos HTTP y códigos de estado apropiados.
- Validar los datos de entrada.
- Aplicar autenticación y autorización en las operaciones protegidas.
- Devolver respuestas con una estructura consistente.
- Gestionar errores previsibles sin exponer información interna sensible.
- No confiar en identificadores de usuario proporcionados por el cliente para determinar los permisos.
- Documentar las operaciones y su forma de utilización.

La definición exacta de rutas, formatos de solicitud y respuesta y códigos de error se establecerá durante la implementación de cada funcionalidad.

## 8. Persistencia

PostgreSQL 18 será la base de datos del proyecto.

Se almacenarán, como mínimo, los datos de usuarios, sesiones cuando corresponda al mecanismo elegido y tareas.

Se deberán cumplir estas condiciones:

- Los datos persistirán después de reiniciar la aplicación.
- Las relaciones entre usuarios y tareas mantendrán su integridad.
- El esquema se gestionará mediante migraciones versionadas.
- Las consultas que incorporen datos externos utilizarán parámetros SQL.
- No se concatenarán entradas de usuarios para construir consultas SQL ejecutables.
- La aplicación se conectará mediante una cuenta de base de datos con privilegios mínimos necesarios.
- Las claves foráneas y demás restricciones pertinentes se utilizarán para proteger la integridad de los datos.

El entorno local de desarrollo utilizará Docker Compose para los servicios que lo requieran.

## 9. Seguridad y privacidad

La seguridad forma parte de los criterios obligatorios de aceptación.

### 9.1. SQL injection

Todas las consultas que incorporen valores externos deberán utilizar consultas parametrizadas mediante `pg`.

Se prohíbe construir consultas ejecutables concatenando directamente entradas de usuarios.

Los elementos SQL dinámicos que no admitan parametrización convencional, como determinados nombres de columnas para ordenar resultados, deberán resolverse mediante listas permitidas explícitas.

### 9.2. Aislamiento entre usuarios

- Un usuario solo podrá consultar sus propias tareas.
- Un usuario solo podrá modificar o eliminar sus propias tareas.
- El identificador del propietario se obtendrá de la identidad autenticada.
- El backend comprobará la autorización en cada operación que afecte a recursos privados.
- Las pruebas deberán intentar acceder a tareas ajenas y verificar que el acceso es rechazado.

### 9.3. Gestión de credenciales y secretos

- Las contraseñas se almacenarán mediante hash seguro.
- Las credenciales de conexión y otros secretos se proporcionarán mediante configuración local o variables de entorno apropiadas.
- Los archivos que contengan secretos reales no se publicarán en GitHub.
- El repositorio incluirá únicamente ejemplos de configuración sin credenciales reales.

## 10. Pruebas y calidad

El proyecto deberá contar con pruebas automatizadas para las operaciones principales.

Se comprobará, como mínimo:

- Registro y validación de usuarios.
- Inicio y cierre de sesión.
- Rechazo de solicitudes sin autenticación válida.
- Creación, consulta, modificación y eliminación de tareas.
- Validación de títulos, estados, prioridades y fechas.
- Persistencia de los datos.
- Aislamiento de tareas entre usuarios.
- Gestión de errores previsibles.
- Resistencia de las consultas parametrizadas frente a entradas diseñadas para alterar SQL.

Vitest será la herramienta de pruebas seleccionada. Podrán incorporarse herramientas complementarias si resultan necesarias para verificar la API o la interfaz.

Las pruebas deberán poder ejecutarse mediante comandos documentados y producir resultados verificables de forma independiente.

## 11. Criterios de aceptación

El MVP se considerará funcional cuando:

1. Un usuario pueda registrar una cuenta e iniciar sesión.
2. Un usuario autenticado pueda crear, consultar, editar y eliminar sus tareas.
3. Los estados, las prioridades y las fechas funcionen según lo definido.
4. Los datos persistan después de reiniciar la aplicación.
5. Un usuario no pueda consultar ni modificar tareas de otro usuario, incluso mediante solicitudes directas a la API.
6. Las operaciones protegidas rechacen solicitudes sin autenticación válida.
7. El cierre de sesión invalide la sesión correspondiente.
8. Las consultas a la base de datos que utilicen valores externos estén parametrizadas.
9. La interfaz web complete el flujo principal de gestión de tareas.
10. Las pruebas automatizadas definidas para el MVP se ejecuten correctamente.
11. Existan instrucciones suficientes para instalar, configurar, ejecutar y probar el proyecto desde un entorno limpio.

## 12. Fuera del alcance del MVP

Quedan excluidos inicialmente:

- Panel administrativo para gestionar otras cuentas.
- Roles y permisos avanzados.
- Recuperación de contraseñas mediante correo electrónico.
- Autenticación mediante proveedores externos.
- Colaboración entre usuarios y tareas compartidas.
- Notificaciones.
- Aplicación móvil nativa.
- Arquitectura de microservicios.
- Funcionalidades de IA integradas en TaskFlow.
- Infraestructura de despliegue compleja.

Estas funcionalidades podrán evaluarse en versiones posteriores, pero no formarán parte de los criterios de aceptación iniciales.

## 13. Documentación y entrega

El repositorio incluirá un `README.md` con:

- Descripción y alcance del proyecto.
- Requisitos previos.
- Instrucciones de instalación y configuración.
- Instrucciones para levantar el entorno local.
- Instrucciones para ejecutar la API y la interfaz web.
- Procedimiento para aplicar las migraciones.
- Instrucciones para ejecutar las pruebas.
- Consideraciones relevantes de seguridad.

La documentación deberá corresponderse con el estado real del proyecto.

## 14. Principios de implementación

- Trabajar de forma incremental, con cambios pequeños y verificables.
- Mantener una arquitectura modular y comprensible.
- Evitar complejidad innecesaria para el MVP.
- Respetar los requisitos y límites establecidos en esta especificación.
- Verificar los cambios mediante pruebas o comandos adecuados.
- No considerar una tarea completada únicamente porque el agente afirme haberla realizado.
- Documentar las decisiones técnicas relevantes.
- Mantener actualizado `PROGRESS.md` con el estado real y la siguiente acción concreta.

Las instrucciones operativas del agente se definirán en `AGENTS.md`. La secuencia de implementación se establecerá en `PLAN.md` y el estado del trabajo se registrará en `PROGRESS.md`.
