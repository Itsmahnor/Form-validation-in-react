import { createContext, useState } from "react";
import cartdata from '../Component/Cartdata.json';

export const UseContextInCart = createContext();

const MainContext = ({ children }) => {
  const [cartvalue, setcart] = useState([]);
  const [cartCount, setCartCount] = useState(0); 
  const[Price,setPrice]=useState(0);
 console.log(Price)

  const handlesetcart = (id) => {
    const newArr = cartdata.find((item) => item.id === id);
    const itemincart=cartvalue.find((item)=> item.id === id);
    if(itemincart){
      const UpdatedCart=cartvalue.map((item)=>(
        item.id === id ? {...item,quantity:item.quantity+1}:item
      )
      )
      setcart(UpdatedCart)
    }
    else{
      setcart(prev=> [...prev,{...newArr,quantity:1}])
    }

   
    setCartCount(prevCount => prevCount + 1);
   
    setPrice((prev) => Number((prev + newArr.price).toFixed(2)));
  }

  const Decrement=(id)=>{
    const newArr = cartdata.find((item) => item.id === id);
    const itemincart=cartvalue.find((item)=> item.id === id);
    if(itemincart.quantity !=1){
    const UpdatedCart=cartvalue.map((item)=>(
     
        item.id === id ? {...item,quantity:item.quantity-1}:item
    
    )
    )
    setCartCount(prevCount => --prevCount);
    setPrice((prev) => Number((prev - newArr.price).toFixed(2)));

    setcart(UpdatedCart)}
   else{
const Updated=cartvalue.filter((item)=> item.id !=id);
setCartCount(prevCount => --prevCount);
setPrice((prev) => Number((prev - newArr.price).toFixed(2)));
setcart(Updated)
    }
  }

 
  
  return (
    <UseContextInCart.Provider value={{ cartvalue, handlesetcart, cartCount,Price,Decrement }}>
      {children}
    </UseContextInCart.Provider>
  );
};

export default MainContext;
