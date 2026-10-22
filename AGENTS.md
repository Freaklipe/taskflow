# AGENTS.md — TaskFlow

## 1. Propósito

Este archivo define las reglas de trabajo para los agentes de IA que participen en el desarrollo de TaskFlow.

El agente debe trabajar de forma incremental, mantener el alcance acordado y verificar los resultados antes de declarar una tarea completada.

## 2. Antes de trabajar

- Lee `SPEC.md`, `PLAN.md` y `PROGRESS.md` antes de iniciar una tarea.
- Inspecciona el código y los archivos relevantes antes de proponer cambios.
- Identifica las restricciones, dependencias y criterios de aceptación aplicables.
- Si falta información esencial o existe una contradicción, pregunta antes de tomar decisiones que alteren el alcance.
- No asumas que una funcionalidad existe sin comprobarlo.

## 3. Alcance y planificación

- Trabaja únicamente en la tarea solicitada y en los cambios necesarios para completarla.
- Sigue el orden establecido en `PLAN.md`.
- No implementes funcionalidades fuera del alcance de `SPEC.md` sin autorización.
- Divide las tareas grandes en cambios pequeños y verificables.
- No introduzcas dependencias, herramientas o capas arquitectónicas sin una justificación concreta.
- No reestructures archivos ni modifiques componentes ajenos a la tarea sin necesidad.

## 4. Implementación

- Sigue las convenciones y la estructura existentes en el proyecto.
- Prioriza soluciones sencillas, legibles y mantenibles.
- Evita duplicación innecesaria y abstracciones prematuras.
- No ocultes errores mediante valores por defecto arbitrarios ni bloques que ignoren excepciones.
- No inventes requisitos, resultados de pruebas ni comportamientos del sistema.
- Si no puedes completar una tarea, explica qué falta y qué impide continuar.

## 5. Seguridad

- Nunca almacenes secretos, contraseñas reales o credenciales en el repositorio.
- Valida los datos recibidos y gestiona los errores de forma controlada.
- Aplica autenticación y autorización en el backend cuando corresponda.
- En TaskFlow, utiliza consultas SQL parametrizadas para incorporar valores externos a consultas ejecutables.
- No construyas consultas SQL concatenando directamente entradas de usuarios.
- Comprueba la propiedad de los recursos privados en el backend.
- No debilites controles de seguridad para hacer pasar una prueba.
- No desactives pruebas, validaciones o restricciones para ocultar errores.

## 6. Verificación

- Ejecuta las pruebas y comprobaciones pertinentes para los cambios realizados.
- Comprueba los errores de compilación, tipos, formato o análisis estático cuando existan herramientas configuradas para ello.
- No afirmes que una comprobación pasó si no se ejecutó o no se pudo verificar su resultado.
- Si una comprobación falla, investiga la causa y corrígela cuando corresponda a la tarea.
- Si no puedes verificar un cambio, declara expresamente la limitación.
- No modifiques las pruebas únicamente para hacer coincidir los resultados con una implementación incorrecta.

## 7. Cambios y archivos

- Inspecciona los cambios existentes antes de modificar archivos.
- Conserva el trabajo previo que no forme parte de la tarea.
- No sobrescribas archivos ni descartes cambios del usuario sin autorización.
- No ejecutes comandos destructivos sin autorización explícita.
- No instales dependencias ni cambies configuraciones globales sin una necesidad justificada y autorización cuando corresponda.
- Revisa los cambios finales para detectar modificaciones accidentales.

## 8. Documentación y progreso

- Mantén la documentación coherente con la implementación real.
- Actualiza `PROGRESS.md` cuando cambie el estado verificable del trabajo.
- Registra las decisiones técnicas relevantes y los bloqueos que afecten al plan.
- No marques una tarea como completada sin comprobar sus criterios de aceptación.
- Indica qué archivos se modificaron, qué comprobaciones se ejecutaron y cuáles fueron sus resultados.
- Propón una siguiente acción concreta al finalizar cada tarea.

## 9. Comunicación

Al terminar una tarea, informa brevemente de:

1. Qué se hizo.
2. Qué archivos se modificaron.
3. Qué verificaciones se ejecutaron y sus resultados.
4. Qué problemas o limitaciones quedan pendientes.
5. Cuál es el siguiente paso recomendado.

No declares el proyecto terminado mientras existan criterios de aceptación pendientes.

## 10. Prioridad de instrucciones

- Respeta las instrucciones del usuario y las restricciones aplicables al entorno.
- Utiliza `SPEC.md` como referencia para el alcance y los requisitos del producto.
- Utiliza `PLAN.md` para determinar la secuencia de trabajo.
- Utiliza `PROGRESS.md` para conocer el estado registrado y contrastarlo con el estado real del proyecto.
- Si los documentos se contradicen, no elijas arbitrariamente: señala la contradicción y solicita una decisión cuando afecte al alcance o a la seguridad.

Las restricciones de seguridad y las instrucciones explícitas del usuario prevalecen sobre las preferencias de implementación del agente.
