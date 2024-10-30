import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { UseContextInCart } from "../Store/Context";
import Nav from 'react-bootstrap/Nav';
import { Button } from "react-bootstrap";

function NaVBAR() {
  const { cartCount } = useContext(UseContextInCart);
  const Storage=JSON.parse(localStorage.getItem("user"));
  return (
    <Nav justify variant="tabs" className="bg-blue-600 pt-5 text-[1.5rem] font-semibold">
      <Nav.Item>
        <NavLink 
          to="/home" 
          className={({ isActive }) => 
            isActive ? " border-b-2 border-white px-16 py-3 bg-white" : "!text-black px-3 py-2"
          }
        >
          Home
        </NavLink>
      </Nav.Item>
      
      <Nav.Item>
     
        <NavLink 
          to="/cart" 
          className={({ isActive }) => 
            isActive ? " border-b-2 border-white px-16 py-3 bg-white" : "!text-black px-3 py-2"
          }
        >
          Cart Details
        
        </NavLink>

      </Nav.Item>
      
      <Nav.Item>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => 
            isActive ? " border-b-2 border-white px-16 py-3 bg-white" : "!text-black px-3 py-2"
          }
        >
          Contact
        </NavLink>
      </Nav.Item>
      {Storage ? ( <div className="flex gap-3  ">
     <FaRegUserCircle className="text-[2rem]" />
     {Storage.name}
     </div>) :<Link to="/login"> <button className="mr-20 bg-white text-black font-semibold px-5 py-2 my-1 rounded-lg shadow-md hover:bg-slate-900 hover:text-white transition duration-300 ease-in-out">
  Login
</button></Link>
}
    
      
     
    </Nav>
  );
}

export default NaVBAR;
