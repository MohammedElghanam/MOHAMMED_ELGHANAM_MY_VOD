import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack initialRouteName="(auth)/login">
      <Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
      <Stack.Screen name="(auth)/register" options={{ headerShown: false }} />
    </Stack>
  );
}
