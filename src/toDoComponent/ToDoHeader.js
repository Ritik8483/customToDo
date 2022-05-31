import React, { useState } from 'react'
import ToDoButton from './ToDoButton'
import ToDoModal from './ToDoModal'

const ToDoHeader = () => {
    const[modal,setModal]=useState(false);
    const handleModal=()=>{
        setModal(true);
    }
  
  return (
    <div>
        <ToDoButton onClick={()=>setModal(true)} type='button' variant='primary'>Add Task</ToDoButton>
        <ToDoModal type='add' modal={modal} setModal={setModal} />
    </div>
  )
}

export default ToDoHeader