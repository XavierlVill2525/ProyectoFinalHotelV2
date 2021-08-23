import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react'

function login(props) {

    const [Email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [data, setData] = useState([])

    const loadData = () => {
        fetch('http://192.168.1.52:80/api/persona/', {
            method: "GET"
        })
            .then(resp => resp.json())
            .then(data => {
                setData(data)
                console.log(Email)
                console.log(password)
                for (let index = 0; index < data.length; index++) {
                    console.log(data[index].Email)
                    console.log(data[index].password)
                    if (Email == data[index].Email && password == data[index].password) {
                        console.log('çorrecto')
                        props.navigation.navigate("Home")
                    } else {
                        console.log('incorrecto')
                    }
                }
            })
            .catch(error => Alert.alert("error", error))
    }



    return (
        <View style={styles.cardStyle}>
            <Text style={styles.header}>          HOTEL LAND</Text>
            <TextInput value={Email} onChangeText={text => setEmail(text)} style={styles.texsimput} placeholder="Email" underlineColorAndroid={'transparent'}></TextInput>
            <TextInput value={password} onChangeText={text => setPassword(text)} style={styles.texsimput} placeholder="Contraseña" secureTextEntry={true} underlineColorAndroid={'transparent'}></TextInput>
            <TouchableOpacity style={styles.buttons} onPress={() => loadData()}>
                <Text style={styles.btntext}>Iniciar Sesion</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={() => props.navigation.navigate("Register")}>
                <Text style={styles.btntext}>Registrarce</Text>
            </TouchableOpacity>
        </View>
    )
}

export default login

const styles = StyleSheet.create({
    fondo: {
        alignSelf: 'stretch',
    },
    header: {
        fontSize: 25,
        color: 'black',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
        borderBottomWidth: 3,
    },
    cardStyle: {
        padding: 30,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    texsimput: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: 'black',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    buttons: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#59cbbd',
        marginTop: 30,
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',
    }
});