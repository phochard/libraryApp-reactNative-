
import React, {useState} from 'react';
import StarRating from 'react-native-star-rating';
import {FlatList, Image, StyleSheet,Text, ScrollView, View} from 'react-native';
import { ListItem } from 'react-native-elements';

const BookScreen = ({navigation, route}) => {
    const [starCount, setStarCount] = useState(0);

    const book = route.params;
    console.log(book.author);
    //const authorAvailable = book.author ? book.author.forEach((item) => {return(item)}): "Unknown author.";
    const authorAvailable = book.author ? book.author[0]: "Unknown author.";
    const imageAvailable = book.image ? book.image : "No image available.";
    const descriptionAvailable = book.description ? book.description : "No description available.";

    function onStarRatingPress(rating) {
        setStarCount(rating);
      }

    return(
                <ScrollView contentContainerStyle={styles.container}>
                    <Text style={styles.title} color='#2c002f' >{book.title}</Text>
                    <Text style={styles.author} color='#2c002f' >{authorAvailable}</Text>
                    <StarRating
                        disabled={false}
                        emptyStar={'ios-star-outline'}
                        fullStar={'ios-star'}
                        halfStar={'ios-star-half'}
                        iconSet={'Ionicons'}
                        maxStars={5}
                        rating={starCount}
                        selectedStar={(rating) => onStarRatingPress(rating)}
                    />
                    <Image style={styles.image} source={{uri: imageAvailable}}/>
                    <Text style={styles.description} color='#2c002f' >{descriptionAvailable}</Text>
                </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center',
    },
      title:{
         fontSize: 30,
         margin: 5,
         textAlign: 'center',        
         marginTop:80
     },
     author:{
        fontSize: 20,
        fontStyle: 'italic',
        margin: 5
    },
      image:{
          height: 350,
          width:250,
          margin: 5,
      },
     description:{
        marginTop:10,
        height: 200,
        width:300,
        fontSize:16,
        textAlign:'center'
    }
})

export default BookScreen;