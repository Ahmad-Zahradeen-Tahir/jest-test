import { useState } from "react";
import classes from "./NewTodo.module.css";

const NewTodo = (props) => {
  const [enteredTodo, setEnteredTodo] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredTodo.trim().length === 0) {
        return
    }

    props.addTodo(enteredTodo);
    setEnteredTodo("");
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input
        value={enteredTodo}
        type="text"
        onChange={(e) => {
          setEnteredTodo(e.target.value);
        }}
        placeholder="Type Todo"
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default NewTodo;
