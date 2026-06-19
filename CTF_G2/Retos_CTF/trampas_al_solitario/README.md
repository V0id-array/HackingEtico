# Título
Se ha detectado algo sospechoso en el tablero de puntuaciones de este juego del solitario. Un jugador misterioso ha conseguido una puntuación de 5000 puntos, algo completamente imposible según las reglas normales del juego.

Tu misión: descubrir cómo ha manipulado el sistema para lograr esta puntuación imposible. El desarrollador necesita tu ayuda para identificar la vulnerabilidad y arreglar este problema.

Obtendrás la flag tras batir el record.

¿Podrás descubrir el truco que hay detrás de esta hazaña aparentemente imposible?

# Despliegue
Desplegar con  php -S ip:8000 en la carpeta del servidor o con un servidor web tipo apache 2 o nginx  
# Solución CTF SolitarioWeb Debugger

## Pasos para Obtener la Flag

1.  **Abrir Herramientas de Desarrollo:** Abre el juego en el navegador y presiona `F12`.
2.  **Ir a "Sources" (Fuentes):** Busca el archivo `solitario.js`.
3.  **Establecer Breakpoint:** Haz clic en el número de línea donde está la sentencia `debugger;` (dentro de la función `agregarPilaAlta`) para poner un breakpoint (punto de interrupción). Alternativamente, puedes activar la opción "Pause on caught exceptions" (Pausar en excepciones capturadas) o simplemente esperar a que el `debugger;` se active.
4.  **Añadir "Watch":** En la sección "Watch" (Observar) del panel derecho, añade la variable `puntos`.
5.  **Jugar:** Juega hasta mover una carta a una pila superior. La ejecución se pausará en el breakpoint o en el `debugger;`.
6.  **Modificar Puntos:** En la sección "Scope" (Ámbito) o directamente en la "Consola", cambia el valor de `puntos` a `5000`.
    ```javascript
    puntos = 5000
    ```
7.  **Reanudar Ejecución:** Presiona `F8` o el botón de reanudar (▶️).
8.  **Flag:** Al reanudar, se llamará a `verificarPuntuacion()` con los puntos modificados, y debería aparecer un `alert` con la flag.
