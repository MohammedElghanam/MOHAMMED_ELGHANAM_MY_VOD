import GoogleSignInButton from '@/components/UI/GoogleSignInButton';
import LineWithText from '@/components/UI/LineWithText';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Formik } from 'formik';
import * as Yup from 'yup';
import useLogin from '@/hooks/auth/useLogin';
 

const Login = () => {

    const {
        email,
        setEmail,
        password,
        setPassword,
        handleSubmit,
        errors,
        handleNavigation,
    } = useLogin();

  

  return (
    
    <View style={styles.container}>
        <Image
            source={require('../../assets/images/10780021_19197947.jpg')}
            style={{ width: 200, height: 200, alignSelf: 'center' , marginBottom: 1}}
        />
        
        <View style={[ styles.inputContainer, errors.email ? { borderColor: 'red' } : null ]}>
            <Ionicons 
                name="mail-outline" 
                size={20} 
                color={ errors.email ? 'red' : "gray" } 
            />
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor={errors.email ? 'red' : 'gray'}
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />
        </View> 
        {errors.email && <Text style={styles.error}>{errors.email}</Text>}
        

        <View style={[ styles.inputContainer, errors.password ? { borderColor: 'red' } : null ]}>
            <Ionicons 
                name="lock-closed-outline" 
                size={20} 
                color={ errors.password ? 'red' : "gray" } 
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor={errors.password ? 'red' : 'gray'}
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
        </View>
        {errors.password && <Text style={styles.error}>{errors.password}</Text>}

        <View style={styles.btn}>
            <Text style={styles.text} onPress={handleSubmit} >Login</Text>
        </View>

        <View>
            <GoogleSignInButton />
        </View>

        <View>
            <LineWithText />
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', marginBlockStart: 10}}>
            <Text style={styles.user}>New user? </Text>
            <TouchableOpacity onPress={handleNavigation}>
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
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
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
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginBlockStart: 10,
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
  error: {
    paddingHorizontal: 10,
    color: 'red',
    fontSize: 12,
  }
});

export default Login;