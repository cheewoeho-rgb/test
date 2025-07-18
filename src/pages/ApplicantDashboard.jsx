import React, { useEffect, useState } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import LeaveForm from '../components/LeaveForm';
import LeaveList from '../components/LeaveList';
import Header from '../components/Header';
import { mockApi } from '../services/mockApi';

export default function ApplicantDashboard() {
  const [leaves, setLeaves] = useState([]);
  const [balance, setBalance] = useState({ annual: 10, sick: 5 });

  useEffect(() => {
    mockApi.getLeaves().then(setLeaves);
  }, []);

  const handleApply = (data) => {
    mockApi.applyLeave(data).then((newLeave) => {
      setLeaves([...leaves, newLeave]);
    });
  };

  const handleCancel = (id) => {
    mockApi.cancelLeave(id).then(() => {
      setLeaves(leaves.filter((l) => l.id !== id));
    });
  };

  return (
    <>
      <Header />
      <div className="p-4 space-y-4">
        <h1 className="text-2xl font-bold">Applicant Dashboard</h1>
        <nav className="space-x-4">
          <Link className="text-blue-500" to="apply">Apply</Link>
          <Link className="text-blue-500" to="my-leaves">My Leaves</Link>
          <Link className="text-blue-500" to="balance">Balance</Link>
        </nav>
        <Routes>
          <Route
            path="apply"
            element={<LeaveForm onSubmit={handleApply} />}
          />
          <Route
            path="my-leaves"
            element={<LeaveList leaves={leaves} onCancel={handleCancel} />}
          />
          <Route
            path="balance"
            element={
              <div>
                <p>Annual: {balance.annual} days</p>
                <p>Sick: {balance.sick} days</p>
              </div>
            }
          />
          <Route path="*" element={<Navigate to="apply" />} />
        </Routes>
      </div>
    </>
  );
}
