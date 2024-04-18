const express = require('express');
const router = express.Router();
const eventQueries = require('../db/queries/eventQueries');
router.use(express.json());

const r = require('./utils')

router.post('/', async (req, res) => {
    console.log(req.body)
    const {title, description, startdatetime, enddatetime, location, allday } = req.body;
    try {
      console.log(req.session.user);
      if (!req.session.authenticated || !req.session.user || !req.session.user.userid) {
        return res.status(403).json({ message: "User not authenticated" });
      };
      const userid = req.session.user.userid;
      const result = await eventQueries.createEvent(userid, title, description, startdatetime, enddatetime, location, allday );
      r.success_response(res, 200, "Event successfully created",result);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error', message: `${error}` });
    }
})

router.delete('/', async (req, res) => {
    const {eventid} = req.body;
    try {
        await eventQueries.deleteEvent(eventid);
        r.success_response(res, 200, `Event with id = ${eventid} successfully deleted`);
      }
    catch (e) {
        res.status(500).json({ error: 'Internal Server Error', message: `${e}` });
    }
})

router.put('/', async (req, res) => {
  const {eventid, title, description, startdatetime, enddatetime, location, allday} = req.body;
  try {
      await eventQueries.editEvent(eventid, title, description, startdatetime, enddatetime, location, allday);
      r.success_response(res, 200, `Event with id = ${eventid} successfully modified`);
    }
  catch (e) {
      res.status(500).json({ error: 'Internal Server Error', message: `${e}`  });
  }
})



module.exports = router;