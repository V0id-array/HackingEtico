# Proyecto 2

## Introducción

El objetivo de este proyecto es investigar los diferentes tipos de auditorías y elegir cuáles vamos a llevar a cabo como empresa, desarrollando diferentes metodologías para cada una de ellas y evaluando las herramientas que utilizaremos en el proceso.

## **Clasificación de tipos de ataque**

### **Ataque de denegación de servicio (DoS)**

Un ataque de denegación de servicio (DoS) es un intento malicioso de sobrecargar un sistema, servicio o red con tráfico excesivo para interrumpir su funcionamiento normal.

El objetivo es hacer que el recurso sea inaccesible para los usuarios legítimos, generalmente inundando el objetivo con solicitudes hasta que no pueda responder o este se bloquee.

### **Spoofing de DNS y Spoofing IP**

El spoofing de DNS implica manipular el sistema de nombres de dominio para redirigir el tráfico a sitios maliciosos. El spoofing IP involucra falsificar la dirección IP de origen en los paquetes de red para ocultar la identidad del atacante o hacerse pasar por una fuente confiable.

### **ARP Spoofing**

Este ataque implica enviar mensajes ARP (Address Resolution Protocol) falsificados en una red local. El objetivo es asociar la dirección MAC del atacante con la dirección IP de un host legítimo, permitiendo interceptar el tráfico destinado a ese host.

### **Ataque Man in the Middle (MitM)**

En un ataque MitM, el atacante se posiciona entre dos partes que se comunican, interceptando y potencialmente alterando la comunicación sin que las partes lo sepan. Esto puede permitir al atacante robar información o manipular la conversación.

### **Tunelización de DNS**

Esta técnica utiliza el protocolo DNS para transmitir datos de forma encubierta, a menudo para evadir firewalls o filtros de contenido. Puede ser utilizada tanto por atacantes como por usuarios legítimos que buscan evadir restricciones de red.

### **Ataques de Phishing**

Uno de los ataques más comunes. Este se basa en la suplantación de identidad, ya sea de compañías de confianza o incluso de personas conocidas por el propio usuario, con el fin de robar información del mismo como contraseñas o datos bancarios. Estos ataques se realizan por correo electrónico, SMS (smishing) o por llamadas (vishing).

### **Malware**

Son programas diseñados para infiltrarse en un sistema sin el consentimiento del usuario y dañarlo. Los más comunes son los virus, gusanos, troyanos o ransomware. Estos programas pueden llegar a nuestros dispositivos a través de descargas que parecen inofensivas y terminan encriptando nuestros archivos u ofreciendo al hacker la capacidad de bloquear nuestro dispositivo, terminando el ataque en una extorsión cibernética.

### **Inyección SQL**

Este tipo de ataque infiltra un código malicioso que intenta descubrir las debilidades de una base de datos para manipularla y acceder a su información para manipularla, robarla o destruirla.

### **Ataques de fuerza bruta**

Este tipo de ataque se basa en hacer múltiples intentos de inicio de sesión con usuarios y contraseñas aleatorias hasta encontrar las credenciales correctas y poder acceder al resto de datos del usuario.


## Tipos de auditoría elegidas

- Auditoría de vulnerabilidades: Evaluaremos y priorizaremos debilidades en sistemas informáticos, redes y aplicaciones de una organización. Nuestro objetivo es descubrir vulnerabilidades antes que los atacantes puedan explotarlas.
- Auditoría de redes: Examinaremos y analizaremos los componentes de la red como dispositivos, software o servidores, dependiendo de los recursos que nos ofrezca la empresa. Nuestra intención es prevenir sistemas vulnerables o mal configurados para que no dejar datos confidenciales expuestos, que no permitan el acceso a usuarios no autorizado o prevenir que interrumpan las operaciones de la empresa.
- Auditoría de aplicaciones web: Realizaremos una evaluación exhaustiva de la seguridad y funcionamiento de la aplicación web del cliente, siguiendo la metodología OWASP y utilizando una combinación de herramientas especializadas y análisis manual. Nuestro objetivo fundamental será mejorar la seguridad y robustez de dicha aplicación web.

