import React, {useEffect, useState} from "react";
import {Text, View, TouchableOpacity, SafeAreaView, ScrollView} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import getGeoLocation from  '../Reuseables/GetGeoLocation'
import {useNavigation} from "@react-navigation/native";
import SOS_styleSheet from '../StyleSheets/SOS_styleSheet';

const SOS = () =>{

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const nav = useNavigation();

    useEffect(() => {
        ( () => getGeoLocation(setErrorMsg,setLocation,errorMsg) )();
    }, []);

    const getLatitude = () => {
        if(location === null){return 18.1155174
        }else{return location['latitude'];}
    }
    const getLongitude = () => {
        if (location === null){return -77.2760026
        }else{return location['longitude'];}
    }

    const region= {
        latitude: getLatitude() ,
        longitude: getLongitude() ,
        latitudeDelta: 0.00788,
        longitudeDelta: 0.0078,
    }

    const handleRequest = () => {nav.navigate("HelpFrom");}

    const Map = () =>{
        return(
            <MapView
                style={SOS_styleSheet.map}
                region={region}
            >
                <Marker
                    coordinate={{latitude:getLatitude(), longitude:getLongitude()}}
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
                    <TouchableOpacity style={SOS_styleSheet.btn} onPress={handleRequest}>
                        <Text style={SOS_styleSheet.btnText}>{'get Help'.toUpperCase()}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return(
      <SafeAreaView style={SOS_styleSheet.container}>
        <ScrollView>
         <Box3/>
       </ScrollView>
      </SafeAreaView>
    );
}

export default  SOS