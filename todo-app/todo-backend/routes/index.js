const express = require('express');
const router = express.Router();

const configs = require('../util/config')
const redis = require('../redis')



redis.getAsync('visits').then(visits => {//Task 12.12
  if(!visits) redis.setAsync('visits', 0)
})

//let visits = 0

/* GET index data. */
router.get('/', async (req, res) => {
  const visits = await redis.getAsync('visits')
  await redis.setAsync('visits', visits ? parseInt(visits) + 1 : 1)
  //visits++

  res.send({
    ...configs,
    visits
  });
});

router.get('/statistics', async (req, res) => {//Tasks 12.10 - 12.12
  const added_todos = await redis.getAsync('addedTodos') || 0
  const visits = await redis.getAsync('visits') || 0
  res.send({ added_todos,visits });
});

module.exports = router;
