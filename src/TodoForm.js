import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { TodosContext } from "./context/todos.context";

function TodoForm() {
  const [value, handleChange, reset] = useInputState("");
  const { addTodo } = useContext(TodosContext);
  return (
    <Paper style={{margin: "1rem", padding: "0 1rem"}}>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(value);
        reset();
      }}>
        <TextField 
          value={value} 
          onChange={handleChange} 
          margin="normal" 
          label="Add new todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}
export default TodoForm;

/**Original
 * 
 * import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

function TodoForm({ addTodo }) {
  const [value, handleChange, reset] = useInputState("");
  return (
    <Paper style={{margin: "1rem", padding: "0 1rem"}}>
      <form onSubmit={(e) => {
        e.preventDefault();
        addTodo(value);
        reset();
      }}>
        <TextField 
          value={value} 
          onChange={handleChange} 
          margin="normal" 
          label="Add new todo"
          fullWidth
        />
      </form>
    </Paper>
  );
}
export default TodoForm;
 */