import {StyleSheet} from 'react-native'

const ReportScreenStyle = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        alignItems:"flex-start",
        justifyContent:"flex-start",
    },
    _Text:{
        textAlign:'center',fontSize:23,fontWeight:'bold',
        marginTop:8,padding:8,color:'#34495e'
    },
    inputStyle:{
        width:350,
        backgroundColor: '#ecf0f1',
        paddingHorizontal: 15,
        paddingVertical:8,
        borderRadius: 4,
        marginBottom: 16,
        borderWidth:1,
        borderColor:'#bdc3c7'
    },
    fromCon:{
        marginTop:18,
        padding:16,
        justifyContent:"center",
        alignItems:'center'
    },
    btn:{
        backgroundColor:'#34495e',
        width:350,
        paddingHorizontal:24,
        paddingVertical:18,
        borderRadius:4,
        justifyContent:"center",
        alignItems:'center'
    },
    _btn:{
        marginTop:38,
        backgroundColor:'#2ecc71',
        width:250,
        paddingHorizontal:24,
        paddingVertical:8,
        borderRadius:8,
        justifyContent:"center",
        alignItems:'center'
    },
    SaveBtn:{
        marginTop:64,
        backgroundColor:'#2ecc71'
    },
    text:{
        color:"#fff",
        fontSize:16,
        fontWeight:"bold"
    }
});

export default ReportScreenStyle