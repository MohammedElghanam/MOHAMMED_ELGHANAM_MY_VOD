import { Link, Redirect } from 'expo-router';
import { View } from 'react-native';

export default function Index() {
 
        return <Redirect href="/(auth)/login" />;
        
        {/* <Link href="/(auth)/login">Go to login</Link>
        <Link href="/(home)/profile">Go to profile</Link> */}
}
