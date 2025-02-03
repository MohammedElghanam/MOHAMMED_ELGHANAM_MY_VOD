import { useState } from "react";
import axios from "axios";
import { validate } from "@/validation/authValidation";
import { useRouter } from 'expo-router';

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
                console.log('dkhal hna');
                const response = await axios.post('http://100.75.46.177:3000/auth/register', formData);
                console.log('dkhal hna2');

                if (response.status === 200) {
                    console.log('dkhal hna');
                    console.log(response);
                    
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