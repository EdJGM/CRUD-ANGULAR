
# CRUD-ANGULAR

Aplicación web desarrollada con Angular que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una lista de productos. Utiliza un backend simulado con `json-server` y Express para la gestión de datos.

## Características

- Listado de productos con opción de editar y eliminar.
- Formulario para agregar nuevos productos.
- Edición y eliminación de productos existentes.
- Backend simulado con `db.json` usando `json-server`.
- Estilos modernos y responsivos.

## Requisitos previos

- Node.js y npm instalados.
- Angular CLI (`npm install -g @angular/cli`).

## Instalación

1. Clona el repositorio:
	```bash
	git clone https://github.com/EdJGM/CRUD-ANGULAR.git
	cd CRUD-ANGULAR
	```
2. Instala las dependencias:
	```bash
	npm install
	```

## Ejecución del proyecto

### Backend (json-server)

Para simular la API REST, ejecuta:
```bash
npx json-server --watch db.json --port 3000
```
Esto levantará el backend en `http://localhost:3000/products`.

### Frontend (Angular)

Para iniciar la aplicación Angular:
```bash
npm start
```
Accede a `http://localhost:4200/` en tu navegador.

## Scripts útiles

- `npm start`: Inicia el servidor de desarrollo Angular.
- `npm run build`: Compila la aplicación para producción.
- `npm test`: Ejecuta las pruebas unitarias.

## Estructura del proyecto

- `src/app/product-list`: Listado de productos.
- `src/app/product-add`: Formulario para agregar productos.
- `src/app/product-edit`: Edición de productos.
- `src/app/product-delete`: Eliminación de productos.
- `src/app/product.service.ts`: Servicio para interactuar con la API.
- `db.json`: Base de datos simulada.

## Tecnologías utilizadas

- Angular 18
- TypeScript
- Bootstrap (estilos)
- json-server
- Express

## Contribución

Las contribuciones son bienvenidas. Por favor, abre un issue o pull request para sugerencias o mejoras.

## Autor

EdJGM

---
Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 18.0.3.
