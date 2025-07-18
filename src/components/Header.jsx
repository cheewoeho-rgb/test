import React from 'react';
import { useAuth } from '../context/AuthContext';
import DarkModeToggle from './DarkModeToggle';

export default function Header() {
  const { user, logout } = useAuth();
  return (
    <header className="flex items-center justify-between p-4 bg-gray-200 dark:bg-gray-800">
      <span className="font-bold">Leave App</span>
      <div className="space-x-4 flex items-center">
        <DarkModeToggle />
        {user && (
          <button onClick={logout} className="text-sm text-blue-600">
            Logout
          </button>
        )}
      </div>
    </header>
  );
}
