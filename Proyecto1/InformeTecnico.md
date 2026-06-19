# Redes y protocolos de comunicación

## Introducción

El objeto de este informe es analizar con detalle las principales categorías de vulnerabilidades que afectan al área de redes y protocolos de comunicación de la institución financiera TrustShield Financial, así como describir CVEs concretos relacionados con dichas categorías que representen ejemplos de vulnerabilidades reales dentro de estas.

Con dicho fin, se clasificarán las vulnerabilidades encontradas (tanto categorías como CVEs) según su gravedad, su facilidad de explotación y su relevancia para la compañía.

Además, se propondrán soluciones viables y efectivas, basadas en las mejores prácticas de ciberseguridad, que ayudarán a eliminar o reducir el riesgo que presenten las diferentes vulnerabilidades.

## Categorías de vulnerabilidades

### Reconocimiento

* __Footprinting y fingerprinting__:
    * __Footprinting__: Proceso de recopilar información detallada sobre un sistema objetivo, red u organización para identificar posibles vulnerabilidades y puntos de entrada.
    * __Fingerprinting__: Técnica más específica centrada en identificar características particulares de sistemas y servicios en la red objetivo.

* __Enumeración__: Proceso de recopilar información detallada sobre una red objetivo y sus componentes, que implica:
    * Identificar hosts activos en la red
    * Descubrir nombres de usuarios y grupos
    * Mapear recursos compartidos
    * Identificar aplicaciones y servicios en ejecución

* __Escaneo de puertos__: 
    * El atacante reconoce una red en busca de información sobre los puertos para descubrir puertas abiertas o puntos débiles.
    * Funciona enviando paquetes a diferentes puertos de un sistema o red y analizando las respuestas recibidas.
    * Permite determinar si un puerto está: abierto, cerrado, filtrado por un firewall.
    * Existen varios tipos de escaneos, como el escaneo SYN, TCP Connect y UDP, cada uno con sus propias características y ventajas.

### Acceso
+ __Redirección de puertos__:
  + En un ataque de redirección de puerto, un atacante usa un sistema comprometido (host A) para acceder a otro sistema (host B) mediante una conexión confiable, 
  aprovechando **SSH** en el host A y **Telnet** en el host B.

+ __Man in the middle__:
  + En un ataque de hombre en el medio, el actor de amenaza se coloca entre dos entidades legítimas para leer o modificar los datos que pasan entre las dos partes. 
  La imagen muestra un ejemplo de un ataque de hombre en el medio.

+ __Explotación de Confianza__:
  + En un ataque de explotación de confianza, un actor de amenazas utiliza privilegios no autorizados para obtener acceso a un sistema, posiblemente comprometiendo el objetivo.

+ __Ataques a contraseñas__:
    + Ataques de fuerza bruta
    + Ataques de caballos de Troya
    + Sniffers de paquetes

### Denegación de servicio (DDOS)

* __Flooding__: El atacante envía solicitudes masivas a un servidor desde direcciones de sitios web inexistentes o inválidas. Estos ataques ralentizan o bloquean el servicio e impiden el flujo normal de usuarios. Hay distintos tipos:
    * __ICMP__: El atacante aprovecha el Protocolo de mensajes de control de Internet que utiliza solicitudes y respuestas eco o ping para comprobar la conectividad de un dispositivo, sobrecargando un router o una dirección IP. 
    * __SYN__: También conocido como ataque medio abierto, los atacantes aprovechan las conexiones que establece el protocolo TCP (Protocolo de control de transmisión) enviando peticiones masivas, lo que hace que el servidor se quede con conexiones abiertas esperando respuestas por parte del cliente. 
    * __UDP__: Los atacantes envían un gran número de paquetes UDP (Protocolo de Datagramas de Usuario) con direcciones IP falsificadas a puertos aleatorios, una vez enviado, el servidor debe comprobar el puerto especificado en el paquete y emitir una respuesta, lo que consume grandes recursos.

* __Ping of death__: El atacante envía un paquete ICMP de gran tamaño o infectado, pudiendo bloquear, congelar o reiniciar el sistema del usuario.

