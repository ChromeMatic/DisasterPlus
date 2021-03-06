import React from "react";
import {ScrollView, SafeAreaView, StyleSheet, View, Text, Dimensions,Linking, TouchableOpacity} from "react-native";
import {LineChart} from "react-native-chart-kit";

const Box = () =>{
    return(
        <View style={style.box1}>

            <View style={{
                flex:1,
                padding: 65,
                backgroundColor:'#34495e',
                alignItems:'center',
                justifyContent: 'center',
                borderRadius:6,
                marginRight:8,
            }}>
                <Text style={{
                    color:'#ffff'
                }}>Info1</Text>
            </View>

            <View style={{
                flex:1,
                padding:65,
                backgroundColor:'#34495e',
                alignItems:'center',
                justifyContent: 'center',
                borderRadius:6,
            }}>
                <Text style={{
                    color:'#ffff'
                }}>Info2</Text>
            </View>

        </View>
    )
}

const Box2 = () =>{
    return(
        <TouchableOpacity style={{
            flex:1,
            width:'100%',
            padding:8,
        }}>
            <View style={{
                flex:1,
                backgroundColor:"#34495e",
                justifyContent: 'center',
                alignItems: 'center',
                padding: 16,
                borderRadius:4,
            }}>
                <Text style={{
                    color:'#ffffff',
                    fontWeight:'bold',
                    fontSize:16
                }}>
                    {'view all crime statics'.toUpperCase()}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const Infos =(title,link)=>{
    return(
        <TouchableOpacity style={{
            flex:1,
            width:'100%',
            borderWidth: 1,
            marginTop:12,
            borderColor: "#95a5a6",
            borderRadius: 4,
            padding:16,
        }}
           onPress={()=>{
               Linking.openURL(''+link)
           }}
        >
            <Text style={{
                color:'#16a085',
                fontWeight:'bold',
            }}>
                {title.toUpperCase()}
            </Text>
        </TouchableOpacity>
    )
}

const Details = () =>{
    return(
        <View style={style.box2}>
            <Text style={{
                color:'#2c3e50',
                fontWeight:'bold',
                fontSize:22
            }}>
                {'Alerts'.toUpperCase()}
            </Text>
            {Infos('Emergency Services','https://www.scribblemaps.com/maps/view/Jason-Williams/hUj003rsN8')}
            {Infos('Alert in Kingston','https://www.scribblemaps.com/maps/view/Emergency%20Services/SuAuDB0NRl')}
            {Infos('Alert in Manchester','https://www.scribblemaps.com/maps/view/Mary-Jane/1auNUuk9CQ')}
            {Infos('Alert in St. Cathrine','https://www.scribblemaps.com/maps/view/Carleen%20Whyte%20(copy)/C3wtDgitYf')}
        </View>
    )
}

// Code for Charts info
const Chart = () =>{
    return(
        <View>
            <Text style={{
                marginLeft:8,
                marginTop:2,
                marginBottom:2,
                color:'#2c3e50',
                fontWeight:'bold',
                fontSize:22
            }}>
                {'Charts'.toUpperCase()}
            </Text>
            <LineChart
                data={{
                    labels: ["January", "February", "March", "April"],
                    datasets: [
                        {
                            data: [
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100,
                                Math.random() * 100
                            ]
                        }
                    ]
                }}
                width={Dimensions.get("window").width}
                height={220}
                yAxisLabel="$"
                yAxisSuffix="k"
                yAxisInterval={1}
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#16a085",
                    backgroundGradientTo: "#1abc9c",
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    }
                }}
                bezier
            />
        </View>
    )
}

// Main layout
const AdminScreen = () =>{

    return(
      <SafeAreaView style={style.container}>
       <ScrollView >
            <Box/>
            <Chart/>
            <Box2/>
            <Details/>
      </ScrollView>
      </SafeAreaView>
    )
}

//Styles for screen
const style = StyleSheet.create({
    container:{ flex:1},
    scrollView: { marginTop:20,},
    box1:{
        flex:1,
        marginTop:23,
        width:'100%',
        height:'50%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:8,
    },
    box2:{
        flex:1,
        flexDirection:"column",
        width:'100%',
        padding:16,
    }
});

export default AdminScreen;