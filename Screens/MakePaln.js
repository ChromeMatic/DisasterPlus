import React, {useState} from "react";
import {StyleSheet,Text,View,SafeAreaView,Image} from "react-native";

const MakePlan = () =>{

   const Header = () =>{
       return(
           <View style={styles.header}>
               <Text style={styles.headerText}>MAKE A PLAN</Text>
           </View>
       )
   }

    const Box3 = () =>{
        return(
            <View style={styles.boxContainer}>
                <View style={styles.box}>
                    <Image style={styles.image} source={{
                        width: '100%', height: '50%',
                        uri:"https://images.unsplash.com/photo-1520299607509-dcd935f9a839?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80"
                    }}
                    />
                    <Text style={styles.boxText}>Select your location</Text>
                </View>
                <View style={styles.box}>
                    <Image style={styles.image} source={{
                        width: '100%', height: '50%',
                        uri:"https://images.unsplash.com/photo-1622905810727-9cc3126d712e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                    }}
                    />
                    <Text style={styles.boxText}>START PLANING</Text>
                </View>
                <View style={styles.box2}>
                    <Image style={styles.image} source={{
                        width: '100%', height: '50%',
                        uri:"https://images.unsplash.com/photo-1594935975218-a3596da034a3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                    }}
                    />
                    <Text style={styles.boxText}>START PLANING</Text>
                </View>
            </View>
        )
    }

   return(
      <SafeAreaView>
          <Header/>
          <Box3/>
      </SafeAreaView>
   )
}

const styles = StyleSheet.create({
    container:{
        flex: 1
    },
    header:{
        width:'100%',
        height:'10%',
        backgroundColor:'#34495e',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText:{
        fontSize:25,
        fontWeight:'700',
        color:'#fff'
    },
    boxContainer:{
        width:'100%',
        height:'85%',
        backgroundColor:'#ecf0f1',
        padding:6,
        flexDirection:'column',
        flexWrap:'wrap',
    },
    box:{
        width:'100%',
        height:'25%',
        alignItems:'center',
        padding:5,
    },
    box2:{
        width:'100%',
        height:'50%',
        alignItems:'center',
        padding:5,
    },
    boxText:{
        marginTop:12,
        fontSize:24,
        fontWeight:'800',
        color:'#27ae60'
    },
    image:{
        borderRadius:8
    }
})

export  default  MakePlan;