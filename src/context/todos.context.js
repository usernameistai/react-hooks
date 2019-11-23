import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';
const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
  { id: 2, task: "Release ladybirds into garden", completed: true }
];

export const TodosContext = createContext();

export function TodosProvider(props) {
  // const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(defaultTodos);
  const todosStuff = useTodoState(defaultTodos); // all todo methods are in useTodoState
  return (
    <TodosContext.Provider value={todosStuff}>
      { props.children }
    </TodosContext.Provider>
  )
}

