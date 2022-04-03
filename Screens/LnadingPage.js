import React from "react";
import {useNavigation} from "@react-navigation/native";
import {
    StyleSheet,
    Text,View,
    SafeAreaView,
    Image,
    TouchableOpacity
} from "react-native";

const LandingPage = () =>{

    const nav = useNavigation();

    const ToLoginPage = () =>{nav.navigate('LoginScreen');}

    const Box1 = () => {
        return(
            <View style={styles.Box1}>
                <Text style={styles.box1Text}>
                    {'Welcome to D+'.toUpperCase()}
                </Text>
                <Text style={styles.box1TextSub}>
                    {'let us help you'.toUpperCase()}
                </Text>
            </View>
        )
    }

    const Box2 = () => {
        return(
            <View style={styles.Box2}>
                <Text style={styles.headerText}>
                    {' Disaster-Plus'.toUpperCase()}
                </Text>
                <Image style={styles.image} source={{
                    width:"60%",
                    height:"50%",
                    uri:"https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=452&q=80"
                }}
                />
                <TouchableOpacity onPress={ToLoginPage} style={styles.Btn}>
                    <Text style={styles.BtnText}>LOGIN OR SIGNUP</Text>
                </TouchableOpacity>
            </View>
        )
    }

    return(
        <SafeAreaView style={styles.container}>
            <Box1/>
            <Box2/>
        </SafeAreaView>
    )
}

const  styles = StyleSheet.create({

    image:{borderRadius:8,},

    headerText:{
        marginBottom:16,
        fontSize:16,
        fontWeight:'600',
        color:'#fff'
    },

    Btn:{
        marginTop:18,
        backgroundColor:"#2ecc71",
        padding:8,
        borderRadius:4,
    },

    BtnText:{
        fontWeight:"700",
        fontSize:16,
        fontFamily:'Roboto',
        color:'#fff',
        padding:8
    },

    container:{
        flex:1,
        backgroundColor:'#ecf0f1'
    },
    Box1:{
        flex:1,
        backgroundColor:'#ecf0f1',
        justifyContent:"center",
        alignItems:'center',
    },
    box1Text:{
        fontWeight:"600",
        fontSize:46,
        fontFamily:'Roboto',
        color:'#34495e',
        padding:8
    },
    box1TextSub:{
        fontWeight:"700",
        color:'#34495e',
        padding:8
    },
    Box2:{
        flex:2,
        flexDirection: "column",
        backgroundColor:'#34495e',
        justifyContent:"center",
        alignItems:'center',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
    },
    Box3:{
        flex:3,
        backgroundColor:'#f39c12',
        justifyContent:"center",
        alignItems:'center'
    }
})

export  default  LandingPage;
