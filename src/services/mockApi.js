let mockLeaves = [
  {
    id: 1,
    type: 'annual',
    start: '2023-07-10',
    end: '2023-07-12',
    reason: 'Vacation',
    status: 'pending',
  },
];

export const mockApi = {
  getLeaves() {
    return Promise.resolve([...mockLeaves]);
  },
  getPendingLeaves() {
    return Promise.resolve(mockLeaves.filter((l) => l.status === 'pending'));
  },
  applyLeave(data) {
    const newLeave = {
      id: Date.now(),
      ...data,
      status: 'pending',
    };
    mockLeaves.push(newLeave);
    return Promise.resolve(newLeave);
  },
  cancelLeave(id) {
    mockLeaves = mockLeaves.filter((l) => l.id !== id);
    return Promise.resolve();
  },
  updateLeaveStatus(id, status) {
    mockLeaves = mockLeaves.map((l) =>
      l.id === id ? { ...l, status } : l
    );
    return Promise.resolve();
  },
};
