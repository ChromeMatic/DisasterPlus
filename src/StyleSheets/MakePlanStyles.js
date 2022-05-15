import {StyleSheet} from "react-native";

const MakePlanStyles = StyleSheet.create({
     container:{
         flex: 1,
         flexDirection:"column",
         padding:8,
         backgroundColor:'#fff'
     },
     input:{
         borderRadius:12,
         paddingVertical:12,
         paddingHorizontal:8,
         width:'100%',
         borderWidth:1,
         borderColor:'#16a085',
         backgroundColor:'#ECF1EE',
     },
     saveBtnCon:{
         marginTop:25,
         justifyContent:'center',
         alignItems:'center'
     },
     headerCon:{
         height:150,
         width:'100%',
         padding:4,
         borderRadius: 10,
         backgroundColor:'#ECF1EE',
         marginTop:40,
         justifyContent:'center',
         alignItems:'center'
     },
     headerText:{
         fontSize:40,
         color:'#2c3e50'
     },
     innerCon:{
         marginTop:4,
         width:"100%",
         flex:1,
         flexDirection:"column",
         padding:8
     },
     Box:{
         borderRadius: 10,
         height:75,
         width:'100%',
         justifyContent:'center',
         alignItems:'center',
         marginTop:8
     },
     SaveBtn:{
         backgroundColor:'#fff',
         borderColor:"#2ecc71",
         borderWidth:2,
         paddingHorizontal: 16,
         paddingVertical: 8,
         width: 150,
         justifyContent:'center',
         alignItems:'center',
         borderRadius: 16
     },
     SaveBtnText:{
         color:'#2ecc71',
         fontWeight:'bold',
         fontSize:22
     }
 });

export default MakePlanStyles