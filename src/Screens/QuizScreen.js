import React from "react";
import { ScrollView,SafeAreaView, View} from "react-native";
import {useNavigation} from "@react-navigation/native";
import { ApplicationProvider,Layout,Text,Radio, RadioGroup, Button} from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import QuizStyles from "../StyleSheets/OuizStyles";

const QuizScreen = () =>{

    const nav = useNavigation();

    const [selectedIndex, setSelectedIndex]   = React.useState(0);
    const [selectedIndex2, setSelectedIndex2] = React.useState(0);
    const [selectedIndex3, setSelectedIndex3] = React.useState(0);
    const [selectedIndex4, setSelectedIndex4] = React.useState(0);

    const calculateScore = () => {

        let total = 0;

        if(selectedIndex === 1){total++;}
        if(selectedIndex2 === 2){ total++;}
        if(selectedIndex3 === 0){ total++;}
        if(selectedIndex4 === 0){ total++;}

        displayScore(total);
    }

   const displayScore = (num) =>{
       if( num > 2){
           alert("Congrats your score is : "+num+"/4")
       }else{
           alert("Try again your score is : "+num+"/4")
       }
   }

    return(
        <ScrollView>
          <SafeAreaView>

              <ApplicationProvider {...eva} theme={eva.light}>

                <Layout style={QuizStyles.container}>

                       <Text style={QuizStyles.headerText} category='h3'>
                           {'Hurricane Quiz'.toUpperCase()}
                       </Text>

                      <Layout style={QuizStyles.InnerLayout}>

                          <View style={QuizStyles.QuestionLayout}>
                              <Text style={QuizStyles.questionText}>
                                  1). Where are hurricanes mostly common?
                              </Text>
                              <RadioGroup
                                  selectedIndex={selectedIndex}
                                  onChange={index => setSelectedIndex(index)}
                                  style={QuizStyles.options}
                              >
                                  <Radio status='control'>Mediterranean Sea</Radio>
                                  <Radio status='control'>Caribbean Sea</Radio>
                                  <Radio status='control'>Baltic Sea</Radio>
                              </RadioGroup>
                          </View>

                          <View style={QuizStyles.QuestionLayout}>
                              <Text style={QuizStyles.questionText}>
                                  2). What are hurricanes known as in Asia?
                              </Text>
                              <RadioGroup
                                  selectedIndex={selectedIndex2}
                                  onChange={index => setSelectedIndex2(index)}
                                  style={QuizStyles.options}
                              >
                                  <Radio status='control'>Ti-Kun</Radio>
                                  <Radio status='control'>Tycoon</Radio>
                                  <Radio status='control'>Typhoon</Radio>
                              </RadioGroup>
                          </View>

                          <View style={QuizStyles.QuestionLayout}>
                              <Text style={QuizStyles.questionText}>
                                  3). When do hurricanes lose strength??
                              </Text>
                              <RadioGroup
                                  selectedIndex={selectedIndex3}
                                  onChange={index => setSelectedIndex3(index)}
                                  style={QuizStyles.options}
                              >
                                  <Radio status='control'>When move over land</Radio>
                                  <Radio status='control'>When move over hot water</Radio>
                                  <Radio status='control'>When move over mountains</Radio>
                              </RadioGroup>
                          </View>

                          <View style={QuizStyles.QuestionLayout}>
                              <Text style={QuizStyles.questionText}>
                                  4). What is the "eye of the hurricane?
                              </Text>
                              <RadioGroup
                                  selectedIndex={selectedIndex4}
                                  onChange={index => setSelectedIndex4(index)}
                                  style={QuizStyles.options}
                              >
                                  <Radio status='control'>The center of the hurricane</Radio>
                                  <Radio status='control'>The satellite for hurricanes</Radio>
                                  <Radio status='control'>The satellite for hurricanes</Radio>
                              </RadioGroup>
                          </View>

                      </Layout>

                      <Button status='success' style={QuizStyles.btn} onPress={calculateScore}>
                          {'submit'.toUpperCase()}
                      </Button>

                </Layout>

              </ApplicationProvider>

          </SafeAreaView>
        </ScrollView>
    )
}

export default QuizScreen;