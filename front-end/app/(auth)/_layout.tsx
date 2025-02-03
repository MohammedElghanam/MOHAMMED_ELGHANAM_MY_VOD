// import { Stack } from 'expo-router';
import {Stack, Tabs } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="login" options={{ headerShown: false}} />
      <Stack.Screen name="register" options={{ headerShown: false}} />
    </Stack>

    // <Tabs>
    //   <Tabs.Screen
    //     name="login"
    //     options={{
    //       title: 'Home',
    //     //   tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
    //     }}
    //   />
    //   <Tabs.Screen
    //     name="register"
    //     options={{
    //       title: 'Explore',
    //     //   tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
    //     }}
    //   />
    // </Tabs>
  );
}
