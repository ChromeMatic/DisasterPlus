import React, {useEffect, useState} from "react";
import {StyleSheet,Text,TouchableOpacity, TextInput,View,SafeAreaView} from "react-native";
import {auth} from "../firebase";
import {createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import {useNavigation} from "@react-navigation/native";

const LoginScreen = () =>{

   const [email,setEmail] = useState('')
   const [password,setPassword] = useState('')

   const navigation = useNavigation();

   useEffect(()=>{
     const unsubscribe =  auth.onAuthStateChanged(user => {
           if(user){navigation.navigate('HomeScreen');}
     });
     return unsubscribe;
   },[])

   const handleSignUp = () => {
       createUserWithEmailAndPassword(auth,email,password)
           .then(userCredentials =>{
               const user = userCredentials.user;
               console.log("User created :",user.email)
       }).catch(error => alert(error.message))
   }
   
   const handleLogin = () => {
       signInWithEmailAndPassword(auth,email,password)
           .then(userCredentials=>{
               const user = userCredentials.user;
               console.log("User log in :",user.email)
           }).catch(error => alert(error.message))
   }
    
   return(
      <SafeAreaView  style={styles.container} behavior="padding">

           <View style={styles.inputContainer}>
               <Text style={styles.textHeader}>
                   {'DISASTER-PLUS'.toUpperCase()}
               </Text>
               <TextInput
                   placeholder="EMAIL"
                   value={email}
                   onChangeText={text => setEmail(text)}
                   style={styles.input}
               />
               <TextInput
                   placeholder="PASSWORD"
                   value={password}
                   onChangeText={text => setPassword(text)}
                   style={styles.input}
                   secureTextEntry
               />
           </View>

           <View style={styles.btnContainer}>
                <TouchableOpacity
                    onPress={handleLogin}
                    style={styles.btn}
                >
                  <Text style={styles.btnText}>LOGIN</Text>
                </TouchableOpacity>

               <TouchableOpacity
                   onPress={handleSignUp}
                   style={[styles.btn,styles.btnOutLine]}
               >
                   <Text style={styles.btnOutLineText}>REGISTER</Text>
               </TouchableOpacity>
           </View>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
    textHeader:{
        textAlign:"center",
        fontWeight:'600',
        fontSize:32,
        color:'#34495e'
    },
    container:{
       flex: 1,
       justifyContent: 'center',
       alignItems:'center',
        backgroundColor:"#ecf0f1"
    },
    inputContainer:{
        width:'88%'
    },
    input:{
       backgroundColor: '#fff',
       paddingHorizontal: 15,
       paddingVertical:10,
       borderRadius: 4,
       marginTop: 16,
    },
    btnContainer:{
        width:'60%',
        justifyContent: 'center',
        alignItems:'center',
        marginTop:36
    },
    btn:{
        backgroundColor:"#2ecc71",
        width:'100%',
        padding:10,
        borderRadius:6,
        alignItems:'center'
    },
    btnOutLine:{
        backgroundColor:'#fff',
        marginTop:15,
        borderColor:"#2ecc71",
        borderWidth:2
    },
    btnOutLineText:{
        color: '#2ecc71',
        fontWeight:'700',
        fontSize:16,
    },
    btnText:{
        color: '#fff',
        fontWeight:'700',
        fontSize:16,
    }
})

export default LoginScreen