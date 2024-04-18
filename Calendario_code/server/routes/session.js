const express = require('express');
const router = express.Router();
const sessionQueries = require('../db/queries/sessionQueries');

router.use(express.json());


router.post('/login', async (req, res) =>  {
  const {email, password} = req.body;

  if (email && password) {
    if (req.session.authenticated) {
      res.json(req.session)
    }
    else {
      const result = await sessionQueries.loginUser(email, password);
      const userid = result['userid'];
      const username = result['username'];
      if (result) {
        req.session.authenticated = true;
        req.session.user = {
          userid, username
        }
        res.json(req.session.user);
      }
      else {
        res.status(403).json({"message": "Credentials not valid"});
      }
    }
    
  }else {
      res.status(403).json({"message": "Expecting email and password"});
    }
 
})

router.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.error('Error destroying session:', err);
      res.sendStatus(500);
    } else {
      res.status(200).send({"Message" : 'User successfully logged-out'});
    }
  });
})

module.exports = router;
