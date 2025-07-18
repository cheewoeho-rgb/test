# Leave Application Web App

This project contains a basic React implementation for a leave management system with two user roles: **Applicant** and **Approver**. The UI is styled with Tailwind CSS and is optimized for both desktop and mobile devices.

## Features

- Role‑based login for Applicant and Approver
- Applicants can apply for leave, cancel pending requests and check leave balance
- Approvers can review pending leave requests and approve or reject them
- Mock APIs (`src/services/mockApi.js`) simulate backend behaviour

## Running the app

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The project uses [Vite](https://vitejs.dev/) for development. Node modules are not included in this repository.
