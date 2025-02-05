import { Stack } from 'expo-router';
import { Provider } from 'react-redux';
import store from '../store/store';

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

    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }} />
    </Provider>
  );
}
