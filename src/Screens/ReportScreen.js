import React, {useEffect, useState} from "react";
import {SafeAreaView, ScrollView, StyleSheet, Text} from "react-native";
import * as Location from 'expo-location';

const Report_Screen = () =>{

    const [_location, setLocation] = useState(null);
    const [_errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                alert(_errorMsg)
                return;
            }
            let location = await Location.getCurrentPositionAsync({});
            setLocation( location["coords"]);
        })();
    }, []);

    return(
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <Text style={{textAlign:'center',fontSize:23,fontWeight:'bold'}}>Report Screen</Text>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        alignItems:"flex-start",
        justifyContent:"flex-start",
    }
});

export default Report_Screen;