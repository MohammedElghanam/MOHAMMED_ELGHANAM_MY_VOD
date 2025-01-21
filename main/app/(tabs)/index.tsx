import React from 'react';
import { Stack, Link } from 'expo-router';
import { StyleSheet, View , Text, ScrollView} from 'react-native';
import { HeaderButton } from '../../components/HeaderButton';

import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <ScrollView style={styles.container} className=' h-full bg-blue-500'>
        <Link href="/(test)/alo" asChild> 
          <HeaderButton />
        </Link>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
