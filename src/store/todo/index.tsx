import { createSlice,PayloadAction } from "@reduxjs/toolkit"
const initialState :any= {
    title: '',
    todos: [],
  };
const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        setTodoTitle: (state, action: PayloadAction<string> )=> {
           state.title=action.payload
        },
        addNewTodo: (state, action: PayloadAction<any>)=> {
            state.todos= [...state.todos, action.payload]
        },
        resetTitle: (state, action: PayloadAction<string>)=> {
            state.title = ''
        }
    }
})
export const {setTodoTitle, addNewTodo}= todoSlice.actions
export default todoSlice.reducer
