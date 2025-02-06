import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { setMovies } from '../../store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';


const useMovies = () => {
    
    const dispatch = useDispatch();

    

  useEffect(() => {
    const fetchMovies = async () => {

        
      try {

        const token = await AsyncStorage.getItem('token');
        // console.log(token);    
        if (!token) {
            throw new Error('Token manquant');
        }else{
            console.log('token exist');
        }

        // console.log('dkhal');    

        const response = await axios.get('http://192.168.43.24:5000/api/films/read', {
            headers: {
            'Authorization': `Bearer ${token}`
            }
        });
        const movies = response.data;
        console.log(movies);    
        dispatch(setMovies(movies));
      } catch (error: any) {
        console.log("Erreur lors de la récupération des films:", error);
      }
    };

    fetchMovies();
  }, [dispatch]);
};

export default useMovies;
