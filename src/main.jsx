import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './layouts/MainLayout/MainLayout';
import HomeLayout from './layouts/HomeLayout/HomeLayout';
import AuthLayout from './layouts/AuthLayout/AuthLayout';
import AuthProvider from './providers/AuthProvider';
import Login from './Pages/Login';
import Register from './Pages/Register';
import PrivateRoute from '../src/routes/PrivateRoute'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from './Pages/ErrorPage';
import FAQ from './components/FAQ';
import AddTutorial from './components/AddTutorial';
import FindTutors from './components/LanguageTuo/FindTutors';
import Details from './components/LanguageTuo/Details';
import Update from './components/LanguageTuo/Update';
import MyTutorials from './components/LanguageTuo/MyTutorials';
import Categories from './components/LanguageTuo/Categories';
import BookedTutors from './components/LanguageTuo/BookedTutors';
import AboutUs from './components/AboutUs';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,

      },
      {
        path: "/addTutorial",
        element: <PrivateRoute>
          <AddTutorial></AddTutorial>
        </PrivateRoute>,
      },
      {
        path: "/find-tutors",
        element: <FindTutors></FindTutors>,
        loader: () => fetch('https://language-exchange-server-xi.vercel.app/tutorials'),
      },
      {
        path: '/tutor/:id',
        element: <PrivateRoute>
          <Details></Details>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://language-exchange-server-xi.vercel.app/tutorials/${params.id}`),
      },
      {
        path: '/find-tutors/:language',
        element: <PrivateRoute>
          <Categories></Categories>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://language-exchange-server-xi.vercel.app/categories/${params.language}`),
      },
      {
        path: '/myTutorials',
        element: <PrivateRoute>
          <MyTutorials></MyTutorials>
        </PrivateRoute>,
      },
      {
        path: '/booked-tutors',
        element: <PrivateRoute>
          <BookedTutors></BookedTutors>
        </PrivateRoute>,
      },
      {
        path: '/update/:id',
        element: <PrivateRoute>
          <Update></Update>
        </PrivateRoute>,
        loader: ({ params }) => fetch(`https://language-exchange-server-xi.vercel.app/tutorials/${params.id}`),
      },
      

      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      
    ]
  },
  {
    path: "auth",
    element: <AuthLayout></AuthLayout>,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>

  </StrictMode>,
)
