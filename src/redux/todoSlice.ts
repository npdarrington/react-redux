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
    addNewIdea: (state, action: PayloadAction<INewTodo>) => {
      state.value.push({
        id: state.value.length,
        ...action.payload
      });
    }
  }
});

export const { addNewIdea } = todoSlice.actions;

export default todoSlice.reducer;