import React from 'react'
import { useSelector } from 'react-redux'
import styles from '../toDoModuleCss/ToDoTitle.module.css'
import ToDoItems from './ToDoItems';

const ToDoContent = () => {
    const toDoValues=useSelector((state)=>state.toDoReducer.toDoInitialvalue);
    const sortedToDoList=[...toDoValues].sort((a,b)=>new Date(b.time)-new Date(a.time));
    console.log(sortedToDoList);
  return (
    <div>
        {
            sortedToDoList.length>0
            ? sortedToDoList.map((todoItems)=><ToDoItems key={todoItems.id} todoItems={todoItems} />)
            : <h1 className={styles.warning}>No todo found</h1>
        }
    </div>
  )
}

export default ToDoContent