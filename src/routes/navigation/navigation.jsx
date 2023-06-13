import { Outlet } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { signOutUser } from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import {
	LogoContainer,
	NavLink,
	NavLinksContainer,
	NavigationContainer,
} from "./navigation.sc";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
	const currentUser = useSelector(selectCurrentUser);
	const isCartOpen = useSelector(selectIsCartOpen);
	return (
		<>
			<NavigationContainer className="navigation">
				<LogoContainer className="logo-container" to="/">
					<CrwnLogo className="logo" />
				</LogoContainer>

				<NavLinksContainer className="nav-links-container">
					<NavLink className="nav-link" to="/shop">
						SHOP
					</NavLink>
					{currentUser ? (
						<NavLink as="span" className="nav-link" onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink className="nav-link" to="/auth">
							SIGN IN
						</NavLink>
					)}
					<NavLink>
						<CartIcon />
					</NavLink>
				</NavLinksContainer>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>
			<Outlet />
		</>
	);
};

export default Navigation;
