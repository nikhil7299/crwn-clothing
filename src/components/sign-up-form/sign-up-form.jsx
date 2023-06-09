import { useState } from 'react';
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase.utils';
import FormInput from '../form-input/form-input';
import './sign-up-form.scss';
import Button from '../button/button';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    // console.log('form fields', formFields);

    const handleSubmit = async (event) => {
        event.preventDefault();
        // const email = event.target[1].value;
        // const password = event.target[2].value;
        // const confirmPassword = event.target[3].value;
        // console.log(event);

        if (!(password === confirmPassword)) {
            alert("Passwords do not match");
            // console.log("password not matching");
            return
        }

        try {
            const { user } = await createAuthUserWithEmailAndPassword(email, password);
            const userDocRef = await createUserDocumentFromAuth(user, { displayName });

            console.log('user doc ref', userDocRef);

            resetFormFields();


        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                alert('Cannot create user, email already in use');
            }
            else console.log('Creating User encountered with an error', error);
        }

    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value });

    }

    return (
        <div className='sign-up-container'>
            <h2>Dont'have an account?</h2>

            <span>Sign Up with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='DisplayName' type="text" required onChange={handleChange} name='displayName' value={displayName} />

                <FormInput label='Email' type="email" required onChange={handleChange} name='email' value={email} />

                <FormInput label='Password' type="password" required onChange={handleChange} name='password' value={password} />

                <FormInput label='Confirm Password' type="password" required onChange={handleChange} name='confirmPassword' value={confirmPassword} />

                <Button type='submit'>Sign Up</Button>

            </form>
        </div>
    )
}

export default SignUpForm