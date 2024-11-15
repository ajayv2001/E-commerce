import React, { useContext } from 'react';
import './Cart.css';
import { CartContext } from '../../Context/Context';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, total, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate()
  const handleNavigate =()=>{
    navigate('/products')
  }

  return (
    <div className="cart-main">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id}>
                  <td className="cart-item">
                    <img
                      className="cart-image"
                      src={item.images && item.images.length > 0 ? item.images[0] : 'https://via.placeholder.com/640x480?text=No+Image'}
                      alt={item.title}
                    />
                    <span className="cart-title">{item.title}</span>
                  </td>
                  <td>{item.quantity}</td>
                  <td>${(item.price * item.quantity).toFixed(2)}</td>
                  <td>
                    <button className="cart-btn" onClick={() => removeFromCart(item)}>
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan="2" className="cart-total-label">Total</td>
                <td colSpan="2" className="cart-total-value">${total.toFixed(2)}</td>
              </tr>
            </tfoot>
          </table>
          <div className="cart-buttons">
            <button onClick={handleNavigate}className="continue-shopping-btn">Continue Shopping</button>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
