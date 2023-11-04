import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import AdminHome from './pages/AdminHome';
import LoginForm from './pages/LoginForm';
import CreateTestPage from './pages/CreateTest';
import Users from './pages/Users.txt';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/",
    element: <LoginForm/>
  },
  {
    path: "adminhome",
    element: <AdminHome/>,
  },
  {
    path: "createtest",
    element: <CreateTestPage/>,
  },
  {
    path: "Users",
    element: <Users/>
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router ={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
