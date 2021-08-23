import { StyleSheet, Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { Card, FAB } from 'react-native-paper';
import React, { useState, useEffect } from 'react'


function home(props) {

    const [data, setData] = useState([])
    const [loading, setloading] = useState(true)

    const loadData = () => {
        fetch('http://192.168.1.52:80/api/habitacion/', {
            method: "GET"
        })
            .then(resp => resp.json())
            .then(data => {
                setData(data)
                setloading(false)
            })
            .catch(error => Alert.alert("error", error))
    }

    useEffect(() => {
        loadData();
    }, [])

    const renderData = (item) => {
        return (
            <View style={styles.cardStyle}>
                <Text style={styles.texsimput}>
                    Numero de Habitacion: {item.numHabitacion}
                </Text>
                <Text style={styles.texsimput}>
                    Tipo de Habitacion: {item.Tipo}
                </Text>
                <Text style={styles.texsimput}>
                    Piso: {item.numPiso}
                </Text>
                <Text style={styles.texsimput}>
                    Detalle: {item.Detalle}
                </Text>
                <Text style={styles.texsimput}>
                    Precio: {item.Precio}
                </Text>
                <Text style={styles.texsimput}>
                    Estado: {item.Estado}
                </Text>
                <TouchableOpacity style={styles.buttons} onPress={() => props.navigation.navigate("Services")}>
                    <Text style={styles.btntext}>Reservar Habitacion</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <View style={styles.header}><FlatList
            data={data}
            renderItem={({ item }) => {
                return renderData(item)
            }}
            onRefresh={() => loadData()}
            refreshing={loading}
            keyExtractor={item => `${item.id}`}>
        </FlatList>
        </View>
    )
}

export default home

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
    },
    texsimput: {
        alignSelf: 'stretch',
        height: 20,
        marginBottom: 5,
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
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: '#199187'
    },
});