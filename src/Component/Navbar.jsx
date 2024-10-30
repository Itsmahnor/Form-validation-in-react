import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { UseContextInCart } from "../Store/Context";

function NaVBAR() {
 const{cartCount}= useContext(UseContextInCart)
  return ( 
    <nav class="navbar bg-body-tertiary p-4">
    <div class="container-fluid justify-content-center gap-10">
      <Link to="/home" class="btn btn-outline-success me-2" >Home</Link>
  
<Link to="/cart" class="btn btn-outline-success me-2">View Cart</Link>
<div className="relative">
  <FaShoppingCart className="text-[3rem] " />
  <p className="absolute top-0 right-0 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">{cartCount}</p>
</div>

    </div>
  </nav>
   );
}

export default NaVBAR;