import React, {useEffect, useState} from "react";
import {StyleSheet,Text,View,TouchableOpacity,SafeAreaView,ScrollView,TextInput} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import * as Location from 'expo-location';
import {useNavigation} from "@react-navigation/native";

const SOS = () =>{

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);

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
        latitudeDelta: 0.0822,
        longitudeDelta: 0.0721
    }

    const [name,setName] = useState('');
    const [number,setNumber] = useState('');
    const [emergency,setEmergency] = useState('');

    const FromView = () =>{
        return(
            <View style={{marginTop:8, padding:8,}}>
                <Text style={{
                    textAlign:'center', color:'#34495e',
                    marginTop:8, fontWeight:'bold',
                    fontSize: 18, marginBottom:8
                }}>
                    {'emergency from'.toUpperCase()}
                </Text>
                <TextInput
                    placeholder="Please enter name"
                    value={name}
                    onChangeText={text => setName(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Please enter number"
                    value={number}
                    onChangeText={text => setNumber(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Please enter emergency"
                    value={emergency}
                    onChangeText={text => setEmergency(text)}
                    style={styles.input}
                />
            </View>
        );
    }
    const navigation = useNavigation();
    const handleRequest = () => {
         alert("Message sent, help is on the way.");
         navigation.navigate("HomeScreen");
    }

    const Box3=()=>{
        return(
            <View style={{padding:1}}>
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
                <FromView/>
                <View style={{marginTop: 20, justifyContent:'center', alignItems:'center'}}>
                    <TouchableOpacity style={styles.btn} >
                        <Text style={styles.btnText} onPress={handleRequest}>{'Request help'.toUpperCase()}</Text>
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
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ecf0f1'
    },
    map:{
        marginTop:20,
        width:'100%',
        height:400
    },
    btn:{
        backgroundColor:'#fff',
        marginTop:8,
        borderColor:"#34495e",
        borderWidth:2,
        paddingHorizontal:75,
        paddingVertical:4,
        borderRadius:6
    },
    btnText:{
        color:'#34495e',
        fontWeight:'bold',
        fontSize:16
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