import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import { mockApi } from '../services/mockApi';
import { LeaveCard } from '../components/LeaveCard';

export default function ApproverDashboard() {
  const [pending, setPending] = useState([]);

  useEffect(() => {
    mockApi.getPendingLeaves().then(setPending);
  }, []);

  const handleAction = (id, status) => {
    mockApi.updateLeaveStatus(id, status).then(() => {
      setPending(pending.filter((l) => l.id !== id));
    });
  };

  return (
    <>
      <Header />
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">Approver Dashboard</h1>
        <div className="space-y-2">
          {pending.map((leave) => (
            <LeaveCard
              key={leave.id}
              leave={leave}
              onApprove={() => handleAction(leave.id, 'approved')}
              onReject={() => handleAction(leave.id, 'rejected')}
            />
          ))}
          {pending.length === 0 && <p>No pending requests.</p>}
        </div>
      </div>
    </>
  );
}
