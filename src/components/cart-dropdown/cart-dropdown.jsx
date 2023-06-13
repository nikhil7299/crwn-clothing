import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import { useNavigate } from "react-router-dom";
import {
	CartDropdownContainer,
	CartItems,
	EmptyMessage,
} from "./cart-dropdown.sc.jsx";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);

	const navigate = useNavigate();
	const goToCheckoutHandler = () => {
		navigate("/checkout");
	};

	return (
		<CartDropdownContainer>
			{cartItems.length ? (
				<CartItems>
					{cartItems.map((item) => (
						<CartItem key={item.id} cartItem={item} />
					))}
				</CartItems>
			) : (
				<EmptyMessage>Your Cart is Empty</EmptyMessage>
			)}

			<Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
		</CartDropdownContainer>
	);
};

export default CartDropdown;
