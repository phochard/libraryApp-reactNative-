import React from 'react';
import {Button, StyleSheet, Text,View} from 'react-native';

function MuchMoreDetailScreen({navigation, route}) {
    function navigateToDetails() {
        navigation.navigate("nomoredetails");
    }
    return(
        <View style={styles.container}>
            <Text>Ici encore plus de détails de...</Text>
            <Button title="Plus de détails!" onPress={navigateToDetails} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  

export default MuchMoreDetailScreen;