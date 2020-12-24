import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import TextInput from '../components/TextInput'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { emailValidator } from '../helpers/emailValidator'
import axios from 'axios';
{/* The login page, after validate the required email, use axios to call the Rest API to verify the user when the result is ok he will be redirected to the home page*/}

const LoginScreen = ({ navigation }) => {
  {/* useState is a Hook (function) that allows you to have state variables in functional components.  */}
const [email, setEmail] = useState({ value: '', error: '' })
var emailemployeee = email.value;
const verifyEmail = () => {
        let employee_email = email.value;
        if(employee_email == "") return alert("Email is Required !!");
        {/* Call the API and redirect the user  */}
        return axios.get(`https://restapisaadeddine.azurewebsites.net/api/Employees/${employee_email}`)
            .then(function (response) {
                const statusCode = response.status;
                if (statusCode == 200) {
                   navigation.reset({
                        index: 0,
                        routes: [{ name: 'Home' }],
                        })
                }
            })
            .catch(function (error) {                
                console.log(`This ${employee_email} is incorrect.`);
                alert(`${employee_email} is unavailable, please insert a valide email. Thank you!`);
            })
            .then(function () {
             
            });
  }
  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
    
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text) => setEmail({ value: text, error: '' })}
        error={!!email.error}
        errorText={email.error}
        autoCapitalize="none"
        autoCompleteType="email"
        textContentType="emailAddress"
        keyboardType="email-address"
        required
      />
   
      
      <Button mode="contained" onPress={verifyEmail}>
        Login
      </Button>
      <View style={styles.row}>    
       
         <Text style={{color: '#ff9f43',  textAlign:'center'}}>This app for employees only: please use your registred informations</Text>
       
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
 
  row: {
    flexDirection: 'row',
    marginTop: 4,
  }
})

export default LoginScreen
