const q = require('./query_handler');


const addEventToSchedule = async (eventid, scheduleid) => {
    const query = 'INSERT INTO eventschedulemapping(eventid, scheduleid) VALUES($1, $2) RETURNING *';
    const values = [eventid, scheduleid];
    return q.handle_query(query, values);
  };

const removeEventFromSchedule = async (eventid, scheduleid) => {
    const query = 'DELETE FROM eventschedulemapping WHERE eventid = $1 AND scheduleid = $2';
    const values = [eventid, scheduleid];
    return q.handle_query(query, values);
};

module.exports= {
    addEventToSchedule,
    removeEventFromSchedule
}