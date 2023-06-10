import { Navigate, useRoutes } from 'react-router-dom';
// auth
import AuthGuard from '../auth/AuthGuard';
import GuestGuard from '../auth/GuestGuard';
// layouts
import CompactLayout from '../layouts/compact';
import DashboardLayout from '../layouts/dashboard';
// config
import { PATH_AFTER_LOGIN } from '../config-global';
//
import {
  Page404,
  PageOne,
  PageTwo,
  PageSix,
  PageFour,
  PageFive,
  LoginPage,
  PageThree,
} from './elements';

// ----------------------------------------------------------------------

export default function Router() {
  return useRoutes([
    // {
    //   path: '/',
    //   children: [
    //     { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
    //     {
    //       path: 'login',
    //       element: (
    //         <GuestGuard>
    //           <LoginPage />
    //         </GuestGuard>
    //       ),
    //     },
    //   ],
    // },
    {
      path: '/admin',
      element: (
        // <AuthGuard>
          <DashboardLayout />
        // </AuthGuard>
      ),
      children: [
        { element: <Navigate to={PATH_AFTER_LOGIN} replace />, index: true },
        { path: 'one', element: <PageOne /> },
        { path: 'two', element: <PageTwo /> },
        { path: 'three', element: <PageThree /> },
        { path: 'three', element: <PageThree /> },
        { path: 'three', element: <PageThree /> },
        { path: 'three', element: <PageThree /> },
      ],
    },
    {
      element: <CompactLayout />,
      children: [{ path: '404', element: <Page404 /> }],
    },
    { path: '*', element: <Navigate to="/404" replace /> },
  ]);
}
