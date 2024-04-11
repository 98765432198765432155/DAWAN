import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Input, Button } from '@douyinfe/semi-ui';
import { Typography } from '@douyinfe/semi-ui';
import { createBrowserRouter, Route, RoutterProvider } from 'react-router-dom';

function App() {

        const router = createBrowserRouter( routes: [
        {
            path: '/',
            element: <div>Hello world!</div>,
        },
        {
        path: '/login',
        element: <Login />,
        },
        {
        path: '/callroll',
        element:<div>点名</div>,
        },
        ]);
        return <RouterProvider router={router} />;
        };
  

export default App;