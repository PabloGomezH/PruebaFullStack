const pool = require('./src/db/connection');

async function testConnection() {
  try {
    const client = await pool.connect();
    console.log('Conexión a PostgreSQL exitosa!');
    client.release(); // Liberar el cliente
  } catch (err) {
    console.error('Error al conectar a PostgreSQL:', err);
  } finally {
    await pool.end(); // Cerrar el pool de conexiones
  }
}

testConnection();