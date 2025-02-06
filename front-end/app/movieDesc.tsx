import { View, Text } from 'react-native'
import React from 'react'
import MovieDetails from '@/components/screens/movieDetails';

export default function MovieDesc({ movie, onClose }: any) {
  return (
    <View>
      <MovieDetails movie={movie} onClose={onClose} />
    </View>
  )
}