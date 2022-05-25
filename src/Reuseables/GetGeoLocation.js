import * as Location from 'expo-location';

async function getGeoLocation(setErrorMessage,setLocation,errorMsg){

    let { status} = await Location.requestForegroundPermissionsAsync();

    if( status != 'granted'){
        setErrorMessage('Permission to access location was denied');
        alert(errorMsg)
        return;
    }

    let Geo_location = await Location.getCurrentPositionAsync();
    setLocation(Geo_location["coords"]);
}

export default getGeoLocation;