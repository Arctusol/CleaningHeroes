import React from 'react';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getTasks from '@wasp/queries/getTasks';
import createTask from '@wasp/actions/createTask';
import updateTask from '@wasp/actions/updateTask';
import deleteTask from '@wasp/actions/deleteTask';

export function DashboardPage() {
  const { data: tasks, isLoading, error } = useQuery(getTasks);
  const createTaskFn = useAction(createTask);
  const updateTaskFn = useAction(updateTask);
  const deleteTaskFn = useAction(deleteTask);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleCreateTask = () => {
    createTaskFn({ description: 'New Task' });
  };

  const handleUpdateTask = (taskId, description, isDone) => {
    updateTaskFn({ taskId, description, isDone });
  };

  const handleDeleteTask = (taskId) => {
    deleteTaskFn({ taskId });
  };

  return (
    <div className='p-4'>
      <button
        onClick={handleCreateTask}
        className='bg-primary hover:bg-secondary text-buttonText font-bold py-2 px-4 rounded'
      >
        Create Task
      </button>
      {tasks.map((task) => (
        <div
          key={task.id}
          className='bg-background p-4 mb-4 rounded-lg'
        >
          <input
            type='text'
            className='border rounded py-2 px-4 mb-2'
            value={task.description}
            onChange={(e) => handleUpdateTask(task.id, e.target.value, task.isDone)}
          />
          <button
            onClick={() => handleDeleteTask(task.id)}
            className='bg-error hover:bg-red-700 text-buttonText font-bold py-2 px-4 rounded'
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}