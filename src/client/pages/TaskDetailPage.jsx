import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@wasp/queries';
import { useAction } from '@wasp/actions';
import getTask from '@wasp/queries/getTask';
import updateTask from '@wasp/actions/updateTask';
import deleteTask from '@wasp/actions/deleteTask';

export function TaskDetailPage() {
  const { taskId } = useParams();
  const { data: task, isLoading, error } = useQuery(getTask, { taskId });
  const updateTaskFn = useAction(updateTask);
  const deleteTaskFn = useAction(deleteTask);

  if (isLoading) return 'Loading...';
  if (error) return 'Error: ' + error;

  const handleUpdateTask = () => {
    // Implement update task logic
  };

  const handleDeleteTask = () => {
    // Implement delete task logic
  };

  return (
    <div className=''>
      <h1 className='text-3xl font-bold mb-4'>{task.title}</h1>
      <p className='text-lg'>{task.description}</p>
      <div className='flex gap-x-4 mt-4'>
        <button
          onClick={handleUpdateTask}
          className='bg-primary hover:bg-secondary text-buttonText font-bold py-2 px-4 rounded'
        >
          Edit
        </button>
        <button
          onClick={handleDeleteTask}
          className='bg-error hover:bg-secondary text-buttonText font-bold py-2 px-4 rounded'
        >
          Delete
        </button>
      </div>
    </div>
  );
}