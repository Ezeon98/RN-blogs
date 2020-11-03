import React, {useContext, useState} from 'react'
import { View,Text, TextInput, StyleSheet, Button} from 'react-native';
import { Context } from '../context/BlogContext'



const BlogPostForm = ({ onSubmit, initialValues }) =>{
    const[title, setTitle] = useState(initialValues.title)
    const[content, setContent] = useState(initialValues.content)

    return(
    <View>
        <Text style={styles.label}>Enter Title:</Text>
        <TextInput value ={title} onChangeText={(text) => setTitle(text) } style={styles.input}/>
        <Text style={styles.label}>Enter Content: </Text>
        <TextInput value ={content} onChangeText={(text) => setContent(text)} style={styles.input}/>
        <Button 
        title='Save Blog'
        onPress={() => onSubmit(title, content)}
        />
    </View>)
}

BlogPostForm.defaultProps = { 
    initialValues:{ title: '', content: ''}
 }

const styles = StyleSheet.create({
    input:{
        fontSize: 18,
        borderWidth: 3,
        borderColor: 'black',
        paddingHorizontal: 10,
        margin:5
    },
    label:{
        fontSize:20,
        marginBottom:10
    }
});

export default BlogPostForm;