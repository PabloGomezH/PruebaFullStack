const pool = require('../db/connection');

const getCardsBySetId = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query('SELECT * FROM card WHERE set_id = $1', [id]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

const getCardById = async (req, res) => {
  const { id } = req.params;
  try {
    console.log('prueba')
    const result = await pool.query('SELECT * FROM card WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).send('Card not found');
    }
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
};

module.exports = { getCardsBySetId, getCardById };