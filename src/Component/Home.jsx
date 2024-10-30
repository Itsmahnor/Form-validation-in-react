import { useContext } from "react";
import { UseContextInCart } from "../Store/Context";
import { Link } from "react-router-dom";
import CartData from './Cartdata.json';

function Homepage() {
  const { handlesetcart } = useContext(UseContextInCart);

  return (
    <>
  <Link to="/home">
     <h1 className="text-[2rem] font-semibold text-center m-20 ">Items:</h1>
      <div className=" flex justify-around flex-wrap  ml-36 mr-36">
       
        {CartData.map((item) => (
          <div className="card" style={{ width: "20rem" }} key={item.id}>
            <img
              src={item.image}
              className="card-img-top w-100 h-[20vh] object-contain"
              alt={item.name}
            />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p>${item.price}</p>
              <a
                href="#"
                className="btn btn-primary"
                onClick={() => handlesetcart(item.id)}
              >
                Add to Cart
              </a>
            </div>
          </div>
        ))}
      </div>
      </Link>
    </>
  );
}

export default Homepage;
