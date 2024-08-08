import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../redux/tasksSlice';

const TodoForm = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [type, setType] = useState('weekly');
  const [timeSlot, setTimeSlot] = useState('');
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    const task = {
      id: Date.now(),
      title,
      date,
      timeSlot,
      type,
      completed: false,
    };
    const isDuplicateTimeSlot = tasks.some(t => t.timeSlot === task.timeSlot && t.date === task.date);
    
    if (isDuplicateTimeSlot) {
      alert('Task with the same time exist');
      return;
    }

    dispatch(addTask(task));
    setTitle('');
    setDate('');
    setTimeSlot('');
  }, [title, date, timeSlot, type, tasks, dispatch]);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required />
      <input type="date" value={date} onChange={e => setDate(e.target.value)} required />
      <input type="text" placeholder="Time Slot" value={timeSlot} onChange={e => setTimeSlot(e.target.value)} required />
      <select value={type} onChange={e => setType(e.target.value)}>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
