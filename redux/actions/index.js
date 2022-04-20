import firestore from "@react-native-firebase/firestore";
import {auth} from "../firebase";
import {USER_STATE_CHANGE} from '../Constants/index.js'

export function fetchUser(){
    return( (dispacth) =>{
        firestore().collection("user")
            .doc(auth.currentUser.uid)
            .get()
            .then((snapshot) =>{
                if(snapshot.exists){
                    dispacth({
                        type : USER_STATE_CHANGE,
                        currentUser: snapshot.data()
                    })
                }else{ console.log('Does not exist')}
            })
    })
}