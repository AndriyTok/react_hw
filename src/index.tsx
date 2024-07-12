import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
let router = createBrowserRouter([
    {path:'/', element: <MainLayout/>}
]);

root.render(
    <RouterProvider router={router}/>
);
