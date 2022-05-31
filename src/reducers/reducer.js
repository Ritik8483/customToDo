import { createSlice } from "@reduxjs/toolkit";

const getInitialToDo=()=>{
    const localToDoList=window.localStorage.getItem('todolist');
    if(localToDoList){
        return JSON.parse(localToDoList)
    }
    window.localStorage.setItem('todolist',JSON.stringify([]));
    return[];
}

const initialValues={
    toDoInitialvalue:getInitialToDo(),
}

const toDoSlice=createSlice({
    name: 'toDoReducer',
    initialState:initialValues,
    reducers:{
        addToDo:(state,action)=>{
            state.toDoInitialvalue.push(action.payload);
            const todo=window.localStorage.getItem('todolist');
            if(todo){
                const todoArr=JSON.parse(todo);
                todoArr.push({
                    ...action.payload,
                })
            window.localStorage.setItem('todolist',JSON.stringify(todoArr));
            }
        },
        deleteTodo:(state,action)=>{
            const todo=window.localStorage.getItem('todolist');
            if(todo){
                const todoArr=JSON.parse(todo);
                todoArr.forEach((item,index)=>{
                    if(item.id===action.payload){
                        todoArr.splice(index,1);
                    }
                    console.log('ToDo Index',index);
                    window.localStorage.setItem('todolist',JSON.stringify(todoArr));
                    state.toDoInitialvalue=todoArr;
                })
            }
        },
        updateToDo:(state,action)=>{
            const todo=window.localStorage.getItem('todolist');
            if(todo){
                const todoArr=JSON.parse(todo);
                todoArr.forEach((item,index)=>{
                    if(item.id===action.payload.id){
                        item.title=action.payload.title;
                    }
                })
                window.localStorage.setItem('todolist',JSON.stringify(todoArr));
                state.toDoInitialvalue=todoArr;
            }
        }

    }
});

export const { addToDo,deleteTodo,updateToDo } = toDoSlice.actions;
export default toDoSlice.reducer;