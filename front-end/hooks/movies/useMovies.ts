import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setMovies } from '../../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';


const useMovies = () => {
    const token = AsyncStorage.getItem('token');
    console.log(token);    
    const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`${process.env.EXPO_PUBLIC_API_URL_2}/api/films/read`, {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        });
        const movies = response.data;
        dispatch(setMovies(movies));
      } catch (error) {
        console.error("Erreur lors de la récupération des films:", error);
      }
    };

    fetchMovies();
  }, [dispatch]);
};

export default useMovies;
