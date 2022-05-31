import {StyleSheet,Dimensions,Platform} from "react-native";

const ContactPageStyle = StyleSheet.create({

    container:{
        paddingTop: Platform.OS === 'ios' ? 60 : 35,
        paddingBottom: 24,
        backgroundColor:'#F9F4F3',
        alignItems:'center'
    },

    headerText:{
        textAlign:'center',
        fontWeight:"bold",
        color:'#16a085',
        marginBottom:16
    },


    image:{
        height:Dimensions.get("window").height/2,
        width:Dimensions.get("window").width/1.1,
    },

    cardContainer:{
        paddingHorizontal:8,
        paddingVertical:2,
        backgroundColor:'#F9F4F3',
    },

    card:{
        width:Dimensions.get("window").width/1.2,
        marginTop:16
    },

    cardHeaderText:{
        marginBottom:8,
        fontWeight:'bold',
        color:'#16a085'
    },

    cardText:{marginTop:8,},

    cardBtn:{marginTop:12,}
});

export default ContactPageStyle;