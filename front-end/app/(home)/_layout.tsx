import { Tabs } from 'expo-router';
import { Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeLayout() {
    
    return (
        <Tabs
            screenOptions={
                {
                    tabBarActiveTintColor: 'white',
                    tabBarInactiveTintColor: 'white',
                    tabBarStyle: { backgroundColor: 'black' },
                    tabBarLabelStyle: { color: 'white' },
                }
            }
        >
            <Tabs.Screen
                name="index"
                options={{
                    // title: 'Home',
                    // tabBarLabelStyle: { color: 'white' },
                    // headerStyle: {
                        // backgroundColor: 'black'
                        // },
                        // headerTintColor: '#FFD700',
                        // headerTitleAlign: 'left'
    //                      headerShown: !showMovieDetails, // Cacher le header si les détails sont affichés
    // tabBarStyle: showMovieDetails ? { display: 'none' } : { backgroundColor: 'black' },
                    tabBarIcon: ({ color }) => <Ionicons name="home" size={20} color="white" />,
                    headerTitle: () => (
                        <Image
                          source={require('../../assets/images/logo-purple.png')}
                          style={{ width: 34, height: 34, resizeMode: 'contain' }}
                        />
                      ),
                      headerRight: () => (
                        <TouchableOpacity onPress={() => alert('Settings')}>
                          <Ionicons name="menu-outline" size={24} color="white" />
                        </TouchableOpacity>
                      ),
                      headerStyle: { backgroundColor: 'black' },
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'profile',
                    tabBarIcon: ({ color }) => <Ionicons name="people" size={20} color="white" />,
                    tabBarLabelStyle: { color: 'white' },
                    headerStyle: {
                        backgroundColor: 'red', // Change header background color
                      },
                      headerTintColor: 'white', // Change text color
                      headerTitleStyle: {
                        fontSize: 20, // Change title font size
                        fontWeight: 'bold',
                      },
                      headerShadowVisible: false,
                }}
            />
             <Tabs.Screen
                name="users"
                options={{
                    title: 'users',
                    tabBarIcon: ({ color }) => <Ionicons name="people" size={20} color="white" />,
                    tabBarLabelStyle: { color: 'white' },
                }}
            />
        </Tabs>
    );
}