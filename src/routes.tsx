import {createBrowserRouter} from 'react-router-dom';

import { Dashboard } from './pages/app/dashboard/dashboard';
import { SignIn } from './pages/auth/sign-in';
import { AppLayout } from './pages/_layout/app';
import { AuthLayout } from './pages/_layout/auth';
import { SignUp } from './pages/auth/sign-up';
import { TicketTable } from './pages/app/tickets/tableTicket';

export const router = createBrowserRouter([
    {
        path: '/', 
        element: < AppLayout />, 
        children: [
            { path: '/', element: <Dashboard /> },
            { path: 'tickets', element: <TicketTable /> },


        ],
    },

    {
        path: '/', 
        element: < AuthLayout />, 
        children: [
            { path: '/sign-in', element: <SignIn /> },
            { path: '/sign-up', element: <SignUp /> },
        ],
    }
    
    
    

])