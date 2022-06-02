import {useEffect, useState, useRef} from "react";
import {SafeAreaView, ScrollView, TouchableOpacity, Text, View, TextInput, Image} from "react-native";
import ReportScreenStyle from '../StyleSheets/ReportScreenStyle'
import {useNavigation} from "@react-navigation/native";
import {Camera} from "expo-camera";
import {shareAsync} from "expo-sharing";
import * as MediaLibrary from "expo-media-library";

const Report_Screen = () =>{

    let cameraRef = useRef();
    const [hasCameraPermission,setCameraPermission] = useState(undefined);
    const [hasMediaPermission,setMediaPermission] = useState(undefined);
    const [photo,SetPhoto] = useState()

    const nav = useNavigation()
    const [name,setName] = useState('');
    const [PhoneNumber,setNumber] = useState('')
    const [Emergency,setEmergencyType] = useState('')
    const [Description,SetDescription] = useState('')
    const [address,SetAddress] = useState('')

    const set_Location = () => {
        if(Object.keys(name).length === 0 || Object.keys(PhoneNumber).length === 0 ||
            Object.keys(Emergency).length === 0 || Object.keys(Description).length === 0
            || Object.keys(address).length === 0){
            alert('Ensure that all fields are filled!'.toUpperCase());
        }else{
            alert("Report made!")
            nav.navigate('HomeScreen')
        }
    }

    useEffect(() => {
        (async () =>{
            const cameraPermission = await Camera.requestCameraPermissionsAsync();
            const mediaPermissions = await MediaLibrary.requestPermissionsAsync();
            setCameraPermission(cameraPermission.status === 'granted');
            setMediaPermission(mediaPermissions.status === 'granted');
        })();
    }, []);

    if(hasCameraPermission === undefined){
        return <Text>{"Requesting Permission...".toUpperCase()}</Text>
    }else if (!hasCameraPermission){
        return <Text>{"Permission for camera was not granted!".toUpperCase()}</Text>
    }

    let TakePic = async () =>{
       let options ={
           quality:1,
           base64: true,
           exif:false
       };

        let newPhoto = await cameraRef.current.takePictureAsync(options);
        SetPhoto(newPhoto);
    };

    if (photo) {
        let sharePic = () => {
            shareAsync(photo.uri).then(() => {
                SetPhoto(undefined);
            });
        };

        let savePhoto = () => {
            MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
                SetPhoto(undefined);
            });
        };

        return (
            <SafeAreaView style={ReportScreenStyle.container}>
                <Image style={ReportScreenStyle.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
                <TouchableOpacity title="Share" onPress={sharePic} />
                {hasMediaPermission ? <TouchableOpacity title="Save" onPress={savePhoto} /> : undefined}
                <TouchableOpacity title="Discard" onPress={() => SetPhoto(undefined)} />
            </SafeAreaView>
        );
    }

    return(
        <ScrollView>
            <SafeAreaView style={ReportScreenStyle.container1}>
                <Text style={ReportScreenStyle._Text}>Report Screen</Text>
                <View style={ReportScreenStyle.fromCon}>

                    <Camera style={ReportScreenStyle.camera} ref={cameraRef}></Camera>

                    <View style={ReportScreenStyle.cameraBtnContainer}>
                        <TouchableOpacity
                            style={ReportScreenStyle.cameraBtn}
                            onPress={TakePic}
                        >
                            <Text style={{fontWeight:'bold',color:"#fff"}}>
                                {"Take picture".toUpperCase()}
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <TextInput
                        style={ReportScreenStyle.inputStyle}
                        onChangeText={ text => setName(text)}
                        value={name}
                        placeholder="Full name"
                    />
                    <TextInput
                        style={ReportScreenStyle.inputStyle}
                        onChangeText={ text => SetAddress(text)}
                        value={address}
                        placeholder="Address"
                    />
                    <TextInput
                        style={ReportScreenStyle.inputStyle}
                        onChangeText={ text => setNumber(text)}
                        value={PhoneNumber}
                        placeholder="Please enter phone number"
                    />
                    <TextInput
                        style={ReportScreenStyle.inputStyle}
                        onChangeText={ text => setEmergencyType(text)}
                        value={Emergency}
                        placeholder="Emergency type service eg, police, ambulance"
                    />
                    <TextInput
                        style={ReportScreenStyle.inputStyle}
                        onChangeText={ text => SetDescription(text)}
                        value={Description}
                        placeholder="Description"
                    />


                    <TouchableOpacity style={ReportScreenStyle._btn} onPress={set_Location}>
                        <Text style={ReportScreenStyle.text}>{'report'.toUpperCase()}</Text>
                    </TouchableOpacity>

                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

export default Report_Screen;