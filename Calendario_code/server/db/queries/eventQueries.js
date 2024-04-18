const q = require('./query_handler');

const createEvent = async (user_id, title, description, startdatetime, enddatetime, location) => {
    const query = 'INSERT INTO public.event(userid, title, description, startdatetime, enddatetime, location) VALUES($1, $2, $3, $4, $5, $6) RETURNING *';
    const values = [user_id, title, description, startdatetime, enddatetime, location];
    return q.handle_query(query, values);
  };

const deleteEvent = async (event_id) => {
    const query = "DELETE FROM event WHERE eventid = $1";
    const values = [event_id];
    return q.handle_query(query, values);
};

const editEvent = async (event_id, title, description, startdatetime, enddatetime, location) => {
    const query = "UPDATE public.event SET title = $1, description = $2, startdatetime = $3, enddatetime = $4, location=$5 WHERE eventid = $6 RETURNING *";
    const values = [title, description, startdatetime, enddatetime, location, event_id];
    return q.handle_query(query, values);
}

module.exports = {
    createEvent,
    deleteEvent,
    editEvent,
}