import React,{createContext,useEffect,useState} from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (item)=>{
    const existingItem = cart.find((cartItem)=> cartItem.id===item.id)

    if(existingItem){
      setCart(cart.map(cartItem => cartItem.id === item.id ? {...cartItem,quantity:cartItem.quantity +1}:cartItem))
    }
    else{
      setCart([...cart,{...item,quantity:1}])
    }
    setTotal((prev)=>prev+item.price)

  }

  const removeFromCart = (item) => {
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {
      if (existingItem.quantity > 1) {
        setCart(
          cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem
          )
        );
        setTotal((prev) => prev - item.price);
      } else {
        setCart(cart.filter((cartItem) => cartItem.id !== item.id));
        setTotal((prev) => prev - item.price);
      }
    }
  };
  
  return(
    <CartContext.Provider value={{cart,total,addToCart,removeFromCart}}>
      {children}

    </CartContext.Provider>

  )


  

}
