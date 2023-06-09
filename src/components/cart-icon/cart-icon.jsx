import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import { CartIconContainer, ItemCount, ShoppingIcon } from "./cart-icon.sc";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  //   const [cartItemCount, setCartItemCount] = useState(0);
  //   const { cartItems } = useContext(CartContext);

  //   useEffect(() => {
  //     let val = 0;
  //     cartItems.map((cartItem) => (val += cartItem.quantity));

  //     setCartItemCount(val);
  //   }, [cartItems]);

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
