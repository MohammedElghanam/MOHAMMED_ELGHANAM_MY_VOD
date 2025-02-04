import { useState } from "react";
import axios from "axios";
import { validate } from "@/validation/authValidation";
import { useRouter } from 'expo-router';
import { Alert } from "react-native";


const useRegister = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleSubmit = async () => {
        const validationErrors = validate({ email: email, password: password, confirmPassword: confirmPassword, name: name, key: 'register' });
        setErrors(validationErrors);

        const isErrorsEmpty = Object.keys(validationErrors).length === 0;

        if (isErrorsEmpty) {

            const formData = { name, email, password }
            try {
                const response = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/auth/register`, formData);

                if (response.status === 201) {
                    console.log(response.data);
                    Alert.alert(response.data.message);
                    setName('');
                    setEmail('');
                    setPassword('');    
                    router.push('/login');
                }

            } catch (error: any) {
                if (error.response) {
                    console.log('Error registering user:', error.response.data.message);
                    setErrorMessage(error.response.data.message);
                } else {
                    console.log('Network error or unexpected issue');
                    setErrorMessage('An unexpected error occurred');
                }
            }        
        }
    };

    const handleNavigation = () => {
        router.push('/login');
    };

    return {
        name,
        setName,
        email,
        setEmail,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        handleSubmit,
        handleNavigation,
        errors,
        errorMessage,
    };

};
export default useRegister;