import {StyleSheet,Dimensions} from "react-native";

const SignUpStyleSheet = StyleSheet.create({

    MainView:{
      marginTop:20,
      alignItems:"center",
      justifyContent:'center',
      backgroundColor:'#ffff'
    },

    Buttons:{marginTop:6, padding:8,},

    signInBtn:{
        backgroundColor:'blue',
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8,
        width:275,
        height:35,
    },

    googleBtn:{
        marginTop:2,
        backgroundColor:'#2ecc71',
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8,
        width:275,
        height:35,
    },

    textColour:{
        color:"#ffff",
        fontWeight:'bold',
        fontSize:18
    },

    OrText:{
      margin:4,
      padding:8,
      justifyContent:"center",
      alignItems:'center'
    },
    or_text:{
        fontWeight:'bold',
        color:'#bdc3c7',
        fontSize:16
    },


    fromContainer:{
        padding:8,
    },

    fromInnerContainer:{
        padding:4,
        marginTop:16
    },

    inputStyle:{
        width:350,
        backgroundColor: '#ecf0f1',
        paddingHorizontal: 15,
        paddingVertical:8,
        borderRadius: 4,
        marginBottom: 8,
        borderWidth:1,
        borderColor:'#bdc3c7'
    },

    Bg_image:{
        width:"100%",
        height:350,
        justifyContent:'center',
        alignItems:'center'
    }
});

export default SignUpStyleSheet