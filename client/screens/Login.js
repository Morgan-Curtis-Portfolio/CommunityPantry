import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import users from '../userData';
import styles from '../styles/Styles';


export default function LoginOrRegister({ navigation }) {
    useEffect(() => {
      const logUsers = () => {
        users.forEach(user => {
          console.log(user.email)
        })
      }
      logUsers()
    }, [])
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  
    const handleLogin = () =>{
      users.forEach(user => {
        if (email == user.email && password == user.password){
          navigation.navigate('HomeFeed')
        }
        else(
          console.log('incorrect email')
        )
      })
    }
  
    return (
      <View style={styles.container}>
        <TextEntryForm
          placeholder="Enter Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextEntryForm
          placeholder="Enter Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <ButtonComponent
          title="Login"
          onPress={handleLogin}
        />
        <Text>OR</Text>
        <ButtonComponent
          title="Register"
          onPress={() => navigation.navigate('HomeFeed')}
        />
        <StatusBar style="auto" />
      </View>
    );
  }
  
  function TextEntryForm (props) {
    const {placeholder, text, onChangeText, secureTextEntry} = props
    return (
      <View>
        <TextInput
          style = {styles.input}
          placeholder={placeholder}
          value={text}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry}
        />
      </View>
    )
  }
  
  function ButtonComponent(props) {
    const { title, onPress, color } = props;
    return (
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
          <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
  