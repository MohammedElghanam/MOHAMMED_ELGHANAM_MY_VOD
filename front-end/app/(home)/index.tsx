import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const movies = [
  {
    id: '1',
    title: 'Inception',
    thumbnail: require('../../assets/images/OIP.jpeg'),
    views: '1.2M views',
    date: '2 years ago',
  },
  {
    id: '2',
    title: 'Interstellar',
    thumbnail: require('../../assets/images/OIP.jpeg'),
    views: '850K views',
    date: '1 year ago',
  },
  {
    id: '3',
    title: 'Interstellar',
    thumbnail: require('../../assets/images/OIP.jpeg'),
    views: '850K views',
    date: '1 year ago',
  },
  {
    id: '4',
    title: 'Interstellar',
    thumbnail: require('../../assets/images/OIP.jpeg'),
    views: '850K views',
    date: '1 year ago',
  },
];

interface Movie {
  id: string;
  title: string;
  thumbnail: any;
  views: string;
  date: string;
}

const MovieCard = ({ movie }: { movie: Movie }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={ movie.thumbnail } style={styles.thumbnail} />
    <View style={styles.detailsContainer}>
      <Text style={styles.title} numberOfLines={2}>{movie.title}</Text>
      <Text style={styles.subtitle}>{movie.views} • {movie.date}</Text>
    </View>
  </TouchableOpacity>
);

const Index = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <MovieCard movie={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 16,
    paddingRight: 16,
    backgroundColor: '#fff',
  },
  card: {
    marginBottom: 16,
    // backgroundColor: '#fff',
  },
  thumbnail: {
    width: '100%',
    height: 180,
    borderRadius: 16,
  },
  detailsContainer: {
    marginTop: 8,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default Index;
