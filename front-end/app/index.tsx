import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Index() {
  return (
    <View>
      <Link href="/(auth)/login">Go to login</Link>
      <Link href="/(home)/profile">Go to profile</Link>
    </View>
  );
}
