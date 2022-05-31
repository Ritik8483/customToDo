import React, { useState } from 'react'
import styles from '../toDoModuleCss/ToDoItems.module.css'
import { TiTick } from "react-icons/ti";
import { FiEdit } from "react-icons/fi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../reducers/reducer';
import toast from 'react-hot-toast';
import ToDoModal from './ToDoModal';
import { getClasses } from '../toDoUtils/getClasses';

const ToDoItems = ({todoItems}) => {
    const dispatch=useDispatch();
    const [modal,setModal]=useState(false);
    const[check,setCheck]=useState(false);
    const[strike,setStrike]=useState(false);

    const handleDelete=()=>{
        dispatch(deleteTodo(todoItems.id));
        toast.success('Task deleted Successfully');
    }
    const handleEdit=()=>{
        setModal(true);
    }
    const handleCheck=()=>{
        setCheck(!check);
        setStrike(!strike);
    }
    
  return (
    <div>
        <div className={styles.itemBox}>
          <div className={styles.content}>
            <div className={styles.checkbox}>
                <div onClick={handleCheck} className={`${styles.checkIcon} ${check ? styles.check : ''}`} role='button' tabIndex={0}>
                    <TiTick/>
                </div>
                <div className={styles.title_time}>
                    <p className={`${styles.titleText} ${strike ? styles.checked : ''}`}>{todoItems.title}</p>
                    <p className={styles.time}>{todoItems.time}</p>
                </div>
            </div>
            <div className={styles.iconsBox}>
                <div className={styles.editIcon} onClick={handleEdit} role='button' tabIndex={0}>
                    <FiEdit/>
                </div>
                <div className={styles.deleteIcon} onClick={handleDelete} role='button' tabIndex={0}>
                    <AiFillDelete/>
                </div>
            </div>
          </div>
        </div>
        <ToDoModal 
        type='update' 
        todoItems={todoItems}
        modal={modal}
        setModal={setModal}
        />
    </div>
  )
}

export default ToDoItems