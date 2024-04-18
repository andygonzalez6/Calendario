const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/userQueries');
const r = require('./utils')
router.use(express.json());

router.get('/:id', async (req, res) => {
  const userid = req.params.id;
  try {
    const user = await userQueries.getUserById(userid);

    if (!user) {
      res.status(404).json({ error: 'User not found' });
    } else {
      r.success_response(res, 200, "User successfully found", user);
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: `${error}` });
  }
});


router.post('/', async (req, res) => {
  const {username, email, password } = req.body;
  try {
    const newUser = await userQueries.createUser(username, email, password );
    r.success_response(res, 200, 'User created successfully', newUser);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: `${error}` });
  }
});

router.delete('/', async (req, res) => {
  const {userid} = req.body;
  try {
    await userQueries.deleteUser(userid);
    r.success_response(res, 200, `User with id = ${userid} deleted successfully`);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: `${error}` });
  }
})

router.get('/', async (req, res) => {
  if (!req.session.authenticated) {
    return res.status(401).json({ error: 'Unauthorized', message: 'User not authenticated' });
  }
  const userid = req.session.user.userid;
  try {
    const events = await userQueries.getUserEvents(userid);
    const schedule = await userQueries.getUserSchedule(userid);
    const eventschedulemapping = await userQueries.getUserEventSchedule(userid);
    r.success_response(res, 200, "User events successfully retrieved", {
      "events": events,
      "schedules": schedule,
      "eventsschedulemapping": eventschedulemapping
    });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: `${error}` });
  }
})

router.put('/', async (req, res) => {
  const {userid, username} = req.body;
  try {
    const result = await userQueries.changeUserName(userid, username);
    r.success_response(res, 200, "User successfully updated", result);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error', message: `${error}` });
  }
})

module.exports = router;
