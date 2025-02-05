import { Stack, Tabs } from 'expo-router';

export default function HomeLayout() {
  return (
    // <Stack>
    //   <Stack.Screen name="profil" />
    //   <Stack.Screen name="users" />
    // </Stack>

    <Tabs >

        <Tabs.Screen
            name="index"
            options={{
                title: 'Home',
                // tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
            }}
        />

        <Tabs.Screen
            name="profile"
            options={{
                title: 'profile',
                // tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
            }}
        />

        <Tabs.Screen
            name="users"
            options={{
                title: 'users',
                // tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
            }}
        />

    </Tabs>
  );
}
