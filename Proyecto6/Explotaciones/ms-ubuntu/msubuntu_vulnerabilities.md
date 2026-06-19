# Vulnerabilides ms-ubuntu

## **Vulnerabilidad: ProFTPD - Abuso de Comandos SITE CPFR/CPTO (ProFTPD 1.3.5)**

### Identificación:
* **Host(s) Afectado(s):** 10.0.2.133  
* **Puerto(s) / Servicio(s):** 21/tcp - ProFTPD 1.3.5  
* **Herramienta(s) de Detección:** Metasploit Framework  
* **Descripción Breve:** Se utilizó el módulo `proftpd_modcopy_exec` para abusar de los comandos `SITE CPFR/CPTO` y copiar una carga útil PHP al sistema.

### Descripción:
* **Tipo:** Ejecución remota de código
* **CVE (si aplica):** CVE-2015-3306
* **Gravedad:** Alta  
* **Vector de Ataque:** Remoto, sin autenticación  
* **Requiere Autenticación:** No  
* **Impacto Potencial:**  
    - Acceso remoto al sistema como el usuario `www-data`  
    - Posibilidad de ejecutar comandos arbitrarios  
* **Detalles Técnicos:** Se abusa de los comandos `SITE CPFR/CPTO` para copiar archivos en el servidor FTP. Esto se utiliza para mover un payload PHP al directorio web y obtener una shell inversa.

### Explotación:
El módulo fue ejecutado desde Metasploit, obteniendo una sesión remota con el usuario `www-data`.

![](./Imagenes/1.png)

![](./Imagenes/2.png)

![](./Imagenes/3.png)



### Sistemas afectados:
* 10.0.2.133

### Mitigación:
* Actualizar ProFTPD a una versión superior a 1.3.5.
* Deshabilitar comandos SITE no necesarios.
* Restringir el acceso al servicio FTP desde redes confiables.

### Referencias:
* https://www.tenable.com/plugins/nessus/84215
* https://www.tenable.com/cve/CVE-2015-3306

---

## **Vulnerabilidad: Drupal - SQL Injection (Drupageddon)**

### Identificación:
* **Host(s) Afectado(s):** 10.0.2.133  
* **Puerto(s) / Servicio(s):** 80/tcp - Apache (Drupal 7.x)  
* **Herramienta(s) de Detección:** Metasploit Framework  
* **Descripción Breve:** El exploit `drupal_drupageddon` fue utilizado para ejecutar código PHP remotamente a través de una inyección SQL.

### Descripción:
* **Tipo:** Inyección SQL / Ejecución de código  
* **CVE (si aplica):** CVE-2014-3704  
* **Gravedad:** Crítico  
* **Vector de Ataque:** Web remota  
* **Requiere Autenticación:** No  
* **Impacto Potencial:**  
    - Obtención de shell inversa  
    - Ejecución de código arbitrario en el servidor  
* **Detalles Técnicos:** Se utilizó la vulnerabilidad Drupageddon para ejecutar una carga útil en Drupal 7.5, aunque supuestamente había sido corregida en versiones posteriores a 7.32.

### Explotación:
Se ejecutó con éxito el exploit desde Metasploit, obteniendo una shell como `www-data`.

![](./Imagenes/4.png)

![](./Imagenes/5.png)



### Sistemas afectados:
* 10.0.2.133

### Mitigación:
* Actualizar Drupal a una versión más reciente (8.x o superior).
* Aplicar todas las actualizaciones de seguridad recomendadas por Drupal.

### Referencias:
* https://www.tenable.com/plugins/nessus/78515
* https://www.tenable.com/cve/CVE-2014-3704

---

## **Vulnerabilidad: Shell Bash - Reverse Bash Payload (msfvenom)**

### Identificación:
* **Host(s) Afectado(s):** 10.0.2.133  
* **Puerto(s) / Servicio(s):** N/A  
* **Herramienta(s) de Detección:** Payload msfvenom / Netcat  
* **Descripción Breve:** Se utilizó una shell Bash inversa generada con msfvenom para acceder al sistema desde una conexión SSH abierta.

