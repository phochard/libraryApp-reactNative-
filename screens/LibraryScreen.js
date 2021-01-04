import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Button, Icon, Input, ListItem } from 'react-native-elements'
import axios from 'axios';

function LibraryScreen({ navigation }) {

    const [input, setInput] = useState('');
    const [books, setBooks] = useState([]);
    const [url, setUrl] = useState(`https://www.googleapis.com/books/v1/volumes?q=prince`);

    function changeText(text) {
        setInput(text);
    }

    function submitSearch() {
        let newURL = `https://www.googleapis.com/books/v1/volumes?q=${input}`;
        setUrl(newURL);
        axios.get(`${url}`)
            .then(res => {
                setBooks(res.data.items);
            });
        console.log(url);
    }

    useEffect(() => {
        axios.get(`${url}`)
            .then(res => {
                setBooks(res.data.items);
            });
    }, [])

    return ( <View>
        <View style = { styles.form }>
        <Input inputContainerStyle = { styles.input }
        placeholder = 'Search'
        leftIcon = { < Icon
            name = 'add'
            size = { 45 }
            color = "#2c002f" />
        }
        onChangeText = { changeText }
        rightIcon = { < Button
            onPress = { submitSearch }
            titleStyle = { styles.button }
            type = "clear"
            title = "Submit" />
        }/> </View>
        <View >
        <FlatList data = { books }
        renderItem = {
            ({ item }) =>
            <ListItem
            key = { item.id }
            title = { item.volumeInfo.title }
            titleStyle = {
                { color: '#2c002f', fontWeight: 'bold' } }
            subtitle = { item.volumeInfo.authors }
            leftAvatar = {
                {source: item.volumeInfo.imageLinks.thumbnail && { uri: item.volumeInfo.imageLinks.thumbnail },}
            }
            onPress = {
                () => navigation.navigate("book", {
                    title: item.volumeInfo.title,
                    author: item.volumeInfo.authors,
                    image: item.volumeInfo.imageLinks.thumbnail,
                    description: item.volumeInfo.description
                })
            }
            bottomDivider = {
                { color: '#2c002f' } }
            chevron = {
                { color: '#2c002f' } }
            />}
            keyExtractor = { item => item.id.toString() }
            /> </View> </View>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#f2f2f2',
            alignItems: 'center',
            justifyContent: 'center',
        },
        input: {
            backgroundColor: '#f2f2f2',
        },
        button: {
            color: '#2c002f'
        }
    });

    export default LibraryScreen;