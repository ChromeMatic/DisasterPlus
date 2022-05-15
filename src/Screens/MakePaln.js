import React, {useState} from "react";
import {StyleSheet,Text,View,TextInput,TouchableOpacity, SafeAreaView,ScrollView} from "react-native";
import {useNavigation} from "@react-navigation/native";

const MakePlan = () =>{

    let Plan = {
        name:'',
        PlanName:'',
        Shelter:'',
        number:'',
        Kin:'',
        createdAt:''
    };

    const [fullName, setFullName] = useState('');
    const [name,setName] = useState('');
    const [shelterName, SetShelterName] = useState('');
    const [number, SetNumber] = useState('');
    const [nextOfKin, setNextOfKin] = useState('');

    const nav = useNavigation();

    const Save = () => {}

    const SaveBtn = () =>{
        return(
            <View style={{
                marginTop:25,
                justifyContent:'center',
                alignItems:'center'
            }}>
                <TouchableOpacity onPress={Save} style={{
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
      <ScrollView>
          <SafeAreaView style={styles.container}>

              <View style={{
                  height:150,
                  width:'100%',
                  padding:4,
                  borderRadius: 10,
                  backgroundColor:'#ECF1EE',
                  marginTop:40,
                  justifyContent:'center',
                  alignItems:'center'
              }}>
                  <Text style={{
                      fontSize:40,
                      color:'#2c3e50'
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
                      justifyContent:'center',
                      alignItems:'center',
                      marginTop:8
                  }}>
                      <TextInput
                          placeholder="FULL NAME"
                          value={fullName}
                          onChangeText={text => setFullName(text)}
                          style={styles.input}
                      />
                  </View>

                  <View style={{
                      borderRadius: 10,
                      height:75,
                      width:'100%',
                      justifyContent:'center',
                      alignItems:'center',
                      marginTop:8
                  }}>
                      <TextInput
                          placeholder="NAME OF PLAN"
                          value={name}
                          onChangeText={text => setName(text)}
                          style={styles.input}
                      />
                  </View>

                  <View style={{
                      borderRadius: 10,
                      height:75,
                      width:'100%',
                      justifyContent:'center',
                      alignItems:'center',
                      marginTop:8
                  }}>
                      <TextInput
                          placeholder="NAME OF SHELTER"
                          value={shelterName}
                          onChangeText={text => SetShelterName(text)}
                          style={styles.input}
                      />
                  </View>

                  <View style={{
                      borderRadius: 10,
                      height:75,
                      width:'100%',
                      justifyContent:'center',
                      alignItems:'center',
                      marginTop:8
                  }}>
                      <TextInput
                          placeholder="EMERGENCY CONTACT NUMBER"
                          value={number}
                          onChangeText={text => SetNumber(text)}
                          style={styles.input}
                      />
                  </View>

                  <View style={{
                      borderRadius: 10,
                      height:75,
                      width:'100%',
                      justifyContent:'center',
                      alignItems:'center',
                      marginTop:8
                  }}>
                      <TextInput
                          placeholder="NEXT OF KIN NAME"
                          value={nextOfKin}
                          onChangeText={text => setNextOfKin(text)}
                          style={styles.input}
                      />
                  </View>

                  <SaveBtn/>

              </View>
          </SafeAreaView>
      </ScrollView>
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
        borderRadius:12,
        paddingVertical:12,
        paddingHorizontal:8,
        width:'100%',
        borderWidth:1,
        borderColor:'#16a085',
        backgroundColor:'#ECF1EE',
    },
})

export  default  MakePlan;