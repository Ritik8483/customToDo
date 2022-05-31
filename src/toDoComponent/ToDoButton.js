import React from 'react'
import styles from '../toDoModuleCss/ToDoButton.module.css';
import { getClasses } from '../toDoUtils/getClasses';


const ToDoButton = ({children,type,variant,...rest}) => {
  return (
    <div>
        <button 
        type={type==='submit' ? 'submit' : 'button'}
        {...rest}
        className={getClasses([styles.button,styles[`button--${variant}`]])}>
        {children}
        </button>
    </div>
  )
}

export default ToDoButton