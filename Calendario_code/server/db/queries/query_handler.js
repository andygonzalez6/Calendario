const pool = require('../pool');

const handle_query = async(query, values, multiresult) => {
    try {
      const result = await pool.query(query, values);
      if (multiresult) {
        return result.rows;
      }
      return result.rows[0];
    }
    catch (error) {
      console.error('Error executing query', error);
      throw error;
    }
  }



module.exports = {
    handle_query,
}