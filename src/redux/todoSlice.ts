import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { INewTodo } from '../components/Form/Form';
import { IToDo } from '../containers/ToDoList/types';

export interface ToDoState {
  value: Array<IToDo>
}

const initialState: ToDoState = {
  value: []
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addNewTodo: (state, action: PayloadAction<INewTodo>): void => {
      state.value.push({
        id: state.value.length,
        ...action.payload
      });
    },
    deleteTodo: (state, action: PayloadAction<number>): void => {
      const foundIndex = state.value.findIndex((todo: IToDo) => todo.id === action.payload);
      state.value.splice(foundIndex, 1);
    }
  }
});

export const { addNewTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;