import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LineWithText from '@/components/UI/LineWithText';
import { Ionicons } from '@expo/vector-icons';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const navigation = useNavigation();

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.innerContainer}>
        <Image
          source={require('../../assets/images/10780021_19197947.jpg')}
          style={styles.image}
        />


<View style={styles.inputContainer}>
<Ionicons name="person-outline" size={20} color="gray" />
<TextInput
          style={styles.input}
          placeholder="Full Name"
          value={name}
          onChangeText={setName}
          autoCapitalize="words"
        />
    </View>  

    <View style={styles.inputContainer}>
      <Ionicons name="mail-outline" size={20} color="gray" />
    <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
    </View> 

       

<View style={styles.inputContainer}>
      <Ionicons name="lock-closed-outline" size={20} color="gray" />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
    </View>

    

    <View style={styles.inputContainer}>
      <Ionicons name="key-outline" size={20} color="gray" />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
    </View>  
        

        <TouchableOpacity style={styles.btn} onPress={() => {}}>
          <Text style={styles.btnText}>Create Account</Text>
        </TouchableOpacity>

        <LineWithText /> 

        <View style={styles.loginLinkContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('login')}>
            <Text style={styles.loginLink}>Login here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    padding: 25,
  },
  image: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 1,
  },
//   input: {
//     height: 50,
//     borderColor: '#ccc',
//     borderWidth: 1,
//     borderRadius: 5,
//     marginBottom: 10,
//     padding: 15,
//   },
inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 6,
  },
  input: {
    height: 40,
    flex: 1,
    marginLeft: 10,
    paddingVertical: 8,
  },
  btn: {
    height: 50,
    backgroundColor: '#6d1fad',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    elevation: 2,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  socialContainer: {
    marginVertical: 20,
  },
  loginLinkContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 15,
  },
  loginText: {
    color: '#333',
    fontSize: 14,
  },
  loginLink: {
    color: '#3b82f6',
    fontSize: 14,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});

// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       justifyContent: 'center',
//       alignContent: 'center',
//       padding: 20,
//       backgroundColor: '#fff',
//     },
//     header: {
//       fontSize: 24,
//       fontWeight: 'bold',
//       marginBottom: 20,
//       textAlign: 'center',
//     },
//     input: {
//       height: 50,
//       borderColor: '#ccc',
//       borderWidth: 1,
//       borderRadius: 5,
//       marginBottom: 10,
//       padding: 15,
//     },
//     btn: {
//       height: 50,
//       backgroundColor: '#6d1fad',
//       padding: 10,
//       borderRadius: 5,
//       justifyContent: 'center',
//       alignItems: 'center',
//       marginBottom: 10,
//     },
//     text: {
//       color: 'white',
//       fontSize: 16,
//     },
//     link: {
//       color: '#3b82f6', 
//       textDecorationLine: 'underline',
//     },
//     user: {
//       color: '#333',
//     },
//   });

export default Register;