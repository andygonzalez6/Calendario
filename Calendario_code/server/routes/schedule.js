const express = require('express');
const router = express.Router();
const scheduleQueries = require('../db/queries/scheduleQueries');
const r = require('./utils')
router.use(express.json());

router.post('/', async (req, res) => {
    const {userid, title, description, colorCode } = req.body;
  
    try {
      if(colorCode==null) {
        colorCode = "#0000ff"
      }
      const newSchedule = await scheduleQueries.createSchedule(userid, title, description, colorCode);
      r.success_response(res, 200, 'Schedule created successfully', newSchedule);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error', message: `${error}` });
    }
  });
  
  router.delete('/', async (req, res) => {
    const {scheduleid} = req.body;
    try {
      await scheduleQueries.deleteSchedule(scheduleid);
      r.success_response(res, 200, `Schedule with id = ${scheduleid} deleted successfully`);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error', message: `${error}`  });
    }
  })

router.put('/', async (req, res) => {
  const {scheduleid, title, description, colorCode} = req.body;
  try {
    const editedSchedule = await scheduleQueries.editSchedule(scheduleid, title, description, colorCode);
    r.success_response(res, 200, 'Schedule edited successfully', editedSchedule);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: `${error}`  });
  }
})
module.exports = router;
