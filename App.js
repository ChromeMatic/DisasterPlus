import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import LoginScreen from "./Screens/LoginScreen.js";
import HomeScreen from "./Screens/HomeScreen.js";
import MakePlan from  "./Screens/MakePaln.js";
import AlertScreen from "./Screens/AlertScreent.js";
import SOS from "./Screens/SOS.js";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
       <NavigationContainer>
           <Stack.Navigator>
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
            <Stack.Screen name="HomeScreen" component={HomeScreen}/>
            <Stack.Screen name="MakePlan" component={MakePlan}/>
            <Stack.Screen name="AlertScreen" component={AlertScreen}/>
            <Stack.Screen name="SOS" component={SOS}/>
           </Stack.Navigator>
       </NavigationContainer>
    );
}
