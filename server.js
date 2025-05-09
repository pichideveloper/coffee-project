
// conxexcion con node.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});

// conexxion con la base de datos postgre

const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'sape',
  password: 'Lucia8',
  port: 5432,
});

app.post('/reserva', async (req, res) => {
  const { nombre, apellido, correo, telefono, fecha, personas, precio, local } = req.body;

  try {
    await pool.query(
      'INSERT INTO reservas (nombre_invitado, apellido_invitado, correo_invitado, telefono_invitado, fecha_reserva, numero_invitados, precio, local_invitados) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)',
      [nombre, apellido, correo, telefono, fecha, personas, precio, local]
    );
    res.send('Reserva guardada con éxito');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error al guardar la reserva');
  }
});
