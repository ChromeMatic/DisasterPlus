import {Dimensions, StyleSheet, Platform} from 'react-native'

const HomeStyle = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === "ios" ? 60 : 25,
        backgroundColor:'#FFFF',
    },
    profileImg:{
        marginLeft:6,
        marginTop:2,
    },
    bgImage:{
        height:Dimensions.get("window").height/2,
        width:Dimensions.get("window").width/1.1
    },
    ImgCon:{
      padding:8,
      borderRadius:16,
      backgroundColor:'#F9F4F3'
    },
    TextHeader:{
        textAlign:"center",
        marginTop:16,
        marginBottom:8,
        fontWeight:'700',
        color:'#16a085'
    },
    CardCon:{
        paddingHorizontal:16,
        paddingVertical:8,
    },
    card:{
      marginTop:16
    },
    cardTextHeader:{
        textAlign:"center",
        fontWeight:'bold',
        color:'#16a085',
        marginBottom:10,
    },
    cardText:{
        marginTop:8,
        textAlign:"center",
        fontWeight:'500',
        color:'#16a085',
        marginBottom:16,
    },
    btn:{
        marginTop:8
    }
})

export default HomeStyle