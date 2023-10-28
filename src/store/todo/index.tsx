import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState: any = {
  todo: {
    id: 0,
    title: '',
  },
  todos: [],
};
const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodoTitle: (state, action: PayloadAction<any>) => {
      state.todo.title = action.payload;
    },
    addNewTodo: (state) => {
      state.todos = [
        ...state.todos,
        { id: state.todo.id, title: state.todo.title },
      ];
    },
    deleteTodo: (state, action: PayloadAction<any>) => {
      state.todos = state.todos.filter(
        (todo: any) => todo.id !== action.payload
      );
    },
    resetTitle: (state) => {
      state.todo.title = '';
    },
    setRandomId: (state) => {
      state.todo.id = Math.floor(Math.random() * 100);
      console.log('id assigned:', state.todo.id);
    },
  },
});
export const { setTodoTitle, addNewTodo, resetTitle, setRandomId, deleteTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
