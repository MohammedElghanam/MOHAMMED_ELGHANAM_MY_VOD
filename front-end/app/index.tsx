import AsyncStorage from '@react-native-async-storage/async-storage';
import { Link, Redirect, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { View } from 'react-native';

export default function Index() {
    const router = useRouter();
 
    useEffect(() => {
        const checkToken = async () => {
            await AsyncStorage.removeItem('token');
            const token = await AsyncStorage.getItem('token');
            if (token) {
                router.replace('/(home)');
            } else {
                router.replace('/(auth)/login');
            }
        };
        checkToken();
    }, [router]);

        {/* <Link href="/(auth)/login">Go to login</Link>
        <Link href="/(home)/profile">Go to profile</Link> */}
}
