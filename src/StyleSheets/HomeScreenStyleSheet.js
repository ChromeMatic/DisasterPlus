import {Dimensions, StyleSheet} from 'react-native'

const HomeStyle = StyleSheet.create({
    _btn:{
        marginBottom:16,
        backgroundColor:"#FFFF",
        paddingVertical: 16,
        paddingHorizontal: 34,
        borderRadius:12
    },
    container:{
        flex:1,
        marginTop:20,
        backgroundColor:'#ECF1EE'
    },
    headerView:{
        height:Dimensions.get('window').height/6,
        justifyContent:'center',
        paddingHorizontal:32
    },
    fromView:{
        backgroundColor:'#FFFF',
        height:Dimensions.get('window').height - Dimensions.get('window').height/5,
        borderTopLeftRadius:32,
        borderTopRightRadius:32,
        flexDirection:'column',
        paddingHorizontal:18,
        paddingVertical:6,
    },
    fromText:{
        fontSize:28,
        color:'#34495e'
    },
    fromSubText:{
        marginTop:8,
        fontSize:14,
        color:'#27ae60'
    },
    input:{
        borderRadius:16,
        paddingVertical:12,
        paddingHorizontal:8,
        width:'100%',
        borderWidth:1,
        borderColor:'#16a085',
        backgroundColor:'#ECF1EE',
    },
    label:{
        marginLeft:10,
        marginBottom:2,
        marginTop:24,
        fontSize:18,
        color:'#16a085'
    },
    Btn:{
        backgroundColor:'black',
        color:'#FFFF',
        borderRadius:16,
        paddingVertical:12,
        paddingHorizontal:8,
        marginTop:28,
        marginBottom:18
    },
    con1:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-start",
        backgroundColor:"#2c3e50"
    },
    con2:{
        justifyContent:"flex-start",
        padding:15,
    },
    con3:{

    },
    img:{
        width:60,
        height:60,
        borderRadius:12,
        marginTop:20
    },
    btnCon:{
        flexDirection:"row",
        alignItems:"center",
        paddingVertical:12,
        backgroundColor:'#fff',
        paddingLeft:30,
        paddingRight:30,
        borderRadius: 4,
        marginTop:25,
    }
})

export default HomeStyle