import {createSlice,nanoid} from '@reduxjs/toolkit';

//how does store look in the initial state so we will create an initial state

const initialState={
    todos: [{
        id:1,
        text: "Hello world"
    }]
}

//now creating the slice
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo: (state,action)=>{
            const todo={
                id:nanoid(),
                text: action.payload
            }
            state.todos.push(todo)

        },
        removeTodo:(state,action)=>{
            
            state.todos=state.todos.filter((todo)=>
                todo.id !== action.payload
            )
        }
    }
})

export const {addTodo,removeTodo}=todoSlice.actions

export default todoSlice.reducer