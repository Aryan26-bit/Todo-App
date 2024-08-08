// Slice for all reducer functions

import { createSlice } from '@reduxjs/toolkit';

const loadTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem('tasks');
  return tasks ? JSON.parse(tasks) : [];
};

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: loadTasksFromLocalStorage(),
  reducers: {
    addTask: (state, action) => {
      const newTask = action.payload;
      state.push(newTask);
      saveTasksToLocalStorage(state);
    },
    editTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const taskIndex = state.findIndex(task => task.id === id);
      if (taskIndex !== -1) {
        state[taskIndex] = { ...state[taskIndex], ...updatedTask };
        saveTasksToLocalStorage(state);
      }
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      const updatedState = state.filter(task => task.id !== taskId);
      saveTasksToLocalStorage(updatedState);
      return updatedState;
    },
    completeTask: (state, action) => {
      const taskId = action.payload;
      const taskIndex = state.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        state[taskIndex].completed = true;
        saveTasksToLocalStorage(state);
      }
    },
  },
});

export const { addTask, editTask, deleteTask, completeTask } = tasksSlice.actions;

export default tasksSlice.reducer;
