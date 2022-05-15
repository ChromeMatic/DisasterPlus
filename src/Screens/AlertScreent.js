import React from "react";
import {StyleSheet,Text,View,SafeAreaView,Image} from "react-native";

const AlertScreen = () =>{

    const Header = () =>{
        return(
            <View style={styles.header}>
                <Text style={styles.headerText}>ALERT</Text>
            </View>
        )
    }

    return(
        <SafeAreaView>
            <Header/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        width:'100%',
        height:'16%',
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        fontSize:25,
        fontWeight:'700',
        color:'#fff'
    },
    boxContainer:{
        width:'100%',
        height:'85%',
        backgroundColor:'#ecf0f1',
        padding:5,
        flexDirection:'row',
        flexWrap:'wrap',
    },
    box:{
        width:'50%',
        height:'50%',
        alignItems:'center',
        padding:5,
    },
    boxText:{
        marginTop:12,
        fontSize:18,
        fontWeight:'700',
        color:'#27ae60'
    },
    image:{
        borderRadius:8
    }
})

export  default AlertScreen;