import React, {useRef, useState} from "react";
import {StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, Animated} from "react-native";
import {auth} from "../firebase";
import {useNavigation} from "@react-navigation/native";
import homeIcon from  "../assets/home.png";
import settingIcon from  "../assets/setting-lines.png";
import alert from  "../assets/bell.png"
import plan  from  "../assets/planning.png"
import  logout from  "../assets/logout.png"
import menu from  "../assets/menu.png"
import  close from  "../assets/close.png"


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

    return(
        <SafeAreaView style={styles.con1}>

          <View style={styles.con2}>
            <Image
                style={styles.img}
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
                {btn('alert',alert,currentTab,setCurrentTab)}
                {btn('plan',plan,currentTab,setCurrentTab)}
                {btn('settings',settingIcon,currentTab,setCurrentTab)}
            </View>

            <View>
                {btn('logout',logout,currentTab,setCurrentTab)}
            </View>

          </View>

             {
                  // overlay view
             }

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
                        }}
                    />
                </TouchableOpacity>

                 <Text style={{
                     fontSize:24,
                     color:"#2c3e50",
                     fontWeight:'bold',
                     paddingTop:20,
                 }}>
                     {currentTab.toUpperCase()}
                 </Text>

                 <Image
                     source={{uri:'https://images.unsplash.com/photo-1605994543054-6ffbabbd8139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80'}}
                     style={{
                         width: '100%',
                         height: 300,
                         borderRadius: 15,
                         marginTop: 20
                     }}
                 />

             </Animated.View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    con1:{
         flex:1,
         alignItems:"flex-start",
         justifyContent:"flex-start",
         backgroundColor:"#2c3e50"
     },
    con2:{
         justifyContent:"flex-start",
         padding:15,
    },
    img:{
       width:60,
       height:60,
       borderRadius:12,
       marginTop:20
    },
    btnCon:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:12,
        backgroundColor:'#fff',
        paddingLeft:30,
        paddingRight:30,
        borderRadius: 4,
        marginTop:25,
    }
});

export default HomeScreen;