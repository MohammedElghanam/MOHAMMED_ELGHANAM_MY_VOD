import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

export default function MovieDetails({ movie, onClose }: any) {
    console.log("MEDIA_URL:", process.env.EXPO_PUBLIC_MEDIA_URL);

    
  return (
    <View style={{ padding: 20, backgroundColor: '#f0f0f0', marginTop: 10 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{movie.title}</Text>
      <Text>Description: {movie.description}</Text>
      <Text>Genre: {movie.categoryId.title}</Text>
      <Text>Année: {new Date(movie.releaseYear).getFullYear()}</Text>

      <Image
        source={{  uri: `${process.env.EXPO_PUBLIC_MEDIA_URL}${movie.imageUrl.split(':9000')[1]}` }}
        style={{ width: '100%', height: 200, marginVertical: 10, backgroundColor: '#f0f0f0' }}
        resizeMode="cover"
      />

      <Video
        source={{ uri: `${process.env.EXPO_PUBLIC_MEDIA_URL}${movie.videoUrl.split(':9000')[1]}` }}
        style={{ width: '100%', height: 250, backgroundColor: 'red' }}
        useNativeControls
        resizeMode={ResizeMode.CONTAIN}
        isLooping
      />

      <Button title="Fermer" onPress={onClose} />
    </View>
  );
}
