import React, {useEffect, useState} from "react";
import { Text, TouchableOpacity, TextInput, View,ScrollView, SafeAreaView, Image} from "react-native";
import {auth} from "../../firebase";
import {signInWithEmailAndPassword} from "firebase/auth";
import {useNavigation} from "@react-navigation/native";
import Pic from '../../assets/SignUp.png';
import loginStyles from '../StyleSheets/LoginStyles'

const ImageView = () =>{
    return(
        <View style={loginStyles.ImageCon}>
            <Image
                source={Pic}
                style={loginStyles.image}
            />
        </View>
    );
}

const LoginScreen = () =>{

   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')
   const [role,setRole] = useState('')

   const navigation = useNavigation();

   useEffect(()=>{
     const unsubscribe =  auth.onAuthStateChanged(user => {
           if(user){navigation.navigate('HomeScreen');}
     });
     return unsubscribe;
   },[])

    const handleSignUp = () =>{ navigation.navigate('SignUpScreen');}
   
   const handleLogin = () => {
       signInWithEmailAndPassword(auth,email,password)
           .then(userCredentials=>{
               const user = userCredentials.user;
               console.log("User log in :",user.email)
           }).catch(error => alert(error.message))
   }
    
   return(
     <ScrollView style={{marginTop:38,flex:1}}>
         <SafeAreaView  style={loginStyles.container} behavior="padding">
             <View style={loginStyles.inputContainer}>
                 <ImageView/>
                 <Text style={loginStyles.textHeader}>
                     {'DISASTER-PLUS'.toUpperCase()}
                 </Text>
                 <TextInput
                     placeholder="EMAIL"
                     value={email}
                     onChangeText={text => setEmail(text)}
                     style={loginStyles.input}
                 />
                 <TextInput
                     placeholder="PASSWORD"
                     value={password}
                     onChangeText={text => setPassword(text)}
                     style={loginStyles.input}
                     secureTextEntry
                 />
                 <TextInput
                     placeholder="Role"
                     value={role}
                     onChangeText={text => setRole(text)}
                     style={loginStyles.input}
                     secureTextEntry
                 />
             </View>

             <View style={loginStyles.btnContainer}>
                 <TouchableOpacity
                     onPress={handleLogin}
                     style={loginStyles.btn}
                 >
                     <Text style={loginStyles.btnText}>LOGIN</Text>
                 </TouchableOpacity>

                 <TouchableOpacity
                     onPress={handleSignUp}
                     style={[loginStyles.btn,loginStyles.btnOutLine]}
                 >
                     <Text style={loginStyles.btnOutLineText}>SIGN UP</Text>
                 </TouchableOpacity>
             </View>
         </SafeAreaView>
     </ScrollView>
   )
}

export default LoginScreen;