import React, {useState} from "react";
import {StyleSheet,Text,View,TextInput,TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

const MakePlan = () =>{

    const nav = useNavigation();
    const SavePlan = () => {
        nav.navigate('HomeScreen');
    }

    return (
        <View style={styles.container} >
            <Text style={styles.boxText} > MAKE A PLAN! </Text>
            <View style={styles.InnerCon}>
                <TextInput
                    style={styles.input}
                    placeholder="Name of plan" />
                <TextInput
                    style={styles.input}
                    placeholder="Name of shelter"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Number of persons"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Emergency contact"
                />

                <TouchableOpacity style={styles.btnContainer} onPress={SavePlan}>
                    <Text style={styles.text}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    text:{
        color:'green',
        fontWeight:'700',
        fontSize:32,
    },
    InnerCon:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    btnContainer:{
      marginTop:16,
      alignItems: 'center',
      justifyContent: 'center',

    },
    header:{
        width:'100%',
        height:'10%',
        backgroundColor:'#34495e',
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
        padding:6,
        flexDirection:'column',
        flexWrap:'wrap',
    },
    box:{
        width:'100%',
        height:'25%',
        alignItems:'center',
        padding:5,
    },
    box2:{
        width:'100%',
        height:'50%',
        alignItems:'center',
        padding:5,
    },
    boxText:{
        marginTop:12,
        fontSize:50,
        fontWeight:'800',
        color:'#27ae60',
        paddingTop: 8,
        paddingHorizontal:2,
        paddingBottom: 8
    },
    input:{
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical:10,
        borderRadius: 4,
        marginTop: 8,
        width:300
    },

})

export  default  MakePlan;