import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import UsersPage from "./Pages/UsersPage/UsersPage";
import PostsPage from "./Pages/PostsPage/PostsPage";
import CommentsPage from "./Pages/CommentsPage/CommentsPage";



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
let router = createBrowserRouter([
    {path:'/', element: <MainLayout/>, children:[
            {path:'users', element:<UsersPage/>},
            {path:'posts', element:<PostsPage/>},
            {path:'comments', element:<CommentsPage/>}
        ]}
]);

root.render(
    <RouterProvider router={router}/>
);
