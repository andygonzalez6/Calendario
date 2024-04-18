const q = require('./query_handler');
const bcrypt = require('bcrypt');


const getUserById = async (user_id) => {
  const query = 'SELECT * FROM "users" WHERE UserID = $1;';
  const values = [user_id];
  return q.handle_query(query, values);
};

const createUser = async (username, email, password) => {
    const query = 'INSERT INTO "users"(username, email, password) VALUES ($1, $2, $3) RETURNING *;';
    const saltRounds = 10;
    const hash = await bcrypt.hash(password, saltRounds);
    const values = [username, email, hash];
    return q.handle_query(query, values);
    
  };

const deleteUser = async (user_id) => {
  const query = 'DELETE FROM "users" WHERE UserID = $1;';
  const values = [user_id];
  return q.handle_query(query, values);
}

const getUserEvents = async (user_id) => {
  const query = 'SELECT * FROM event WHERE userid = $1;';
  const values = [user_id];
  return q.handle_query(query, values, true);
}

const getUserSchedule= async (user_id) => {
  const query = 'SELECT * FROM schedule WHERE userid = $1;';
  const values = [user_id];
  return q.handle_query(query, values, true);
}

const getUserEventSchedule = async (user_id) => {
  const query = `
  SELECT esm.*, e.*, s.*
  FROM eventschedulemapping esm
  JOIN event e ON esm.eventid = e.eventid
  JOIN schedule s ON esm.scheduleid = s.scheduleid
  WHERE e.userid = $1;
`;
  const values = [user_id];
  return q.handle_query(query, values, true);
}


const changeUserName = async (user_id, username) => {
  const query = "UPDATE public.users SET username=$1 WHERE userid = $2";
  const values = [username, user_id];
  return q.handle_query(query, values)
}

module.exports = {
  getUserById,
  createUser,
  deleteUser,
  getUserEvents,
  getUserSchedule,
  getUserEventSchedule,
  changeUserName
};