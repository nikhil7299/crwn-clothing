import { CartItemContainer, ItemDetails } from "./cart-item.sc";

const CartItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price} = ${quantity * price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
