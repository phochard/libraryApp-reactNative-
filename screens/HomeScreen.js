import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Entypo';


function HomeScreen({navigation, route}) {
    function navigateToDetails() {
        navigation.reset({
            index:0,
            routes: [ 
                {name:"library"}
            ]
        });
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title} color='#2c002f' >Bienvenue !</Text>
            <Button buttonStyle={styles.button} 
            title="Looking for a book ? Click here !" 
            onPress={navigateToDetails}
            icon={<Icon name="open-book"
                        size={15}
                        color="white"
                        style={styles.icon}
          /> }/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f2f2f2',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
        fontSize: 40,
        margin: 50
      },
    button: {
        borderRadius: 5,
        height: 50,
        width: 'auto',
        padding:20,
        backgroundColor: '#2c002f',
  },icon: {
    marginRight:10,
  }});

  
export default HomeScreen;