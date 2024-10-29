

import './App.css'
import Home from './Component/Home';
import Login from './Component/LogIn'
import SignUp from './Component/SignUp'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "login",
      element: <Login />
    },
    {
      path:"home",
      element: <Home />
    }
  ]);

  return (
    <>

    <RouterProvider router={router} />
 
    </>
  )
}

export default App
