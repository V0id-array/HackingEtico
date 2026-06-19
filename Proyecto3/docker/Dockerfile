# Usa Kali Linux como base
FROM kalilinux/kali-rolling

# Actualiza el sistema e instala herramientas necesarias
RUN apt update && apt upgrade -y && \
    apt install -y wget gnupg lsb-release apt-transport-https

# Agrega el repositorio de Debian Jessie y deshabilita la verificación de firmas GPG
RUN echo "deb http://archive.debian.org/debian jessie main" > /etc/apt/sources.list.d/jessie.list && \
    echo "Acquire::Check-Valid-Until \"false\";" > /etc/apt/apt.conf.d/99no-check-valid-until && \
    echo "Acquire::AllowInsecureRepositories \"true\";" >> /etc/apt/apt.conf.d/99no-check-valid-until && \
    echo "APT::Get::AllowUnauthenticated \"true\";" >> /etc/apt/apt.conf.d/99no-check-valid-until && \
    apt update --allow-insecure-repositories && \
    apt install -y apache2 php5 php5-sqlite sqlite3 libapache2-mod-php5 --allow-unauthenticated

# Habilita el módulo PHP5 de Apache
RUN a2enmod php5

# Configura Apache para priorizar index.php
RUN sed -i 's/DirectoryIndex .*/DirectoryIndex index.php index.html/' /etc/apache2/mods-enabled/dir.conf

# Configura el directorio de trabajo
WORKDIR /var/www/html

# Copia el contenido de la carpeta "web" a /var/www/html dentro del contenedor
COPY ./web /var/www/html

# Ajusta permisos para que Apache pueda leer los archivos
RUN chown -R www-data:www-data /var/www/html && chmod -R 755 /var/www/html

# Expone el puerto 80
EXPOSE 80

# Configura el contenedor para iniciar Apache en primer plano
CMD ["/usr/sbin/apache2ctl", "-D", "FOREGROUND"]
