import React from 'react';
import { StyleSheet, Text,View} from 'react-native';

function NoMoreDetailScreen() {

    return(
        <View style={styles.container}>
            <Text>Finis les détails, tu pousses le bouchon Maurice !</Text>
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
  

export default NoMoreDetailScreen;