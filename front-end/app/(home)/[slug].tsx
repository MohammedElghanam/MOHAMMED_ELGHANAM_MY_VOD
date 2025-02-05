import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux'; 
import { useLocalSearchParams } from 'expo-router';

export default function MovieDetails() {
  const { slug } = useLocalSearchParams();

 
  const movies = useSelector((state: any) => state.movies.moviesList);

  const movie = movies.find((movie: any) => movie.id.toString() === slug);

  if (!movie) {
    return (
      <View>
        <Text>Film non trouvé</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{movie.title} ({movie.year})</Text>
      <Text>Réalisateur: {movie.director}</Text>
      <Text>Description: {movie.description}</Text>
    </View>
  );
}