## Investigación de fases de ataque
Hemos investigado las fases más comunes de un atacante a la hora de realizar un ataque, destacamos las siguientes:

### Reconocimiento

Esta etapa consiste en recopilar toda la información pública acerca del objetivo. Podemos distinguir entre reconocimiento activo o pasivo, en el pasivo no se interactúa directamente con el objetivo, por lo que no se deja rastro, se conoce como footprinting. En el reconocimiento activo si que se interactúa directamente con el objetivo, se conoce como fingerprinting.

### Escaneo

Una vez recopilada la información sobre el objetivo, se analizan y recopilan todas las vulnerabilidades, puertos abiertos, etc. Para esta fase existen herramientas como Nmap, las cuales facilitan el proceso.

### Explotación

En esta fase se trata de explotar las vulnerabilidades encontradas con nuestros ataques, con el fin de de obtener acceso al sistema objetivo.

### Postexplotación

Una vez tenemos acceso al sistema, ahora toca establecer una persistencia, es decir, que podamos mantener el acceso al sistema en el tiempo. Para ello podemos configurar puertas traseras o herramientas de acceso remoto. También se intentará en esta fase una escalada de privilegios para poder obtener acceso a la mayor información posible.

### Pivoting

Tambien conocido como movimiento lateral, consiste en desde el sistema que tenemos acceso, movernos a otros sistemas que forman parte de la misma red.


## Metodología de la auditoría de aplicaciones web:
Según nuestra investigación determinamos que esta sería nuestra metodología para la auditoría de aplicaciones web

 **1. Recolección de Información**

Recopilamos datos detallados sobre la infraestructura y los componentes de su aplicación web mediante técnicas de reconocimiento activo y pasivo. Este análisis inicial ayuda a identificar servicios, configuraciones y dependencias que podrían representar vectores de ataque.

**2. Análisis de Vulnerabilidades**

Utilizamos herramientas automáticas y técnicas manuales para identificar fallos de seguridad comunes (como inyecciones SQL o XSS) y configuraciones erróneas. Cada hallazgo es documentado y evaluado en términos de impacto potencial sobre la seguridad de la aplicación.

**3. Explotación de Vulnerabilidades**

Si el cliente lo autoriza, realizamos pruebas controladas de explotación para determinar la gravedad y el alcance de las vulnerabilidades detectadas. Esto permite comprender el impacto de cada vulnerabilidad en un entorno simulado sin afectar el sistema en producción.

**4. Informe Detallado de Resultados**

Elaboramos un informe técnico que clasifica las vulnerabilidades según su severidad e incluye explicaciones de explotación, impacto y recomendaciones de mitigación. También se sugieren ajustes de seguridad adicionales para mejorar la postura de seguridad general de la aplicación.

## Herramientas que utilizaremos en la auditoría de aplicaciones web

Utilizaremos las siguientes herramientas para realizar una auditoría de aplicaciones web efectiva :

- **Acunetix:** Es una herramienta de escaneo automatizado que detecta más de 4500 vulnerabilidades en aplicaciones web. Su capacidad para rastrear miles de páginas sin interrupciones y generar informes detallados la hace ideal para auditorías exhaustivas.
- **Burp Suite Professional:** Es una plataforma integral para pruebas de seguridad de aplicaciones web. Ofrece funcionalidades avanzadas como interceptación de tráfico, escaneo de vulnerabilidades y herramientas para pruebas manuales.
- **OWASP ZAP (Zed Attack Proxy):** ZAP es una herramienta gratuita y de código abierto que proporciona capacidades de escaneo y búsqueda de vulnerabilidades. Es fácil de usar para principiantes pero también ofrece funcionalidades avanzadas para expertos.
- **Netsparker: S**e destaca por su facilidad de uso y su precisión en la detección de vulnerabilidades como SQL injection y cross-site scripting. Su capacidad para verificar automáticamente las vulnerabilidades ahorra tiempo en la auditoría.
- **Metasploit Framework:** Aunque principalmente es una herramienta de pruebas de penetración, Metasploit es valiosa para verificar y explotar vulnerabilidades encontradas durante la auditoría.

