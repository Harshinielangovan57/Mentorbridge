import React from 'react'
import { InputTodo } from './InputTodo'
import { ListTodo } from './ListTodo'

export const TodoList = () => {
  return (
    <div>
        <h2>Todo list </h2>
        <InputTodo/>
        <ListTodo/>
    </div>
  )
}
