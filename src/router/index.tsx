import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App';
import { Requests } from '../pages/requests';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
	},
	{
		path: '/request',
		element: <Requests />,
	},
]);

export const Routers = () => {
	return <RouterProvider router={router} />;
};
