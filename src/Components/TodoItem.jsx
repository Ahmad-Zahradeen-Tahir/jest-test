import classes from "./TodoItem.module.css";

const TodoItem = (props) => {
    

  return (
    <li key={props.id} className={classes.todo}>
      {props.text}
    </li>
  );
};

export default TodoItem;
