import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import LineWithText from '@/components/UI/LineWithText';
import { Ionicons } from '@expo/vector-icons';
import useRegister from '@/hooks/auth/useRegister';

const Register = () => {

    

    const {name, setName, email, setEmail, password, setPassword, confirmPassword, handleSubmit, setConfirmPassword, handleNavigation, errors} = useRegister();


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

        <View style={[ styles.inputContainer, errors.name ? { borderColor: 'red' } : null ]}>
            <Ionicons name="person-outline" size={20} color={ errors.name ? 'red' : "gray" } />
            <TextInput
                style={styles.input}
                placeholder="Full Name"
                placeholderTextColor={errors.name ? 'red' : 'gray'}
                value={name}
                onChangeText={setName}
                autoCapitalize="words"
            />
        </View>  
        {errors.name && <Text style={styles.error}>{errors.name}</Text>}


        <View style={[ styles.inputContainer, errors.email ? { borderColor: 'red' } : null ]}>
            <Ionicons name="mail-outline" size={20} color={ errors.email ? 'red' : "gray" }  />
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
            <Ionicons name="lock-closed-outline" size={20} color={ errors.password ? 'red' : "gray" } />
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
    

        <View style={[ styles.inputContainer, errors.confirmPassword ? { borderColor: 'red' } : null ]}>
        <Ionicons name="key-outline" size={20} color={ errors.confirmPassword ? 'red' : "gray" } />
            <TextInput
            style={styles.input}
            placeholder="Confirm Password"
            placeholderTextColor={errors.confirmPassword ? 'red' : 'gray'}
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            />
        </View>  
        {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword}</Text>}

        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Create Account</Text>
        </TouchableOpacity>

        <LineWithText /> 

        <View style={styles.loginLinkContainer}>
          <Text style={styles.loginText}>Already have an account? </Text>
          <TouchableOpacity onPress={handleNavigation}>
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
    error: {
        paddingHorizontal: 10,
        color: 'red',
        fontSize: 12,
    }
});

export default Register;