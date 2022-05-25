import {StyleSheet} from "react-native";

const  LandingStyle = StyleSheet.create({

    image:{borderRadius:8,},

    headerText:{
        marginBottom:16,
        fontSize:16,
        fontWeight:'600',
        color:'#fff'
    },

    Btn:{
        marginTop:18,
        backgroundColor:"#2ecc71",
        padding:8,
        borderRadius:4,
    },

    BtnText:{
        fontWeight:"700",
        fontSize:16,
        fontFamily:'Roboto',
        color:'#fff',
        padding:8
    },

    container:{
        flex:1,
        backgroundColor:'#ecf0f1'
    },
    Box1:{
        flex:1,
        backgroundColor:'#ecf0f1',
        justifyContent:"center",
        alignItems:'center',
    },
    box1Text:{
        fontWeight:"600",
        fontSize:46,
        fontFamily:'Roboto',
        color:'#34495e',
        padding:8
    },
    box1TextSub:{
        fontWeight:"700",
        color:'#34495e',
        padding:8
    },
    Box2:{
        flex:2,
        flexDirection: "column",
        backgroundColor:'#34495e',
        justifyContent:"center",
        alignItems:'center',
        borderTopRightRadius:30,
        borderTopLeftRadius:30,
    },
    Box3:{
        flex:3,
        backgroundColor:'#f39c12',
        justifyContent:"center",
        alignItems:'center'
    }
});

export default LandingStyle