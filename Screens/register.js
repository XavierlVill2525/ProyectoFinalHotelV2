import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import React, { useState, useEffect } from 'react'

function register(props) {

    const [cedula, setCedula] = useState("")
    const [Nombre, setNombre] = useState("")
    const [Apellido, setApellido] = useState("")
    const [Email, setEmail] = useState("")
    const [Telefono, setTelefono] = useState("")
    const [Direccion, setDireccion] = useState("")
    const [password, setPassword] = useState("")

    const InserData = () => {
        fetch('http://192.168.1.52:80/api/persona/', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ Rol: '2', cedula: cedula, Nombre: Nombre, Apellido: Apellido, Email: Email, Telefono: Telefono, Direccion: Direccion, password: password })
        })
            .then(resp => resp.json())
            .then(data => {
                props.navigation.navigate("Login")
            })
            .catch(error => Alert.alert("error", error))
    }

    return (
        <View style={styles.cardStyle}>
            <Text style={styles.header}>Registrar</Text>
            <TextInput value={Nombre} onChangeText={text => setNombre(text)} style={styles.texsimput} placeholder="Nombre" underlineColorAndroid={'transparent'}></TextInput>
            <TextInput value={Apellido} onChangeText={text => setApellido(text)} style={styles.texsimput} placeholder="Apelldio" underlineColorAndroid={'transparent'}></TextInput>
            <TextInput value={cedula} onChangeText={text => setCedula(text)} style={styles.texsimput} placeholder="Cedula" underlineColorAndroid={'transparent'}></TextInput>
            <TextInput value={Email} onChangeText={text => setEmail(text)} style={styles.texsimput} placeholder="Email" underlineColorAndroid={'transparent'}></TextInput>
            <TextInput value={Telefono} onChangeText={text => setTelefono(text)} style={styles.texsimput} placeholder="Telefono" underlineColorAndroid={'transparent'}></TextInput>
            <TextInput value={Direccion} onChangeText={text => setDireccion(text)} style={styles.texsimput} placeholder="Direccion" underlineColorAndroid={'transparent'}></TextInput>
            <TextInput value={password} onChangeText={text => setPassword(text)} style={styles.texsimput} placeholder="Contraseña" secureTextEntry={true} underlineColorAndroid={'transparent'}></TextInput>
            <TouchableOpacity style={styles.buttons} onPress={() => InserData()}>
                <Text style={styles.btntext}>Registrarce</Text>
            </TouchableOpacity>
        </View>

    )
}

export default register

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
    texsimput: {
        alignSelf: 'stretch',
        height: 20,
        marginBottom: 30,
        color: 'black',
        borderBottomColor: '#f8f8f8',
        borderBottomWidth: 1,
    },
    buttons: {
        alignSelf: 'stretch',
        alignItems: 'center',
        padding: 15,
        backgroundColor: '#59cbbd',
        marginTop: 10,
    },
    btntext: {
        color: '#fff',
        fontWeight: 'bold',
    },
    espacio: {
        fontSize: 5,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#199187',
    },
    cardStyle: {
        padding: 30,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
});