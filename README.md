# Proyecto de Gestión de Productos

Este proyecto es una aplicación web para gestionar productos. Utiliza React para el frontend y Spring Boot para el backend, con MySQL como base de datos.

## Tabla de Contenidos

- [Descripción](#descripción)
- [Tecnologías](#tecnologías)
- [Requisitos](#requisitos)
- [Instalación y Configuración](#instalación-y-configuración)
- [Uso](#uso)
- [Contribución](#contribución)
- [Licencia](#licencia)

## Descripción

La aplicación permite agregar, actualizar, listar y eliminar productos. El proyecto está dividido en dos partes principales:

1. **Frontend**: Desarrollado con React y Bootstrap, proporciona una interfaz de usuario para interactuar con los productos.
2. **Backend**: Desarrollado con Spring Boot, expone una API RESTful para manejar las operaciones relacionadas con los productos.

## Tecnologías

- **Frontend**: React, Bootstrap, SweetAlert2
- **Backend**: Spring Boot, Spring Data JPA, MySQL
- **Base de Datos**: MySQL

## Requisitos

- [Node.js](https://nodejs.org) (versión 14.x o superior)
- [MySQL](https://www.mysql.com) (versión 8.0 o superior)
- [Java 17](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html)
- [Maven](https://maven.apache.org)

## Instalación y Configuración

### Backend

1. **Clonar el Repositorio**

   ```bash
   git clone <URL-del-repositorio>
   cd <nombre-del-repositorio>/backend

2. **Configurar la Base de Datos** 

Asegúrate de tener MySQL instalado y ejecutándose. Crea una base de datos para el proyecto.

3. **Configurar el Archivo application.properties**

Configura la conexión a la base de datos en el archivo src/main/resources/application.properties:

```bash
spring.datasource.url=jdbc:mysql://localhost:3306/nombre_base_datos
spring.datasource.username=usuario
spring.datasource.password=contraseña

4. **Ejecutar el Backend**

```bash
./mvnw spring-boot:run

### Frontend

1. **Instalar Dependencias**

   ```bash
   cd ../frontend
   npm install
