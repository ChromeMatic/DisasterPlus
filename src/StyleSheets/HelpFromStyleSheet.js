import {Dimensions, StyleSheet} from 'react-native'

const Style = StyleSheet.create({
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
    }
});

export default Style