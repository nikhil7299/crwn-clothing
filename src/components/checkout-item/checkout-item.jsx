import { useDispatch, useSelector } from "react-redux";
import {
	addItemToCart,
	clearItemFromCart,
	removeItemFromCart,
} from "../../store/cart/cart.action";
import {
	Arrow,
	BaseSpan,
	CheckoutItemContainer,
	Quantity,
	RemoveButton,
} from "./checkout-item.sc";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	const cartItems = useSelector(selectCartItems);
	const dispatch = useDispatch();
	const removeItemFromCartHandle = () =>
		dispatch(removeItemFromCart(cartItems, cartItem));
	const addItemToCartHandle = () =>
		dispatch(addItemToCart(cartItems, cartItem));
	const clearItemFromCartHandle = () =>
		dispatch(clearItemFromCart(cartItems, cartItem));
	return (
		<CheckoutItemContainer>
			<div className="image-container">
				<img src={imageUrl} alt={`${name}`} />
			</div>
			<BaseSpan>{name}</BaseSpan>
			<BaseSpan>
				<Arrow onClick={removeItemFromCartHandle}>&#10094;</Arrow>
				<Quantity>{quantity}</Quantity>
				<Arrow onClick={addItemToCartHandle}>&#10095;</Arrow>
			</BaseSpan>
			<BaseSpan>
				{quantity} x ${price} = ${quantity * price}
			</BaseSpan>
			<RemoveButton onClick={clearItemFromCartHandle}>&#10005;</RemoveButton>
		</CheckoutItemContainer>
	);
};

export default CheckoutItem;
