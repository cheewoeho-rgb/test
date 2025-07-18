import React from 'react';

export function LeaveCard({ leave, onApprove, onReject }) {
  return (
    <div className="p-2 border rounded">
      <p className="font-semibold capitalize">{leave.type} leave</p>
      <p>
        {leave.start} to {leave.end}
      </p>
      <p>{leave.reason}</p>
      <div className="space-x-2 mt-2">
        <button onClick={onApprove} className="text-green-600">
          Approve
        </button>
        <button onClick={onReject} className="text-red-600">
          Reject
        </button>
      </div>
    </div>
  );
}
