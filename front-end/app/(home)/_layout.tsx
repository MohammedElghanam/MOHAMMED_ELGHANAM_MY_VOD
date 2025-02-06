import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function HomeLayout() {
    
    return (
        <Tabs>
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={20} color="black" />,
                    tabBarLabelStyle: { color: 'black' },
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'profile',
                    tabBarIcon: ({ color }) => <Ionicons name="people" size={20} color="black" />,
                    tabBarLabelStyle: { color: 'black' },
                }}
            />
             <Tabs.Screen
                name="users"
                options={{
                    title: 'users',
                    tabBarIcon: ({ color }) => <Ionicons name="people" size={20} color="black" />,
                    tabBarLabelStyle: { color: 'black' },
                }}
            />
        </Tabs>
    );
}