## Costos de las herramientas

- **Costos de adquisición y licencias anuales:**
    - **Acunetix (versión estándar):** 4.645 €
    - **Burp Suite Professional:** 371 €
    - **OWASP ZAP:** 0 €
    - **Netsparker:** 4.645 €
    - **Metasploit Framework (versión Community):** 0 €
- **Costos adicionales a considerar**
    - **Capacitación del personal:** 1.860 € - 4.650 € por persona.
    - **Infraestructura de pruebas (servidores, etc.):** 930 € - 2.790 € anuales.
    - **Actualizaciones y mantenimiento:** 10-20% del costo de las licencias anuales, aproximadamente 966 € - 1.932 € anuales.

## Metodología de la auditoría de redes:

Según nuestra investigación de otras auditorías y distintas fases de ataque, determinamos que esta sería nuestra metodología para la auditoría de redes

**1. Recolección de Información**

Iniciamos el proceso con la recopilación de datos sobre la red, incluyendo el tipo de red, dispositivos conectados, servicios activos y puntos de conexión. Esta fase incluye la construcción de un mapa detallado de la red, proporcionando una base sólida para identificar áreas de interés y posibles vectores de ataque.

**2. Escaneo de la Red y Análisis de Vulnerabilidades**

Realizamos un escaneo completo de la red para detectar dispositivos, puertos abiertos, puntos de acceso, servicios activos y las versiones de software utilizadas. A partir de esta información, identificamos vulnerabilidades conocidas y evaluamos políticas, configuraciones y protocolos de seguridad para detectar posibles vulnerabilidades aún no documentadas. Esta fase nos permite comprender el estado de seguridad general de la red y localizar áreas de riesgo.

**3. Pruebas de Penetración**

Con la autorización del cliente, realizamos intentos de explotación controlados sobre las vulnerabilidades detectadas. Estas pruebas nos permiten verificar la gravedad y el alcance real de cada vulnerabilidad, evaluando la efectividad de los vectores de ataque que podrían comprometer la seguridad de la red en un entorno real.

**4. Evaluación de la Arquitectura de la Red**

Analizamos la arquitectura de la red para comprobar que esté estructurada de forma segura y eficiente. Nos enfocamos en la segmentación de la red y la correcta configuración de los firewall, revisando que los recursos estén organizados de manera que se reduzca el riesgo de propagación de las amenazas.

**5. Informe de Resultados**

Finalizamos con la elaboración de un informe técnico detallado que clasifica las vulnerabilidades encontradas según su gravedad. Explicamos cada vulnerabilidad, el potencial de explotación y proporcionamos recomendaciones específicas para mitigar los riesgos y optimizar la seguridad general de la red.

## Herramientas que utilizaremos en la auditoría de redes

Utilizaremos las siguientes herramientas para realizar una auditoría de redes efectiva :

- **Nmap:** Es una herramienta imprescindible para el escaneo de redes y detección de vulnerabilidades. Permite mapear la red e identificar dispositivos conectados y puertos abiertos.
- **Wireshark:** Es primordial para el análisis de tráfico de red. Permite examinar detalladamente las comunicaciones y detectar anomalías.
- **Nessus Professional:**  Es un potente escáner de vulnerabilidades que cubre una amplia gama de sistemas y dispositivos de red.
- **SolarWinds Network Configuration Manager:** Es excelente a la hora de gestionar y auditar configuraciones de dispositivos de red.

## Costos de las herramientas

- **Costos de adquisición y licencias anuales:**
    - **Nmap (código abierto):** 0 €
    - **Wireshark (código abierto):** 0 €
    - **Nessus Professional:** 2.790 €
    - **SolarWinds Network Configuration Manager:** 2.790 €
