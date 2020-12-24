import Background from '../components/Background'
import Header from '../components/Header'
// import Button from '../components/Button'
import {  Card, Button } from 'react-native-elements'
import Paragraph from '../components/Paragraph'
import Icon from 'react-native-vector-icons/FontAwesome'
import { View, Text, ImageBackground, FlatList, TouchableOpacity } from 'react-native'
import axios from 'axios'
import React, { useState, useEffect } from 'react';
import Logo from '../components/Logo'
import { theme } from '../core/theme'

{/* The home page list the non operational elevators  */}
{/* The modifier page change the  elevators status  */}

const Modifier = ({ navigation, route }) => {
 
  {/* get the email and the ID from the last call of API   */}
  const id = route.params.id;
  var status = route.params.status;
  const [newStatus] = useState(false); 
  const setStatus = (id, status) => {
      changeStatus(id, status);
        navigation.navigate('Success', {
            id: id,
            status: "Active",
            onGoBack: () => this.refresh(),
    })
    }; 
  const changeStatus = (id, status) => {
       
        if (status == "Inactive" || status == "Intervention") {
            return axios
                .put(
                    `https://restapisaadeddine.azurewebsites.net/api/SetElevators/${id}/Active`
                )
                .then(function (response) {
                    if (response.status == 200) {
                        console.log(response)                        
                    }
                })
                .catch(function (error) {
                   
                    console.log(error);
                });
        } 
    };


    return (
<View style={styles.container} >  
<Background>
<Logo />
<View style={styles.viewStyle}>
  <Text style={styles.headerText}>
    NON OPERATIONAL ELEVATORS ID: {id}
  </Text>
  <Text style={styles.headerText}>
   Status: {status} </Text><Text h3>Do you want to activate ?
  </Text>
  <TouchableOpacity style={styles.active} onPress={() => setStatus(id, status)}>
    <Text style={styles.textbutton}>  ACTIVATION </Text>
  </TouchableOpacity>                      
</View>

<View style={{ flexDirection:"row"}}>
    <View style={styles.buttonStyle}>
       <Button
            title="GO BACK"
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
  </Background>
</View>
    );

};



const styles = {
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
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
        backgroundColor: "skyblue",
        marginTop: 3,
        borderRadius: 8
        
    }

}

export default Modifier