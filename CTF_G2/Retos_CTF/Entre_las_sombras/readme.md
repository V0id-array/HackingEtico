# Enunciado: Entre las sombras

## Contexto

Eres un analista de seguridad contratado por la empresa "TechVault" para investigar una brecha en sus sistemas. El administrador de sistemas, Félix, desapareció misteriosamente justo después de implementar un nuevo sistema de seguridad. Antes de irse, dejó un mensaje inquietante:

> "La sombra guarda todos los secretos"

Ahora, el acceso al servidor está bloqueado y la empresa está paralizada.

## Misión

Por suerte, se encontró una copia de la configuración del sistema que Félix dejó antes de desaparecer. Tu misión es recuperar las credenciales del administrador para restaurar el acceso al equipo. Se sospecha que la clave está oculta en algún lugar dentro de los archivos del sistema.

## Detalles

- **Formato de respuesta**: `flag{contreña_de_félix}`
- **Pista**: rockyou

## Solución

1. Extraer el hash de la contraseña de Félix:
   ```bash
   sudo grep "^felix:" shadow | cut -d: -f1,2 > hash.txt
   ```

2. Usar John the Ripper para crackear el hash:
   ```bash
   john --wordlist=/usr/share/wordlists/rockyou.txt hash.txt
   ```

3. La contraseña encontrada es:
   ```
   flag{mickymouse}
   ```

