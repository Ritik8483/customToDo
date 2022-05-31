import React from 'react'
import styles from '../toDoModuleCss/ToDoTitle.module.css'
import ToDoContent from './ToDoContent'
import ToDoHeader from './ToDoHeader'

const ToDoTitle = ({children}) => {
   
  return (
    <div>
        <div className={styles.container}>
            <div className={styles.card}>
                <h2 className={styles.heading}>{children}</h2>
                <div className={styles.addTask}>
                    <ToDoHeader/>
                    <ToDoContent/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ToDoTitle