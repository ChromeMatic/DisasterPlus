import React from "react";
import {StyleSheet,Text,View,SafeAreaView,Image} from "react-native";

const SOS = () =>{

    const Header = () =>{
        return(
            <View style={styles.header}>
                <Text style={styles.headerText}>MAKE A PLAN</Text>
            </View>
        )
    }

    const Box3=()=>{
        return(
            <View style={styles.boxContainer}>

                <View style={styles.box}>
                    <Image style={styles.image} source={{
                        width: '100%',
                        height: '76%',
                        uri:"https://picsum.photos/id/1038/200/300"
                    }}
                    />
                    <Text style={styles.boxText}>Alert</Text>
                </View>

                <View style={styles.box}>
                    <Image style={styles.image} source={{
                        width: '100%',
                        height: '76%',
                        uri:"https://picsum.photos/200/300"
                    }}
                    />
                    <Text style={styles.boxText}>Make a Plan</Text>
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
        height:'16%',
        backgroundColor:'#0097e6',
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
        padding:5,
        flexDirection:'row',
        flexWrap:'wrap',
    },
    box:{
        width:'50%',
        height:'50%',
        alignItems:'center',
        padding:5,
    },
    boxText:{
        marginTop:12,
        fontSize:18,
        fontWeight:'700',
        color:'#27ae60'
    },
    image:{
        borderRadius:8
    }
})

export default  SOS