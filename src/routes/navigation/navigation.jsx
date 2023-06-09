import { Outlet } from "react-router-dom";
// import "./navigation.scss";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { useContext } from "react";
import { UserContext } from "../../contexts/user.context";
import { signOutUser } from "../../utils/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../contexts/cart.context";
import {
  LogoContainer,
  NavLink,
  NavLinksContainer,
  NavigationContainer,
} from "./navigation.sc";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  // console.log('current user', currentUser);
  // const signOutHandler = async () => {
  //     await signOutUser();
  //     setCurrentUser(null);
  // }

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
