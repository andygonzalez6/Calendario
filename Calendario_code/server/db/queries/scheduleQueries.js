const q = require('./query_handler');


const createSchedule = async (user_id, title, description, colorCode) => {
    const query = 'INSERT INTO schedule(userid, title, description, colorCode) VALUES($1, $2, $3, $4) RETURNING *';
    const values = [user_id, title, description, colorCode];
    return q.handle_query(query, values);
  };

const deleteSchedule = async (scheduleid) => {
    const query = 'DELETE FROM schedule WHERE scheduleid = $1';
    const values = [scheduleid];
    return q.handle_query(query, values);
};

const editSchedule = async (scheduleid, title, description, colorCode) => {
    const query = "UPDATE public.schedule SET title=$1, description=$2, colorCode = $3 WHERE scheduleid = $4;";
    const values = [title, description, colorCode, scheduleid];
    return q.handle_query(query, values);
}

module.exports = {
    createSchedule,
    deleteSchedule,
    editSchedule
}