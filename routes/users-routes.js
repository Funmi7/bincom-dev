const express = require('express')
const db = require('../database/index');

const router = express.Router();

router.get('/', (req, res) => {
  db.all()
  .then(agents => {
    res.status(200).json(agents)
  })
  .catch(error => {
    res.status(500).json({
      error: `Error fetching agents ${error.message}`
    })
  })
})

module.exports = router;