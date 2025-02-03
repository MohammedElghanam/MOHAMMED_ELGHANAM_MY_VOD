import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { validate } from "@/validation/authValidation";
import { useRouter } from 'expo-router';


const useLogin = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleSubmit = async () => {

        const validationErrors = validate({ email: email, password: password, key: 'login' });
        setErrors(validationErrors);

        const isErrorsEmpty = Object.keys(errors).length === 0;

        // if (!validationErrors.email && !validationErrors.password) {

        //     const formData = { email, password}
        //     try {
        //         const response = await axios.post('http://localhost:5001/auth/login', formData);

        //         if (response.status === 200) {
        //             console.log('dkhal hna');
        //             console.log(response);
                    
                    
        //             setEmail('');
        //             setPassword('');
        //             localStorage.setItem('token', response.data.token);       
        //             navigate.navigate('register');
        //         }

        //     } catch (error) {
        //         if (error.response && error.response.status === 400) {
        //             setErrorMessage(error.response.data.message);
        //             console.log('Error registering user:', error.response.data.message);
        //         } else {
        //             console.log('error');
                    
        //             setErrorMessage('An unexpected error occurred');
        //             console.log('Error registering user:', error.response.data.message);
        //         }
        //     }            
        // }

    }

    

    const handleNavigation = () => {
        router.push('/register');
    };

    return {
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        errors,
        handleNavigation
    }
}

export default useLogin;