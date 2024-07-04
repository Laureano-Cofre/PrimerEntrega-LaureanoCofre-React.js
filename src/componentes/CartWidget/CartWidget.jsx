import React from 'react';
import './CartWidget.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = () => {
  return (
    <li className="cart-widget">
      <button className="boton-carrito">
        <FontAwesomeIcon icon={faShoppingCart} />
        <span className="contadorCarrito">0</span>
      </button>
    </li>
  );
}

export default CartWidget;
