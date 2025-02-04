import { Stack } from 'expo-router';

export default function Layout() {
  return (
    // <Stack 
    //   initialRouteName="(auth)" 
    //   screenOptions={{ headerShown: false }} 
    // >
    //   <Stack.Screen name="(auth)" options={{ headerShown: false}} />
    //   <Stack.Screen name="(home)" />
    //   <Stack.Screen name="+not-found" />
    // </Stack>

    <Stack screenOptions={{ headerShown: false }} />
  );
}
