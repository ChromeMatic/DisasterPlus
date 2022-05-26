import React, {useEffect, useState} from "react";
import {SafeAreaView, ScrollView, TouchableOpacity, Text,View,TextInput} from "react-native";
import ReportScreenStyle from '../StyleSheets/ReportScreenStyle'
import getGeoLocation from '../Reuseables/GetGeoLocation'
import {useNavigation} from "@react-navigation/native";

const Report_Screen = () =>{
    const nav = useNavigation()

    const [_location, setLocation] = useState(null);
    const [_errorMsg, setErrorMsg] = useState(null);
    const [name,setName] = useState('');
    const [PhoneNumber,setNumber] = useState('')
    const [Emergency,setEmergencyType] = useState('')
    const [Description,SetDescription] = useState('')
    const [address,SetAddress] = useState('')
    const [geoLocation,SetGeolocation] = useState(null)

    useEffect(() => {
        (() => getGeoLocation(setErrorMsg,setLocation,_errorMsg))();
    }, []);

    const set_Location = () => {
       if(Object.keys(name).length === 0 || Object.keys(PhoneNumber).length === 0 ||
          Object.keys(Emergency).length === 0 || Object.keys(Description).length === 0
          || Object.keys(address).length === 0){
           alert('Ensure that all fields are filled!'.toUpperCase());
       }else{
           alert("Report made!")
           nav.navigate('HomeScreen')
           SetGeolocation(_location)
       }
    }

    return(
        <ScrollView>
            <SafeAreaView style={ReportScreenStyle.container}>
                <Text style={ReportScreenStyle._Text}>Report Screen</Text>
                <View style={ReportScreenStyle.fromCon}>
                    <TextInput
                        style={ReportScreenStyle.inputStyle}
                        onChangeText={ text => setName(text)}
                        value={name}
                        placeholder="Full name"
                    />
                    <TextInput
                        style={ReportScreenStyle.inputStyle}
                        onChangeText={ text => SetAddress(text)}
                        value={address}
                        placeholder="Address"
                    />
                    <TextInput
                        style={ReportScreenStyle.inputStyle}
                        onChangeText={ text => setNumber(text)}
                        value={PhoneNumber}
                        placeholder="Please enter phone number"
                    />
                    <TextInput
                        style={ReportScreenStyle.inputStyle}
                        onChangeText={ text => setEmergencyType(text)}
                        value={Emergency}
                        placeholder="Emergency type service eg, police, ambulance"
                    />
                    <TextInput
                        style={ReportScreenStyle.inputStyle}
                        onChangeText={ text => SetDescription(text)}
                        value={Description}
                        placeholder="Description"
                    />


                    <TouchableOpacity
                        style={ReportScreenStyle._btn}
                        onPress={set_Location}
                    >
                        <Text style={ReportScreenStyle.text}>{'report'.toUpperCase()}</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Report_Screen;