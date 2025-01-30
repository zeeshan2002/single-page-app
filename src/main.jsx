import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './Layout';
import Home from './component/home/Home';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import User from './component/user/User';
import Github, { githubInfoLoader } from './component/github/Github';

// Create the router configuration
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "/", element: <Home />
//       },
//       {
//         path: 'about', element: <About />
//       },
//       {
//         path: 'contact', element: <Contact />
//       }
//     ]}
// ]);

//or 
const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="contact" element={<Contact />} />
    <Route path="user/:id" element={<User />} />
    <Route 
      loader={githubInfoLoader}
      path="github" 
      element={<Github />} >
    </Route>
  </Route>  
  ))

// Render the application
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);