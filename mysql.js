const mysql = require('mysql');

// Configuración de la conexión a MySQL
const db = mysql.createConnection({
  host: 'localhost',        // Host de la base de datos
  user: 'root',       // Tu nombre de usuario de MySQL
  password: '', // Tu contraseña de MySQL
});

// Conectar a MySQL
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err.message);
    return;
  }
  console.log('Conectado a MySQL.');

  // Crear la base de datos si no existe
  db.query('CREATE DATABASE IF NOT EXISTS Atarjea', (err) => {
    if (err) {
      console.error('Error al crear la base de datos:', err.message);
      db.end(); // Cerrar la conexión si hay un error
      return;
    }
    console.log('Base de datos creada o ya existente.');

    // Utilizar la base de datos recién creada
    db.changeUser({ database: 'Atarjea' }, (err) => {
      if (err) {
        console.error('Error al seleccionar la base de datos:', err.message);
        db.end(); // Cerrar la conexión si hay un error
        return;
      }
      console.log('Usando la base de datos.');

      // A partir de este punto, puedes realizar operaciones en la base de datos
      // Aquí puedes crear tablas y realizar otras operaciones según tus necesidades

      // Crear la tabla 'productos' si no existe
const createProductosTableQuery = `
CREATE TABLE IF NOT EXISTS productos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(255) NOT NULL,
  descripcion TEXT,
  precio DECIMAL(10, 2) NOT NULL,
  stock INT NOT NULL
)
`;

db.query(createProductosTableQuery, (err) => {
if (err) {
  console.error('Error al crear la tabla de productos:', err.message);
  db.end(); // Cerrar la conexión si hay un error
  return;
}
console.log('Tabla de productos creada o ya existente.');

// A partir de este punto, puedes realizar operaciones en la tabla 'productos'
// Por ejemplo, insertar, actualizar o seleccionar registros
});



        // Finalmente, cierra la conexión cuando hayas terminado
        db.end((err) => {
          if (err) {
            console.error('Error al cerrar la conexión a MySQL:', err.message);
          } else {
            console.log('Conexión a MySQL cerrada.');
          }
        });
      });
    });
  });