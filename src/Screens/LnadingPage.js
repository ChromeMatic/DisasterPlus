import React from "react";
import {useNavigation} from "@react-navigation/native";
import {
    Text,View,
    SafeAreaView,
    Image,
    TouchableOpacity
} from "react-native";
import LandingStyle from "../StyleSheets/LandingStyle"


const LandingPage = () =>{

    const nav = useNavigation();

    const ToLoginPage = () =>{nav.navigate('LoginScreen');}

    const Box1 = () => {
        return(
            <View style={LandingStyle.Box1}>
                <Text style={LandingStyle.box1Text}>
                    {'Welcome to D+'.toUpperCase()}
                </Text>
                <Text style={LandingStyle.box1TextSub}>
                    {'let us help you'.toUpperCase()}
                </Text>
            </View>
        )
    }

    const Box2 = () => {
        return(
            <View style={LandingStyle.Box2}>
                <Text style={LandingStyle.headerText}>
                    {' Disaster-Plus'.toUpperCase()}
                </Text>
                <Image style={LandingStyle.image} source={{
                    width:"60%",
                    height:"50%",
                    uri:"https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80"
                }}
                />
                <TouchableOpacity onPress={ToLoginPage} style={LandingStyle.Btn}>
                    <Text style={LandingStyle.BtnText}>LOGIN OR SIGNUP</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <SafeAreaView style={LandingStyle.container}>
            <Box1/>
            <Box2/>
        </SafeAreaView>
    )
}

export  default  LandingPage;