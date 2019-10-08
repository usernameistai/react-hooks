import React from 'react';
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
            <> {/** JSX fragment to break up adjacent JSX elements */}
              <Todo 
                /*id={todo.id}
                task={todo.task}
                completed={todo.completed} 
                is equivalent to below {...todo} keeping in so can keep track of things */
                {...todo}
                key={todo.id} 
                removeTodo={removeTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              { todos.length - 1 > i && <Divider />} 
              {/** don't get divider underneath last todo entry */}
            </>
          ))}
        </List> 
      </Paper>
    );
  return null;
}

export default TodoList;
