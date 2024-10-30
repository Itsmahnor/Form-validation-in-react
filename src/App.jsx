

import './App.css'
import MainContext from "./Store/Context";
import Login from './Component/LogIn'
import SignUp from './Component/SignUp'
import 'bootstrap/dist/css/bootstrap.min.css';
import DisplayResult from "./Component/Display";
import Homepage from "./Component/Home";
import NaVBAR from "./Component/Navbar";
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
      path: "/login",
      element: <Login />
    },
 
    {
      path:"/home",
      element:(<><NaVBAR/> <Homepage />   </>)
    },
    {
      path:"/cart",
      element:<><NaVBAR /> <DisplayResult />  </>
    }
  ]);

  return (
    <>

<MainContext>
    <RouterProvider router={router} />
    </MainContext>
 
    </>
  )
}

export default App
