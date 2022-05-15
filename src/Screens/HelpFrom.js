import React from "react";
import {SafeAreaView,ScrollView,StyleSheet,View,Dimensions,Text, TextInput,TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";

const HelpFrom = () =>{

    let helpFrom = {
        fullName:"", number:"",
        address:"",  location:{}
    }

    const nav = useNavigation();

    const SaveHelpRequest = () =>{nav.navigate("SOS")}

    const HeaderView = () => {
        return(
          <View style={styles.headerView}>
              <Text style={styles.fromText}>{'Help Form'.toUpperCase()}</Text>
              <Text style={styles.fromSubText}>{'Disaster plus help request'.toUpperCase()}</Text>
          </View>
        );
    }

    const FromView = () => {
      return(
          <View style={styles.fromView}>


              <Text style={styles.label}>Please enter full name.</Text>
              <TextInput
                  placeholder="Full name"
                  style={styles.input}
              />

              <Text style={styles.label}>Please phone number</Text>
              <TextInput
                  placeholder="Phone number"
                  style={styles.input}
              />

              <Text style={styles.label}>Please enter address</Text>
              <TextInput
                  placeholder="Address"
                  style={styles.input}
              />

              <TouchableOpacity style={styles.Btn}>
                  <Text onPress={SaveHelpRequest} style={{color:"#ffff",textAlign:'center',fontSize:18,fontWeight:'bold'}}>
                      {'save'.toUpperCase()}
                  </Text>
              </TouchableOpacity>
          </View>
      );
    }

    return(
        <SafeAreaView>
            <ScrollView>
               <View style={styles.container}>
                   <HeaderView/>
                   <FromView/>
               </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        backgroundColor:'#ECF1EE'
    },
    headerView:{
        height:Dimensions.get('window').height/6,
        justifyContent:'center',
        paddingHorizontal:32
    },
    fromView:{
        backgroundColor:'#FFFF',
        height:Dimensions.get('window').height - Dimensions.get('window').height/5,
        borderTopLeftRadius:32,
        borderTopRightRadius:32,
        flexDirection:'column',
        paddingHorizontal:18,
        paddingVertical:6,
    },
    fromText:{
        fontSize:28,
        color:'#34495e'
    },
    fromSubText:{
        marginTop:8,
        fontSize:14,
        color:'#27ae60'
    },
    input:{
        borderRadius:16,
        paddingVertical:12,
        paddingHorizontal:8,
        width:'100%',
        borderWidth:1,
        borderColor:'#16a085',
        backgroundColor:'#ECF1EE',
    },
    label:{
        marginLeft:10,
        marginBottom:2,
        marginTop:24,
        fontSize:18,
        color:'#16a085'
    },
    Btn:{
        backgroundColor:'black',
        color:'#FFFF',
        borderRadius:16,
        paddingVertical:12,
        paddingHorizontal:8,
        marginTop:28,
        marginBottom:18
    }
})

export default HelpFrom