const express = require('express');
const { Todo } = require('../mongo')
const router = express.Router();
const redis = require('../redis')


/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  const addedTodos = await redis.getAsync('addedTodos')//Tasks 12.10 - 12.12
  await redis.setAsync('addedTodos', addedTodos ? parseInt(addedTodos) + 1 : 1)
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {//Task 12.7
  res.send(req.todo)
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {//Task 12.7
  await req.todo.update({ ...req.body })
  await req.todo.save()
  res.send(req.todo)
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
