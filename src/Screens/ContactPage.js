import React from "react";
import {SafeAreaView,ScrollView,Linking,Image,View} from "react-native";
import { ApplicationProvider, Layout, Text, Card, Button} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import bgImg from "../../assets/contactUs.png";
import ContactPageStyle from  "../StyleSheets/ContactPageStyle"

const ContactPage = () =>{

    const toWebsite = () =>{
        let site ="https://jfb.gov.jm/";
        Linking.openURL(site);
    }

    const ToPolice = () => {
        let site = "https://jcf.gov.jm/";
        Linking.openURL(site)
    }
    
    const To_ODPEM = () => {
        let site = "https://www.odpem.org.jm/";
        Linking.openURL(site);
    }

    return(
        <ScrollView>
            <SafeAreaView>
                <ApplicationProvider {...eva} theme={eva.light}>
                    <Layout style={ContactPageStyle.container}>

                        <Text style={ContactPageStyle.headerText} category="h3">
                            {'Contact emergency services'.toUpperCase()}
                        </Text>

                        <Image source={bgImg} style={ContactPageStyle.image}/>

                        <View style={ContactPageStyle.cardContainer}>
                            <Card status='info' style={ContactPageStyle.card}>
                                <Text style={ContactPageStyle.cardHeaderText} category='h5'>
                                    {'Fire & Ambulance  Service'.toUpperCase()}
                                </Text>
                                <Text style={ContactPageStyle.cardText} category='h6'>
                                    {'Emergency number: 110'}
                                </Text>
                                <Text style={ContactPageStyle.cardText} category='h6'>
                                    {'Head office number:(876) 992-0007'}
                                </Text>
                                <Button style={ContactPageStyle.cardBtn} onPress={toWebsite} status='success' appearance='outline'>
                                    VIEW WEBSITE
                                </Button>
                            </Card>
                        </View>

                        <View style={ContactPageStyle.cardContainer}>
                            <Card status='info' style={ContactPageStyle.card}>
                                <Text style={ContactPageStyle.cardHeaderText} category='h5'>
                                    {'Police Services'.toUpperCase()}
                                </Text>
                                <Text style={ContactPageStyle.cardText} category='h6'>
                                    {'Emergency number: 119'}
                                </Text>
                                <Button style={ContactPageStyle.cardBtn} onPress={ToPolice} status='success' appearance='outline'>
                                    VIEW WEBSITE
                                </Button>
                            </Card>
                        </View>

                        <View style={ContactPageStyle.cardContainer}>
                            <Card status='info' style={ContactPageStyle.card}>
                                <Text style={ContactPageStyle.cardHeaderText} category='h5'>
                                    {'ODPEM'.toUpperCase()}
                                </Text>
                                <Text style={ContactPageStyle.cardText} category='h6'>
                                    {'Emergency number: (876) 906-9674'}
                                </Text>
                                <Text style={ContactPageStyle.cardText} category='h6'>
                                    {'Email: odpem@cwjamaica.com'}
                                </Text>
                                <Button style={ContactPageStyle.cardBtn} onPress={To_ODPEM} status='success' appearance='outline'>
                                    VIEW WEBSITE
                                </Button>
                            </Card>
                        </View>

                    </Layout>
                </ApplicationProvider>
            </SafeAreaView>
        </ScrollView>
    )
}

export default ContactPage;