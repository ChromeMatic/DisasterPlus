import React, {useState,useEffect} from "react";
import {View,ScrollView,Text,TextInput,Image,SafeAreaView,TouchableOpacity} from "react-native";
import {createUserWithEmailAndPassword} from "firebase/auth";
import firestore from "@react-native-firebase/firestore";
import {auth} from "../../firebase";
import SignUpStyleSheet from "../StyleSheets/SignUpStyleSheet";
import Enrol from  "../../assets/enrollment.png"
import {useNavigation} from "@react-navigation/native";
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';


const signIn = async () => {
    try {
        await GoogleSignin.hasPlayServices();
        const userInfo = await GoogleSignin.signIn();
        this.setState({ userInfo });
    } catch (error) {
        if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // user cancelled the login flow
        } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation (e.g. sign in) is in progress already
        } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            // play services not available or outdated
        } else {
            // some other error happened
        }
    }
};

const SignUpScreen = () =>{

    const [firstname,setFirstName] = useState('');
    const [lastname,setLastName] = useState('');
    const [age,setAge] = useState('');
    const [address,setAddress] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [matchPassword,setMatchPassword] = useState('');
    const [role,setRole] = useState('');

    const navigation = useNavigation();

    useEffect(()=>{
        const unsubscribe =  auth.onAuthStateChanged(user => {
            if(user){navigation.navigate('HomeScreen');}
        });
        return unsubscribe;
    },[])

    //Handle user sign up
    const handleSignUp = () =>{
        if( Object.keys(firstname).length === 0 || Object.keys(lastname).length === 0 ||
            Object.keys(age).length === 0 || Object.keys(address).length === 0 || Object.keys(email).length === 0
            || Object.keys(password).length === 0 || Object.keys(matchPassword).length === 0){
            alert("Make sure all fields are filled.".toUpperCase());
        }else{
           if( password !== matchPassword){alert("Password does not match !".toUpperCase());}
           else{
               createUserWithEmailAndPassword(auth,firstname,lastname,age,address,email,password,role)
                   .then(userCredentials =>{
                       const user = userCredentials.user;
                       firestore().collection('users')
                           .doc(user.uid)
                           .set({
                               firstname,lastname
                               ,age,address,
                               email,password,
                               role
                           })
                   }).catch(error => alert(error.message))
           }
        }
    }


    // Contains buttons
    const Buttons = () =>{
        return(
            <View style={SignUpStyleSheet.Buttons}>
                <View>
                    <TouchableOpacity
                        onPress={handleSignUp}
                        style={SignUpStyleSheet.signInBtn}
                    >
                        <Text style={SignUpStyleSheet.textColour}>{'signup'.toUpperCase()}</Text>
                    </TouchableOpacity>
                </View>

                <View style={SignUpStyleSheet.OrText}>
                    <Text style={SignUpStyleSheet.or_text}>{'------------------ OR -------------------'.toUpperCase()}</Text>
                </View>

                <View>
                    <TouchableOpacity
                        style={SignUpStyleSheet.googleBtn}
                        onPress={signIn}
                    >
                        <Text style={SignUpStyleSheet.textColour}>{'google'.toUpperCase()}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

     return(
         <ScrollView>
           <SafeAreaView style={SignUpStyleSheet.MainView}>

               <View style={SignUpStyleSheet.fromContainer}>
                   <View>
                       <Image source={Enrol} style={SignUpStyleSheet.Bg_image}/>
                   </View>
                   <View style={SignUpStyleSheet.fromInnerContainer}>
                       <TextInput
                           style={SignUpStyleSheet.inputStyle}
                           onChangeText={ text => setFirstName(text)}
                           value={firstname}
                           placeholder="Firstname"
                       />
                       <TextInput
                           style={SignUpStyleSheet.inputStyle}
                           onChangeText={ text => setLastName(text)}
                           value={lastname}
                           placeholder="Lastname"
                       />
                       <TextInput
                           style={SignUpStyleSheet.inputStyle}
                           onChangeText={ text => setAge(text)}
                           value={age}
                           placeholder="AGE"
                       />
                       <TextInput
                           style={SignUpStyleSheet.inputStyle}
                           onChangeText={ text => setAddress(text)}
                           value={address}
                           placeholder="Address"
                       />
                       <TextInput
                           style={SignUpStyleSheet.inputStyle}
                           onChangeText={ text => setEmail(text)}
                           value={email}
                           placeholder="Email"
                       />
                       <TextInput
                           style={SignUpStyleSheet.inputStyle}
                           onChangeText={ text => setPassword(text)}
                           value={password}
                           placeholder="Password"
                           secureTextEntry
                       />
                       <TextInput
                           style={SignUpStyleSheet.inputStyle}
                           onChangeText={ text => setMatchPassword(text)}
                           value={matchPassword}
                           placeholder="Password"
                           secureTextEntry
                       />
                       <TextInput
                           style={SignUpStyleSheet.inputStyle}
                           onChangeText={ text => setRole(text)}
                           value={role}
                           placeholder="Role"
                       />
                   </View>
               </View>
            <Buttons/>
           </SafeAreaView>
         </ScrollView>
     )
}

export default SignUpScreen;