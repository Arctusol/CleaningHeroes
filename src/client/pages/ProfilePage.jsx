import React from 'react';
import { Link } from 'react-router-dom';


export function ProfilePage() {
  return (
    <div className='p-4'>
      <h1 className='text-3xl font-bold mb-4'>Profile</h1>
      <div className='flex flex-col gap-y-4'>
        <div className='bg-white p-4 rounded-lg shadow'>
          <h2 className='text-xl font-bold mb-2'>Account Information</h2>
          <p>Username: TODO</p>
          <p>Email: TODO</p>
          <p>Phone Number: TODO</p>
        </div>
        <div className='bg-white p-4 rounded-lg shadow'>
          <h2 className='text-xl font-bold mb-2'>Settings</h2>
          <div className='flex justify-between items-center'>
            <p>Dark Mode</p>
            <input type='checkbox' />
          </div>
          <div className='flex justify-between items-center'>
            <p>Notifications</p>
            <input type='checkbox' />
          </div>
        </div>
        <div className='bg-white p-4 rounded-lg shadow'>
          <h2 className='text-xl font-bold mb-2'>Actions</h2>
          <div className='flex justify-between'>
            <Link to='/dashboard' className='bg-primary text-buttonText font-bold py-2 px-4 rounded'>Go to Dashboard</Link>
            <button className='bg-error text-buttonText font-bold py-2 px-4 rounded'>Delete Account</button>
          </div>
        </div>
      </div>
    </div>
  );
}