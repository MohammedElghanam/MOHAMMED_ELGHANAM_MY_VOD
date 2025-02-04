import { useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";
import { validate } from "@/validation/authValidation";
import { useRouter } from 'expo-router';
import { Alert } from "react-native";


const useLogin = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleSubmit = async () => {

        const validationErrors = validate({ email: email, password: password, key: 'login' });
        setErrors(validationErrors);

        const isErrorsEmpty = Object.keys(validationErrors).length === 0;

        if (isErrorsEmpty) {

            const formData = { email, password}
            try {
                const response = await axios.post(`${process.env.EXPO_PUBLIC_API_URL}/auth/login`, formData);

                if (response.status === 200) {
                    console.log('dkhal hna');
                    console.log(response.data);
                    
                    
                    setEmail('');
                    setPassword('');
                    await AsyncStorage.setItem('token', response.data.token);
                    router.replace('/(home)/profile');
                }

            } catch (error: any) {
                if (error.response && error.response.status === 400) {
                    Alert.alert(error.response.data.message);
                    console.log('Error login user1:', error.response.data);
                } else {
                    console.log('error');
                    console.log('Error login user:', error.response.data);
                }
            }            
        }

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