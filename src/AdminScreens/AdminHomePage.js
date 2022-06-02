import React from "react";
import  AdminHomeStyle from "../StyleSheets/AdminHomeStyle";
import {ScrollView,SafeAreaView,Image} from "react-native";
import { ApplicationProvider, Layout,Card,Divider,Button, Text} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import admin from "../../assets/Admin.png"
import {useNavigation} from "@react-navigation/native";

const AdminHomePage = () =>{

    const nav = useNavigation();

    return(
        <SafeAreaView>
            <ScrollView>
               <ApplicationProvider {...eva} theme={eva.light}>
                   <Layout style={AdminHomeStyle.container}>
                        <Text category='h1' style={AdminHomeStyle.headerText}>
                            {'Admin Home'.toUpperCase()}
                        </Text>
                        <Image
                            source={admin}
                            style={AdminHomeStyle.image}
                        />
                       <Layout style={AdminHomeStyle.innerLayout}>

                           <Card status='success' style={AdminHomeStyle.card}>
                               <Text category='h6' style={AdminHomeStyle.card_text_header}>
                                   {'Police Department'.toUpperCase()}
                               </Text>
                               <Divider/>
                              <Button
                                  onPress={()=>{nav.navigate("Admin")}}
                                  style={AdminHomeStyle.btn}
                                  status='success'
                                  appearance='outline'
                              >
                                    VIEW STATS
                              </Button>
                           </Card>

                           <Card status='info' style={AdminHomeStyle.card}>
                               <Text category='h6' style={AdminHomeStyle.card_text_header}>
                                   {'Fire Department'.toUpperCase()}
                               </Text>
                               <Divider/>
                               <Button
                                   onPress={()=>{nav.navigate("Admin")}}
                                   style={AdminHomeStyle.btn}
                                   status='info'
                                   appearance='outline'
                               >
                                   VIEW STATS
                               </Button>
                           </Card>

                           <Card status='success' style={AdminHomeStyle.card}>
                               <Text category='h6' style={AdminHomeStyle.card_text_header}>
                                   {'government agency'.toUpperCase()}
                               </Text>
                               <Divider/>
                               <Button style={AdminHomeStyle.btn} status='success' appearance='outline'>
                                   VIEW REPORTS
                               </Button>
                           </Card>
                       </Layout>

                   </Layout>
               </ApplicationProvider>
            </ScrollView>
        </SafeAreaView>
    )
}

export default AdminHomePage;