import React, {useEffect, useState} from "react";
import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, Dimensions} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import {useNavigation} from "@react-navigation/native";

const SOS = () =>{

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const nav = useNavigation();

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                alert(errorMsg)
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation( location["coords"]);
        })();
    }, []);

    const getLatitude = () => {
        if(location === null){
            return 18.1155174
        }else{return location['latitude'];}
    }
    const getLongitude = () => {
        if (location === null){
            return -77.2760026
        }else{return location['longitude'];}
    }

    const region= {
        latitude: getLatitude() ,
        longitude: getLongitude() ,
        latitudeDelta: 0.00788,
        longitudeDelta: 0.0078,
    }

    const navigation = useNavigation();

    const handleRequest = () => {navigation.navigate("HelpFrom");}

    const Map = () =>{
        return(
            <MapView
                style={styles.map}
                region={region}
            >
                <Marker
                    coordinate={{
                        latitude:getLatitude(),
                        longitude:getLongitude()
                    }}
                    title="Your Location"
                    description="Emergency services will used this location to find you."
                    pinColor="gold"
                />
            </MapView>
        )
    }


    const Box3=()=>{
        return(
            <View style={{padding:1}}>
                <Map/>
                <View style={{marginTop:10,paddingHorizontal:16, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity style={styles.btn} onPress={handleRequest}>
                        <Text style={styles.btnText}>{'get Help'.toUpperCase()}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return(
      <SafeAreaView style={styles.container}>
        <ScrollView>
         <Box3/>
       </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#bdc3c7'
    },
    map:{
        marginTop:20,
        width: Dimensions.get('window').width,
        height: 645
    },
    btn:{
        backgroundColor:'#FFFF',
        marginTop:2,
        borderColor:"#2ecc71",
        borderWidth:2,
        width:'100%',
        paddingVertical:6,
        borderRadius:6
    },
    btnText:{
        color:'#2ecc71',
        fontWeight:'bold',
        fontSize:16,
        textAlign:'center'
    },
    input:{
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        paddingVertical:8,
        borderRadius: 4,
        marginTop: 6,
        borderWidth:1,
        borderColor:'#16a085'
    }
})

export default  SOS