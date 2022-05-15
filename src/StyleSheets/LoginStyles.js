import {StyleSheet} from "react-native";

const loginStyles = StyleSheet.create({
    ImageCon:{
        justifyContent:"center",
        alignItems:"center",
        marginBottom:2
    },
    image:{
        width:"100%",
        height:250,
        borderRadius:16,
    },
    textHeader:{
        textAlign:"center",
        fontWeight:'600',
        fontSize:32,
        color:'#34495e'
    },
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:"#ecf0f1"
    },
    inputContainer:{
        width:'88%'
    },
    input:{
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical:8,
        borderRadius: 4,
        marginTop: 6,
        borderWidth:1,
        borderColor:'#16a085'
    },
    btnContainer:{
        width:'60%',
        justifyContent: 'center',
        alignItems:'center',
        marginTop:20
    },
    btn:{
        backgroundColor:"#2ecc71",
        width:'100%',
        padding:10,
        borderRadius:6,
        alignItems:'center'
    },
    btnOutLine:{
        backgroundColor:'#fff',
        marginTop:15,
        borderColor:"#2ecc71",
        borderWidth:2
    },
    btnOutLineText:{
        color: '#2ecc71',
        fontWeight:'700',
        fontSize:16,
    },
    btnText:{
        color: '#fff',
        fontWeight:'700',
        fontSize:16,
    }
});
export default loginStyles