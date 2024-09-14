import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import Header from './components/commons/header/Header.jsx';
import Footer from './components/commons/footer/Footer.jsx';
import './index.css'
import LoginForm from "./components/commons/forms/LoginForm/LoginForm.jsx";
import RegisterForm from "./components/commons/forms/Register/RegisterForm.jsx";
import FormTicket from "./components/tickets/FormTicket/FormTicket.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <LoginForm/>,
  },
  {
    path: "/register",
    element: <RegisterForm/>,
  },
  {
    path: "/logoff",
    element: <div>Logoff Page</div>,
  },
  {
  path: "/FormTicket",
  element: <FormTicket/>,
  },
  {
  path: "*",
  element: <div>Error 404: Page Not Found</div>,
  }

]);

createRoot(document.getElementById("Root")).render(
  <>
    <Header/>
    <RouterProvider router={router} />
    <Footer/>
  </>
);



