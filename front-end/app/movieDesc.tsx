import { View, Text } from 'react-native'
import React from 'react'
import MovieDetails from '@/components/screens/movieDetails';
import { useLocalSearchParams } from 'expo-router';

export default function MovieDesc() {
  console.log("test");
  const { movie } = useLocalSearchParams();
  const movieData = movie ? JSON.parse(movie as string) : null;
  console.log(movieData);

  return (
    <View style={{ flex: 1, backgroundColor: 'black' }}>
      <MovieDetails movie={movieData} />
    </View>
  )
}