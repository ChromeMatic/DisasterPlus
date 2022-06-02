import React from "react";
import {SafeAreaView,ScrollView,StyleSheet,View,Dimensions,Text, TextInput,TouchableOpacity} from "react-native";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from 'react-redux';
import {SaveHelpForm} from '../Redux/actions';
import addHelpRequest from  '../API/SaveHelpForm';
import Style from '../StyleSheets/HelpFromStyleSheet'

const HelpFrom = () =>{

    const nav = useNavigation();

    const dispatch = useDispatch();

    let h_From = {
        fullName:"",
        number:"",
        address:"",
        location:{},
        description:'',
        createdAt: new Date().getDate(),
        TimeAt: new Date().getTime()
    }

    const SaveHelpRequest = () =>{
        if( h_From.fullName === "" || h_From.number === "" || h_From.address === "" || h_From.description === ""){
           alert("Please enter fill out fields!");
        }else {
            dispatch(SaveHelpForm(h_From));
            alert("Help is on the way, request saved!");
            addHelpRequest(h_From);
            nav.navigate('HomeScreen');
        }
    }

    const HeaderView = () => {
        return(
          <View style={Style.headerView}>
              <Text style={Style.fromText}>{'Help Form'.toUpperCase()}</Text>
              <Text style={Style.fromSubText}>{'Disaster plus help request'.toUpperCase()}</Text>
          </View>
        );
    }


    return(
        <SafeAreaView>
            <ScrollView>
               <View style={Style.container}>
                   <HeaderView/>
                   <View style={Style.fromView}>

                       <Text style={Style.label}>Please enter full name.</Text>
                       <TextInput
                           placeholder="Full name"
                           onChangeText={ text => h_From.fullName = text}
                           style={Style.input}
                       />

                       <Text style={Style.label}>Please phone number</Text>
                       <TextInput
                           placeholder="Phone number"
                           onChangeText={ text => h_From.number = text}
                           style={Style.input}
                       />

                       <Text style={Style.label}>Please enter address</Text>
                       <TextInput
                           placeholder="Address"
                           onChangeText={ text => h_From.address = text}
                           style={Style.input}
                       />

                       <Text style={Style.label}>Description</Text>
                       <TextInput
                           placeholder="Please enter a description"
                           onChangeText={ text => h_From.description = text}
                           style={Style.input}
                       />

                       <TouchableOpacity style={Style.Btn}>
                           <Text onPress={SaveHelpRequest} style={{color:"#ffff",textAlign:'center',fontSize:18,fontWeight:'bold'}}>
                               {'save'.toUpperCase()}
                           </Text>
                       </TouchableOpacity>

                   </View>
               </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default HelpFrom