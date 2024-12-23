import {createBrowserRouter} from 'react-router-dom';

import { Dashboard } from './pages/app/dashboard/dashboard';
import { SignIn } from './pages/auth/sign-in';
import { AppLayout } from './pages/_layout/app';
import { AuthLayout } from './pages/_layout/auth';
import { SignUp } from './pages/auth/sign-up';
import { TicketTable } from './pages/app/tickets/tableTicket';
import { TableWork } from './pages/app/cadastro/tableWork';
import { AddClient } from './pages/app/cadastro/addClient';
import { CatalagoCategoria } from './pages/app/cadastro/catCategoria';


export const router = createBrowserRouter([
    {
        path: '/', 
        element: < AppLayout />, 
        children: [
            { path: '/', element: <Dashboard /> },
            { path: 'tickets', element: <TicketTable /> },
            { path: 'mesatrabalho', element: <TableWork />},
            { path: 'cliente', element: <AddClient/> },
            { path: 'categoria', element: <CatalagoCategoria/> },

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