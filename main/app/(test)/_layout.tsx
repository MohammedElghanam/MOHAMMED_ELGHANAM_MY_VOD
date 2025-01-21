import { Link, Tabs } from 'expo-router';

export default function TestLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
      }}>
      <Tabs.Screen
        name="alo"
        options={{
          title: 'Alo',
          headerShown: true,
        }}
      />
    </Tabs>
  );
}
