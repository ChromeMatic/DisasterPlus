import React, {useState,useEffect} from "react";
import {View,ScrollView,Text,TextInput,Image,SafeAreaView,TouchableOpacity} from "react-native";
import {createUserWithEmailAndPassword} from "firebase/auth";
import {auth,provider} from "../../firebase";
import SignUpStyleSheet from "../StyleSheets/SignUpStyleSheet";
import Enrol from  "../../assets/enrollment.png"
import {useNavigation} from "@react-navigation/native";
import {signInWithRedirect, GoogleAuthProvider} from "firebase/auth";

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
               createUserWithEmailAndPassword(auth,email,password)
                   .then(userCredentials =>{
                       const user = userCredentials.user;
                       console.log("User created : ",user.email);
                   }).catch(error => alert(error.message))
           }
        }
    }

    function SignUp() {
        signInWithRedirect(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                navigation.navigate('HomeScreen');
            }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
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
                           onPress={SignUp}
                           style={SignUpStyleSheet.googleBtn}
                       >
                           <Text style={SignUpStyleSheet.textColour}>{'google'.toUpperCase()}</Text>
                       </TouchableOpacity>
                   </View>

               </View>
           </SafeAreaView>
         </ScrollView>
     )
}

export default SignUpScreen;