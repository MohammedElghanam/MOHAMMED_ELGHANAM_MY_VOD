import { Stack } from 'expo-router';

export default function HomeLayout() {
  return (
    <Stack>
      <Stack.Screen name="ProfileSimple" />
      <Stack.Screen name="users" />
    </Stack>
  );
}
