import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux'; 
import { useRouter, Stack, useLocalSearchParams } from 'expo-router';

export default function MovieDetails() {
//   const { slug } = useLocalSearchParams();
//   const router = useRouter();
 
//   const movies = useSelector((state: any) => state.movies.moviesList);

//   const movie = movies.find((movie: any) => movie._id.toString() === slug);

//   if (!movie) {
//     return (
//       <View>
//         <Text>Film non trouvé</Text>
//       </View>
//     );
//   }

//   return (

//     <Stack>
//       <Stack.Screen name="[slug]" options={{ title: 'Détails du Film' }} />
      
//       <View style={{ padding: 20 }}>
//         <Button title="⬅️ Retour" onPress={() => router.back()} /> 

//         <Text style={{ fontSize: 24, marginTop: 20 }}>Détails du film ici...</Text>
//       </View>
//       <View>
//       <Text>{movie.title} ({movie.year})</Text>
//       <Text>Réalisateur: {movie.director}</Text>
//       <Text>Description: {movie.description}</Text>
//     </View>
//     </Stack>
    
//   );
}
