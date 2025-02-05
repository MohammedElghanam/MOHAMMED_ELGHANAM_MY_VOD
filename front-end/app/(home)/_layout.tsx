import { Stack, Tabs, useSegments } from 'expo-router';
import { useRouter } from 'expo-router';

export default function HomeLayout() {
    const segments: string[] = useSegments();
    // const isMovieDetails = segments.includes('[slug]');
    
    return (
        // <Stack>
        //   <Stack.Screen name="profil" />
        //   <Stack.Screen name="users" />
        // </Stack>

        // !isMovieDetails ? (
        <Tabs>
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
        </Tabs>
        // ) : (
        // <Stack>
        //     <Stack.Screen name="[slug]" /> 
        // </Stack>
        // )
    );
}