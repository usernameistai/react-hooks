import React, { useContext } from 'react';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { TodosContext } from "./context/todos.context";

function TodoList() {
  const todos = useContext(TodosContext);
  if(todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => ( // i is index
            // to add  key to a fragment, have to use long-hand version, rather than
            // <></> have to use <React.Fragment>
            <React.Fragment key={i}> {/** <></> JSX fragment to break up adjacent JSX elements */}
              <Todo {...todo} key={todo.id} />
              { todos.length - 1 > i && <Divider />} 
              {/* * don't get divider underneath last todo entry */}
            </React.Fragment>
          ))}
        </List> 
      </Paper>
    );
  return null;
}

export default TodoList;

/**
 * 
 * import React from 'react';
import Todo from './Todo';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

function TodoList({ todos, removeTodo, toggleTodo, editTodo }) {
  if(todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => ( // i is index
            <> {/** JSX fragment to break up adjacent JSX elements }
            <Todo 
            /*id={todo.id}
            task={todo.task}
            completed={todo.completed} 
            is equivalent to below {...todo} keeping in so can keep track of things 
            {...todo}
            key={todo.id} 
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
            editTodo={editTodo}
          />
          { todos.length - 1 > i && <Divider />} 
          {// don't get divider underneath last todo entry }
        </>
      ))}
    </List> 
  </Paper>
);
return null;
}

export default TodoList;

 */