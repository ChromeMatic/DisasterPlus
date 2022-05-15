import React, {useEffect, useState} from "react";
import {SafeAreaView, ScrollView, Text} from "react-native";
import ReportScreenStyle from '../StyleSheets/ReportScreenStyle'
import getGeoLocation from '../Reuseables/GetGeoLocation'

const Report_Screen = () =>{

    const [_location, setLocation] = useState(null);
    const [_errorMsg, setErrorMsg] = useState(null);

    useEffect(() => {
        (() => getGeoLocation(setErrorMsg,setLocation,_errorMsg))();
    }, []);

    return(
        <ScrollView>
            <SafeAreaView style={ReportScreenStyle.container}>
                <Text style={ReportScreenStyle._Text}>Report Screen</Text>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Report_Screen;