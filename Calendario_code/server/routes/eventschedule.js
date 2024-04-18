const express = require('express');
const router = express.Router();
const eventscheduleQueries = require('../db/queries/eventscheduleQueries');
const r = require('./utils')
router.use(express.json());


router.post('/', async (req, res) => {
    const {eventid, scheduleid} = req.body;
    try {
      const newEventSchedule = await eventscheduleQueries.addEventToSchedule(eventid, scheduleid);
      r.success_response(res, 200, 'Schedule created successfully', newEventSchedule);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
router.delete('/', async (req, res) => {
  const {eventid, scheduleid} = req.body;
  try {
    await eventscheduleQueries.removeEventFromSchedule(eventid, scheduleid);
    r.success_response(res, 200, `EventSchedule deleted successfully`);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
  })


module.exports = router;
