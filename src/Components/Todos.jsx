import TodoItem from './TodoItem'
import classes from './Todos.module.css'

const Todos = (props) => {
  return (
    <ul className={classes.todos}>
      {props.todos.map((el)=>(
        <TodoItem todos={props.todos} key={`${el} ${Math.random()}`} text={el}/>
      ))}
    </ul>
  )
}

export default Todos
