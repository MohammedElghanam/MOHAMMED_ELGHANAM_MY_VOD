import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';

const GoogleSignInButton = () => {
  return (
    <TouchableOpacity style={styles.button} onPress={() => { /* handle sign in */ }} disabled={false}>
      <View style={styles.content}>
        <Image 
        //   source={require('../assets/images/logo-google.jpeg')} 
        source={require('../../assets/images/logo-google.jpeg')}
          style={styles.icon} 
        />
        <Text style={styles.text}>Sign in with Google</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: 'white',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBlockStart: 10,
    // transition: 'background-color 0.3s', 
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  text: {
    fontSize: 14,
    color: '#333',
  },
});

export default GoogleSignInButton;
