import React, { useState } from 'react';

export default function LeaveForm({ onSubmit }) {
  const [form, setForm] = useState({
    type: 'annual',
    start: '',
    end: '',
    reason: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ type: 'annual', start: '', end: '', reason: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 max-w-md">
      <div>
        <label className="block mb-1">Type</label>
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="border p-2 w-full"
        >
          <option value="annual">Annual</option>
          <option value="sick">Sick</option>
        </select>
      </div>
      <div>
        <label className="block mb-1">Start</label>
        <input
          type="date"
          name="start"
          value={form.start}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block mb-1">End</label>
        <input
          type="date"
          name="end"
          value={form.end}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block mb-1">Reason</label>
        <textarea
          name="reason"
          value={form.reason}
          onChange={handleChange}
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