* __Smurf Attack__: El atacante crea un paquete ICMP sujeto a una IP falsa, este paquete contiene un mensaje ping que se envía infinitamente entre los nodos de red y las direcciones IP de la red.

* __Amplificación__: El atacante aprovecha los servidores vulnerables para enviar grandes volúmenes de tráfico inundando el sistema con una cantidad enorme de datos. Este puede ser de DNS o NTP.

* __Fragmentación__: El atacante genera e inyecta paquetes cifrados en una red WEP (Privacidad equivalente a cableado: Los paquetes de datos se dividen en fragmentos más pequeños que se cifran antes de ser transmitidos) sin necesidad de conocer la clave.

### Spoofing

* __IP Spoofing__ : Es un tipo de ataque en el cual el atacante manipula la cabecera de los paquetes IP para que parezcan provenir de una dirección IP confiable o legítima. Al falsificar la dirección IP de origen, los atacantes pueden evitar medidas de seguridad y acceder a sistemas restringidos. Este tipo de ataque se utiliza comúnmente como parte de un ataque DDoS o para ejecutar ataques de man-in-the-middle (MitM).
![ip spoofing](https://www.cloudflare.com/img/learning/ddos/glossary/ip-spoofing/ip-spoofing.png)

* __ARP Spoofing__: El atacante envía mensajes ARP (Address Resolution Protocol) falsificados en una red local. Estos mensajes asocian la dirección MAC del atacante con la dirección IP de un dispositivo legítimo en la red. Como resultado, el tráfico destinado al dispositivo legítimo se redirige al atacante, permitiendo el espionaje, el robo de datos o la interrupción de la comunicación.
![arp spoofing](https://www.okta.com/sites/default/files/media/image/2021-04/ARPPoisoningSpoofing.png)
* __MAC Spoofing__:En este tipo de ataque, el atacante cambia la dirección MAC de su dispositivo para coincidir con la de otro dispositivo en la red. Esto puede permitir el acceso a redes inalámbricas restringidas o evitar medidas de seguridad basadas en MAC.

* __DNS Spoofing__: En este ataque, el atacante manipula la caché DNS de un servidor para redirigir las solicitudes de nombres de dominio legítimos a direcciones IP maliciosas. De esta forma, los usuarios que intentan acceder a un sitio web legítimo son redirigidos a un sitio falso, donde se pueden realizar ataques de phishing, instalación de malware o robo de credenciales.
 ![DNS Spoofing](https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fbluecatnetworks.com%2Fwp-content%2Fuploads%2F2020%2F10%2FDNS-Poisoning.png&f=1&nofb=1&ipt=594aaf6af0eec74283e334e392f7c6d55be7105b4620d6b2944a8f559cf2c1d8&ipo=images)


## CVEs vulnerabilidades

### CVEs Reconocimiento

[CVE-2024-3454](https://www.cve.org/CVERecord?id=CVE-2024-3454)  

Vulnerabilidad de implementación en el protocolo Matter 1.2 de la Connectivity Standards Alliance, específicamente en el SDK connectedhomeip, que permite a un tercero obtener información sobre dispositivos en la misma red.  
Gravedad de la vulnerabilidad: Baja.  
Puntaje: 3.5  
Medidas para evitarlo:
* Actualizar el SDK connectedhomeip a una versión posterior a la 1.2.0.1 una vez disponible.
* Implementar segmentación de red para aislar los dispositivos Matter.
* Monitorear el tráfico de red en busca de actividades sospechosas.
* Limitar el acceso a la red local donde se encuentran los dispositivos Matter.
* Configurar firewalls para restringir el tráfico innecesario.

[CVE-2022-46830](https://www.cve.org/CVERecord?id=CVE-2022-46830)  

Vulnerabilidad en JetBrains TeamCity, versiones 2022.10 y 2022.10.1, que permitía el escaneo de puertos internos a través de un endpoint STS personalizado.  
Gravedad de la vulnerabilidad: Media.  
Puntaje: 4.1  
Medidas para evitarlo:
* Actualizar TeamCity a una versión posterior a 2022.10.1.
* Implementar firewalls y segmentación de red para limitar el acceso al servidor TeamCity.
* Monitorear y auditar regularmente los logs de acceso al servidor TeamCity.
* Utilizar autenticación de dos factores para acceder a TeamCity.
* Configurar adecuadamente los permisos de usuario en TeamCity, siguiendo el principio de mínimo privilegio.


### CVEs Acceso
[CVE-2019-14899](https://www.cert.gov.py/vulnerabilidad-cve-2019-14899-en-conexiones-de-tuneles-vpn/)  

Permite a los atacantes reemplazar, cambiar o sustituir paquetes en conexiones TCP reenviadas a través de túneles VPN.  
El problema afecta a **Linux**, **FreeBSD**, **OpenBSD**, **Android**, **macOS**, **iOS** y otros sistemas similares a Unix.  
Gravedad de la vulnerabilidad: Alta  
Puntaje: 7.4   
Medidas para evitarlo:  

Es recomendable activar el filtrado de ruta inversa mediante **bogon filtering** y mantener los sistemas actualizados con las últimas versiones estables disponibles en los sitios de los fabricantes. Además, es esencial instalar las actualizaciones de seguridad tan pronto como estén disponibles para mitigar riesgos. Los investigadores están preparando un informe detallado sobre esta vulnerabilidad, pero será publicado cuando las distribuciones de Linux afectadas ofrezcan soluciones adecuadas para garantizar la seguridad del sistema frente a posibles explotaciones.

[CVE-2020-0601](https://www.incibe.es/incibe-cert/alerta-temprana/vulnerabilidades/cve-2020-0601) 

Se presenta una vulnerabilidad de suplantación de identidad en la manera en que **Windows CryptoAPI** (Crypt32.dll) comprueba los certificados **Elliptic Curve Cryptography (ECC)**. Un atacante podría explotar la vulnerabilidad mediante el uso de un certificado de firma de código falsificado para firmar un ejecutable malicioso, haciendo que parezca que el archivo era de una fuente confiable y legítima. También se conoce como "Windows CryptoAPI Spoofing Vulnerability".  
Gravedad de la vulnerabilidad: Alta  
Puntaje: 8.10  
Medidas para evitarlo:  

La actualización de seguridad indicada en la asesoría de **Microsoft** aborda la vulnerabilidad asegurándose de que **CryptoAPI** de Windows valide completamente los certificados ECC. Para los sistemas configurados para actualizar en línea, solo debe asegurarse de que las actualizaciones de Windows estén actualizadas. Para aquellos con sistemas offline o que hayan detenido las actualizaciones, deben descargar e instalar la actualización para su sistema operativo a fin de solucionar este problema.

[CVE-2015-1793](https://nvd.nist.gov/vuln/detail/CVE-2015-1793)  

La función `X509_verify_cert` en `crypto/x509/x509_vfy.c` en **OpenSSL** 1.0.1n, 1.0.1o, 1.0.2b y 1.0.2c no procesa correctamente los valores de las restricciones básicas X.509 cA durante la identificación de cadenas de certificados alternativas, lo que permite a los atacantes remotos falsificar un rol de Autoridad de Certificación y activar verificaciones de certificados no intencionadas mediante un certificado de hoja válido.  
Medidas para evitarlo:  

- **Actualizar OpenSSL**: Asegúrate de utilizar una versión de OpenSSL que incluya la corrección para CVE-2015-1793. Se recomienda actualizar a la versión 1.0.2a o superior, ya que las versiones más recientes han abordado esta vulnerabilidad.
- **Revisar la configuración de SSL/TLS**: Implementar configuraciones seguras en el servidor para rechazar protocolos y cifrados inseguros. Deshabilitar el soporte para SSLv2 y SSLv3 puede ayudar a mitigar riesgos.
- **Usar alternativas de cifrado más seguras**: Considerar el uso de cifrados modernos y protocolos actualizados, como **TLS 1.2** o superior, para fortalecer la seguridad de las conexiones.
- **Implementar mecanismos de detección y respuesta**: Monitorizar el tráfico de red y establecer alertas para detectar actividades inusuales o intentos de explotación.
- **Realizar pruebas de penetración**: Llevar a cabo auditorías de seguridad y pruebas de penetración regulares para identificar y remediar posibles vulnerabilidades en el sistema.


### CVEs Denegación de servicio
[CVE-2022-1728](https://www.cve.org/CVERecord?id=CVE-2022-1728)  

Permitir contraseñas largas puede permitir ataques DDOS en el repositorio de GitHub de [Polonel/TruDesk](https://github.com/polonel/trudesk) (Aplicación que permite mantener las cargas de trabajo organizadas y sencillas) en versiones anteriores a la 1.2.2.  
Gravedad de la vulnerabilidad: Alta.  
Puntaje: 7.6  
Medidas para evitarlo:
* Recomendar al usuario contraseñas por defecto que se generen de forma aleatoria pero siendo seguras.
* Permitir un número máximo de caracteres por contraseña.
* Mostrar al usuario un ejemplo de contraseña para que pueda ver el formato requerido.

[CVE-2023-4418](https://www.cve.org/CVERecord?id=CVE-2023-4418)  

Un atacante sin privilegios puede enviar varios paquetes al [LMS5xx](https://www.sick.com/media/pdf/5/85/285/IM0055285.PDF) (Sensor de medición láser que ofrece diversas funciones para mejorar el rendimiento de aplicaciones) inundándolo con una gran cantidad de solicitudes SYN, agotando sus recursos.  
Gravedad de la vulnerabilidad: Alta.  
Puntaje: 7.5  
Medidas para evitarlo: 
* Controlar los privilegios de los usuarios.
* Controlar el número de paquetes que pueden enviar los usuarios.

### CVEs Spoofing

[CVE-2024-3596](https://nvd.nist.gov/vuln/detail/CVE-2024-3596)

CVE-2024-3596 es una vulnerabilidad crítica en el protocolo RADIUS (Remote Authentication Dial-In User Service), que permite a un atacante en la red modificar respuestas de autenticación mediante un ataque de colisión de prefijo elegido, aprovechando la debilidad del algoritmo de hash MD5. Esto permite al atacante forjar respuestas válidas, como convertir un mensaje de Access-Reject en Access-Accept, sin necesidad de conocer el secreto compartido entre el cliente y el servidor RADIUS, lo que puede resultar en acceso no autorizado a dispositivos de red.  
Gravedad de la vulnerabilidad: Alta  
Medidas para evitarlo:
- Requerir el Atributo Message-Authenticator: Los servidores RADIUS deben configurarse para exigir que todos los paquetes de solicitud incluyan el atributo Message-Authenticator. Esto ayuda a prevenir la manipulación de paquetes.

- Implementar TLS o DTLS: Se recomienda utilizar cifrado mediante TLS o DTLS para proteger las comunicaciones entre el cliente y el servidor RADIUS, lo que puede ayudar a prevenir ataques man-in-the-middle (MITM).

- Actualizar Software: Los fabricantes de software y hardware que implementan RADIUS deben actualizar sus sistemas para incluir las últimas recomendaciones y parches de seguridad.


[CVE-2020-0601](https://nvd.nist.gov/vuln/detail/CVE-2020-2018) 

Esta vulnerabilidad, conocida como "CurveBall", se encuentra en la biblioteca de criptografía de Windows, **CryptoAPI (Crypt32.dll)**, y afecta la validación de certificados de **Elliptic Curve Cryptography (ECC)**. Descubierta por la Agencia de Seguridad Nacional de EE. UU. (NSA), fue divulgada el 14 de enero de 2020.

CVE-2020-0601 permite a un atacante explotar la forma en que Windows valida los certificados ECC. Un atacante puede crear un certificado de firma de código falsificado que parece provenir de una fuente confiable. Esto significa que un archivo malicioso puede ser firmado con este certificado, haciéndolo parecer legítimo y evitando las advertencias habituales del sistema operativo o del navegador.  
Gravedad de la vulnerabilidad: Alta  
Puntaje: 8.1
Medidas para evitarlo:  
Se recomienda encarecidamente a los usuarios y administradores de sistemas que instalen las actualizaciones de seguridad proporcionadas por Microsoft para mitigar esta vulnerabilidad. Las actualizaciones aseguran que la biblioteca CryptoAPI valide correctamente los certificados ECC.


## Conclusiones

En conclusión, hemos aprendido y analizado tanto las distintas categorías de vulnerabilidades que pueden afectar a las redes y a los protocolos de comunicación, como cada uno de los ataques a los que se pueden ver afectados. 
Como consejos generales para evitar estos ataques creemos que los usuarios deben tener todos sus servicios actualizados en la última versión para evitar las vulnerabilidades de las versiones anteriores, tener los privilegios de los usuarios de una empresa bien suministrados, configurar firewalls, utilizar siempre contraseñas seguras y tener el equipo al día con las últimas actualizaciones de seguridad.


## Bibliografía

__Reconocimiento:__ 

[Footprinting 1](https://www.incibe.es/empresas/blog/como-evitar-que-la-huella-digital-afecte-nuestras-empresas)   
[Footprinting 2](https://www.tokioschool.com/noticias/footprinting/)   
[Footprinting 3](https://www.eccouncil.org/cybersecurity-exchange/penetration-testing/footprinting-steps-penetration-testing/)  
[Escaneo de puertos 1](https://www.checkpoint.com/es/cyber-hub/network-security/what-is-a-port-scan/)  
 [Escaneo de puertos 2](https://www.fortinet.com/lat/resources/cyberglossary/what-is-port-scan)  
  [Escaneo de puertos 3](https://mineryreport.com/blog/todo-sobre-escaneo-de-puertos/)   
  [Enumeración](https://eniit.es/creacion-de-herramienta-de-enumeracion-y-escaneo/)  
  
__Acceso:__  

[Ataques de Redes](https://ccnadesdecero.es/ataques-de-redes/#3_Ataques_de_Acceso)

__Denegación de servicios:__  

[Flooding](https://www.akamai.com/es/glossary/what-is-an-http-flood-ddos-attack)  
[Flooding ICMP](https://www.vpnunlimited.com/es/help/cybersecurity/icmp-flooding)  
[Flooding SYN](https://www.f5.com/es_es/glossary/syn-flood-attack)  
[Flooding UDP](https://www.akamai.com/glossary/what-is-udp-flood-ddos-attack)  
[Ping of death](https://www.imperva.com/learn/ddos/ping-of-death/)  
[Smurf attack](https://latam.kaspersky.com/resource-center/definitions/what-is-a-smurf-attack?srsltid=AfmBOopXMISWdOQzNhIt_bTMyZV4pHiVsBH0S3zUY0HyzQtoskYBPzEZ)  
[Amplificación](https://www.akamai.com/es/glossary/what-is-a-dns-amplification-attack)  
[Fragmentación 1](https://thehackerway.com/2012/04/20/wireless-hacking-ataques-contra-wep-ataque-de-fragmentacion-parte-x/#:~:text=El%20ataque%20de%20fragmentaci%C3%B3n%20es,y%20posteriormente%20aplicar%20este%20ataque.)  
[Fragmentación 2](https://afsh4ck.gitbook.io/ethical-hacking-cheatsheet/explotacion-de-vulnerabilidades/explotacion-en-redes/hacking-wifi/wep-cracking/packet-injection/fragmentation)  

__Spoofing:__

[DNS spoofing](https://www.imperva.com/learn/application-security/dns-spoofing/)  
[IP spoofing](https://www.cloudflare.com/learning/ddos/glossary/ip-spoofing/)  
[ARP spoofing](https://www.okta.com/identity-101/arp-poisoning/)  
[MAC spoofing](https://www.dongee.com/tutoriales/que-es-para-que-sirve-como-funciona-mac-spoofing/)  
[1 CVE-2024-3596](https://www.openwall.com/lists/oss-security/2024/07/09/4)  
[2 CVE-2024-3596](https://www.cisco.com/c/en/us/support/docs/security/identity-services-engine/222287-blast-radius-cve-2024-3596-protocol-sp.html)  
[1 CVE-2020-0601](https://media.defense.gov/2020/Jan/14/2002234275/-1/-1/0/CSA-WINDOWS-10-CRYPT-LIB-20190114.PDF)  
[2 CVE-2020-0601](https://arstechnica.com/information-technology/2020/01/researcher-develops-working-exploit-for-critical-windows-10-vulnerability/)  

