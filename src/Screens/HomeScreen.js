import React from "react";
import { ScrollView,SafeAreaView, Image,View} from "react-native";
import { ApplicationProvider, Layout, TopNavigation,Avatar, Divider, Text, Card, Button} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import HomeScreenStyleSheet from "../StyleSheets/HomeScreenStyleSheet";
import pic from  '../../assets/profile.png'
import bgImag from  '../../assets/Global-warming.png'
import {auth} from "../../firebase";
import {useNavigation} from "@react-navigation/native";

const HomeScreen = () => {

  const UserAvatar = () =>{
      return(
          <View>
              <Avatar style={HomeScreenStyleSheet.profileImg} source={pic}/>
          </View>
      )
  }

  const navigation = useNavigation();

  const Logout = () => {
      const logOut = () => {
          auth.signOut();
          navigation.navigate('Welcome');
      }
      return(
        <Button onPress={logOut}  status='success' appearance='ghost'>LOGOUT</Button>
      )
  }

  return(
      <ScrollView>
          <SafeAreaView>
              <ApplicationProvider {...eva} theme={eva.light}>

                  <Layout style={HomeScreenStyleSheet.container}>

                      <TopNavigation
                          alignment='center'
                          title='Disaster Plus'
                          subtitle='Homepage'
                          accessoryLeft={UserAvatar}
                          accessoryRight={Logout}
                      />

                      <View style={HomeScreenStyleSheet.ImgCon}>
                          <Image
                              source={bgImag}
                              style={HomeScreenStyleSheet.bgImage}
                          />
                      </View>


                      <Text style={HomeScreenStyleSheet.AD_TextHeader} category='h3'>
                          {'admin'.toUpperCase()}
                      </Text>

                      <View style={HomeScreenStyleSheet.CardCon}>
                          <Card status='primary'>
                              <Text category='h6' style={HomeScreenStyleSheet.ad_cardTextHeader}>
                                  {'administration'.toUpperCase()}
                              </Text>
                              <Divider/>
                              <Text category='h8' style={HomeScreenStyleSheet.ad_cardText}>
                                  {'For administration use only.'}
                              </Text>
                              <Divider/>
                              <Button
                                  onPress={()=>{
                                      let user = auth.currentUser;
                                      if( user.email === 'admin@gmail.com'){
                                          navigation.navigate('AdminHomePage');
                                      }else{
                                          alert(user.email);
                                      }
                                  }}
                                  style={HomeScreenStyleSheet.btn} status='primary' appearance='outline'
                              >
                                  <Text>{'admin'.toUpperCase()}</Text>
                              </Button>
                          </Card>
                          <Card style={{marginTop:20,marginBottom:16}} status='basic'>
                              <Text category='h6' style={HomeScreenStyleSheet.QuizCardTextHeader}>
                                  {'notification'.toUpperCase()}
                              </Text>
                              <Divider/>
                              <Text category='h8' style={HomeScreenStyleSheet.Quiz_cardText}>
                                  {'Are you ready for this hurricane season, if so complete a quick quiz.'}
                              </Text>
                              <Divider/>
                              <Button
                                  onPress={()=>{navigation.navigate('QuizScreen');}}
                                  style={HomeScreenStyleSheet.btn} status='basic' appearance='outline'
                              >
                                  <Text>{'QUIZ'.toUpperCase()}</Text>
                              </Button>
                          </Card>
                      </View>

                      <Text style={HomeScreenStyleSheet.TextHeader} category='h3'>
                          {'services'.toUpperCase()}
                      </Text>

                      <View style={HomeScreenStyleSheet.CardCon}>

                          <Card style={HomeScreenStyleSheet.card} status='danger'>
                              <Text category='h6' style={HomeScreenStyleSheet.cardTextHeader}>
                                  {'Request Help'.toUpperCase()}
                              </Text>
                              <Divider/>
                              <Text category='h8' style={HomeScreenStyleSheet.cardText}>
                                  {'In this section you can request help where every you are.'}
                              </Text>
                              <Divider/>
                              <Button
                                  onPress={()=>{navigation.navigate('SOS')}}
                                  style={HomeScreenStyleSheet.btn} status='danger' appearance='outline'
                              >
                                  <Text>GET HELP</Text>
                              </Button>
                          </Card>

                          <Card status='basic'>
                              <Text category='h6' style={HomeScreenStyleSheet.cardTextHeader}>
                                  {'make a plan'.toUpperCase()}
                              </Text>
                              <Divider/>
                              <Text category='h8' style={HomeScreenStyleSheet.cardText}>
                                  {'In this section you can create a disaster plan in case of an natural disaster.'}
                              </Text>
                              <Divider/>
                              <Button
                                  onPress={()=>{navigation.navigate('MakePlan')}}
                                  style={HomeScreenStyleSheet.btn} status='basic' appearance='outline'
                              >
                                 <Text>GET STARTED</Text>
                              </Button>
                          </Card>

                          <Card style={HomeScreenStyleSheet.card} status='basic'>
                              <Text category='h6' style={HomeScreenStyleSheet.cardTextHeader}>
                                  {'contact emergency services'.toUpperCase()}
                              </Text>
                              <Divider/>
                              <Text category='h8' style={HomeScreenStyleSheet.cardText}>
                                  {'In this section you can view the various contact info for emergency services.'}
                              </Text>
                              <Divider/>
                              <Button
                                  onPress={()=>{navigation.navigate('ContactPage')}}
                                  style={HomeScreenStyleSheet.btn} status='basic' appearance='outline'
                              >
                                  <Text>GET HELP</Text>
                              </Button>
                          </Card>

                          <Card style={HomeScreenStyleSheet.card} status='success'>
                              <Text category='h6' style={HomeScreenStyleSheet.cardTextHeader}>
                                  {'make a report'.toUpperCase()}
                              </Text>
                              <Divider/>
                              <Text category='h8' style={HomeScreenStyleSheet.cardText}>
                                  {'In this section you can make an report on activities happening in your area.'}
                              </Text>
                              <Divider/>
                              <Button
                                  onPress={()=>{navigation.navigate('ReportScreen')}}
                                  style={HomeScreenStyleSheet.btn} status='success'
                                  appearance='outline'
                              >
                                  <Text>GET STARTED</Text>
                              </Button>
                          </Card>

                      </View>

                  </Layout>

              </ApplicationProvider>
          </SafeAreaView>
      </ScrollView>
  )
}

export default HomeScreen;