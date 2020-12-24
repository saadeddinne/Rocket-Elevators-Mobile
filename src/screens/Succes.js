import React, { useState, useEffect } from 'react';
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
// import Button from '../components/Button'
import { Button } from 'react-native-elements'
import { View, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { theme } from '../core/theme'
import { Text, Card, ListItem } from 'react-native-elements'


{/* the page show the result of changing the status and offer the possibilty by two button to return homepage or logout */}

const Success = ({ navigation, route }) => {
  {/* get the previous result*/}
const id = route.params.id;
var status = route.params.status;    
 return (
 <Background>

<View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'stretch',
      }}>
        <View style={{height: 100}} ><Logo/></View>
        <View style={{height: 50, flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',}} >
           <Text style={{color: '#1dd1a1',  fontWeight: "bold", textAlign:'center'}}> 
          Elevator :[ {id} ] Status has been changed to ACTIVE with succes! Thank you.
          </Text>
         


        </View>
       <View style={{ flexDirection:"row",  justifyContent: 'center',
        alignItems:"center"}}>
    <View style={styles.buttonStyle}>
       <Button
            title="HOME"
            type="solid"
            raised="true"
            titleStyle={{
            fontSize: 20,
            marginHorizontal: 20
            }}
            onPress={() => navigation.navigate('Home')}
          />
    </View>
    <View style={styles.buttonStyle}>
  <Button
        title="LOGOUT"
        type="solid"
        raised="true"
        titleStyle={{
        fontSize: 20,
        marginHorizontal: 20,
        }}
        onPress={() =>
        navigation.reset({
          index: 0,                       
          routes: [{ name: 'StartScreen' }], })} 
      />
    </View>
  </View>
      </View>
       </Background>
    );

};
const styles = {
    container: {
        flex: 1,
    },
    button: {
        alignSelf: "stretch",
        backgroundColor: "rgba(52, 152, 219,0.30)",
        paddingTop: 15,
        paddingBottom: 15,
    },
    headerText: {
        fontSize: 14,
        color: '#E1332D',
        fontWeight: 'bold',
        marginBottom: 15,
        alignItems: 'center'
    },
    textbutton: {
        marginVertical: 15,
        fontSize: 15,
        color: "#ecf0f1"
    },

    viewStyle: {
        flex: 1,
        marginTop: 5,
        alignItems: 'center',
      
    },
      buttonStyle:{
      marginRight: 3, 
      marginBottom: 15
    },
     active: {
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: "#f1c40f",
        marginTop: 3,
        borderRadius: 8
        
    }

}




export default Success
