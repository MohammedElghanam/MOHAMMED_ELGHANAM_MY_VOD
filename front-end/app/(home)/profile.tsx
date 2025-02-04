import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
// import { useSearchParams } from 'expo-router';


const ProfileSimple = () => {

    // const { name, email, avatar } = useSearchParams();
    const params = { 
        name: 'John Doe', 
        email: 'johndoe@example.com', 
        avatar: "https://via.placeholder.com/100" 
    }

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/logo-purple.png')} style={styles.avatar} />
      <Text style={styles.name}>{params.name}</Text>
      <Text style={styles.email}>{params.email}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  email: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#007bff',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default ProfileSimple;
