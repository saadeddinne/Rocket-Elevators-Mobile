import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

const StartScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header style={{color: "skyblue"}}>Rocket Elevators</Header>
    <Paragraph >
      Welcome to the Mobile Services
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    
  </Background>
)

export default StartScreen
