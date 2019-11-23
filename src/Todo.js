import React, { useContext } from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { TodosContext } from "./context/todos.context";

function Todo({ id, task, completed }) { // can put props or just grab what we want from teh props
  const { removeTodo, toggleTodo } = useContext(TodosContext);
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{ height: "64px"}}>
      {isEditing ? ( 
        <EditTodoForm id={id} task={task} toggleEditForm={toggle} /> 
        ) : (
        <>
          <Checkbox 
            tabIndex={-1} 
            checked={completed} 
            onClick={() => toggleTodo(id)}
          />
          <ListItemText style={{textDecoration: completed ? "line-through": "none"}}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton 
              aria-label="Delete" 
              onClick={() => removeTodo(id)}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton 
              aria-label="Edit"
              onClick={toggle} // can use {() => toggle(id)} or {() => toggle()}
            >
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
        )}
    </ListItem>
  );
}
export default Todo;


/** Original
 * 
 * import React from 'react';
import useToggleState from './hooks/useToggleState';
import EditTodoForm from './EditTodoForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function Todo({ id, task, completed, removeTodo, toggleTodo, editTodo }) { // can put props or just grab what we want from teh props
  const [isEditing, toggle] = useToggleState(false);
  return (
    <ListItem style={{ height: "64px"}}>
      {isEditing ? ( 
        <EditTodoForm editTodo={editTodo} id={id} task={task} toggleEditForm={toggle} /> 
        ) : (
        <>
          <Checkbox 
            tabIndex={-1} 
            checked={completed} 
            onClick={() => toggleTodo(id)}
          />
          <ListItemText style={{textDecoration: completed ? "line-through": "none"}}>
            {task}
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton 
              aria-label="Delete" 
              onClick={() => removeTodo(id)}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton 
              aria-label="Edit"
              onClick={toggle} // can use {() => toggle(id)} or {() => toggle()}
            >
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
        )}
    </ListItem>
  );
}
export default Todo;

 */