import React from "react";

const CartItem = ({
  id,
  color,
  shadow,
  img,
  itemQuantity,
  price,
  text,
  title,
}) => {
  return (
    <div>
      <div>
        <div>
          <img src={img} alt='cart-item-img' />
        </div>
        <div>
          <h2>{title}</h2>
          <h5>{text}</h5>
          <div>
            <button>-</button>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default CartItem;
