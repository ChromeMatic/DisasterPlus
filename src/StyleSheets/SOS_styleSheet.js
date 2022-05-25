import {StyleSheet,Dimensions} from "react-native";

const SOS_styleSheet = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ecf0f1'
    },
    map:{
        marginTop:20,
        width: Dimensions.get('window').width,
        height: 645
    },
    btn:{
        backgroundColor:'#FFFF',
        marginTop:2,
        borderColor:"#2ecc71",
        borderWidth:2,
        width:'100%',
        paddingVertical:6,
        borderRadius:6
    },
    btnText:{
        color:'#2ecc71',
        fontWeight:'bold',
        fontSize:16,
        textAlign:'center'
    },
    input:{
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        paddingVertical:8,
        borderRadius: 4,
        marginTop: 6,
        borderWidth:1,
        borderColor:'#16a085'
    }
});

export default SOS_styleSheet