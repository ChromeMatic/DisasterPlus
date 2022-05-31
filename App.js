import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import LoginScreen from "./src/Login&SignUpScreens/LoginScreen.js";
import HomeScreen from "./src/Screens/HomeScreen.js";
import MakePlan from "./src/Screens/MakePaln.js";
import AlertScreen from "./src/Screens/AlertScreent.js";
import SOS from "./src/Screens/SOS.js";
import LandingPage from "./src/Screens/LnadingPage";
import AdminScreen from "./src/AdminScreens/AdminScreen";
import Report_Screen from "./src/Screens/ReportScreen";
import {Provider} from "react-redux";
import {Store} from "./src/Redux/store";
import HelpFrom from "./src/Screens/HelpFrom";
import SignUpScreen from "./src/Login&SignUpScreens/SignUpScreen";
import ContactPage from "./src/Screens/ContactPage"

const Stack = createNativeStackNavigator();

export default function App() {
    return (
       <Provider store={Store}>
           <NavigationContainer>
               <Stack.Navigator screenOptions={{headerShown: false}}>
                   <Stack.Screen name="Welcome" component={LandingPage} />
                   <Stack.Screen name="LoginScreen" component={LoginScreen}/>
                   <Stack.Screen name="SignUpScreen" component={SignUpScreen}/>
                   <Stack.Screen name="HomeScreen" component={HomeScreen}/>
                   <Stack.Screen name="MakePlan" component={MakePlan}/>
                   <Stack.Screen name="AlertScreen" component={AlertScreen}/>
                   <Stack.Screen name="SOS" component={SOS}/>
                   <Stack.Screen name="Admin" component={AdminScreen}/>
                   <Stack.Screen name="ReportScreen" component={Report_Screen}/>
                   <Stack.Screen name="HelpFrom" component={HelpFrom}/>
                   <Stack.Screen name="ContactPage" component={ContactPage}/>
               </Stack.Navigator>
           </NavigationContainer>
       </Provider>
    );
}
