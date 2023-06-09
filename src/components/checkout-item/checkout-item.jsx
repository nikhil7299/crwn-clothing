import { CartContext } from "../../contexts/cart.context";
import {
  Arrow,
  BaseSpan,
  CheckoutItemContainer,
  Quantity,
  RemoveButton,
} from "./checkout-item.sc";
import React, { useContext } from "react";

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { clearItemFromCart, addItemToCart, removeItemFromCart } =
    useContext(CartContext);
  return (
    <CheckoutItemContainer>
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <BaseSpan>{name}</BaseSpan>
      <BaseSpan>
        <Arrow onClick={() => removeItemFromCart(cartItem)}>&#10094;</Arrow>
        <Quantity>{quantity}</Quantity>
        <Arrow onClick={() => addItemToCart(cartItem)}>&#10095;</Arrow>
      </BaseSpan>
      <BaseSpan>
        {quantity} x ${price} = ${quantity * price}
      </BaseSpan>
      <RemoveButton onClick={() => clearItemFromCart(cartItem)}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
