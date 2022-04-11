 import fireBase from "firebase";

export function SavePlan(Plan){
    fireBase.firestore().collection('Plan')
        .add({
            name: Plan.fullName,
            PlanName: Plan.name,
            Shelter:Plan.shelterName,
            number: Plan.EmNumber,
            Kin: Plan.nextOfKin,
            createdAt: fireBase.firestore.FieldValue.serverTimestamp()
        }).then((data) => console.log(data))
        .catch((error) => console.log(error));
}

export async function GetPlan(){

    let PlanList = [];

    let Plan = await fireBase.firestore()
    .collection('Plan').orderBy('createdAt')
    .get()

    Plan.forEach((doc) => {PlanList.push(doc.data())});

    return PlanList;
}