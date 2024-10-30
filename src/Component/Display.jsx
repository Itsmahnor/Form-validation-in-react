import { useContext } from "react";
import { UseContextInCart } from "../Store/Context";

function DisplayResult() {
  const { cartvalue, Price , handlesetcart, Decrement} = useContext(UseContextInCart);

  return (
    cartvalue.length > 0 ? (
      <div className="w-[100vw] flex justify-center">
      <div className="m-32 flex justify-start flex-wrap gap-3 w-[50vw]">
        <div className="flex justify-between w-100">
        <h1>Shopping Cart:</h1>
        <h2>Total Price: ${Price}</h2>
        </div>
       
        {cartvalue.map((item) => (
          <div
            className="flex gap-4 border p-4 w-100"
         
            key={item.id}
          >
            <img
              src={item.image}
              className="card-img-top h-[200px]  object-contain"
              alt={item.name}
            />
            <div className="pt-4">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <p>${item.price}</p>
              <p className="text-[1.5rem]" > <span className="bg-black px-2 border rounded-sm text-white text-[1rem] cursor-pointer" onClick={()=>{Decrement(item.id)}} >-</span>  {item.quantity} <span className="bg-black px-2 border rounded-sm text-white text-[1rem] cursor-pointer" onClick={()=>{handlesetcart(item.id)}}>+</span></p>
             
            </div>
          </div>
        
        ))}
      </div></div>
    ) : (
      <h1>Cart is Empty</h1>
    )
  );
}

export default DisplayResult;
