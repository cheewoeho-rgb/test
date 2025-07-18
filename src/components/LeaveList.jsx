import React from 'react';

export default function LeaveList({ leaves, onCancel }) {
  return (
    <div className="space-y-2">
      {leaves.map((leave) => (
        <div key={leave.id} className="p-2 border rounded flex justify-between">
          <div>
            <p className="font-semibold capitalize">{leave.type} leave</p>
            <p>
              {leave.start} to {leave.end}
            </p>
            <p>{leave.reason}</p>
          </div>
          {leave.status === 'pending' && (
            <button
              onClick={() => onCancel(leave.id)}
              className="text-red-500"
            >
              Cancel
            </button>
          )}
        </div>
      ))}
      {leaves.length === 0 && <p>No leaves found.</p>}
    </div>
  );
}
