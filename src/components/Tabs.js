import React, { useState } from 'react';
import TodoList from './TodoList';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('all');

  return (
    <div className='all-buttons-for-task'>
      <input type="button" onClick={() => setActiveTab('all')} value="All Tasks" className='btn-for-all-tasks'/>
      <input type="button" onClick={() => setActiveTab('completed')}   className='btn-for-complete-tasks' value="Completed Tasks"/>
      <input type='button' onClick={() => setActiveTab('deleted')}   className='btn-for-deleted-task' value="Deleted Tasks" />
      <TodoList filter={activeTab} />
    </div>
  );
};

export default Tabs;
