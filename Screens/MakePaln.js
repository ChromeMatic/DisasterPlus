import React, {useState} from "react";
import {StyleSheet,Text,View,TextInput,TouchableOpacity, SafeAreaView} from "react-native";
import {useNavigation} from "@react-navigation/native";

const MakePlan = () =>{

    const nav = useNavigation();
    const SavePlan = () => {
        // add code to save
    }

    const SaveBtn = () =>{
        return(
            <View style={{
                marginTop:25,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <TouchableOpacity onPress={SavePlan} style={{
                    backgroundColor:'#fff',
                    borderColor:"#2ecc71",
                    borderWidth:2,
                    paddingHorizontal: 16,
                    paddingVertical: 8,
                    width: 150,
                    justifyContent:'center',
                    alignItems:'center',
                    borderRadius: 16
                }}>
                    <Text style={{
                        color:'#2ecc71',
                        fontWeight:'bold',
                        fontSize:22
                    }}>
                        {'SAVE'.toUpperCase()}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }

    return (
      <SafeAreaView style={styles.container}>

          <View style={{
              height:150,
              width:'100%',
              padding:4,
              borderRadius: 10,
              backgroundColor:'#2c3e50',
              marginTop:40,
              justifyContent:'center',
              alignItems:'center'
          }}>
              <Text style={{
                  fontSize:40,
                  color:'#fff'
              }}>
                  {'MAKE A PLAN'.toUpperCase()}
              </Text>
          </View>

          <View style={{
              marginTop:4,
              width:"100%",
              flex:1,
              flexDirection:"column",
              padding:8
          }}>
              <View style={{
                  borderRadius: 10,
                  height:75,
                  width:'100%',
                  backgroundColor:'#f5f6fa',
                  justifyContent:'center',
                  alignItems:'center',
                  marginTop:8
              }}>
                  <TextInput
                      placeholder="FULL NAME"
                      style={styles.input}
                  />
              </View>

              <View style={{
                  borderRadius: 10,
                  height:75,
                  width:'100%',
                  backgroundColor:'#f5f6fa',
                  justifyContent:'center',
                  alignItems:'center',
                  marginTop:8
              }}>
                    <TextInput
                        placeholder="NAME OF PLAN"
                        style={styles.input}
                    />
              </View>

              <View style={{
                  borderRadius: 10,
                  height:75,
                  width:'100%',
                  backgroundColor:'#f5f6fa',
                  justifyContent:'center',
                  alignItems:'center',
                  marginTop:8
              }}>
                  <TextInput
                      placeholder="NAME OF SHELTER"
                      style={styles.input}
                  />
              </View>

              <View style={{
                  borderRadius: 10,
                  height:75,
                  width:'100%',
                  backgroundColor:'#f5f6fa',
                  justifyContent:'center',
                  alignItems:'center',
                  marginTop:8
              }}>
                  <TextInput
                      placeholder="EMERGENCY CONTACT NUMBER"
                      style={styles.input}
                  />
              </View>

              <View style={{
                  borderRadius: 10,
                  height:75,
                  width:'100%',
                  backgroundColor:'#f5f6fa',
                  justifyContent:'center',
                  alignItems:'center',
                  marginTop:8
              }}>
                  <TextInput
                      placeholder="NEXT OF KIN NAME"
                      style={styles.input}
                  />
              </View>

              <SaveBtn/>

          </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:"column",
        padding:8,
        backgroundColor:'#fff'
    },
    input:{
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical:10,
        width:'85%',
        borderRadius:6
    },
})

export  default  MakePlan;