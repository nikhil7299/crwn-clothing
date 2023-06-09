import { useContext, useState } from "react";
import {
  createUserDocumentFromAuth,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
} from "../../utils/firebase.utils";
import FormInput from "../form-input/form-input";
import "./sign-in-form.scss";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
// import { UserContext } from '../../contexts/user.context';

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  //context
  // const { setCurrentUser } = useContext(UserContext);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  // console.log('form fields', formFields);
  const signInWithGoogle = async () => {
    // const { user } = await signInWithGooglePopup();
    await signInWithGooglePopup();
    // const userDocRef = await createUserDocumentFromAuth(user);
    // setCurrentUser(user);
    // console.log('user doc ref', userDocRef);
    // Google Sign In needs creation of User document
  };

  const handleEmailPasswordSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );
      // console.log(response);
      const { user } = response;
      // setCurrentUser(user);
      resetFormFields();
      //no need to create user document, as already done by sign up page
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("Incorrect Password For Email Provided");
          break;
        case "auth/user-not-found":
          alert("User Not Found with this Email");
          break;
        default:
          console.log("Error signing in the User", error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in-container">
      <h2>Already have an account?</h2>

      <span>Sign In with your email and password</span>
      <form onSubmit={handleEmailPasswordSubmit}>
        <FormInput
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <FormInput
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            onClick={signInWithGoogle}
            buttonType={BUTTON_TYPE_CLASSES.google}
          >
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
