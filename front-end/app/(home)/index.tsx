import React, { useState } from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import useMovies from '@/hooks/movies/useMovies';
import MovieDetails from '@/components/screens/movieDetails';
import MovieCard from '@/components/UI/MovieCard';

interface Movie {
  id: string;
  title: string;
  imageUrl: string; 
  views: string;
  date: string;
}

const Index = () => {
  useMovies();

  const movies = useSelector((state: any) => state.movies.moviesList);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const [showMovieDetails, setShowMovieDetails] = useState(false);

const showDetails = (movie: Movie) => {
  setSelectedMovie(movie);
  setShowMovieDetails(true); // Masquer le header et la tab bar
};

const closeDetails = () => {
  setSelectedMovie(null);
  setShowMovieDetails(false); // Réafficher le header et la tab bar
};

  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => <MovieCard movie={item} showD={showDetails}  />}
        showsVerticalScrollIndicator={false}
      />

      {selectedMovie && (
        <View style={styles.detailsOverlay}>
          <MovieDetails movie={selectedMovie} onClose={closeDetails} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  detailsOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Index;
