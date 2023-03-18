
# Kruger-Challenge-Frontend
Prueba tecnica de Kruger Corporation implementando una aplicación para llevar un registro del inventario del estado de vacunación de los empleados.
## Construcción de la aplicación
Una vez descargado el repositorio, solo debemos ejecutar el comando:
```
npm install
```
De esta forma se descargarán todas las dependencias necesarias para ejecutar la aplicación.
## Ejecución de la aplicación
Tenemos diversos comandos para ejecutar diferentes acciones con la aplicación:
* `npm run all`: el cual iniciara en paralelo tanto la aplicación de React en la dirección http://localhost:5173/  como la fake api en la dirección: http://localhost:3000. Con esto podremos probar todas las funcionalidades disponibles.
* `npm run dev`: El cual iniciara únicamente la aplicación de React en la dirección http://localhost:5173/
* `npm run apiserver`: El cual iniciara únicamente la fake api en la dirección: http://localhost:3000
* `npx playwrigth test`: El cual ejecutara todos los test de la aplicación. Debemos ejecutar el comando `npm run all` previamente para que los test funcionen correctamente.

En caso de que eliminemos todos los usuarios, o simplemente queremos todos los valores que venían por defecto en el proyecto, en el archivo db.json.copy tenemos todos estos datos. Solo debemos copiar el contenido de este archivo en el archivo db.json. No es necesario cerrar la aplicación para hacerlo, esta acción se puede realizar mientras la aplicación está siendo ejecutada.

## Dependencias utilizadas para el proyecto
Se utilizaron las siguientes dependencias:
* Vite
* Eslint
* eslint-config-prettier
* Tailwind
* json-server
* just-debounce-it
* jwt-decode
* prop-types
* React
* React-router
* Playwright test
* Concurrently
