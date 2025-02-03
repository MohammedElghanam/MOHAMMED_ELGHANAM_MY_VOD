import GoogleSignInButton from '@/components/UI/GoogleSignInButton';
import LineWithText from '@/components/UI/LineWithText';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

//   const navigation = useNavigation();

  const handleLogin = () => {
    // navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
        <Image
            source={require('../../assets/images/10780021_19197947.jpg')}
            style={{ width: 200, height: 200, alignSelf: 'center' , marginBottom: 15}}
        />
        <TextInput
            style={styles.input}
            placeholder='Username'
            value={username}
            onChangeText={setUsername}
        />
        <TextInput
            style={styles.input}
            placeholder='Password'
            secureTextEntry
            value={password}
            onChangeText={setPassword}
        />
        <View style={styles.btn}>
            <Text style={styles.text} onPress={handleLogin} >Login</Text>
        </View>
        <View>
            <GoogleSignInButton />
        </View>

        <View>
            <LineWithText />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBlockStart: 10}}>
            <Text style={styles.user}>New user? </Text>
            <TouchableOpacity onPress={handleLogin}>
                <Text style={styles.link}>Create account here</Text>
            </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    padding: 15,
  },
  btn: {
    height: 50,
    backgroundColor: '#6d1fad',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    color: 'white',
    fontSize: 16,
  },
  link: {
    color: '#3b82f6', 
    textDecorationLine: 'underline',
  },
  user: {
    color: '#333',
  },
});

export default Login;