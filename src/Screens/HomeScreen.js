import React, {useRef, useState} from "react";
import {StyleSheet, Linking, Text, View, SafeAreaView, Image, TouchableOpacity, Animated} from "react-native";
import {auth} from "../../firebase";
import {useNavigation} from "@react-navigation/native";
import homeIcon from "../../assets/home.png";
import settingIcon from "../../assets/setting-lines.png";
import alert from "../../assets/bell.png"
import plan  from "../../assets/planning.png"
import logout from "../../assets/logout.png"
import menu from "../../assets/square.png"
import HomeStyle from "../StyleSheets/HomeScreenStyleSheet";

const HomeScreen = () =>{

   const [currentTab,setCurrentTab] = useState("Home");

   const [showMenu,setShowMenu] = useState(false)

   const offsetValue =useRef( new Animated.Value(0)).current;
   const scaleValue =useRef( new Animated.Value(1)).current;
   const closeBtnOffset =useRef( new Animated.Value(0)).current;

   const navigation = useNavigation();

   const logOut = () =>{
       auth.signOut()
       navigation.navigate('Welcome');
   }

   const btn = (title,image,currentTab,setCurrentTab) =>{
       return(
           <TouchableOpacity
               onPress={() =>{
                   setCurrentTab(title);
                   if(title === 'logout'){
                       logOut();
                   }
                   if(title === 'home'){

                      navigation.navigate('HomeScreen');
                   }else{
                       if (title === 'alert'){
                           navigation.navigate('AlertScreen')
                       }
                       if(title === 'plan'){

                           navigation.navigate('MakePlan')
                       }
                       if (title === 'settings'){
                           navigation.navigate('HomeScreen')
                       }
                       if(title === 'Admin'){
                           navigation.navigate('Admin')
                       }
                       if(title === 'SOS'){
                           navigation.navigate('SOS')
                       }
                   }
               }}
           >
               <View style={{
                   flexDirection:"row",
                   alignItems:"center",
                   paddingVertical:12,
                   backgroundColor: currentTab == title ? '#34495e' : 'transparent',
                   paddingLeft:30,
                   paddingRight:30,
                   borderRadius: 4,
                   marginTop:25,
               }}>
                   <Image
                       source={image}
                       style={{
                           width:18,
                           height:18,
                           tintColor: currentTab == title ? "#27ae60" : "#fff"
                       }}
                   />
                   <Text style={{
                       fontSize:15,
                       color:currentTab == title ? '#27ae60' : '#fff',
                       fontWeight:'bold',
                       marginLeft:4,

                   }}>
                       {title.toUpperCase()}
                   </Text>
               </View>
           </TouchableOpacity>
       )
   }


   const LinkBtn = () => {
     return(
         <View>
             <TouchableOpacity
                 onPress={()=>{
                 navigation.navigate("SOS")}}
                 style={HomeStyle._btn}
             >
                 <Text style={{color:'#34495e', fontWeight:'bold',fontSize:20,textAlign:'center'}}>
                     {'request for help!'.toUpperCase()}
                 </Text>
             </TouchableOpacity>

             <TouchableOpacity
                 onPress={()=>{
                    Linking.openURL('https://www.odpem.org.jm/')
                 }}
                 style={{
                     marginBottom:16,
                     backgroundColor:"#FFFF",
                     paddingVertical: 16,
                     paddingHorizontal: 34,
                     borderRadius:12
                 }}
             >
                 <Text style={{color:'#34495e', fontWeight:'bold',fontSize:20, textAlign:'center'}}>
                     {'View ODPEN shelters'.toUpperCase()}
                 </Text>
             </TouchableOpacity>

             <TouchableOpacity
                 onPress={()=>{
                     navigation.navigate("Admin")}}
                 style={{
                     marginBottom:16,
                     backgroundColor:"#FFFF",
                     paddingVertical: 16,
                     paddingHorizontal: 34,
                     borderRadius:12
                 }}
             >
                 <Text style={{color:'#34495e', fontWeight:'bold',fontSize:20, textAlign:'center'}}>
                     {'for admin'.toUpperCase()}
                 </Text>
             </TouchableOpacity>

             <TouchableOpacity
                 onPress={() =>{navigation.navigate("ReportScreen")}}
                 style={{
                     marginBottom:16,
                     backgroundColor:"#FFFF",
                     paddingVertical: 16,
                     paddingHorizontal: 34,
                     borderRadius:12
                 }}
             >
                 <Text style={{color:'#34495e', fontWeight:'bold',fontSize:20, textAlign:'center'}}>
                     {'make a report'.toUpperCase()}
                 </Text>
             </TouchableOpacity>
         </View>
     )
   }

   const BoxItems = () =>{
       return(
           <View style={{flex: 1, justifyContent:'center', alignItems:'center', backgroundColor: "#ecf0f1", marginTop:8, borderRadius: 15, width:"100%", padding: 16}}>
                <LinkBtn/>
           </View>
       )
   }

    return(
        <SafeAreaView style={HomeStyle.con1}>

          <View style={HomeStyle.con2}>
            <Image
                style={HomeStyle.img}
                source={{uri:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}}
            />
            <Text style={{
                fontSize:20,
                color:'#fff',
                fontWeight:'bold',
                marginTop:4
            }}>
                {'Name'.toUpperCase()}
            </Text>
            <TouchableOpacity>
                <Text style={{color:'#fff', marginTop:2}}>
                    {'View Profile'.toUpperCase()}
                </Text>
            </TouchableOpacity>

            <View style={{flexGrow:1, marginTop:25}}>
                {btn('Home',homeIcon,currentTab,setCurrentTab)}
                {btn('SOS',alert,currentTab,setCurrentTab)}
                {btn('plan',plan,currentTab,setCurrentTab)}
                {btn('settings',settingIcon,currentTab,setCurrentTab)}
                {btn('Admin',menu,currentTab,setCurrentTab)}
            </View>

            <View>
                {btn('logout',logout,currentTab,setCurrentTab)}
            </View>

          </View>

             <Animated.View style={{
                 flexGrow:1,
                 height: '100%',
                 backgroundColor:"#fff",
                 position:'absolute',
                 top:0,
                 left:0,
                 right:0,
                 paddingHorizontal:15,
                 paddingVertical: 20,
                 borderRadius: showMenu ? 15 : 0,
                 transform:[
                     {scale:scaleValue},
                     {translateX:offsetValue}
                 ]
             }}>

                <View style={{
                     flexDirection: "row",
                }}>
                    <TouchableOpacity
                        onPress={()=>{
                            Animated.timing(scaleValue,{
                                toValue: showMenu ? 1 : 0.88,
                                duration:300,
                                useNativeDriver:true
                            }).start()
                            Animated.timing(offsetValue,{
                                toValue: showMenu ? 0 : 220,
                                duration:300,
                                useNativeDriver:true
                            }).start()
                            setShowMenu(!showMenu);
                        }}
                    >
                        <Image
                            source={menu}
                            style={{
                                width: 25,
                                height: 25,
                                tintColor:'#2c3e50',
                                marginTop:40,
                                marginLeft:12
                            }}
                        />
                    </TouchableOpacity>

                    <Text style={{
                        fontSize:24,
                        color:"#2c3e50",
                        fontWeight:'bold',
                        paddingTop:20,
                        marginTop:15,
                        marginLeft:16
                    }}>
                        {currentTab.toUpperCase()}
                    </Text>
                </View>

                 <Image
                     source={{uri:'https://images.unsplash.com/photo-1605994543054-6ffbabbd8139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'}}
                     style={{
                         width: '100%',
                         height: 250,
                         borderRadius: 15,
                         marginTop: 20
                     }}
                 />

                <BoxItems/>

             </Animated.View>

        </SafeAreaView>
    )
}

export default HomeScreen;