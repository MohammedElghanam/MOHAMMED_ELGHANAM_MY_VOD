import { useState } from "react";
import { useNavigation } from '@react-navigation/native';
import axios from "axios";
import { validate } from "@/validation/login";

const useRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = async () => {
        const validationErrors = validate(email, password, 'register', name, confirmPassword);
    };

};