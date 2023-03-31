import React from 'react'
import Todo from './Todo'


const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo)
  }

  const onClickComplete = (todo) => () => {
    completeTodo(todo)
  }

  return (
    <>
      {todos.map((todo, key) => {
        return (
          <Todo key={key} todo={todo} onClickComplete={onClickComplete(todo)} onClickDelete={onClickDelete(todo)} />
        )
      }).reduce((acc, cur) => [...acc, <hr />, cur], [])}
    </>
  )
}

export default TodoList
