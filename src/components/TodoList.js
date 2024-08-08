import React, { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, completeTask } from '../redux/tasksSlice';

const TodoList = ({ filter }) => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();

  const filteredTasks = useMemo(() => {
    if (filter === 'all') return tasks;
    if (filter === 'completed') return tasks.filter(task => task.completed);
    if (filter === 'deleted') return []; 
    return tasks.filter(task => task.type === filter);
  }, [tasks, filter]);

  return (
    <div>
      {filteredTasks.map(task => (
        <div key={task.id}>
          <h3>{task.title}</h3>
          <p>{task.date}</p>
          <p>{task.type}</p>
          <div className='add-and-delete-btns'>
          <input  type="button" className="added-todo-complete-btn" onClick={() => dispatch(completeTask(task.id))} value= {task.completed ? 'Completed' : 'Complete'}/>
          <input type="button" className="added-todo-delete-btn" onClick={() => dispatch(deleteTask(task.id))}  value="delete"/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
