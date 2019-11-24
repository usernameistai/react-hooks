import React, { createContext } from 'react';
import todoReducer from '../reducers/todo.reducer';
import useLocalStorageReducer from '../hooks/useLocalStorageReducer';

const defaultTodos = [
  { id: 1, task: "Mow the lawn using goats", completed: false },
  { id: 2, task: "Release ladybirds into garden", completed: true }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
  const [todos, dispatch] = useLocalStorageReducer(
    "todos", // passing "todos" in as the key
    defaultTodos, 
    todoReducer); // was useReducer(todoReducer, defaultTodos);
  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}

// export const TodosContext = createContext();
// export const DispatchContext = createContext();

// export function TodosProvider(props) {
//   const [todos, dispatch] = useReducer(todoReducer, defaultTodos);
//   return (
//     <TodosContext.Provider value={{ todos }}>
//       <DispatchContext.Provider value={{ dispatch }}>
//         { props.children }
//       </DispatchContext.Provider>
//     </TodosContext.Provider>
//   );
// }


// export function TodosProvider(props) {
//   // const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(defaultTodos);
//   const todosStuff = useTodoState(defaultTodos); // all todo methods are in useTodoState
//   return (
//     <TodosContext.Provider value={todosStuff}>
//       { props.children }
//     </TodosContext.Provider>
//   );
// }