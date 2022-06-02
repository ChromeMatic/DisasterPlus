import {StyleSheet,Dimensions,Platform} from "react-native";

const AdminHomeStyle = StyleSheet.create({

    container:{
        paddingTop: Platform.OS === 'ios' ? 60 : 35,
        paddingHorizontal:10,
        justifyContent:'center',
        alignItems:'center',
    },

    headerText:{
        marginTop:16,
        color:'#16a085',
        fontWeight:'bold'
    },

    image:{
        width:Dimensions.get("window").width/1.4,
        height:Dimensions.get('window').height/2,
        marginTop:8,
        marginBottom:16,
    },

    innerLayout:{
        paddingHorizontal:8,
        paddingVertical:8,
    },

    card:{width:Dimensions.get("window").width/1.2,marginBottom:16,},

    card_text_header:{
        textAlign:'center',
        paddingVertical:8,
        fontWeight:'bold',
        color:'#16a085',
    },
    btn:{marginTop:16}
});

export default AdminHomeStyle