- **Costos adicionales a considerar:**
    - **Capacitación del personal:** 2.000 € - 5.000 € por persona.
    - **Infraestructura de pruebas (servidores, etc.):** 1.000 € - 3.000 € anuales.
    - **Actualizaciones y mantenimiento:** 10-20% del costo de las licencias anuales, aproximadamente 1.022 € - 2.045 € anuales.

## Metodología de la auditoria de vulnerabilidades:
Según nuestras investigaciones, determinamos que esta sería nuestra metodología para la auditoría de vulnerabilidades

**1. Recopilación de Información**

Recolectamos toda la información importante sobre la organización, incluyendo servidores, estaciones de trabajo, instalaciones, dispositivos de red, bases de datos y sistemas operativos. Este paso proporciona una visión general de los activos, permitiéndonos identificar áreas de riesgo potenciales y comprender la infraestructura completa.

**2. Escaneo de Vulnerabilidades**

Realizamos un escaneo de vulnerabilidades, empleando herramientas automatizadas para identificar fallos de seguridad. Este paso también incluye revisiones físicas de los sistemas cuando es pertinente, y, si el cliente lo aprueba, la ejecución de pruebas de penetración  simples para verificar el riesgo de las vulnerabilidades detectadas.

**3. Análisis y Evaluación**

Clasificamos las vulnerabilidades detectadas según su gravedad y su posible impacto sobre la seguridad de la empresa. Esta evaluación permite priorizar la mitigación de los riesgos en función de su riesgo.

**4. Informe y Recomendaciones**

Elaboramos un informe técnico en el que detallamos cada vulnerabilidad encontrada, explicando sobre su posible explotación y el impacto para la empresa. También incluimos recomendaciones específicas y prácticas para corregir los riesgos, ayudando a fortalecer la seguridad de los sistemas a largo plazo.

## Herramientas que utilizaremos en la auditoría de vulnerabilidades

Utilizaremos las siguientes herramientas para realizar una auditoría de vulnerabilidades efectiva 

- **Nessus Professional:** Es una herramienta líder en escaneo de vulnerabilidades, ideal para el "Escaneo automatizado" y la "Evaluación de configuraciones de seguridad". Ofrece una amplia base de datos de vulnerabilidades y es altamente configurable.
- **Qualys** **Vulnerability Management:**  Esta herramienta ofrece una solución completa para la gestión de vulnerabilidades, incluyendo escaneo continuo y priorización de vulnerabilidades, lo que se alinea con el servicio de "Evaluación continua".
- **Metasploit Framework:** Es una herramienta muy útil para las "Pruebas de penetración ligeras", permitiendo verificar y explotar vulnerabilidades críticas encontradas.
- **OpenVAS:** Es una alternativa de código abierto para el escaneo de vulnerabilidades que sirve como complemento o respaldo a Nessus.

## Costos de las herramientas

- **Costos de adquisición y licencias anuales:**
    - **Nessus Professional:** 2.790 €
    - **Qualys Vulnerability Management:** 4.650 €
    - **Metasploit Framework (versión Community):** 0 €
    - **OpenVAS:** 0 €
- **Costos adicionales a considerar:**
    - **Capacitación del personal:** 2.000 € - 5.000 € por trabajador/a por mes
    - **Infraestructura de pruebas (servidores, etc.):** 1.000 € - 3.000 € anuales.
    - **Actualizaciones y mantenimiento:** 10-20% del costo de las licencias anuales, aproximadamente 1.208 € - 2.417 € anuales.

## Conclusión
El proyecto aborda la implementación de auditorías de seguridad ofensiva, se clasifican diferentes tipos de ataque, se elabora una metodología básica y un análisis de costos de las herramientas para las auditorías. También se ha realizado un dosier para informar a posibles clientes de los servicios ofertados. En la realización de este proyecto se ha aprendido de manera básica cómo funcionan las auditorías ofensivas y cómo se puede organizar el proceso de detección de riesgos en ciberseguridad.