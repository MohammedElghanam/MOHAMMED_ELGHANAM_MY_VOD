import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { formatDistanceToNow } from 'date-fns';

interface Movie {
  id: string;
  title: string;
  imageUrl: string;
  userId: {
    image: string;
    name: string;
  };
  creatorName: string;
  views: string;
  date: string;
  createdAt: string;
  duration: string;
}

export default function MovieCard({ movie, showD }: { movie: Movie; showD: (movie: Movie) => void }) {
    const createdAt = new Date(movie.createdAt);
    const timeAgo = formatDistanceToNow(createdAt, { addSuffix: true });
    console.log(timeAgo);
    
  return (
    <TouchableOpacity style={styles.card} onPress={() => showD(movie)}>
      <View style={styles.thumbnailContainer}>
        <Image
          source={{ uri: `${process.env.EXPO_PUBLIC_MEDIA_URL}${movie.imageUrl.split(':9000')[1]}` }}
          style={styles.thumbnail}
        />
        <Text style={styles.duration}>{movie.duration}</Text> {/* Add duration below the image */}
      </View>

      <View style={styles.infoContainer}>
        <Image source={{ uri: `${process.env.EXPO_PUBLIC_MEDIA_URL}${movie.userId.image.split(':9000')[1]}` }} style={styles.creatorImage} />

        <View style={styles.textContainer}>
          <Text style={styles.title} numberOfLines={2}>{movie.title}</Text>
          <Text style={styles.subtitle}>{movie.userId.name} • {movie.views} vues • { timeAgo }</Text>
        </View>

        <TouchableOpacity style={styles.menuIcon}>
          <Ionicons name="ellipsis-vertical" size={20} color="#999" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  thumbnailContainer: {
    position: 'relative',
  },
  thumbnail: {
    width: '100%',
    height: 180,
    // borderRadius: 16,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    paddingHorizontal: 10,
  },
  creatorImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 13,
    fontWeight: '500',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  menuIcon: {
    padding: 8,
  },
  duration: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    fontSize: 14,
    color: 'white',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 5,
  },
});
