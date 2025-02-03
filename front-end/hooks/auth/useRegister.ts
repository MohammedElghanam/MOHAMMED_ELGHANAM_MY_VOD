import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { validate } from "@/validation/authValidation";
import { useRouter } from 'expo-router';

const useRegister = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const handleSubmit = async () => {
        const validationErrors = validate({ email: email, password: password, confirmPassword: confirmPassword, name: name, key: 'register' });
        setErrors(validationErrors);
    };

    const handleNavigation = () => {
        router.push('/register');
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
    };

};
export default useRegister;