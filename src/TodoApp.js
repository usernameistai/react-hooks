import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import uuid from 'uuid/v4';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

function TodoApp() {
  const initialTodos = [
    { id: 1, task: "Clean fishtank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
    { id: 3, task: "Grow Beard", completed: false }
  ];
  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTodoText) => {
    setTodos([...todos, {id: uuid(), task: newTodoText, completed: false}]);
  };
  const removeTodo = (todoId) => {
    // filter out removed todo
    const updatedTodos = todos.filter(todo => todo.id !== todoId);// filter out todo whose id doesn't match the passed in id
    // call setTodos with new todos array
    setTodos(updatedTodos);
  };
  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map(todo => 
      todo.id === todoId ? {...todo, completed: !todo.completed} : todo
      );
    setTodos(updatedTodos);
  };

  return (
    <Paper style={{ // paper gives a background
      padding: 0,
      margin: 0,
      height: "100vh",
      backgroundColor: "#fafafa"}}
      elevation={0}
    >
      <AppBar color="primary" position="static" style={{ height: "64px" }}>
        <Toolbar>
          <Typography color="inherit">Todos with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: "1rem"}}>
        <Grid item xs={11} md={8} lg={4}>
          <TodoForm addTodo={addTodo} />
          <TodoList
            todos={todos}
            removeTodo={removeTodo}
            toggleTodo={toggleTodo}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default TodoApp;

// - TodoApp
//    - TodoForm
//    - TodoList
//       -TodoItem

// each Todo will have an id, task, completed
