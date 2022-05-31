import React, { useEffect, useState } from 'react';
import styles from '../toDoModuleCss/ToDoModal.module.css';
import { GrClose } from "react-icons/gr";
import ToDoButton from './ToDoButton';
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { addToDo, updateToDo } from '../reducers/reducer';
import { v4 as uuidv4 } from 'uuid';

const ToDoModal = ({type,modal,setModal,todoItems}) => {
    const dispatch=useDispatch();
    const[titleValue,setTitleValue]=useState('');

    const submitForm=(e)=>{
        e.preventDefault();
        if(type==='add'){
            if(titleValue){
                dispatch(addToDo({
                    id:uuidv4(),
                    title:titleValue,
                    time:new Date().toLocaleString()
                }));
                setTitleValue('');
                setModal(false);
                toast.success('Task added successfully');
            }
            else{
                toast.error('Title should not be empty');
            }
        }
        if(type==='update'){
            if(todoItems.title!==titleValue){
                dispatch(updateToDo({
                    ...todoItems,
                    title:titleValue
                }));
                setModal(false);
                toast.success('Task updated successfully')
            }
            else{
                toast.error('No changes made')
            }
            
        }
    }
    useEffect(()=>{
        if(type==='update' && todoItems){
            setTitleValue(todoItems.title);
        }
        else{
            setTitleValue('');
        }
    },[type,todoItems,modal]);
    
  return (
    <div>
        {modal &&
      
        <div className={styles.modalBox}>
            <div className={styles.modalContainer}>
                <div className={styles.closeIcon}>
                    <GrClose onClick={()=>setModal(false)}/>
                </div>
                <form onSubmit={submitForm}>
                    <div className={styles.addTaskInput}>
                        <p>Add Task</p>
                        <input type='text' value={titleValue} onChange={((e)=>setTitleValue(e.target.value))} placeholder='Enter your taks here' />
                    </div>
                    <div className={styles.btns}>
                        <ToDoButton type='button' onClick={()=>setModal(false)} variant='secondary'>Cancel</ToDoButton>
                        <ToDoButton type='submit' variant='primary'>Add Task</ToDoButton>
                    </div>
                </form>
            </div>
            
        </div>
        }
    </div>
  )
}

export default ToDoModal