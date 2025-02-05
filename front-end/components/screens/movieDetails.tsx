import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { Video } from 'expo-av';

export default function MovieDetails({ movie, onClose }: any) {
    console.log("MEDIA_URL:", process.env.EXPO_PUBLIC_MEDIA_URL);

    
  return (
    <View style={{ padding: 20, backgroundColor: '#f0f0f0', marginTop: 10 }}>
      <Text style={{ fontSize: 22, fontWeight: 'bold' }}>{movie.title}</Text>
      <Text>Description: {movie.description}</Text>
      <Text>Genre: {movie.categoryId.title}</Text>
      <Text>Année: {new Date(movie.releaseYear).getFullYear()}</Text>

      {/* Affichage de l'image */}
      {/* <Image
        source={{  uri: `http://192.168.43.24:9000${movie.imageUrl.split(':9000')[1]}` }}
        style={{ width: '100%', height: 200, marginVertical: 10, backgroundColor: '#f0f0f0' }}
        resizeMode="cover"
      /> */}

      {/* Affichage de la vidéo */}
      <Video
        source={{ uri: `http://192.168.43.24:9000${movie.videoUrl.split(':9000')[1]}` }}
        style={{ width: '100%', height: 250, backgroundColor: 'red' }}
        useNativeControls
        resizeMode="contain"
        isLooping
      />

      <Button title="Fermer" onPress={onClose} />
    </View>
  );
}
