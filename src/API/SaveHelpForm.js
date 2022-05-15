import {firestore} from "../../firebase"

function addHelpRequest(Help_form){
     firestore.collection("Help_Request")
         .add({Help_form})
         .then( (data) => alert(data))
         .catch( (error) => alert(error))
}

export default addHelpRequest