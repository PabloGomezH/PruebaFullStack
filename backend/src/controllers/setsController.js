const pool = require('../db/connection');

const getAllSets = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM set');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

module.exports = { getAllSets };