### Descripción:
* **Tipo:** Ejecución remota de código / Shell reversa  
* **CVE (si aplica):** N/A  
* **Gravedad:** Alta  
* **Vector de Ataque:** SSH / Red local  
* **Requiere Autenticación:** Parcial (acceso inicial)  
* **Impacto Potencial:**  
    - Acceso completo como usuario con privilegios de `sudo`  
* **Detalles Técnicos:** Se generó un payload con `msfvenom` de tipo `reverse_bash`, el cual fue ejecutado manualmente desde la terminal remota del objetivo, obteniendo acceso desde Netcat.

### Explotación:
Shell obtenida como usuario `vagrant` con permisos `sudo`.

![](./Imagenes/6.png)

![](./Imagenes/7.png)

![](./Imagenes/8.png)




### Sistemas afectados:
* 10.0.2.133

### Mitigación:
* Restringir acceso SSH a usuarios autorizados.
* Monitorear y filtrar conexiones salientes de tipo inversa.
* Usar firewalls para restringir tráfico saliente no autorizado.

---

## **Vulnerabilidad: SSH - Autenticación con credenciales débiles**

### Identificación:
* **Host(s) Afectado(s):** 10.0.2.133  
* **Puerto(s) / Servicio(s):** 22/tcp - OpenSSH  
* **Herramienta(s) de Detección:** Metasploit (auxiliary/scanner/ssh/ssh_login)  
* **Descripción Breve:** Se logró acceso mediante credenciales por defecto al servicio SSH.

### Descripción:
* **Tipo:** Configuración insegura / credenciales débiles  
* **CVE (si aplica):** CVE-1999-0502  
* **Gravedad:** Alta  
* **Vector de Ataque:** Remoto  
* **Requiere Autenticación:** Sí (credenciales conocidas)  
* **Impacto Potencial:**  
    - Acceso remoto total al sistema como usuario `vagrant`  
    - Escalada de privilegios mediante `sudo`  
* **Detalles Técnicos:** Se usó `vagrant:vagrant` para acceder al sistema por SSH con éxito.

### Explotación:
Sesión SSH obtenida con credenciales por defecto. El usuario tenía privilegios `sudo`.

![](./Imagenes/9.png)

![](./Imagenes/10.png)



### Sistemas afectados:
* 10.0.2.133

### Mitigación:
* Cambiar contraseñas por defecto.
* Deshabilitar login por contraseña y usar autenticación por clave pública.
* Aplicar políticas de rotación de contraseñas.

### Referencias:
* https://nvd.nist.gov/vuln/detail/CVE-1999-0502

---

## **Vulnerabilidad: Inyección SQL - Aplicación Web de Nómina (Payroll)**

### Identificación:
* **Host(s) Afectado(s):** 10.0.2.133  
* **Puerto(s) / Servicio(s):** 80/tcp - Apache (aplicación custom `payroll_app.php`)  
* **Herramienta(s) de Detección:** Manual / Navegador web  
* **Descripción Breve:** Se identificó una vulnerabilidad de inyección SQL en los campos de entrada de usuario de la aplicación de nómina.

### Descripción:
* **Tipo:** Inyección SQL / Exposición de credenciales  
* **CVE (si aplica):** N/A  
* **Gravedad:** Crítico  
* **Vector de Ataque:** Web remota  
* **Requiere Autenticación:** No  
* **Impacto Potencial:**  
    - Acceso a base de datos  
    - Extracción de nombres de usuario y contraseñas en texto plano  
    - Acceso SSH con esas credenciales  
* **Detalles Técnicos:** Se usaron inyecciones como `' OR 1=1 -- -` y `UNION SELECT null,null,username,password FROM users` para listar usuarios y contraseñas. Se confirmó acceso por SSH con las credenciales extraídas.

### Explotación:
Acceso SSH como `leia_organa` → `sudo` → root

![](./Imagenes/11.png)

![](./Imagenes/12.png)

![](./Imagenes/13.png)

![](./Imagenes/14.png)





### Sistemas afectados:
* 10.0.2.133

### Mitigación:
* Implementar validación y saneamiento de entradas en la aplicación.
* Usar consultas preparadas (prepared statements).
* Aplicar controles de acceso estrictos a la base de datos.
* Encriptar contraseñas con hashing seguro (bcrypt, Argon2).
