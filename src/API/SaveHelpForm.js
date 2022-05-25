import {firebase} from "@react-native-firebase/firestore";

// NEED CALL BACK FUNCTION
function addHelpRequest(Help_form){
     firebase.firestore()
         .collection("Help_Request")
         .add({
              name: Help_form.fullName,
              number: Help_form.number,
              address: Help_form.address,
              createdAt: firebase.firestore.FieldValue.serverTimestamp()
         }).then( (data) => alert('Data added:'))
         .catch( (error) => console.log(error))
}

// NEED CALL BACK FUNCTION
async function GetHelpRequest(){

    let RequestHelpList = [];

    let snapshot = await firebase.firestore()
        .collection('Help_Request')
        .orderBy('createdAt')
        .get()

   snapshot.forEach( (doc) => {
        RequestHelpList.push(doc.data());
   });
}

export default addHelpRequest