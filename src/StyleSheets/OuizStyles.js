import {StyleSheet,Dimensions,Platform} from "react-native";


const QuizStyles = StyleSheet.create({

    container:{
        paddingTop: Platform.OS === 'ios' ? 60 : 35,
        backgroundColor:'#FFFF'
    },

    headerText:{
        marginTop:8,
        textAlign:'center',
        marginBottom:16,
        color:'#01b886',
        fontWeight:'bold'
    },

    InnerLayout:{
        backgroundColor:'#473DC8',
        width:Dimensions.get("window").width,
        paddingVertical:8,
        paddingHorizontal:4,
        borderTopRightRadius:64,
        borderTopLeftRadius:64,
        alignItems:'center'
    },

    QuestionLayout:{
        paddingHorizontal:8,
        paddingVertical:18,
    },

    questionText:{
        color:'#FFFF',
        fontWeight:'bold',
        marginBottom:4,
    },

    options:{marginLeft:24,},

    btn:{
        width:Dimensions.get("window").width/1.2,
        marginVertical:10,
        alignSelf:'center'
    }

});

export default QuizStyles