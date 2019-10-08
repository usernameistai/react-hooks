import React, { useEffect } from 'react';
import useTodoState from './hooks/useTodoState';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

function TodoApp() {
  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  /* const initialTodos = [
    { id: 1, task: "Clean fishtank", completed: false },
    { id: 2, task: "Wash Car", completed: true },
    { id: 3, task: "Grow Beard", completed: false }
  ]; */
  const { todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);
  // using destructuring to extract all the things needed
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // square brackets shows when useEffect will run

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
            editTodo={editTodo}
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
